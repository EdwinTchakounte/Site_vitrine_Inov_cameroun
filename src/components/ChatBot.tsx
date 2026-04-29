"use client";

import { useEffect, useRef, useState } from "react";
import { WELCOME_MESSAGE } from "@/data/botContext";

/*
 * ChatBot — assistant IA INOV Cameroun, version épurée.
 *
 * Direction artistique :
 *  - FAB rond minimaliste, juste l'icône chat + dot signal de statut.
 *  - Panel sobre : header simple (titre + compteur + reset), pas d'avatar.
 *  - Bulles épurées (ink solide pour user, paper léger pour bot).
 *  - Input minimal : juste textarea + bouton flèche.
 *  - Limite stricte : 5 questions par session.
 */

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_USER_MESSAGES = 5;

const INITIAL_MESSAGES: ChatMessage[] = [
  { role: "assistant", content: WELCOME_MESSAGE },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showTeaser, setShowTeaser] = useState(false);
  const teaserDismissedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userMessageCount >= MAX_USER_MESSAGES;
  const remaining = Math.max(0, MAX_USER_MESSAGES - userMessageCount);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading, error]);

  useEffect(() => {
    if (open) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 200);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  // Bulle d'introduction — affichée au premier chargement pour signaler le bot.
  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      if (!teaserDismissedRef.current) setShowTeaser(true);
    }, 1500);
    const hideTimer = window.setTimeout(() => setShowTeaser(false), 12000);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const dismissTeaser = () => {
    teaserDismissedRef.current = true;
    setShowTeaser(false);
  };

  const send = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading || limitReached) return;

    setError(null);
    const next: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };

      if (!res.ok || !data.reply) {
        setError(data.error ?? "Réponse indisponible. Réessayez.");
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply ?? "" },
        ]);
      }
    } catch {
      setError(
        "Connexion impossible au bot. Vérifiez votre internet ou réessayez.",
      );
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const reset = () => {
    setMessages(INITIAL_MESSAGES);
    setInput("");
    setError(null);
    setLoading(false);
  };

  return (
    <>
      {/* Bulle d'introduction — visible au premier chargement, signale qu'il s'agit du bot */}
      <div
        className={`fixed z-50 bottom-16 right-4 sm:bottom-20 sm:right-6 max-w-[240px] sm:max-w-[260px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showTeaser && !open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!showTeaser || open}
      >
        <div className="relative bg-paper border border-line rounded-md shadow-[0_12px_30px_-12px_rgba(10,14,26,0.25)] pl-3.5 pr-7 py-2.5">
          <button
            type="button"
            onClick={dismissTeaser}
            aria-label="Fermer la bulle d'introduction"
            className="absolute top-1 right-1 inline-flex items-center justify-center w-5 h-5 text-ink-faint hover:text-ink transition-colors"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-signal">
            Assistant IA
          </p>
          <p className="mt-1 text-[12.5px] text-ink leading-[1.45] font-normal">
            Bonjour ! Posez-moi vos questions sur INOV Cameroun.
          </p>
          {/* Petite flèche pointant vers le FAB */}
          <span
            aria-hidden
            className="absolute -bottom-1.5 right-5 w-3 h-3 bg-paper border-r border-b border-line rotate-45"
          />
        </div>
      </div>

      {/* FAB rond minimaliste — plus discret sur mobile */}
      <button
        type="button"
        aria-label={open ? "Fermer le chat" : "Ouvrir l'assistant IA"}
        onClick={() => {
          dismissTeaser();
          setOpen((o) => !o);
        }}
        className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 group inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-ink text-paper rounded-full shadow-[0_6px_16px_-6px_rgba(10,14,26,0.30)] md:shadow-[0_8px_24px_-8px_rgba(10,14,26,0.35)] hover:bg-signal transition-colors"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {!open && (
          <span
            aria-hidden
            className="absolute top-0.5 right-0.5 w-2 h-2 bg-signal rounded-full ring-2 ring-paper"
          />
        )}
      </button>

      {/* Panel chat — pleine largeur sur mobile, flotteur 400px sur sm+ */}
      <div
        className={`fixed z-40 left-3 right-3 bottom-[4.25rem] sm:left-auto sm:right-6 sm:bottom-24 sm:w-[400px] origin-bottom-right transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!open}
        role="dialog"
        aria-label="Assistant virtuel INOV Cameroun"
      >
        <div className="flex flex-col bg-paper border border-line rounded-md shadow-[0_30px_60px_-25px_rgba(10,14,26,0.30)] overflow-hidden h-[75vh] sm:h-[560px] max-h-[calc(100vh-6rem)]">
          {/* Header sobre */}
          <header className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-line bg-paper">
            <div className="flex items-center gap-2.5 min-w-0">
              <span aria-hidden className="w-1.5 h-1.5 bg-signal rounded-full" />
              <p className="font-display text-sm font-semibold text-ink leading-none truncate">
                Assistant INOV
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint"
                title={`${userMessageCount}/${MAX_USER_MESSAGES} questions utilisées`}
              >
                <span className={remaining === 0 ? "text-signal" : "text-ink-soft"}>
                  {String(userMessageCount).padStart(2, "0")}
                </span>
                <span className="text-ink-faint">/{String(MAX_USER_MESSAGES).padStart(2, "0")}</span>
              </span>
              <button
                type="button"
                onClick={reset}
                aria-label="Réinitialiser la conversation"
                className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint hover:text-ink transition-colors"
              >
                Reset
              </button>
            </div>
          </header>

          {/* Conversation */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-5 py-5 space-y-3.5 bg-paper"
          >
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} />
            ))}
            {loading && <TypingBubble />}
            {error && (
              <p className="text-xs text-signal leading-[1.5]">
                {error}
              </p>
            )}
            {limitReached && !loading && (
              <div className="pt-2">
                <p className="text-xs text-ink-soft leading-[1.5]">
                  Limite de {MAX_USER_MESSAGES} questions atteinte. Pour
                  continuer, réinitialisez ou utilisez le formulaire de contact.
                </p>
                <div className="mt-2.5 flex flex-wrap gap-3 text-xs font-medium">
                  <button
                    type="button"
                    onClick={reset}
                    className="text-ink hover:text-signal transition-colors"
                  >
                    ↻ Réinitialiser
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="text-signal hover:underline"
                  >
                    Aller au formulaire →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Input minimaliste */}
          <div className="border-t border-line px-3 py-2.5 bg-paper">
            <div
              className={`flex items-end gap-1 ${
                limitReached ? "opacity-50" : ""
              }`}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                disabled={limitReached || loading}
                placeholder={
                  limitReached
                    ? "Limite atteinte"
                    : "Posez votre question…"
                }
                rows={1}
                className="flex-1 bg-transparent px-2 py-2.5 text-sm font-normal text-ink placeholder:text-ink-faint focus:outline-none resize-none max-h-24 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={send}
                disabled={!input.trim() || loading || limitReached}
                aria-label="Envoyer"
                className="inline-flex items-center justify-center w-9 h-9 text-ink hover:text-signal disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ———————————————————————————————————————————————————————————
 * Bulles de conversation — épurées
 * ——————————————————————————————————————————————————————————— */
function Bubble({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-[1.55] rounded-md ${
          isUser
            ? "bg-ink text-paper"
            : "text-ink"
        }`}
      >
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="px-3.5 py-2.5">
        <span className="inline-flex items-center gap-1">
          <Dot delay={0} />
          <Dot delay={150} />
          <Dot delay={300} />
        </span>
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="inline-block w-1.5 h-1.5 bg-ink-soft rounded-full animate-pulse"
      style={{ animationDelay: `${delay}ms`, animationDuration: "1200ms" }}
    />
  );
}

/* ———————————————————————————————————————————————————————————
 * Icônes inline minimalistes
 * ——————————————————————————————————————————————————————————— */
function ChatIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
