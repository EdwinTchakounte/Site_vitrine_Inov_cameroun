"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/*
 * CookieBanner — bannière de consentement RGPD.
 *
 * Comportement :
 *  - S'affiche uniquement si aucun choix n'a été fait (localStorage vide).
 *  - 3 actions : Accepter tout / Refuser non-essentiels / Personnaliser.
 *  - Persistance localStorage clé "inov-cookie-consent" → "accepted" | "declined" | "custom".
 *  - Animations entrée slide-up + backdrop-blur.
 *  - Mobile-first : stack vertical, desktop : layout horizontal.
 *
 * Catégories cookies (Phase 1) :
 *  - Essentiels (toujours actifs) : navigation, sécurité, formulaire.
 *  - Analytics (optionnels) : pas encore d'analytics → désactivés par défaut.
 *  - Marketing (optionnels) : pas de marketing → désactivés par défaut.
 *
 * Note : pas d'analytics tiers en Phase 1 (cf. CDC §10.2 + REQUIREMENTS.md).
 * Le banner reste là pour la conformité RGPD future et la transparence.
 */

const STORAGE_KEY = "inov-cookie-consent";
type Consent = "accepted" | "declined" | "custom" | null;

type Categories = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT_CATEGORIES: Categories = {
  essential: true,
  analytics: false,
  marketing: false,
};

function readConsent(): Consent {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "accepted" || v === "declined" || v === "custom") return v;
    return null;
  } catch {
    return null;
  }
}

function writeConsent(c: Exclude<Consent, null>, cats?: Categories) {
  try {
    window.localStorage.setItem(STORAGE_KEY, c);
    if (cats) {
      window.localStorage.setItem(
        `${STORAGE_KEY}-categories`,
        JSON.stringify(cats),
      );
    }
  } catch {
    /* localStorage indisponible (mode privé) — silent fail */
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [categories, setCategories] = useState<Categories>(DEFAULT_CATEGORIES);

  /* Petit délai pour ne pas afficher au tout premier instant (UX) */
  useEffect(() => {
    if (readConsent() === null) {
      const t = window.setTimeout(() => setVisible(true), 800);
      return () => window.clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    writeConsent("accepted", {
      essential: true,
      analytics: true,
      marketing: true,
    });
    setVisible(false);
  };

  const declineAll = () => {
    writeConsent("declined", DEFAULT_CATEGORIES);
    setVisible(false);
  };

  const saveCustom = () => {
    writeConsent("custom", categories);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:px-6 md:pb-6 cookie-banner-enter"
    >
      <div className="relative max-w-5xl mx-auto bg-ink text-paper border border-paper/15 rounded-md shadow-[0_30px_60px_-20px_rgba(10,14,26,0.45)] backdrop-blur-md">
        {/* Halo signal subtil */}
        <div
          aria-hidden
          className="absolute -top-12 -right-8 w-48 h-48 rounded-full pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(closest-side, rgba(216,27,96,0.25), transparent 70%)",
          }}
        />

        <div className="relative p-5 md:p-7">
          {!showSettings ? (
            <div className="flex flex-col md:flex-row md:items-center md:gap-8">
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                  ● Cookies &amp; vie privée
                </p>
                <h2
                  id="cookie-title"
                  className="mt-2 font-display text-base md:text-lg font-semibold tracking-[-0.015em] text-paper"
                >
                  Nous respectons votre vie privée.
                </h2>
                <p
                  id="cookie-desc"
                  className="mt-2 text-[13.5px] md:text-sm text-paper/75 leading-[1.55] font-normal max-w-2xl"
                >
                  Nous utilisons uniquement les cookies essentiels au
                  fonctionnement du site. Aucun traçage publicitaire. Vous
                  pouvez consulter notre{" "}
                  <Link
                    href="/confidentialite"
                    className="link-line text-paper hover:text-signal transition-colors"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-5 md:mt-0 flex flex-col sm:flex-row gap-2.5 md:gap-3 shrink-0 w-full md:w-auto">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="group order-1 sm:order-3 text-sm font-semibold bg-signal text-paper hover:bg-paper hover:text-ink px-5 h-11 rounded-md inline-flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
                >
                  Accepter
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
                <button
                  type="button"
                  onClick={declineAll}
                  className="order-2 text-sm font-medium border border-paper/25 text-paper hover:border-paper/60 px-4 h-11 rounded-md inline-flex items-center justify-center transition-colors w-full sm:w-auto"
                >
                  Refuser
                </button>
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="order-3 sm:order-1 text-sm font-medium text-paper/75 hover:text-paper px-3 h-11 inline-flex items-center justify-center transition-colors w-full sm:w-auto"
                >
                  Personnaliser
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                    ● Personnaliser
                  </p>
                  <h2 className="mt-2 font-display text-base md:text-lg font-semibold tracking-[-0.015em]">
                    Choisissez les cookies que vous autorisez.
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  aria-label="Retour"
                  className="text-paper/55 hover:text-paper transition-colors text-xs uppercase tracking-[0.12em] font-mono"
                >
                  ← Retour
                </button>
              </div>

              <ul className="mt-5 space-y-3">
                <CookieRow
                  title="Essentiels"
                  desc="Navigation, sécurité, formulaire de contact. Toujours actifs."
                  checked
                  disabled
                />
                <CookieRow
                  title="Mesure d'audience"
                  desc="Aucun outil d'analyse en place actuellement. Ce switch est conservé pour le futur."
                  checked={categories.analytics}
                  onChange={(v) =>
                    setCategories((c) => ({ ...c, analytics: v }))
                  }
                />
                <CookieRow
                  title="Marketing"
                  desc="Aucun cookie publicitaire ou marketing actuellement."
                  checked={categories.marketing}
                  onChange={(v) =>
                    setCategories((c) => ({ ...c, marketing: v }))
                  }
                />
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-2.5">
                <button
                  type="button"
                  onClick={declineAll}
                  className="order-2 sm:order-1 text-sm font-medium border border-paper/25 text-paper hover:border-paper/60 px-4 h-11 rounded-md inline-flex items-center justify-center transition-colors w-full sm:w-auto"
                >
                  Refuser tout
                </button>
                <button
                  type="button"
                  onClick={saveCustom}
                  className="group order-1 sm:order-2 text-sm font-semibold bg-signal text-paper hover:bg-paper hover:text-ink px-5 h-11 rounded-md inline-flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
                >
                  Enregistrer mes choix
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CookieRow({
  title,
  desc,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  desc: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <li className="flex items-start justify-between gap-4 py-3 border-t border-paper/10 first:border-t-0">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-paper">{title}</p>
        <p className="mt-1 text-[13px] text-paper/65 leading-[1.55] font-normal">
          {desc}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`Activer ${title}`}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative shrink-0 mt-1 w-10 h-6 rounded-full transition-colors ${
          checked ? "bg-signal" : "bg-paper/20"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          aria-hidden
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-paper rounded-full shadow transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </li>
  );
}
