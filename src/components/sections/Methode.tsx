import Image from "next/image";
import { METHODE } from "@/data/inventaire";
import {
  ConcentricCircles,
  DotsGrid,
  Arc,
  SectionMarker,
  LogoWatermark,
} from "@/components/ui/Decorations";

/*
 * Section #methode — 4 étapes du processus.
 *
 * Direction artistique tech-forward IA :
 *  - Fond primary + image IA "data flow" en background pour donner
 *    une dimension visuelle tech à la méthode.
 *  - Voile primary semi-opaque pour préserver la lisibilité.
 *  - Frise 4 étapes en grille horizontale desktop, verticale mobile.
 *  - Décorations : 1 occurrence ConcentricCircles (réservée Hero+Méthode)
 *    + DotsGrid + Arc magenta signature.
 */
export default function Methode() {
  return (
    <section
      id="methode"
      className="relative bg-primary text-white py-24 md:py-32 overflow-hidden isolate"
    >
      {/* Image IA "data flow" en background — voilée primary pour lisibilité */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/hero-ai-1.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
          style={{ opacity: 0.22 }}
        />
        {/* Gradient primary pour dégrader l'image et garder la lisibilité texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/85 to-primary" />
      </div>

      {/* Décorations — 1 cercle (Méthode = 2e occurrence après Hero) */}
      <ConcentricCircles
        variant="paper"
        size={460}
        className="absolute -bottom-28 -right-24 opacity-60"
      />
      <DotsGrid
        variant="paper"
        rows={6}
        cols={10}
        spacing={20}
        size={1.5}
        className="absolute top-24 -left-12 opacity-50"
      />
      <Arc
        variant="signal"
        size={360}
        className="absolute -top-24 right-1/3 opacity-70"
      />

      {/* Watermark logo INOV — version paper pour fond navy */}
      <LogoWatermark
        size={560}
        opacity={0.05}
        rotate={5}
        monochrome="paper"
        className="absolute top-32 -right-20 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-top-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Repère éditorial — variante paper pour fond sombre */}
        <SectionMarker
          index="04"
          label="MÉTHODE · 04 ÉTAPES"
          variant="paper"
          className="mb-10"
        />

        {/* En-tête */}
        <div data-reveal="up" className="mb-16 md:mb-20 max-w-3xl">
          <p className="eyebrow text-signal">{METHODE.eyebrow}</p>
          <h2 className="h2-display-light mt-5">{METHODE.title}</h2>
          <p className="lead-light mt-6">{METHODE.subtitle}</p>
        </div>

        {/* Frise 4 étapes */}
        <ol
          data-reveal="up"
          data-delay="1"
          className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8"
        >
          {METHODE.steps.map((step) => (
            <li key={step.n} className="relative border-t border-white/15 pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-signal">
                Étape {step.n.padStart(2, "0")}
              </p>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.015em] leading-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-[1.6] font-normal">
                {step.desc}
              </p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">
                {step.badge}
              </p>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div data-reveal="up" className="mt-20">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-white text-primary px-7 h-13 py-4 text-[15px] font-medium hover:bg-signal hover:text-white transition-colors"
          >
            {METHODE.cta}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
