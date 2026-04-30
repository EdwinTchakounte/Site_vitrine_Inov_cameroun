import Link from "next/link";
import { CONSTAT } from "@/data/inventaire";
import { LogoWatermark, DotsGrid } from "@/components/ui/Decorations";

/*
 * Section #home-alarm — bandeau attention "Le retard se creuse vite".
 *
 * Direction artistique :
 *  - Fond ink (rupture sombre majeure entre Métriques et Méthode preview).
 *  - Bloc compteur "5 années" massif en signal magenta — pas de watermark
 *    derrière (évite les pbs de stacking + assure responsive sans bricolage).
 *  - Texte du douleur en H2, paragraphe lucide, double CTA.
 */
export default function HomeAlarm() {
  /* On utilise la 4e douleur "Le retard se creuse vite" comme hook */
  const douleur = CONSTAT.problems.find((p) => p.n === "04")!;

  return (
    <section
      aria-label="Alerte retard"
      className="relative bg-ink text-paper py-14 md:py-28 lg:py-36 overflow-hidden"
    >
      {/* Halo signal géant arrière */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] md:w-[60rem] h-[40rem] md:h-[60rem] rounded-full pointer-events-none opacity-40"
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
        className="absolute top-12 -left-12 opacity-25 scale-50 md:scale-75 lg:scale-100 origin-top-left"
      />

      <LogoWatermark
        size={580}
        opacity={0.04}
        rotate={-8}
        monochrome="paper"
        className="absolute -bottom-32 -right-24 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-bottom-right"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-7 md:gap-12 items-center">
          {/* Colonne compteur — "5 années" en grand */}
          <div data-reveal="up" className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] font-medium text-signal mb-4 md:mb-8">
              ● Alerte
            </p>

            {/* Bloc compteur — "5" géant + label "années" + sous-titre */}
            <div className="flex items-end gap-3 sm:gap-4 md:gap-6">
              <span
                className="block font-display font-bold tracking-[-0.05em] leading-none text-signal shrink-0"
                style={{ fontSize: "clamp(4.5rem, 22vw, 11rem)" }}
              >
                5
              </span>
              <div className="pb-2 md:pb-3 min-w-0 flex-1">
                <span className="block font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-paper/55 font-medium">
                  années
                </span>
                <span
                  className="mt-2 block font-display text-paper/90 font-medium leading-tight"
                  style={{
                    fontSize: "clamp(0.95rem, 1.5vw + 0.3rem, 1.25rem)",
                  }}
                >
                  de retard d&apos;ici 18 mois
                </span>
              </div>
            </div>

            {/* Filet d'accent signal */}
            <span
              aria-hidden
              className="block mt-5 md:mt-7 h-px w-12 md:w-16 bg-signal"
            />
          </div>

          {/* Colonne texte */}
          <div
            data-reveal="up"
            data-delay="1"
            className="col-span-12 md:col-span-7"
          >
            <h2
              className="font-display font-semibold tracking-[-0.025em] leading-[1.2] text-paper"
              style={{ fontSize: "clamp(1.4rem, 3vw + 0.5rem, 2.5rem)" }}
            >
              {douleur.title}.{" "}
              <span className="text-paper/60">{douleur.desc}</span>
            </h2>

            <p className="mt-4 md:mt-8 text-[14.5px] md:text-base text-paper/70 leading-[1.6] font-normal max-w-prose">
              On ne vend pas la peur — on vend la lucidité. Si vous lisez ces
              lignes, vous le savez déjà : la transformation IA n&apos;est pas
              optionnelle. Le sujet, c&apos;est{" "}
              <em className="not-italic text-paper">par où commencer</em>, et
              avec qui.
            </p>

            <div className="mt-6 md:mt-10 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-3 sm:gap-5">
              <Link
                href="/pourquoi-nous"
                className="group inline-flex items-center justify-center gap-2.5 bg-paper text-ink px-5 sm:px-6 h-12 text-sm md:text-[15px] font-semibold rounded-md hover:bg-signal hover:text-paper transition-colors w-full sm:w-auto min-w-0"
              >
                <span className="truncate">Lire les 4 raisons</span>
                <span
                  aria-hidden
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm md:text-[15px] font-medium text-paper/85 hover:text-paper transition-colors w-full sm:w-auto min-w-0"
              >
                <span className="link-line truncate">
                  Demander un diagnostic gratuit
                </span>
                <span
                  aria-hidden
                  className="shrink-0 transition-transform group-hover:translate-x-1"
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
