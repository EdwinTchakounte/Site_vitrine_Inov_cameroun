"use server";

import { headers } from "next/headers";

/*
 * Server Actions — formulaire de contact INOV Cameroun.
 *
 * Backend : FormSubmit (https://formsubmit.co) — zéro config, pas de clé API.
 *
 * Comment ça marche :
 *   1. La Server Action POST en JSON vers https://formsubmit.co/ajax/{TO_EMAIL}
 *      avec un header Origin (FormSubmit refuse les requêtes sans Origin).
 *   2. À la PREMIÈRE soumission, FormSubmit renvoie {success:"false", message:"...Activation..."}
 *      et envoie un mail d'ACTIVATION à l'adresse destinataire — il faut
 *      cliquer le lien "Activate Form" pour activer ce destinataire.
 *      → On gère ce cas comme un succès partiel côté user (message dédié).
 *   3. Toutes les soumissions suivantes sont des envois directs réussis.
 *
 * Destinataire actuel : augustin.njigui01@gmail.com (défaut).
 * Pour des tests vers une autre boîte : override via CONTACT_TO_EMAIL.
 * Production future : info@inov-corp.com une fois domaine vérifié.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<
    Record<"name" | "organization" | "role" | "interest" | "message", string>
  >;
};

/* Destinataire par défaut : email perso d'Augustin (réception directe Gmail).
 * Override possible via CONTACT_TO_EMAIL en .env.local pour les tests.
 * NOTE : changer cette adresse re-déclenchera un mail d'activation FormSubmit
 * sur la nouvelle boîte (à cliquer une seule fois). */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "augustin.njigui01@gmail.com";

function asString(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = asString(formData.get("name"));
  const organization = asString(formData.get("organization"));
  const role = asString(formData.get("role"));
  const interest = asString(formData.get("interest"));
  const message = asString(formData.get("message"));

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Indiquez votre nom.";
  if (!organization) errors.organization = "Indiquez votre organisation.";
  if (!role) errors.role = "Indiquez votre rôle.";
  if (!interest) errors.interest = "Sélectionnez un intérêt.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Quelques champs sont à compléter avant l'envoi.",
      errors,
    };
  }

  /* Payload FormSubmit. Les clés _* sont des paramètres de service :
   *   _subject  : objet du mail reçu
   *   _captcha  : désactivation du captcha (false = pas de captcha)
   *   _template : "table" formate joliment les champs en tableau HTML
   *   _replyto  : permet de répondre directement à l'expéditeur du formulaire
   */
  const payload = {
    Nom: name,
    Organisation: organization,
    Rôle: role,
    Intérêt: interest,
    Message: message || "(aucun message)",
    _subject: `[Inov Consulting Cameroun] ${interest} — ${name} (${organization})`,
    _captcha: "false",
    _template: "table",
  };

  /* FormSubmit exige un header Origin. On le récupère depuis la requête
   * navigateur en cours (sinon fallback sur le domaine de prod). */
  const headersList = await headers();
  const origin =
    headersList.get("origin") ??
    headersList.get("referer")?.replace(/\/$/, "") ??
    "https://inov-cameroun.com";

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/`,
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      console.error("[contact] FormSubmit HTTP error", response.status);
      return {
        status: "error",
        message:
          "L'envoi a échoué. Réessayez dans quelques minutes ou contactez-nous directement par WhatsApp.",
      };
    }

    const data = (await response.json()) as {
      success?: string;
      message?: string;
    };

    /* Cas 1 : succès direct — message envoyé au destinataire. */
    if (data.success === "true") {
      return {
        status: "success",
        message:
          "Merci, votre message est bien parti. Réponse sous 24h — surveillez votre boîte.",
      };
    }

    /* Cas 2 : activation pending — destinataire pas encore confirmé.
     * FormSubmit a envoyé un mail "Activate Form" sur la boîte destinataire.
     * On affiche un message rassurant mais explicite côté user. */
    if (data.message?.toLowerCase().includes("activation")) {
      console.warn("[contact] FormSubmit activation pending", data);
      return {
        status: "success",
        message:
          "Demande bien reçue. Une activation est en cours côté équipe — le message vous sera transmis dans la foulée.",
      };
    }

    /* Cas 3 : erreur — autres causes (captcha, rate limit, etc.). */
    console.error("[contact] FormSubmit response", data);
    return {
      status: "error",
      message:
        "L'envoi a échoué. Réessayez dans quelques minutes ou contactez-nous directement par WhatsApp.",
    };
  } catch (e) {
    console.error("[contact] Unexpected error", e);
    return {
      status: "error",
      message:
        "Erreur technique inattendue. Vous pouvez nous écrire directement à info@inov-corp.com.",
    };
  }
}
