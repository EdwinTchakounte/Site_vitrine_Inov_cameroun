import Link from "next/link";
import { CTA_FINAL } from "@/data/inventaire";
import { LogoWatermark, DotsGrid } from "@/components/ui/Decorations";

/*
 * Section #cta-final — "Votre organisation mérite un partenaire, pas un prestataire."
 * Source : inov-cameroun-contenu.md.pdf — Section CTA Final
 *
 * Direction artistique :
 *  - Fond ink (presque-noir) — clôture impactante avant le footer.
 *  - Big H2 avec accent signal sur "un partenaire, pas un prestataire".
 *  - Body court, 2 CTAs (primary diagnostic / secondary projets).
 *  - 3 réassurances en pills horizontales (Réponse 24h · FR/EN · Yaoundé).
 *  - Décorations paper subtiles (DotsGrid + LogoWatermark inversés).
 */
export default function CtaFinal() {
  return (
    <section
      id="cta-final"
      className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden"
    >
      {/* Halo signal diffus */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,27,96,0.20), transparent 70%)",
        }}
      />

      <DotsGrid
        variant="paper"
        rows={6}
        cols={10}
        spacing={22}
        size={1.5}
        className="absolute bottom-12 right-4 opacity-30 scale-50 md:scale-75 lg:scale-100 origin-bottom-right"
      />

      <LogoWatermark
        size={520}
        opacity={0.04}
        rotate={6}
        monochrome="paper"
        className="absolute -top-20 -left-24 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-top-left"
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <p
          data-reveal="up"
          className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-signal"
        >
          {CTA_FINAL.eyebrow}
        </p>

        <h2
          data-reveal="up"
          data-delay="1"
          className="mt-6 font-display font-semibold tracking-[-0.025em] leading-[1.1] text-paper"
          style={{ fontSize: "clamp(2rem, 4vw + 0.5rem, 3.5rem)" }}
        >
          Votre organisation mérite{" "}
          <span className="text-signal">un partenaire, pas un prestataire</span>
          .
        </h2>

        <p
          data-reveal="up"
          data-delay="2"
          className="mt-7 mx-auto max-w-2xl text-paper/80 leading-[1.6] font-normal text-[15px] md:text-base"
        >
          {CTA_FINAL.body}
        </p>

        {/* CTAs — full-width sur mobile pour ne jamais déborder */}
        <div
          data-reveal="up"
          data-delay="3"
          className="mt-10 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-signal text-paper px-5 sm:px-7 h-12 text-[14px] sm:text-[15px] font-semibold rounded-md hover:bg-paper hover:text-ink transition-colors w-full sm:w-auto text-center"
          >
            <span className="truncate">{CTA_FINAL.ctaPrimary}</span>
            <span
              aria-hidden
              className="shrink-0 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link
            href="/secteurs"
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-[14px] sm:text-[15px] font-medium text-paper/85 hover:text-paper transition-colors"
          >
            <span className="link-line">{CTA_FINAL.ctaSecondary}</span>
            <span
              aria-hidden
              className="shrink-0 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Réassurances — pills qui peuvent wrap leur texte sur très petits écrans */}
        <ul
          data-reveal="up"
          data-delay="4"
          className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-2.5"
        >
          {CTA_FINAL.reassurances.map((r) => (
            <li
              key={r}
              className="inline-flex items-center gap-2 px-3.5 py-2 min-h-9 bg-paper/[0.06] border border-paper/15 rounded-full font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.08em] text-paper/85 max-w-full"
            >
              <span aria-hidden className="text-signal shrink-0">
                ●
              </span>
              <span className="leading-tight text-center">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
