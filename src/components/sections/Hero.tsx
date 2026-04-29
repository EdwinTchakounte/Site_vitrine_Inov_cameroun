"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CONTACT } from "@/data/inventaire";
import {
  ConcentricCircles,
  DotsGrid,
  SoftBlob,
} from "@/components/ui/Decorations";

/*
 * Section Hero — version "framed".
 *
 * Direction artistique :
 *  - Fond paper (off-white) avec formes décoratives (blobs, cercles, dots).
 *  - Au centre, un grand cadre rounded contient le slider + le texte.
 *  - Marges autour du cadre laissent voir le fond et les décorations
 *    → effet "card flottante" plus pro et plus chaleureux que le full-bleed.
 *  - Responsive : marges minimales mobile (≈16px), confortables desktop (≈40-64px).
 *  - Tout le copy reste verbatim de l'inventaire.
 */

const SLIDE_DURATION_MS = 3000;

type Slide = {
  caption: string;
  subline: string;
  image: string;
  alt: string;
  anchor: string;
  objectPosition?: string;
};

const SLIDES: Slide[] = [
  {
    caption: "Offres conseil",
    subline: "Trois missions, des résultats mesurables",
    image: "/hero-ai-1.jpg",
    alt: "Visualisation abstraite de flux de données IA",
    anchor: "#conseil",
  },
  {
    caption: "Formations Intelligence Artificielle",
    subline: "L'IA, concrètement pour vos équipes",
    image: "/hero-ai-2.jpg",
    alt: "Représentation conceptuelle d'intelligence artificielle",
    anchor: "#formations",
  },
  {
    caption: "Projets types",
    subline: "Secteurs prioritaires en Afrique francophone",
    image: "/hero-ai-3.jpg",
    alt: "Infrastructure technologique — circuit et matériel",
    anchor: "#projets",
  },
  {
    caption: "Le fondateur",
    subline: "15 ans de terrain. Des résultats documentés.",
    image: "/photo_augustin.jpeg",
    alt: "Augustin Njigui — Fondateur",
    anchor: "#profil",
    objectPosition: "center 25%",
  },
  {
    caption: "Volet transversal",
    subline: "Conception de solutions IA pour optimiser vos traitements",
    image: "/hero-ai-5.jpg",
    alt: "Conception de solutions technologiques interfacées IA",
    anchor: "#conseil",
  },
  {
    caption: "Zone d'intervention",
    subline: "Afrique francophone — notre terrain",
    image: "/hero-ai-4.jpg",
    alt: "Visualisation données globales — réseau Afrique",
    anchor: "#zone",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(id);
  }, [active, paused]);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  const slide = SLIDES[active];

  return (
    <section
      id="accueil"
      className={`relative bg-paper text-ink min-h-[100svh] overflow-hidden pt-20 sm:pt-22 ${
        paused ? "slider-paused" : ""
      }`}
    >
      {/* Décorations background — blobs + 1 cercle (occurrence Hero) + dots */}
      <SoftBlob
        color="signal"
        size={820}
        opacity={0.14}
        className="absolute -top-56 -left-44"
      />
      <SoftBlob
        color="accent"
        size={760}
        opacity={0.12}
        className="absolute -bottom-56 -right-48"
      />
      <SoftBlob
        color="signal"
        size={500}
        opacity={0.08}
        className="absolute top-1/3 right-1/4 scale-50 md:scale-100 origin-center"
      />
      {/* 1 seule occurrence ConcentricCircles dans le Hero (cf. brief Direction) */}
      <ConcentricCircles
        variant="ink"
        size={620}
        className="absolute top-12 -right-32 md:top-20 md:-right-20 lg:right-0 opacity-70"
      />
      <DotsGrid
        variant="ink"
        rows={10}
        cols={8}
        spacing={24}
        size={1.6}
        className="absolute bottom-8 left-2 md:left-12 lg:left-16 opacity-55"
      />
      <DotsGrid
        variant="ink"
        rows={8}
        cols={6}
        spacing={22}
        size={1.4}
        className="absolute top-32 left-1/3 opacity-40 scale-50 md:scale-75 lg:scale-100 origin-top-left"
      />

      {/* Cadre principal — card centrée avec marges */}
      <div className="relative max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 md:pb-10">
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-ink text-paper shadow-[0_30px_80px_-30px_rgba(10,14,26,0.35)] h-[calc(100svh-7rem)] min-h-[560px] sm:min-h-[600px] md:min-h-[640px] max-h-[820px]"
        >
          {/* Slides empilés. Key composite (caption+image) pour éviter
              les doublons si deux slides partagent une même image. */}
          {SLIDES.map((s, i) => {
            const isActive = i === active;
            return (
              <div
                key={`${s.caption}-${i}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div
                  key={isActive ? `anim-${active}` : `idle-${i}`}
                  className={`absolute inset-0 ${isActive ? "slide-active-anim" : ""}`}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1480px) 100vw, 1480px"
                    className="object-cover"
                    style={{ objectPosition: s.objectPosition ?? "center" }}
                  />
                </div>
              </div>
            );
          })}

          {/* Voile dégradé doux pour lisibilité */}
          <div
            aria-hidden
            className="absolute inset-0 z-20 bg-gradient-to-b from-ink/65 via-ink/35 to-ink/75"
          />
          {/* Voile radial vignette doux */}
          <div
            aria-hidden
            className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,14,26,0.30)_100%)]"
          />
          {/* Noise grain texture */}
          <div
            aria-hidden
            className="absolute inset-0 z-20 bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay"
          />

          {/* HUD top */}
          <div className="absolute inset-x-0 top-0 z-30 px-5 md:px-8 lg:px-10 pt-5 md:pt-7">
            <div className="flex items-start justify-between gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-paper/65">
              <div className="space-y-1">
                <p>
                  <span className="text-paper/35">●</span>{" "}
                  <span className="text-paper/85">INOV_Cameroun</span>{" "}
                  <span className="text-paper/35">/</span> Live
                </p>
                <p className="text-paper/45 hidden sm:block">{CONTACT.city}</p>
              </div>
              <div className="text-right space-y-1">
                <p>
                  <span className="text-signal">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="text-paper/30"> / </span>
                  {String(SLIDES.length).padStart(2, "0")}
                </p>
                <p className="text-paper/45 hidden sm:block">v1.0 · 2026</p>
              </div>
            </div>
          </div>

          {/* Contenu centré */}
          <div className="relative z-30 h-full flex items-center justify-center px-5 md:px-10 lg:px-16">
            <div className="max-w-4xl text-center">
              <p
                data-reveal="up"
                className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-paper/75"
              >
                Cabinet conseil &amp; intelligence artificielle
              </p>

              <h1
                data-reveal="up"
                data-delay="1"
                className="mt-6 md:mt-8 font-display font-bold tracking-[-0.045em] leading-[0.95] text-paper"
                style={{ fontSize: "clamp(2.5rem, 7vw + 0.5rem, 6.5rem)" }}
              >
                INOV Cameroun
              </h1>

              <p
                data-reveal="up"
                data-delay="2"
                className="mt-6 md:mt-8 mx-auto max-w-2xl text-paper/80 leading-[1.55] font-normal"
                style={{ fontSize: "clamp(0.95rem, 0.6vw + 0.85rem, 1.2rem)" }}
              >
                Cabinet de conseil en transformation digitale et intelligence
                artificielle — ancré au Cameroun, rayonnant en Afrique
                francophone.
              </p>

              <div
                data-reveal="up"
                data-delay="3"
                className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-6"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-paper text-ink px-6 sm:px-7 h-12 md:h-13 py-3 text-sm md:text-[15px] font-semibold rounded-md hover:bg-signal hover:text-paper transition-colors"
                >
                  Prendre rendez-vous
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href="#conseil"
                  className="group inline-flex items-center gap-2 text-sm md:text-[15px] font-medium text-paper/85 hover:text-paper transition-colors"
                >
                  <span className="link-line">Voir nos offres</span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* HUD bottom */}
          <div className="absolute inset-x-0 bottom-0 z-30 px-5 md:px-8 lg:px-10 pb-5 md:pb-7">
            <div
              key={`cap-${active}`}
              className="slide-up-fade flex items-end justify-between gap-4 mb-4"
            >
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-signal">
                  ● {slide.caption}
                </p>
                <p className="mt-1.5 font-display text-sm md:text-base font-semibold tracking-[-0.015em] leading-tight text-paper truncate">
                  {slide.subline}
                </p>
              </div>
              <a
                href={slide.anchor}
                className="hidden md:inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/65 hover:text-paper transition-colors"
              >
                <span className="link-line">Découvrir</span>
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => {
                const isActive = i === active;
                const isPast = i < active;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Aller au slide ${i + 1}`}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex-1 py-2.5"
                  >
                    <span className="relative block h-px bg-paper/25 overflow-hidden">
                      {isActive && (
                        <span
                          key={`fill-${active}`}
                          className="absolute inset-0 bg-signal progress-fill"
                        />
                      )}
                      {isPast && (
                        <span className="absolute inset-0 bg-paper/55" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
