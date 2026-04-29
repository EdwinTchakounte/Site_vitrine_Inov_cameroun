import Image from "next/image";
import { PROJETS } from "@/data/inventaire";
import { SoftBlob } from "@/components/ui/Decorations";

/*
 * Section #projets — 6 secteurs avec photo, titre, projet, description.
 *
 * Direction artistique tech-forward IA :
 *  - Fond paper, cards minimalistes avec image en header.
 *  - Pas de mesh-tech background, pas de wave dividers.
 *  - Hover discret : zoom photo subtil + couleur titre.
 */

const SECTOR_IMAGES: Record<string, { src: string; alt: string }> = {
  "01": { src: "/sectors/01-public.jpg", alt: "Façade d'un bâtiment institutionnel moderne" },
  "02": { src: "/sectors/02-banque.jpg", alt: "Tableau de bord financier sur un écran moderne" },
  "03": { src: "/sectors/03-sante.jpg", alt: "Médecin consultant un dossier numérique" },
  "04": { src: "/sectors/04-ong.jpg", alt: "Atelier collaboratif sur le terrain" },
  "05": { src: "/sectors/05-telecoms.jpg", alt: "Antenne de télécommunication contre un ciel dégagé" },
  "06": { src: "/sectors/06-education.jpg", alt: "Étudiants en formation dans une salle moderne" },
};

export default function Projets() {
  return (
    <section
      id="projets"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden"
    >
      {/* Décor : blobs organiques uniquement (cercles réservés Hero+Méthode) */}
      <SoftBlob
        color="signal"
        size={620}
        opacity={0.05}
        className="absolute -top-40 -right-32"
      />
      <SoftBlob
        color="accent"
        size={500}
        opacity={0.04}
        className="absolute -bottom-32 -left-40"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div data-reveal="up" className="mb-16 md:mb-20 max-w-3xl">
          <p className="eyebrow">{PROJETS.eyebrow}</p>
          <h2 className="h2-display mt-5">{PROJETS.title}</h2>
          <p className="lead mt-6">{PROJETS.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
          {PROJETS.sectors.map((s, i) => {
            const img = SECTOR_IMAGES[s.n];
            return (
              <article
                key={s.n}
                data-reveal="up"
                data-delay={String((i % 3) + 1)}
                className="group photo-frame flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-line">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="photo-zoom object-cover"
                  />
                </div>

                <div className="mt-6 flex-1 flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-faint">
                    Secteur {s.n}
                  </p>
                  <h3 className="h3-display mt-3 group-hover:text-signal transition-colors">
                    {s.sector}
                  </h3>
                  <p className="mt-3 text-[15px] text-ink font-medium leading-[1.5]">
                    {s.project}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft leading-[1.6] font-normal">
                    {s.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
