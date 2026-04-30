import Image from "next/image";
import Link from "next/link";
import { CONTACT, FORMATIONS, PROFIL } from "@/data/inventaire";
import { DotsGrid, LogoWatermark } from "@/components/ui/Decorations";

/*
 * Section formations — §04 Formateur.
 * Source : formations_inov.pdf — §04 Formateur
 *
 * Le PDF présente Augustin de manière condensée (Mines-Télécom, Edmond de Rothschild,
 * L'Oréal, CFAO Group). Cette section reprend cette synthèse mais profite des données
 * riches de PROFIL (parcours timeline + stats) puisqu'aucune page /notre-equipe n'existe
 * (architecture B1 stricte PDF).
 *
 * Direction artistique :
 *  - Fond primary (deep green logo) — rupture sombre, met en valeur le formateur.
 *  - Photo Augustin à gauche, parcours timeline + stats à droite.
 *  - Citation Afrique en pull-quote bas.
 */
export default function FormationsTrainer() {
  const { trainer } = FORMATIONS;

  return (
    <section
      aria-label="§04 Formateur"
      className="relative bg-primary text-white py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[36rem] h-[36rem] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(216,27,96,0.18), transparent 70%)",
        }}
      />

      <DotsGrid
        variant="paper"
        rows={5}
        cols={10}
        spacing={22}
        size={1.5}
        className="absolute bottom-16 right-0 opacity-40"
      />

      <LogoWatermark
        size={520}
        opacity={0.05}
        rotate={-4}
        monochrome="paper"
        className="absolute top-32 -left-16 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-top-left"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-signal mb-10">
          {trainer.eyebrow}
        </p>

        <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-16">
          {/* Colonne portrait + identité + stats */}
          <div data-reveal="up" className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.03] border border-white/10 rounded-md">
              <Image
                src="/photo_augustin.jpeg"
                alt={`${trainer.name} — ${trainer.role}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 35vw"
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent"
              />
              <p className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/65">
                <span className="text-signal">●</span> {CONTACT.hubLabel}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-display text-2xl md:text-[1.65rem] font-semibold tracking-[-0.025em] leading-tight">
                {trainer.name}
              </h3>
              <p className="mt-1.5 text-base text-white/70 font-normal">
                {trainer.role}
              </p>
              <p className="mt-3 text-sm text-white/55 leading-[1.6] font-normal">
                {trainer.note}
              </p>

              <Link
                href={CONTACT.linkedin}
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

          {/* Colonne expériences condensées + timeline + citation */}
          <div data-reveal="up" data-delay="1" className="col-span-12 md:col-span-7">
            <p className="eyebrow-muted text-white/55">Expériences</p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {trainer.experiences.map((exp) => (
                <li
                  key={exp}
                  className="flex items-center gap-3 px-4 h-12 bg-white/[0.04] border border-white/10 rounded-md"
                >
                  <span aria-hidden className="block w-1.5 h-1.5 bg-signal rounded-full shrink-0" />
                  <span className="text-sm font-medium text-white truncate">{exp}</span>
                </li>
              ))}
            </ul>

            <p className="eyebrow-muted text-white/55 mt-12">Parcours détaillé</p>

            <ol className="mt-6 relative">
              <span
                aria-hidden
                className="absolute left-[5px] top-3 bottom-3 w-px bg-white/12"
              />

              {PROFIL.experiences.map((exp) => (
                <li key={exp.org} className="relative pl-10 pb-7 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 w-[11px] h-[11px] bg-signal rounded-full ring-4 ring-primary"
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                    {exp.period}
                  </p>
                  <h4 className="mt-2 font-display text-lg font-semibold tracking-[-0.015em] leading-tight">
                    {exp.org}
                  </h4>
                  <p className="mt-1 text-sm text-white/70 font-normal">{exp.role}</p>
                  <p className="mt-2 text-[14.5px] text-white/75 leading-[1.55] font-normal max-w-prose">
                    {exp.detail}
                  </p>
                </li>
              ))}
            </ol>

            <blockquote
              data-reveal="up"
              className="mt-10 relative bg-white/[0.03] border-l-2 border-signal rounded-r-md p-6 md:p-8 max-w-2xl"
            >
              <span
                aria-hidden
                className="absolute -top-3 left-6 font-display text-signal text-5xl leading-none"
              >
                &ldquo;
              </span>
              <p className="font-display text-base md:text-lg font-medium leading-[1.5] text-white/95">
                {PROFIL.citation}
              </p>
              <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">
                — {trainer.name}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
