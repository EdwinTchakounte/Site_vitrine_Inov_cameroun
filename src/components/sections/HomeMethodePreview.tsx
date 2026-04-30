import Link from "next/link";
import { METHODE } from "@/data/inventaire";
import {
  GridPattern,
  SoftBlob,
  SectionMarker,
} from "@/components/ui/Decorations";

/*
 * Section #home-methode-preview — aperçu des 4 étapes de mission.
 * Lien vers /methode pour le détail complet.
 *
 * Direction artistique :
 *  - Fond paper, layout horizontal des 4 étapes avec connecteurs visuels.
 *  - Chaque étape : numéro mono, titre, description courte (1 ligne).
 *  - Hover state : élévation + couleur signal.
 *  - "Frise" visuelle entre les étapes (ligne pointillée + flèche signal).
 */
export default function HomeMethodePreview() {
  return (
    <section
      aria-label="Aperçu de la méthode"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      <SoftBlob
        color="accent"
        size={520}
        opacity={0.05}
        className="absolute -top-32 -right-32"
      />
      <SoftBlob
        color="signal"
        size={420}
        opacity={0.04}
        className="absolute -bottom-32 -left-32"
      />

      <GridPattern
        variant="ink"
        cellSize={80}
        intensity={0.5}
        className="absolute inset-0 md:[--grid-cell:120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionMarker
          index="04"
          label="MÉTHODE · APERÇU"
          className="mb-10"
        />

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-20">
          <div data-reveal="up" className="col-span-12 md:col-span-7 lg:col-span-8">
            <p className="eyebrow">{METHODE.eyebrow}</p>
            <h2 className="h2-display mt-5">
              {METHODE.title.replace(".", "")}
              <span className="text-signal">.</span>
            </h2>
            <p className="lead mt-6">{METHODE.subtitle}</p>
          </div>

          <div
            data-reveal="up"
            data-delay="1"
            className="col-span-12 md:col-span-5 lg:col-span-4 md:text-right"
          >
            <Link
              href="/methode"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-signal transition-colors"
            >
              <span className="link-line">Voir la méthode complète</span>
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Frise des 4 étapes — horizontale desktop, vertical mobile */}
        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
          {/* Ligne pointillée horizontale desktop */}
          <span
            aria-hidden
            className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-ink/20"
          />

          {METHODE.steps.map((step, i) => (
            <li
              key={step.n}
              data-reveal="up"
              data-delay={String((i % 4) + 1)}
              className="group relative md:px-4 lg:px-6"
            >
              {/* Pastille numéro */}
              <span
                aria-hidden
                className="relative z-10 inline-flex items-center justify-center w-[72px] h-[72px] rounded-full bg-paper border border-line group-hover:border-signal/40 transition-all"
              >
                <span className="font-display text-2xl font-bold tracking-[-0.03em] text-ink group-hover:text-signal transition-colors">
                  0{step.n}
                </span>
                {/* Mini halo magenta au hover */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    boxShadow: "0 0 0 6px rgba(216, 27, 96, 0.08)",
                  }}
                />
              </span>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.1em] text-signal">
                {step.badge}
              </p>
              <h3 className="mt-3 font-display text-lg md:text-xl font-semibold tracking-[-0.02em] leading-tight text-ink group-hover:text-signal transition-colors">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ink-soft leading-[1.55] font-normal max-w-xs">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
