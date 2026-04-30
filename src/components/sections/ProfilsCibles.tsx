import { PROFILS_CIBLES } from "@/data/inventaire";
import {
  SoftBlob,
  GridPattern,
  SectionMarker,
} from "@/components/ui/Decorations";

/*
 * Section #profils — "Ce site est fait pour vous si…"
 * Source : inov-cameroun-contenu.md.pdf — Section Profils cibles
 *
 * Direction artistique :
 *  - Fond paper, layout 2 colonnes égales pour les 2 profils.
 *  - Card profile avec numéro XXL en watermark + label + desc + verbatims.
 *  - Verbatims en blockquotes italiques avec accent magenta.
 *  - Décorations subtiles (GridPattern + SoftBlob).
 */
export default function ProfilsCibles() {
  return (
    <section
      id="profils-cibles"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      <SoftBlob
        color="signal"
        size={520}
        opacity={0.05}
        className="absolute -top-32 -right-32"
      />
      <SoftBlob
        color="accent"
        size={420}
        opacity={0.04}
        className="absolute -bottom-24 -left-32"
      />

      <GridPattern
        variant="ink"
        cellSize={80}
        intensity={0.5}
        className="absolute inset-0 md:[--grid-cell:120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionMarker
          index="B"
          label="CE SITE EST FAIT POUR VOUS SI…"
          className="mb-10"
        />

        <div data-reveal="up" className="mb-16 md:mb-20 max-w-3xl">
          <p className="eyebrow">{PROFILS_CIBLES.eyebrow}</p>
          <h2 className="h2-display mt-5">{PROFILS_CIBLES.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROFILS_CIBLES.profiles.map((profile, i) => (
            <article
              key={profile.n}
              data-reveal="up"
              data-delay={String((i % 2) + 1)}
              className="relative bg-white border border-line rounded-md p-7 md:p-10 transition-all duration-300 hover:border-ink/20 lg:hover:-translate-y-1 lg:hover:shadow-[0_20px_50px_-25px_rgba(10,14,26,0.18)] overflow-hidden"
            >
              {/* Numéro XXL en watermark */}
              <span
                aria-hidden
                className="absolute -top-2 -right-2 font-display font-bold text-signal/[0.08] leading-none tracking-[-0.06em] select-none pointer-events-none"
                style={{ fontSize: "clamp(7rem, 14vw, 12rem)" }}
              >
                {profile.n}
              </span>

              <p className="relative font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
                Profil {profile.n}
              </p>
              <h3 className="relative mt-4 h3-display">{profile.label}</h3>
              <p className="relative mt-5 text-[15px] text-ink-soft leading-[1.6] font-normal max-w-prose">
                {profile.desc}
              </p>

              {/* Verbatims */}
              <ul className="relative mt-8 space-y-3 border-t border-line pt-6">
                {profile.verbatims.map((v, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-[14.5px] text-ink leading-[1.5] font-normal italic"
                  >
                    <span
                      aria-hidden
                      className="block text-signal mt-1 shrink-0 text-base font-bold not-italic leading-none"
                    >
                      ·
                    </span>
                    <span>&ldquo;{v}&rdquo;</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
