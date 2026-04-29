import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/data/botContext";

/*
 * Route Handler /api/chat — relais sécurisé vers OpenRouter (ou autre LLM).
 *
 * Architecture compatible OpenAI /v1/chat/completions :
 *   - OpenRouter (défaut) : https://openrouter.ai/api/v1/chat/completions
 *   - Groq officiel : https://api.groq.com/openai/v1/chat/completions
 *   - Tunnel ngrok exposant Ollama / vLLM
 *
 * Variables d'env (.env.local) :
 *   LLM_API_URL   URL endpoint chat completions
 *   LLM_API_KEY   Clé d'auth (Bearer)
 *   LLM_MODEL     Nom du modèle (ex: google/gemini-2.0-flash-exp:free)
 *
 * Limite stricte : 5 questions utilisateur par session (cf. ChatBot client).
 * Côté serveur on tronque aussi à 12 messages (5 user + 5 assistant + marge)
 * pour ne pas exploser le contexte/coûts si quelqu'un contourne le client.
 */

type ClientMessage = {
  role: "user" | "assistant";
  content: string;
};

type LLMMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

const LLM_API_URL =
  process.env.LLM_API_URL ?? "https://openrouter.ai/api/v1/chat/completions";
const LLM_API_KEY = process.env.LLM_API_KEY;
const LLM_MODEL = process.env.LLM_MODEL ?? "liquid/lfm-2.5-1.2b-instruct:free";

/* Limites sécurité serveur (en plus du client). */
const MAX_USER_MESSAGES = 5;
const MAX_TOTAL_MESSAGES = 12;
const MAX_CONTENT_CHARS = 4000;

/* Pour OpenRouter, ces headers améliorent les rankings publics et l'attribution.
 * Optionnels mais recommandés. */
const APP_REFERER = process.env.LLM_APP_REFERER ?? "https://inov-cameroun.com";
const APP_TITLE = process.env.LLM_APP_TITLE ?? "INOV Cameroun";

export async function POST(req: NextRequest) {
  if (!LLM_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Le bot n'est pas encore configuré côté serveur. Variable LLM_API_KEY absente.",
      },
      { status: 503 },
    );
  }

  let body: { messages?: ClientMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload invalide." }, { status: 400 });
  }

  const clientMessages = Array.isArray(body.messages) ? body.messages : [];
  if (clientMessages.length === 0) {
    return NextResponse.json(
      { error: "Aucun message fourni." },
      { status: 400 },
    );
  }

  /* Filtrage et nettoyage des messages */
  const cleaned = clientMessages
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_CONTENT_CHARS),
    }));

  /* Compte des messages user — protection serveur du quota 5 */
  const userCount = cleaned.filter((m) => m.role === "user").length;
  if (userCount > MAX_USER_MESSAGES) {
    return NextResponse.json(
      {
        error: `Limite de ${MAX_USER_MESSAGES} questions par session atteinte. Réinitialisez la conversation ou contactez-nous directement.`,
      },
      { status: 429 },
    );
  }

  /* Tronquage : on garde les MAX_TOTAL_MESSAGES derniers pour préserver
   * le contexte tout en bornant le coût/latence */
  const trimmed = cleaned.slice(-MAX_TOTAL_MESSAGES);

  const messages: LLMMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...trimmed,
  ];

  try {
    const upstream = await fetch(LLM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LLM_API_KEY}`,
        "HTTP-Referer": APP_REFERER,
        "X-Title": APP_TITLE,
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        messages,
        temperature: 0.4,
        max_tokens: 600,
        stream: false,
        /* Désactive le reasoning chain-of-thought : sur les modèles
         * "thinking" gratuits d'OpenRouter (GLM-4.5, Nemotron, R1…),
         * tous les tokens sont consommés par le reasoning interne et
         * `content` revient null. On veut une réponse directe utilisable. */
        reasoning: { enabled: false },
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      console.error("[chat] LLM upstream error", upstream.status, text);
      return NextResponse.json(
        {
          error:
            "Le bot rencontre un souci. Réessayez dans un instant ou contactez-nous via le formulaire.",
        },
        { status: 502 },
      );
    }

    const data = (await upstream.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      console.error("[chat] LLM empty reply", data);
      return NextResponse.json(
        { error: "Réponse vide du bot. Réessayez." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply, remaining: MAX_USER_MESSAGES - userCount });
  } catch (e) {
    console.error("[chat] Unexpected error", e);
    return NextResponse.json(
      {
        error:
          "Erreur réseau côté serveur. Vérifiez la connexion et réessayez.",
      },
      { status: 500 },
    );
  }
}
