import Link from "next/link";
import { PROFILS_CIBLES } from "@/data/inventaire";
import { SoftBlob, SectionMarker } from "@/components/ui/Decorations";

/*
 * Section #home-profils-teaser — preview compacte des 2 profils cibles.
 * Format différent de la page /pourquoi-nous : ici, layout split avec
 * verbatim mis en avant comme highlight (pas la liste complète).
 *
 * Direction artistique :
 *  - Fond paper, 2 colonnes égales avec séparateur central.
 *  - Pour chaque profil : label + 1 verbatim signature en pull-quote.
 *  - Numéro XXL en watermark signal.
 */
export default function HomeProfilsTeaser() {
  return (
    <section
      aria-label="Profils cibles teaser"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      <SoftBlob
        color="signal"
        size={480}
        opacity={0.05}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionMarker
          index="07"
          label="POUR QUI · 02 PROFILS"
          className="mb-10"
        />

        <div data-reveal="up" className="mb-16 md:mb-20 max-w-3xl">
          <p className="eyebrow">{PROFILS_CIBLES.eyebrow}</p>
          <h2 className="h2-display mt-5">
            {PROFILS_CIBLES.title.replace(".", "")}
            <span className="text-signal">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {PROFILS_CIBLES.profiles.map((profile, i) => (
            <article
              key={profile.n}
              data-reveal="up"
              data-delay={String((i % 2) + 1)}
              className={`relative overflow-hidden px-1 sm:px-2 md:px-8 lg:px-12 py-2 ${
                i === 0 ? "md:border-r md:border-line" : ""
              }`}
            >
              {/* Numéro XXL watermark — taille réduite mobile pour ne pas déborder */}
              <span
                aria-hidden
                className="absolute -top-4 sm:-top-6 -right-2 font-display font-bold text-signal/[0.06] leading-none tracking-[-0.06em] select-none pointer-events-none"
                style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
              >
                {profile.n}
              </span>

              <p className="relative font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
                Profil {profile.n}
              </p>
              <h3 className="relative mt-4 font-display text-xl sm:text-2xl md:text-[1.5rem] lg:text-[1.65rem] font-semibold tracking-[-0.02em] leading-tight text-ink">
                {profile.label}
              </h3>
              <p className="relative mt-5 text-[14.5px] sm:text-[15px] text-ink-soft leading-[1.6] font-normal max-w-prose">
                {profile.desc}
              </p>

              {/* Verbatim signature — 1er verbatim mis en avant */}
              <blockquote className="relative mt-7 border-l-2 border-signal pl-4 sm:pl-5">
                <p className="text-[15px] sm:text-[16px] md:text-[17px] font-display font-medium leading-[1.45] text-ink italic break-words">
                  &ldquo;{profile.verbatims[0]}&rdquo;
                </p>
                <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint not-italic">
                  + {profile.verbatims.length - 1} autres verbatims
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        <div data-reveal="up" className="mt-16 md:mt-20 text-center">
          <Link
            href="/pourquoi-nous"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-signal transition-colors"
          >
            <span className="link-line">Découvrir tous les profils</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
