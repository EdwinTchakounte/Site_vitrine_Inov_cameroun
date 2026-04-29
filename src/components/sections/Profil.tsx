import Image from "next/image";
import Link from "next/link";
import { PROFIL } from "@/data/inventaire";
import { DotsGrid, SectionMarker, LogoWatermark } from "@/components/ui/Decorations";

/*
 * Section #profil — Le fondateur, parcours, citation Afrique.
 *
 * Direction artistique tech-forward IA :
 *  - Fond primary (navy logo) — rupture sombre majeure de la page.
 *  - Layout responsive 12 col : 5/7 desktop, empilé mobile.
 *  - Photo dans cadre rounded-md sur fond foncé subtil.
 *  - Stats en mini-cards distinctes (3 colonnes).
 *  - Timeline avec markers Mono élégants.
 *  - Citation §8 en pull-quote impactant en bas.
 */
export default function Profil() {
  return (
    <section
      id="profil"
      className="relative bg-primary text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Halo signal très diffus en arrière-plan pour adoucir */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[36rem] h-[36rem] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,27,96,0.18), transparent 70%)",
        }}
      />

      {/* Décor : juste une grille de points (cercles réservés Hero+Méthode) */}
      <DotsGrid
        variant="paper"
        rows={5}
        cols={10}
        spacing={22}
        size={1.5}
        className="absolute bottom-16 right-0 opacity-40"
      />

      {/* Watermark logo INOV — variante paper pour fond navy */}
      <LogoWatermark
        size={520}
        opacity={0.05}
        rotate={-4}
        monochrome="paper"
        className="absolute top-40 -left-16 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-top-left"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Repère éditorial — variante paper */}
        <SectionMarker
          index="07"
          label="LE FONDATEUR"
          variant="paper"
          className="mb-10"
        />

        {/* En-tête */}
        <div data-reveal="up" className="mb-14 md:mb-20 max-w-3xl">
          <p className="eyebrow text-signal">{PROFIL.eyebrow}</p>
          <h2 className="h2-display-light mt-5">{PROFIL.title}</h2>
        </div>

        {/* Layout 2 colonnes responsive */}
        <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-16">
          {/* Colonne portrait + identité + stats */}
          <div data-reveal="up" className="col-span-12 md:col-span-5 lg:col-span-5">
            {/* Photo */}
            <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.03] border border-white/10 rounded-md">
              <Image
                src="/photo_augustin.jpeg"
                alt={`${PROFIL.name} — ${PROFIL.role}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 35vw"
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
              />
              {/* Voile subtle en bas */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent"
              />
              {/* Tag Mono dans le coin */}
              <p className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/65">
                <span className="text-signal">●</span> Yaoundé · 2026
              </p>
            </div>

            {/* Identité sous photo */}
            <div className="mt-6">
              <h3 className="font-display text-2xl md:text-[1.65rem] font-semibold tracking-[-0.025em] leading-tight">
                {PROFIL.name}
              </h3>
              <p className="mt-1.5 text-base text-white/70 font-normal">
                {PROFIL.role}
              </p>
              <p className="mt-3 text-sm text-white/55 leading-[1.6] font-normal">
                {PROFIL.formation}
              </p>

              <Link
                href="https://www.linkedin.com/in/augustin-njigui/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 px-4 h-9 border border-white/20 rounded-md text-sm text-white/80 hover:border-white/50 hover:text-white transition-all"
              >
                <span>LinkedIn</span>
                <span aria-hidden className="text-white/40 group-hover:text-white transition-colors">
                  ↗
                </span>
              </Link>
            </div>

            {/* Stats — mini cards */}
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {PROFIL.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/10 rounded-md p-4 hover:bg-white/[0.07] transition-colors"
                >
                  <dt
                    className="font-display font-semibold text-white tracking-[-0.025em] leading-none"
                    style={{ fontSize: "clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)" }}
                  >
                    {s.value}
                  </dt>
                  <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.06em] text-white/55 leading-[1.5]">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Colonne timeline + citation */}
          <div data-reveal="up" data-delay="1" className="col-span-12 md:col-span-7 lg:col-span-7">
            <p className="eyebrow-muted text-white/55">Parcours</p>

            <ol className="mt-8 relative">
              {/* Filet vertical */}
              <span
                aria-hidden
                className="absolute left-[5px] top-3 bottom-3 w-px bg-white/12"
              />

              {PROFIL.experiences.map((exp, i) => (
                <li
                  key={exp.org}
                  className="group relative pl-10 pb-9 last:pb-0"
                >
                  {/* Pastille — point magenta */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 w-[11px] h-[11px] bg-signal rounded-full ring-4 ring-primary"
                  />

                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                    {exp.period}
                  </p>
                  <h4 className="mt-2 font-display text-lg md:text-xl font-semibold tracking-[-0.015em] leading-tight">
                    {exp.org}
                  </h4>
                  <p className="mt-1 text-sm text-white/70 font-normal">
                    {exp.role}
                  </p>
                  <p className="mt-3 text-[15px] text-white/75 leading-[1.6] font-normal max-w-prose">
                    {exp.detail}
                  </p>
                </li>
              ))}
            </ol>

            {/* Citation Afrique — pull-quote */}
            <blockquote
              data-reveal="up"
              className="mt-14 md:mt-16 relative bg-white/[0.03] border-l-2 border-signal rounded-r-md p-6 md:p-8 max-w-3xl"
            >
              <span
                aria-hidden
                className="absolute -top-3 left-6 font-display text-signal text-5xl leading-none italic"
              >
                &ldquo;
              </span>
              <p className="font-display text-lg md:text-xl font-normal leading-[1.5] text-white/95">
                {PROFIL.citation}
              </p>
              <footer className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                — {PROFIL.name}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
