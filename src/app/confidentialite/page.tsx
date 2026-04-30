import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/data/inventaire";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Inov Consulting Cameroun",
  description:
    "Politique de protection des données personnelles d'inov-cameroun.com — conforme RGPD.",
};

/*
 * Page /confidentialite — RGPD essentiel pour MVP avec formulaire de contact.
 * Pas d'analytics tiers en phase 1 → texte épuré.
 */
export default function Confidentialite() {
  return (
    <main className="bg-canvas text-ink min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 pb-24">
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.18em] font-medium text-signal hover:text-primary transition-colors"
        >
          ← Retour à l'accueil
        </Link>

        <h1
          className="mt-10 font-display font-light tracking-[-0.025em] leading-[1.05] text-primary"
          style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)" }}
        >
          Politique de <span className="italic">confidentialité.</span>
        </h1>

        <p className="mt-6 text-sm text-ink-soft font-light">
          Dernière mise à jour : avril 2026
        </p>

        <div className="mt-12 space-y-10 text-[15px] font-light leading-[1.75] text-ink/85">
          <Section title="Données collectées">
            <p>
              Lorsque vous utilisez le formulaire de contact d'Inov Consulting Cameroun,
              nous collectons uniquement les informations que vous fournissez
              volontairement :
            </p>
            <ul className="space-y-2 pl-6 list-disc marker:text-signal">
              <li>Votre nom</li>
              <li>Votre organisation</li>
              <li>Votre rôle / fonction</li>
              <li>Votre intérêt parmi nos offres</li>
              <li>Votre message (optionnel)</li>
            </ul>
          </Section>

          <Section title="Finalité du traitement">
            <p>
              Ces données sont collectées dans l'unique but de répondre à
              votre demande et d'organiser un échange professionnel. Aucune
              donnée n'est exploitée à des fins commerciales tierces, ni
              transmise à des partenaires.
            </p>
          </Section>

          <Section title="Base légale">
            <p>
              Le traitement repose sur votre consentement explicite, exprimé
              au moment de l'envoi du formulaire (article 6.1.a du RGPD).
            </p>
          </Section>

          <Section title="Durée de conservation">
            <p>
              Les données sont conservées pendant la durée de la relation
              commerciale, et au maximum 3 ans après le dernier contact à des
              fins de prospection. Vous pouvez demander leur suppression à
              tout moment.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément au Règlement Général sur la Protection des
              Données, vous disposez d'un droit d'accès, de rectification, de
              suppression, de limitation du traitement, et de portabilité de
              vos données. Vous pouvez également vous opposer au traitement.
            </p>
            <p>
              Pour exercer ces droits, écrivez-nous à{" "}
              <a
                href={`mailto:${CONTACT.emailPrimary}`}
                className="border-b border-ink/30 hover:border-signal hover:text-signal transition-colors"
              >
                {CONTACT.emailPrimary}
              </a>
              .
            </p>
          </Section>

          <Section title="Sécurité">
            <p>
              Vos données sont stockées sur des serveurs sécurisés (envoi
              transactionnel par Resend, hébergement Vercel) et ne sont
              accessibles qu'aux personnes habilitées à les traiter.
            </p>
          </Section>

          <Section title="Cookies & traçage">
            <p>
              Ce site n'utilise pas de cookies publicitaires, ni d'outils
              d'analytics tiers (Google Analytics, Meta Pixel, etc.) en phase
              actuelle. Seuls les cookies techniques strictement nécessaires
              au fonctionnement du site peuvent être déposés.
            </p>
          </Section>

          <Section title="Réclamation">
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits
              n'ont pas été respectés, vous pouvez adresser une réclamation
              auprès de l'autorité de protection des données compétente
              (CNIL en France, ANTIC au Cameroun).
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-light text-primary leading-tight tracking-[-0.01em]">
        {title}
      </h2>
      <span className="block mt-3 mb-5 h-px w-12 bg-signal" />
      <div className="space-y-3">{children}</div>
    </section>
  );
}
