"use client";

import Image from "next/image";
import { useState } from "react";
import { FORMATIONS } from "@/data/inventaire";
import {
  SoftBlob,
  DotsGrid,
  SectionMarker,
  LogoWatermark,
} from "@/components/ui/Decorations";

/*
 * Section #formations — onglets Dirigeants/Cadres + accordéon 5 modules.
 *
 * Direction artistique tech-forward IA :
 *  - Onglets minimalistes : texte + soulignement.
 *  - Bandeau infos en grille 4 cellules ultra-sobres.
 *  - Promesse en pull-quote sobre (pas d'italique).
 *  - Accordéon : module fermé = filet + numéro mono + titre + plus.
 *    Module ouvert = liste bullets discrets.
 *  - Magenta réservé : indicateur onglet actif + CTA hover.
 */
export default function Formations() {
  const [activeTrack, setActiveTrack] = useState<"dirigeants" | "cadres">(
    "dirigeants",
  );
  const [openModule, setOpenModule] = useState<number>(0);

  const track = FORMATIONS.tracks.find((t) => t.id === activeTrack)!;

  const switchTrack = (id: "dirigeants" | "cadres") => {
    setActiveTrack(id);
    setOpenModule(0);
  };

  const toggleModule = (i: number) => {
    setOpenModule((prev) => (prev === i ? -1 : i));
  };

  return (
    <section
      id="formations"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      {/* Image IA en accent visuel (top-right, faible opacité) */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-full md:w-[60%] h-[55%] pointer-events-none -z-10"
      >
        <Image
          src="/hero-ai-2.jpg"
          alt=""
          fill
          sizes="60vw"
          loading="lazy"
          className="object-cover"
          style={{ opacity: 0.10 }}
        />
        {/* Fade vers paper côté gauche et bas */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-paper/60 to-paper" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper" />
      </div>

      {/* Décor : blob signal très diffus + dots grid */}
      <SoftBlob
        color="signal"
        size={580}
        opacity={0.06}
        className="absolute -top-40 -left-40"
      />
      <SoftBlob
        color="accent"
        size={420}
        opacity={0.05}
        className="absolute bottom-0 -right-32"
      />
      <DotsGrid
        variant="ink"
        rows={5}
        cols={8}
        spacing={20}
        size={1.3}
        className="absolute top-1/3 right-8 opacity-50"
      />

      {/* Watermark logo INOV — signature en bas à gauche */}
      <LogoWatermark
        size={520}
        opacity={0.035}
        rotate={-6}
        className="absolute -bottom-20 -left-20 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-bottom-left"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Repère éditorial */}
        <SectionMarker
          index="05"
          label="FORMATIONS IA · 02 PARCOURS"
          className="mb-10"
        />

        {/* En-tête */}
        <div data-reveal="up" className="mb-16 md:mb-20 max-w-3xl">
          <p className="eyebrow">{FORMATIONS.eyebrow}</p>
          <h2 className="h2-display mt-5">{FORMATIONS.title}</h2>
          <p className="lead mt-6">{FORMATIONS.subtitle}</p>
        </div>

        {/* Onglets minimalistes */}
        <div
          data-reveal="up"
          data-delay="1"
          role="tablist"
          aria-label="Sélection du parcours"
          className="flex border-b border-line"
        >
          {FORMATIONS.tracks.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={activeTrack === t.id}
              aria-controls={`panel-${t.id}`}
              id={`tab-${t.id}`}
              onClick={() => switchTrack(t.id as "dirigeants" | "cadres")}
              className={`relative flex-1 md:flex-none md:min-w-[260px] px-6 py-5 text-left transition-colors ${
                activeTrack === t.id ? "text-ink" : "text-ink-faint hover:text-ink-soft"
              }`}
            >
              <span className="block font-mono text-xs uppercase tracking-[0.08em]">
                Parcours {t.id === "dirigeants" ? "01" : "02"}
              </span>
              <span className="mt-2 block font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] leading-tight">
                {t.id === "dirigeants" ? "Dirigeants" : "Cadres"}
              </span>
              {/* Indicateur actif — filet plein magenta */}
              <span
                aria-hidden
                className={`absolute -bottom-px left-0 h-0.5 transition-all duration-300 ${
                  activeTrack === t.id ? "w-full bg-signal" : "w-0 bg-signal"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Panneau actif */}
        <div
          role="tabpanel"
          id={`panel-${track.id}`}
          aria-labelledby={`tab-${track.id}`}
          className="pt-12 md:pt-16"
        >
          {/* Titre complet du parcours */}
          <h3 className="font-display font-semibold leading-tight tracking-[-0.025em] text-ink"
              style={{ fontSize: "clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)" }}>
            {track.title}
          </h3>

          {/* Bandeau infos — 4 cellules épurées */}
          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
            {[
              { label: "Public", value: track.audience },
              { label: "Durée", value: track.duration },
              { label: "Groupe", value: track.group },
              { label: "Format", value: track.format },
            ].map((info) => (
              <div key={info.label} className="border-t border-line pt-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
                  {info.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-ink leading-[1.5]">
                  {info.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Promesse — pull-quote sobre, sans italique */}
          <p className="mt-12 max-w-3xl font-display text-xl md:text-2xl font-medium leading-[1.4] text-ink border-l border-signal pl-5">
            {track.promise}
          </p>

          {/* Accordéon des 5 modules */}
          <div className="mt-16 border-t border-line">
            {track.modules.map((m, i) => {
              const isOpen = openModule === i;
              return (
                <div key={m.n} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => toggleModule(i)}
                    aria-expanded={isOpen}
                    aria-controls={`module-${track.id}-${m.n}`}
                    className="group w-full flex items-center gap-6 md:gap-10 py-6 md:py-7 text-left"
                  >
                    {/* Numéro mono */}
                    <span
                      className={`font-mono text-sm uppercase tracking-[0.08em] transition-colors ${
                        isOpen ? "text-signal" : "text-ink-faint group-hover:text-ink-soft"
                      }`}
                    >
                      {m.n}
                    </span>

                    {/* Titre */}
                    <span
                      className={`flex-1 font-display text-base md:text-xl font-semibold leading-[1.2] tracking-[-0.015em] transition-colors ${
                        isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"
                      }`}
                    >
                      {m.title}
                    </span>

                    {/* Plus / Croix */}
                    <span
                      aria-hidden
                      className={`text-xl font-light leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-signal" : "rotate-0 text-ink-soft"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`module-${track.id}-${m.n}`}
                    role="region"
                    className={`grid transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="pl-14 md:pl-20 pr-6 pb-7 md:pb-8 grid gap-y-2.5">
                        {m.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="flex items-baseline gap-3 text-[15px] text-ink-soft font-normal leading-[1.6]"
                          >
                            <span
                              aria-hidden
                              className="block w-1 h-1 bg-ink/30 rounded-full mt-2 shrink-0"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-ink text-paper px-7 h-13 py-4 text-[15px] font-medium hover:bg-signal transition-colors"
            >
              {FORMATIONS.cta} — {track.id === "dirigeants" ? "Dirigeants" : "Cadres"}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
