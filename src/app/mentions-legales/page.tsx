import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/data/inventaire";

export const metadata: Metadata = {
  title: "Mentions légales — INOV Cameroun",
  description:
    "Mentions légales obligatoires du site inov-cameroun.com — éditeur, hébergeur, propriété intellectuelle.",
};

/*
 * Page /mentions-legales — contenu standard.
 * Les valeurs marquées { À COMPLÉTER } doivent être renseignées par la Direction
 * avant la mise en ligne (raison sociale, RCS, hébergeur, etc.).
 */
export default function MentionsLegales() {
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
          Mentions <span className="italic">légales.</span>
        </h1>

        <div className="mt-12 space-y-10 text-[15px] font-light leading-[1.75] text-ink/85">
          <Section title="Éditeur du site">
            <p>
              <strong>INOV Cameroun</strong> — cabinet de conseil en
              transformation digitale et intelligence artificielle.
            </p>
            <p>Représentant légal : Augustin Njigui, Fondateur.</p>
            <p>Adresse : {CONTACT.city}.</p>
            <p>
              Email :{" "}
              <a
                href={`mailto:${CONTACT.emailPrimary}`}
                className="border-b border-ink/30 hover:border-signal hover:text-signal transition-colors"
              >
                {CONTACT.emailPrimary}
              </a>
            </p>
            <p>Téléphone : {CONTACT.phone}.</p>
            <p className="text-ink-soft italic">
              Numéro d'immatriculation, forme juridique, capital social : {"{ À COMPLÉTER }"}.
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              Site hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave
              #4133, Covina, CA 91723, USA.
            </p>
            <p>Plus d'informations : vercel.com</p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site (textes, images, logos,
              identité visuelle) est la propriété exclusive d'INOV Cameroun,
              sauf mention contraire. Toute reproduction, représentation,
              modification ou exploitation, totale ou partielle, sans
              autorisation écrite préalable, est strictement interdite.
            </p>
          </Section>

          <Section title="Données personnelles">
            <p>
              Le traitement des données personnelles collectées via le
              formulaire de contact est détaillé dans notre{" "}
              <Link
                href="/confidentialite"
                className="border-b border-ink/30 hover:border-signal hover:text-signal transition-colors"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Ce site n'utilise pas de cookies de tracking ou de publicité.
              Seuls des cookies techniques strictement nécessaires au
              fonctionnement du site peuvent être déposés.
            </p>
          </Section>

          <Section title="Crédits">
            <p>
              Direction du projet et conception éditoriale : Augustin Njigui.
            </p>
            <p>Réalisation technique : équipe INOV Cameroun, 2026.</p>
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
