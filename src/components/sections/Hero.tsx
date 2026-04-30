"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BRAND, CONTACT, HERO } from "@/data/inventaire";

/*
 * Section Hero — version fullscreen.
 *
 * Direction artistique :
 *  - Slider edge-to-edge (100vw × 100svh) sur fond ink.
 *  - Pas de cadre rounded ni de shadow — fullscreen pur.
 *  - Le slider couvre tout sauf la nav (h-16 = 4rem) qui flotte au-dessus
 *    via backdrop-blur.
 */

const SLIDE_DURATION_MS = 2200;
/* Durée de la transition scroll-up entre 2 slides — un poil plus
 * que le fade pur (250ms) pour que le mouvement vertical reste lisible. */
const SLIDE_FADE_MS = 450;

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
    caption: "Notre méthode",
    subline: "Quatre étapes. Zéro abandon.",
    image: "/hero-ai-1.jpg",
    alt: "Visualisation abstraite de flux de données IA",
    anchor: "/methode",
  },
  {
    caption: "Formations Intelligence Artificielle",
    subline: "Vos équipes comprennent l'IA. Enfin.",
    image: "/hero-ai-2.jpg",
    alt: "Représentation conceptuelle d'intelligence artificielle",
    anchor: "/formations",
  },
  {
    caption: "Secteurs",
    subline: "Secteurs prioritaires en Afrique francophone",
    image: "/hero-ai-3.jpg",
    alt: "Infrastructure technologique — circuit et matériel",
    anchor: "/secteurs",
  },
  {
    caption: "Volet transversal",
    subline: "Conception de solutions IA pour optimiser vos traitements",
    image: "/hero-ai-5.jpg",
    alt: "Conception de solutions technologiques interfacées IA",
    anchor: "/methode",
  },
  {
    caption: "Zone d'intervention",
    subline: "Yaoundé · CEMAC · Afrique francophone",
    image: "/hero-ai-4.jpg",
    alt: "Visualisation données globales — réseau Afrique",
    anchor: "/secteurs",
  },
];

/* État du slider — on track active ET prev pour piloter les
 * positions translateY de chaque slide :
 *  - active   →  translateY(0)        + opacity 1   (visible)
 *  - prev     →  translateY(-100%)    + opacity 1   (sortant vers le haut)
 *  - autres   →  translateY(100%)     + opacity 0   (en attente, sous le viewport)
 */
type SlideState = { active: number; prev: number };

export default function Hero() {
  const [{ active, prev }, setSlide] = useState<SlideState>({
    active: 0,
    prev: -1,
  });
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setSlide(({ active: cur }) => ({
        active: (cur + 1) % SLIDES.length,
        prev: cur,
      }));
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(id);
  }, [active, paused]);

  const goTo = useCallback((index: number) => {
    setSlide(({ active: cur }) =>
      cur === index ? { active: cur, prev: -1 } : { active: index, prev: cur },
    );
  }, []);

  const slide = SLIDES[active];

  /* Calcule la classe de position d'une slide selon son rôle :
   *   active : visible, en place
   *   prev   : sort par le haut
   *   autres : attendent en bas, invisibles
   */
  const slidePosition = (i: number) => {
    if (i === active) return "translate-y-0 opacity-100 z-10";
    if (i === prev) return "-translate-y-full opacity-100 z-[5]";
    return "translate-y-full opacity-0 z-0";
  };

  return (
    <section
      id="accueil"
      className={`relative bg-ink text-paper overflow-hidden ${
        paused ? "slider-paused" : ""
      }`}
    >
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative overflow-hidden bg-ink text-paper h-[100svh] min-h-[560px]"
      >
          {/* Slides empilés — animation scroll-up (translateY).
              Active = 0, prev = -100% (sortant), autres = 100% (sous le viewport). */}
          {SLIDES.map((s, i) => {
            const isActive = i === active;
            const isPrev = i === prev;
            const isAnimated = isActive || isPrev;
            return (
              <div
                key={`${s.caption}-${i}`}
                aria-hidden={!isActive}
                style={{
                  transitionDuration: isAnimated
                    ? `${SLIDE_FADE_MS}ms`
                    : "0ms",
                }}
                className={`absolute inset-0 will-change-transform transition-[transform,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] ${slidePosition(
                  i,
                )}`}
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
                  <span className="text-paper/85">Inov_Consulting_Cameroun</span>{" "}
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
                <p className="text-paper/45 hidden sm:block">v2.0 · {BRAND.year}</p>
              </div>
            </div>
          </div>

          {/* Contenu centré */}
          <div className="relative z-30 h-full flex items-center justify-center px-5 md:px-10 lg:px-16">
            <div className="max-w-5xl text-center">
              <p
                data-reveal="up"
                className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-paper/75"
              >
                {HERO.surtitre}
              </p>

              <h1
                data-reveal="up"
                data-delay="1"
                className="mt-6 md:mt-8 font-display font-semibold tracking-[-0.03em] leading-[1.05] text-paper"
                style={{ fontSize: "clamp(1.75rem, 4vw + 0.5rem, 4rem)" }}
              >
                {HERO.title}
              </h1>

              <p
                data-reveal="up"
                data-delay="2"
                className="mt-6 md:mt-8 mx-auto max-w-2xl text-paper/80 leading-[1.55] font-normal"
                style={{ fontSize: "clamp(0.95rem, 0.6vw + 0.85rem, 1.2rem)" }}
              >
                {HERO.subtitle}
              </p>

              <div
                data-reveal="up"
                data-delay="3"
                className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-6"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-paper text-ink px-5 sm:px-7 h-12 text-sm md:text-[15px] font-semibold rounded-md hover:bg-signal hover:text-paper transition-colors w-full sm:w-auto"
                >
                  {HERO.ctaPrimary}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/methode"
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm md:text-[15px] font-medium text-paper/85 hover:text-paper transition-colors"
                >
                  <span className="link-line">{HERO.ctaSecondary}</span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
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
              <Link
                href={slide.anchor}
                className="hidden md:inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/65 hover:text-paper transition-colors"
              >
                <span className="link-line">Découvrir</span>
                <span aria-hidden>→</span>
              </Link>
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
    </section>
  );
}

