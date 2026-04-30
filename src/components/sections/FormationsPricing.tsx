import { FORMATIONS } from "@/data/inventaire";
import { GridPattern } from "@/components/ui/Decorations";

/*
 * Section formations — §03 Tarifs.
 * Source : formations_inov.pdf — §03 Tarifs (3 tiers Sur devis)
 *
 * Direction artistique :
 *  - Fond paper, 3 tiers en cards alignées.
 *  - "Sur devis" partout — pas de prix affichés (volonté du PDF).
 *  - Note explicative en haut, tiers en bas.
 */
export default function FormationsPricing() {
  const { pricing } = FORMATIONS;

  return (
    <section
      aria-label="§03 Tarifs"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      <GridPattern
        variant="ink"
        cellSize={80}
        intensity={0.5}
        className="absolute inset-0 md:[--grid-cell:120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-signal mb-6">
          {pricing.eyebrow}
        </p>

        <div data-reveal="up" className="max-w-3xl mb-14 md:mb-20">
          <h2 className="h2-display">{pricing.title}</h2>
          <p className="lead mt-5">{pricing.note}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pricing.tiers.map((tier, i) => (
            <article
              key={tier.label}
              data-reveal="up"
              data-delay={String((i % 3) + 1)}
              className="group relative bg-white border border-line rounded-md p-7 md:p-8 transition-all duration-300 hover:border-ink/25 lg:hover:-translate-y-1 lg:hover:shadow-[0_20px_50px_-25px_rgba(10,14,26,0.18)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
                Tier 0{i + 1}
              </p>
              <h3 className="mt-5 font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] leading-tight text-ink">
                {tier.label}
              </h3>
              <p className="mt-7 font-display font-semibold tracking-[-0.025em] leading-none text-signal text-3xl md:text-4xl">
                {tier.price}
              </p>
              <p className="mt-4 text-sm text-ink-soft leading-[1.55] font-normal">
                Adapté selon le périmètre, la durée et le format.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
