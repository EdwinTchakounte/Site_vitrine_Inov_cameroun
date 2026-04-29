"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { CONTACT, CONTACT_SECTION } from "@/data/inventaire";
import { sendContactMessage, type ContactState } from "@/app/actions";

/*
 * Section #contact — coordonnées + formulaire, design soft tech.
 *
 * Direction artistique :
 *  - Cards bg-white rounded sur fond paper, ombres très douces.
 *  - Layout 2 colonnes équilibré, espacement généreux.
 *  - Formulaire avec inputs encadrés (border full, focus magenta subtil).
 *  - Bouton submit primary magenta plein, état pending intégré.
 *  - Bloc coordonnées avec items distincts visuellement (pas une liste plate).
 *  - Highlight magenta sur "votre organisation" pour signature.
 */

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative w-full inline-flex items-center justify-center gap-3 bg-signal text-paper h-14 text-[15px] font-semibold transition-all hover:bg-ink disabled:opacity-70 disabled:cursor-wait rounded-md overflow-hidden"
    >
      <span
        aria-hidden
        className={`absolute inset-y-0 left-0 bg-paper/15 transition-all duration-1000 ${
          pending ? "w-full" : "w-0"
        }`}
      />
      <span className="relative">
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </span>
      <span
        aria-hidden
        className="relative transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <section
      id="contact"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      {/* Accent visuel diffus en haut-droit pour adoucir la section */}
      <div
        aria-hidden
        className="absolute -top-40 -right-32 w-[40rem] h-[40rem] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,27,96,0.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* En-tête */}
        <div data-reveal="up" className="mb-14 md:mb-20 max-w-3xl">
          <p className="eyebrow">{CONTACT_SECTION.eyebrow}</p>
          <h2 className="h2-display mt-5">
            Parlons de{" "}
            <span className="text-signal">votre organisation</span>.
          </h2>
          <p className="lead mt-6">{CONTACT_SECTION.subtitle}</p>
        </div>

        {/* Layout 2 colonnes — cards bg-white, ombres douces */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Coordonnées */}
          <div data-reveal="up" className="col-span-12 lg:col-span-5">
            <div className="bg-white border border-line rounded-md p-7 md:p-9 shadow-[0_4px_30px_-15px_rgba(10,14,26,0.10)]">
              <p className="eyebrow-muted">Coordonnées</p>

              <ul className="mt-7 space-y-1">
                <ContactItem
                  icon="phone"
                  label="Téléphone · WhatsApp"
                  value={CONTACT.phone}
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                />
                <ContactItem
                  icon="mail"
                  label="Email principal"
                  value={CONTACT.emailPrimary}
                  href={`mailto:${CONTACT.emailPrimary}`}
                />
                <ContactItem
                  icon="mail"
                  label="Email secondaire"
                  value={CONTACT.emailSecondary}
                  href={`mailto:${CONTACT.emailSecondary}`}
                />
                <ContactItem
                  icon="link"
                  label="LinkedIn"
                  value="augustin-njigui ↗"
                  href={CONTACT.linkedin}
                  external
                />
                <ContactItem
                  icon="pin"
                  label="Ancrage"
                  value={CONTACT.city}
                />
                <ContactItem
                  icon="time"
                  label="Engagement"
                  value="Réponse sous 24h"
                  emphasis
                />
              </ul>

              {/* CTA WhatsApp dédié */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 group flex items-center justify-center gap-3 bg-[#25D366] text-white h-12 text-[15px] font-semibold hover:bg-[#128C7E] transition-colors rounded-md"
              >
                <span>Discuter sur WhatsApp</span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div data-reveal="up" data-delay="1" className="col-span-12 lg:col-span-7">
            <div className="bg-white border border-line rounded-md p-7 md:p-9 lg:p-10 shadow-[0_4px_30px_-15px_rgba(10,14,26,0.10)]">
              <div className="flex items-baseline justify-between gap-4">
                <p className="eyebrow-muted">Formulaire de contact</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                  ~ 1 min
                </p>
              </div>

              <form action={formAction} className="mt-7 grid gap-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field
                    name="name"
                    label="Votre nom"
                    placeholder="Prénom Nom"
                    required
                    autoComplete="name"
                    error={state.errors?.name}
                  />
                  <Field
                    name="organization"
                    label="Organisation"
                    placeholder="Nom de l'entreprise"
                    required
                    autoComplete="organization"
                    error={state.errors?.organization}
                  />
                </div>

                <Field
                  name="role"
                  label="Votre rôle"
                  placeholder="Ex. Directeur Général"
                  required
                  autoComplete="organization-title"
                  error={state.errors?.role}
                />

                <InterestChips
                  options={CONTACT_SECTION.selectOptions as readonly string[]}
                  value={selectedInterest}
                  onChange={setSelectedInterest}
                  error={state.errors?.interest}
                />

                <TextareaField
                  name="message"
                  label="Message"
                  hint="(optionnel)"
                  placeholder="Décrivez votre enjeu en quelques lignes…"
                />

                {/* Feedback retour serveur */}
                <div aria-live="polite" className="min-h-[1.5rem]">
                  {state.status === "success" && (
                    <div className="flex items-start gap-3 p-4 bg-signal/[0.06] border border-signal/30 rounded-md">
                      <span aria-hidden className="text-signal text-lg leading-none mt-0.5">
                        ✓
                      </span>
                      <p className="text-sm font-medium text-ink leading-[1.5]">
                        {state.message}
                      </p>
                    </div>
                  )}
                  {state.status === "error" && (
                    <div className="flex items-start gap-3 p-4 bg-signal/[0.06] border border-signal/40 rounded-md">
                      <span aria-hidden className="text-signal text-lg leading-none mt-0.5">
                        !
                      </span>
                      <p className="text-sm font-medium text-signal leading-[1.5]">
                        {state.message}
                      </p>
                    </div>
                  )}
                </div>

                <SubmitButton />

                <p className="text-xs text-ink-soft font-normal leading-[1.6]">
                  En envoyant ce formulaire, vous acceptez le traitement de vos
                  données conformément à notre{" "}
                  <a
                    href="/confidentialite"
                    className="link-line text-ink hover:text-signal transition-colors"
                  >
                    politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ———————————————————————————————————————————————————————————
 * ContactItem — ligne du bloc coordonnées avec icone SVG inline.
 * ——————————————————————————————————————————————————————————— */
type IconKey = "phone" | "mail" | "link" | "pin" | "time";

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
  emphasis,
}: {
  icon: IconKey;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  emphasis?: boolean;
}) {
  const Inner = (
    <>
      <span
        aria-hidden
        className="shrink-0 mt-0.5 w-9 h-9 inline-flex items-center justify-center bg-paper border border-line rounded-md text-ink-soft group-hover:text-signal group-hover:border-signal/40 transition-colors"
      >
        <Icon name={icon} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
          {label}
        </span>
        <span
          className={`block mt-0.5 text-[15px] font-medium ${
            emphasis ? "text-signal" : "text-ink"
          } break-all`}
        >
          {value}
        </span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group flex items-start gap-4 -mx-3 px-3 py-3 rounded-md hover:bg-paper transition-colors"
        >
          {Inner}
        </a>
      ) : (
        <div className="group flex items-start gap-4 px-0 py-3">{Inner}</div>
      )}
    </li>
  );
}

