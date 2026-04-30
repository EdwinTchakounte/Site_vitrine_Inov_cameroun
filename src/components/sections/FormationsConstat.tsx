import { FORMATIONS } from "@/data/inventaire";
import { LogoWatermark } from "@/components/ui/Decorations";

/*
 * Section formations — §01 Le constat.
 * Source : formations_inov.pdf — §01 Le constat
 *
 * Direction artistique :
 *  - Fond ink (rupture sombre) — donne du poids au constat.
 *  - 4 raisons en grille 2x2 desktop, stack vertical mobile.
 *  - Numéros XXL en watermark signal sur chaque carte.
 */
export default function FormationsConstat() {
  const { constat } = FORMATIONS;

  return (
    <section
      aria-label="§01 Le constat"
      className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden"
    >
      <LogoWatermark
        size={520}
        opacity={0.04}
        rotate={-6}
        monochrome="paper"
        className="absolute top-32 -right-20 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-top-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-signal mb-6">
          {constat.eyebrow}
        </p>

        <h2
          data-reveal="up"
          className="h2-display-light max-w-3xl"
        >
          {constat.title}
        </h2>

        <ul className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {constat.reasons.map((reason, i) => (
            <li
              key={reason.n}
              data-reveal="up"
              data-delay={String((i % 4) + 1)}
              className="relative bg-white/[0.04] border border-white/10 rounded-md p-7 md:p-9 overflow-hidden"
            >
              {/* Numéro XXL watermark signal */}
              <span
                aria-hidden
                className="absolute -top-2 -right-1 font-display font-bold text-signal/[0.18] leading-none tracking-[-0.06em] select-none pointer-events-none"
                style={{ fontSize: "clamp(6rem, 12vw, 10rem)" }}
              >
                {reason.n}
              </span>

              <p className="relative font-mono text-[10px] uppercase tracking-[0.1em] text-signal">
                Raison {reason.n}
              </p>
              <h3 className="relative mt-4 font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] leading-tight text-paper">
                {reason.title}
              </h3>
              <p className="relative mt-3 text-[15px] text-paper/75 leading-[1.6] font-normal">
                {reason.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
