import { VISION } from "@/data/inventaire";
import {
  DotsGrid,
  SectionMarker,
  LogoWatermark,
} from "@/components/ui/Decorations";

/*
 * Section #vision — "40 organisations Africaines augmentées par l'IA d'ici 2027"
 * Source : inov-cameroun-contenu.md.pdf — Section Vision + Citation signature
 *
 * Direction artistique :
 *  - Fond primary (deep green logo) — rupture sombre majeure dans le parcours.
 *  - Big H2 avec accent signal sur "augmentées par l'IA".
 *  - Body court, puis 3 piliers en grille horizontale.
 *  - Citation signature en pull-quote bas, signe la conviction.
 *  - Décorations paper (DotsGrid + LogoWatermark) pour fond foncé.
 */
export default function Vision() {
  return (
    <section
      id="vision"
      className="relative bg-primary text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Halo signal très diffus */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[36rem] h-[36rem] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,27,96,0.18), transparent 70%)",
        }}
      />

      <DotsGrid
        variant="paper"
        rows={6}
        cols={10}
        spacing={22}
        size={1.5}
        className="absolute top-24 -left-12 opacity-40 scale-50 md:scale-75 lg:scale-100 origin-top-left"
      />

      <LogoWatermark
        size={580}
        opacity={0.05}
        rotate={-4}
        monochrome="paper"
        className="absolute -bottom-20 -right-24 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-bottom-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionMarker
          index="A"
          label="NOTRE VISION"
          variant="paper"
          className="mb-10"
        />

        <div data-reveal="up" className="mb-14 md:mb-20 max-w-4xl">
          <p className="eyebrow text-signal">{VISION.eyebrow}</p>
          <h2 className="h2-display-light mt-5">
            <span className="text-signal">40 organisations</span> Africaines{" "}
            <em className="not-italic">augmentées par l'IA</em> d'ici 2027.
          </h2>
          <p className="lead-light mt-6">{VISION.body}</p>
        </div>

        {/* 3 piliers */}
        <ol
          data-reveal="up"
          data-delay="1"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-20"
        >
          {VISION.pillars.map((pillar) => (
            <li
              key={pillar.n}
              className="relative border-t border-white/15 pt-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-signal">
                Pilier {pillar.n}
              </p>
              <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] leading-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] text-white/75 leading-[1.6] font-normal">
                {pillar.desc}
              </p>
            </li>
          ))}
        </ol>

        {/* Citation signature */}
        <blockquote
          data-reveal="up"
          className="relative bg-white/[0.04] border-l-2 border-signal rounded-r-md p-7 md:p-10 max-w-3xl"
        >
          <span
            aria-hidden
            className="absolute -top-3 left-7 font-display text-signal text-5xl leading-none"
          >
            &ldquo;
          </span>
          <p className="font-display text-lg md:text-2xl font-medium leading-[1.4] text-white">
            {VISION.signature.quote}
          </p>
          <footer className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
            — {VISION.signature.author}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
