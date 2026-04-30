import Image from "next/image";
import Link from "next/link";
import { CONSEIL, CONCEPTION } from "@/data/inventaire";
import {
  SoftBlob,
  LogoWatermark,
  GridPattern,
  SectionMarker,
  CornerBracket,
} from "@/components/ui/Decorations";

/*
 * Section #conseil — 3 offres packagées.
 *
 * Direction artistique tech-forward IA :
 *  - Fond paper, cards bg-white avec bordure très fine.
 *  - Aucune ombre lourde, aucun badge "Recommandée", aucun décalage.
 *  - Hierarchy via typo et espacement, pas via effets.
 *  - Magenta réservé : CTA hover uniquement.
 */
export default function Conseil() {
  return (
    <section
      id="conseil"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      {/* Décor : blob signal diffus uniquement */}
      <SoftBlob
        color="signal"
        size={520}
        opacity={0.05}
        className="absolute -top-40 -right-40"
      />

      {/* Quadrillage fin — signature tech subtile */}
      <GridPattern
        variant="ink"
        cellSize={80}
        intensity={0.5}
        className="absolute inset-0 md:[--grid-cell:120px]"
      />

      {/* Watermark logo INOV — signature de marque, côté droit */}
      <LogoWatermark
        size={680}
        opacity={0.04}
        rotate={6}
        className="absolute top-32 -right-24 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-top-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Repère éditorial */}
        <SectionMarker
          index="03"
          label="CONSEIL · 03 OFFRES"
          className="mb-10"
        />

        <div data-reveal="up" className="mb-16 md:mb-20 max-w-3xl">
          <p className="eyebrow">{CONSEIL.eyebrow}</p>
          <h2 className="h2-display mt-5">{CONSEIL.title}</h2>
          <p className="lead mt-6">{CONSEIL.subtitle}</p>
        </div>

        {/* 3 cards alignées */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CONSEIL.offers.map((offer, i) => (
            <article
              key={offer.n}
              data-reveal="up"
              data-delay={String((i % 3) + 1)}
              className="group relative flex flex-col bg-white border border-line p-7 md:p-8 lg:p-10 transition-all duration-300 hover:border-ink/25 lg:hover:-translate-y-1 lg:hover:shadow-[0_20px_50px_-25px_rgba(10,14,26,0.18)]"
            >
              {/* Crochets d'angle — premium, desktop uniquement */}
              <CornerBracket
                position="tl"
                size={18}
                className="absolute top-2.5 left-2.5 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <CornerBracket
                position="br"
                size={18}
                className="absolute bottom-2.5 right-2.5 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              {/* Header — eyebrow mono + durée */}
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
                  Offre {offer.n}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-soft">
                  {offer.duration}
                </p>
              </div>

              {/* Titre */}
              <h3 className="h3-display mt-6">{offer.title}</h3>

              {/* Cadence */}
              <p className="mt-2 text-sm text-ink-soft font-normal">
                {offer.pace}
              </p>

              {/* Promesse */}
              <p className="mt-7 text-[1.05rem] leading-[1.5] text-ink font-normal">
                {offer.promise}
              </p>

              {/* Livrables */}
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {offer.deliverables.map((d, j) => (
                  <li
                    key={j}
                    className="flex items-baseline gap-3 text-[14.5px] text-ink-soft font-normal leading-[1.55]"
                  >
                    <span
                      aria-hidden
                      className="block w-1 h-1 bg-ink/30 rounded-full mt-2 shrink-0"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {/* Value line — pull-quote latéral discret */}
              <p className="mt-8 text-[14.5px] leading-[1.5] text-ink-soft border-l border-ink/15 pl-4">
                {offer.valueLine}
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="mt-auto pt-9 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-signal transition-colors"
              >
                <span className="link-line">{offer.cta}</span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Volet transversal — Conception solutions IA, layout split image+texte */}
        <div
          data-reveal="up"
          className="mt-20 md:mt-24 relative bg-ink text-paper rounded-md overflow-hidden shadow-[0_30px_60px_-25px_rgba(10,14,26,0.30)]"
        >
          <div className="grid grid-cols-12 min-h-[360px]">
            {/* Colonne image — 5 col desktop, full mobile */}
            <div className="col-span-12 md:col-span-5 relative min-h-[260px] md:min-h-0">
              <Image
                src="/hero-ai-5.jpg"
                alt="Architecture de solutions technologiques interfacées IA"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
              {/* Voile gradient pour fondu dans le bloc sombre côté droit */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink/70 md:bg-gradient-to-r md:from-transparent md:via-ink/0 md:to-ink"
              />
              {/* Halo signal interne dans le coin */}
              <div
                aria-hidden
                className="absolute top-0 left-0 w-72 h-72 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(216,27,96,0.30), transparent 70%)",
                }}
              />
              {/* Tag flottant en bas-gauche */}
              <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/80 z-10">
                <span className="text-signal">●</span> Conception &amp; IA
              </p>
            </div>

            {/* Colonne contenu — 7 col desktop */}
            <div className="col-span-12 md:col-span-7 relative p-7 md:p-9 lg:p-12 flex flex-col justify-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-signal">
                {CONCEPTION.eyebrow}
              </p>
              <h3
                className="mt-5 font-display font-semibold tracking-[-0.025em] leading-[1.1]"
                style={{ fontSize: "clamp(1.5rem, 2.2vw + 0.5rem, 2.25rem)" }}
              >
                {CONCEPTION.title}
              </h3>
              <p className="mt-5 text-[15px] md:text-base text-paper/80 leading-[1.55] font-normal max-w-2xl">
                {CONCEPTION.subtitle}
              </p>
              <ul className="mt-6 grid gap-2.5">
                {CONCEPTION.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-baseline gap-3 text-[14.5px] text-paper/85 font-normal leading-[1.55]"
                  >
                    <span
                      aria-hidden
                      className="block w-1.5 h-1.5 bg-signal rounded-full mt-2 shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-7 group inline-flex items-center gap-2 self-start text-[14px] font-semibold text-paper"
              >
                <span className="link-line">Discuter d'un projet</span>
                <span
                  aria-hidden
                  className="text-signal transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