/* Icones inline minimalistes — strokes 1.5px, taille 18px */
function Icon({ name }: { name: IconKey }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "time":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </svg>
      );
  }
}

/* ———————————————————————————————————————————————————————————
 * Field, SelectField, TextareaField — inputs avec bordure complète,
 * focus ring magenta subtil.
 * ——————————————————————————————————————————————————————————— */
function Field({
  name,
  label,
  placeholder,
  required,
  autoComplete,
  error,
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft"
      >
        {label} {required ? <span className="text-signal">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`mt-2 w-full bg-paper border ${
          error ? "border-signal" : "border-line"
        } rounded-md px-4 py-3 text-base font-normal text-ink placeholder:text-ink-faint focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/20 transition-all`}
      />
      {error ? <p className="mt-2 text-xs text-signal">{error}</p> : null}
    </div>
  );
}

/* InterestChips — grid de chips cliquables au lieu d'un select natif.
 * Chaque option a une icône / numéro à gauche, le label, et un check à droite
 * quand sélectionnée. Plus engageant et plus visuel qu'un dropdown.
 *
 * Une input hidden contient la valeur pour la Server Action. */
function InterestChips({
  options,
  value,
  onChange,
  error,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <p className="block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft">
        Ce qui vous intéresse <span className="text-signal">*</span>
      </p>

      <div
        role="radiogroup"
        aria-label="Ce qui vous intéresse"
        className={`mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 ${
          error ? "ring-1 ring-signal/40 rounded-md p-2" : ""
        }`}
      >
        {options.map((opt, i) => {
          const isActive = value === opt;
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onChange(opt)}
              className={`group relative flex items-center gap-3 px-4 py-3 text-left rounded-md border transition-all duration-200 ${
                isActive
                  ? "bg-signal/[0.06] border-signal text-ink shadow-[0_0_0_3px_rgba(216,27,96,0.10)]"
                  : "bg-paper border-line text-ink-soft hover:border-ink/30 hover:bg-white hover:text-ink"
              }`}
            >
              {/* Numéro / index Mono */}
              <span
                className={`shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md font-mono text-[11px] uppercase tracking-[0.05em] transition-colors ${
                  isActive
                    ? "bg-signal text-paper"
                    : "bg-line/60 text-ink-soft group-hover:bg-ink/10"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              <span className="flex-1 text-sm font-medium leading-tight">
                {opt}
              </span>

              {/* Check à droite quand sélectionnée */}
              <span
                aria-hidden
                className={`shrink-0 transition-all ${
                  isActive
                    ? "opacity-100 translate-x-0 text-signal"
                    : "opacity-0 -translate-x-1"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            </button>
          );
        })}
      </div>

      {/* Hidden input pour que la Server Action reçoive la valeur sélectionnée */}
      <input type="hidden" name="interest" value={value} />

      {error ? <p className="mt-2 text-xs text-signal">{error}</p> : null}
    </div>
  );
}

function TextareaField({
  name,
  label,
  hint,
  placeholder,
}: {
  name: string;
  label: string;
  hint?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[11px] uppercase tracking-[0.08em] text-ink-soft"
      >
        {label}{" "}
        {hint ? (
          <span className="text-ink-faint normal-case tracking-normal">
            {hint}
          </span>
        ) : null}
      </label>
      <textarea
        id={name}
        name={name}
        rows={5}
        placeholder={placeholder}
        className="mt-2 w-full bg-paper border border-line rounded-md px-4 py-3 text-base font-normal text-ink placeholder:text-ink-faint focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/20 transition-all resize-none"
      />
    </div>
  );
}
