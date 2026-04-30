import Image from "next/image";
import { PROJETS_EN_COURS } from "@/data/inventaire";
import {
  SoftBlob,
  SectionMarker,
  LogoWatermark,
} from "@/components/ui/Decorations";

/*
 * Section #projets-en-cours — "On ne parle pas de ce qu'on va faire. On le fait."
 * Source : inov-cameroun-contenu.md.pdf — Section Projets en cours
 *
 * Direction artistique :
 *  - Fond paper, 3 cards plein-largeur empilées (1 par ligne) sur mobile,
 *    grille 3 colonnes (cards riches) sur desktop.
 *  - Chaque card = image + sector + location + project + scope + outcome + status.
 *  - Status pill animé, image avec zoom hover.
 */

const STATUS_COLORS: Record<string, string> = {
  "En cours de déploiement":
    "bg-signal/15 text-signal border-signal/30",
  "Pilote actif":
    "bg-accent/15 text-accent border-accent/30",
  "En configuration":
    "bg-paper/10 text-paper/85 border-paper/20",
};

export default function ProjetsEnCours() {
  return (
    <section
      id="projets-en-cours"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      <SoftBlob
        color="signal"
        size={520}
        opacity={0.05}
        className="absolute -top-40 right-0"
      />
      <SoftBlob
        color="accent"
        size={420}
        opacity={0.04}
        className="absolute -bottom-32 -left-32"
      />

      <LogoWatermark
        size={520}
        opacity={0.035}
        rotate={5}
        className="absolute top-1/3 -right-24 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-top-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionMarker
          index="C"
          label="PROJETS EN COURS · 03 LIVRABLES"
          className="mb-10"
        />

        <div data-reveal="up" className="mb-14 md:mb-20 max-w-3xl">
          <p className="eyebrow">{PROJETS_EN_COURS.eyebrow}</p>
          <h2 className="h2-display mt-5">
            On ne parle pas de ce qu'on va faire.{" "}
            <span className="text-signal">On le fait.</span>
          </h2>
          <p className="lead mt-6">{PROJETS_EN_COURS.body}</p>
        </div>

        {/* Grille 3 colonnes desktop, stack mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {PROJETS_EN_COURS.items.map((item, i) => {
            const hasStatus = item.status && item.status.trim().length > 0;
            const statusClass = hasStatus
              ? STATUS_COLORS[item.status] ?? STATUS_COLORS["Pilote actif"]
              : "";
            return (
              <article
                key={item.n}
                data-reveal="up"
                data-delay={String((i % 3) + 1)}
                className="group relative bg-ink text-paper rounded-md overflow-hidden flex flex-col transition-all duration-300 lg:hover:-translate-y-1 lg:hover:shadow-[0_30px_60px_-25px_rgba(10,14,26,0.45)]"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-line">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  {/* Voile bas pour lisibilité */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
                  />
                  {/* Halo signal interne haut-droit */}
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(216,27,96,0.25), transparent 70%)",
                    }}
                  />

                  {/* Numéro projet en haut-gauche */}
                  <span
                    aria-hidden
                    className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/85"
                  >
                    Projet {item.n}
                  </span>

                  {/* Status pill flottant en bas-gauche — affiché uniquement si status défini */}
                  {hasStatus && (
                    <span
                      className={`absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 h-7 rounded-full border font-mono text-[10px] uppercase tracking-[0.1em] backdrop-blur-sm ${statusClass}`}
                    >
                      <span
                        aria-hidden
                        className="block w-1.5 h-1.5 rounded-full bg-current animate-pulse"
                      />
                      {item.status}
                    </span>
                  )}
                </div>

                {/* Contenu */}
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  {/* Sector + location en éyebrow Mono */}
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55">
                    <span className="text-signal">{item.sector}</span>
                    <span className="text-paper/30"> · </span>
                    {item.location}
                  </p>

                  {/* Titre projet */}
                  <h3 className="mt-4 font-display text-xl md:text-[1.4rem] font-semibold tracking-[-0.02em] leading-tight text-paper">
                    {item.project}
                  </h3>

                  {/* Scope (description du projet) */}
                  <p className="mt-4 text-[14.5px] text-paper/75 leading-[1.6] font-normal">
                    {item.scope}
                  </p>

                  {/* Filet séparateur + Outcome */}
                  <div className="mt-auto pt-6 border-t border-paper/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper/45 mb-2">
                      Bénéfice
                    </p>
                    <p className="text-[14px] font-medium text-paper leading-[1.5]">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
