import { CONSTAT } from "@/data/inventaire";
import {
  DotsGrid,
  SoftBlob,
  LogoWatermark,
  GridPattern,
  SectionMarker,
} from "@/components/ui/Decorations";

/*
 * Section #constat — design éditorial impactant.
 *
 * Direction artistique :
 *  - Fond paper (off-white) — pas d'image de fond, le contenu domine.
 *  - 4 problèmes en stack vertical avec layout alterné gauche/droite.
 *  - Chaque problème porte un NUMÉRO XXL en watermark (signal/8% opacity).
 *  - Highlights magenta sur mots-clés des descriptions.
 *  - Filets fins entre problèmes pour rythmer.
 *  - Décorations : SoftBlob signal + DotsGrid (pas de cercles, réservés Hero+Méthode).
 */

/* Highlights magenta par problème : on encadre 1-2 mots clés
 * pour donner un rythme de lecture sans modifier le copy verbatim. */
const HIGHLIGHTS: Record<string, RegExp> = {
  "01": /\b(décision|chantiers sans pilote|priorités floues)\b/i,
  "02": /\b(combat d'influence|ralentit tout)\b/i,
  "03": /\b(par où commencer|partout)\b/i,
  "04": /\b(coût réel|écart de compétitivité)\b/i,
};

/* Insère un <span text-signal> autour des mots qui matchent la regex. */
function highlightDesc(n: string, desc: string): React.ReactNode {
  const pattern = HIGHLIGHTS[n];
  if (!pattern) return desc;
  const parts = desc.split(pattern);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-signal font-medium">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export default function Constat() {
  return (
    <section
      id="constat"
      className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden isolate"
    >
      {/* Décorations subtiles */}
      <SoftBlob
        color="signal"
        size={680}
        opacity={0.08}
        className="absolute -top-48 -right-32"
      />
      <SoftBlob
        color="accent"
        size={520}
        opacity={0.06}
        className="absolute bottom-0 -left-40"
      />
      <DotsGrid
        variant="ink"
        rows={10}
        cols={6}
        spacing={22}
        size={1.4}
        className="absolute top-1/3 right-4 opacity-25 md:opacity-40 scale-50 md:scale-100 origin-top-right"
      />

      {/* Quadrillage fin de fond */}
      <GridPattern
        variant="ink"
        cellSize={80}
        intensity={0.55}
        className="absolute inset-0 md:[--grid-cell:120px]"
      />

      {/* Watermark logo INOV — signature de marque, opacité minimale */}
      <LogoWatermark
        size={620}
        opacity={0.035}
        rotate={-8}
        className="absolute -bottom-32 -left-20 scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-100 origin-bottom-left"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Repère éditorial — desktop large uniquement */}
        <SectionMarker
          index="02"
          label="LE CONSTAT"
          className="mb-10"
        />

        {/* En-tête */}
        <div data-reveal="up" className="mb-20 md:mb-28 max-w-4xl">
          <p className="eyebrow">{CONSTAT.eyebrow}</p>
          <h2 className="h2-display mt-5">
            L'IA arrive en Afrique francophone.{" "}
            <span className="text-signal">
              Mais pas pour tout le monde de la même façon.
            </span>
          </h2>
          <p className="lead mt-6">{CONSTAT.intro}</p>
        </div>

        {/* 4 problèmes en stack alterné gauche/droite */}
        <div className="space-y-16 md:space-y-20">
          {CONSTAT.problems.map((p, i) => {
            /* Items 0 et 2 → numéro à gauche (col 1-3), texte à droite (col 4-12).
             * Items 1 et 3 → numéro à droite (col 9-12), texte à gauche (col 1-8). */
            const numberRight = i % 2 === 1;
            return (
              <article
                key={p.n}
                data-reveal="up"
                data-delay={String((i % 4) + 1)}
                className="relative grid grid-cols-12 gap-x-6 md:gap-x-10 items-start border-t border-line pt-10 md:pt-12"
              >
                {/* Numéro XXL — watermark signal,
                    placé selon l'ordre alterné */}
                <div
                  className={`col-span-12 md:col-span-3 ${
                    numberRight
                      ? "md:order-2 md:col-start-10 md:text-right"
                      : "md:order-1 md:col-start-1"
                  } mb-4 md:mb-0`}
                >
                  <span
                    aria-hidden
                    className="block font-display font-bold text-signal/90 leading-none tracking-[-0.06em]"
                    style={{
                      fontSize: "clamp(4rem, 8vw + 0.5rem, 8rem)",
                    }}
                  >
                    {p.n}
                  </span>
                </div>

                {/* Bloc texte */}
                <div
                  className={`col-span-12 md:col-span-9 ${
                    numberRight
                      ? "md:order-1 md:col-start-1 md:row-start-1"
                      : "md:order-2 md:col-start-4"
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint mb-3">
                    Problème · 0{i + 1} / 04
                  </p>
                  <h3
                    className="font-display font-semibold text-ink leading-[1.1] tracking-[-0.025em]"
                    style={{ fontSize: "clamp(1.5rem, 2.4vw + 0.5rem, 2.5rem)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-5 text-base md:text-lg text-ink-soft leading-[1.6] font-normal max-w-2xl ${
                      numberRight ? "md:max-w-2xl" : ""
                    }`}
                  >
                    {highlightDesc(p.n, p.desc)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Conclusion forte sous les 4 problèmes */}
        <div
          data-reveal="up"
          className="mt-24 md:mt-32 pt-12 border-t border-ink/15 max-w-3xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal mb-4">
            ● Notre conviction
          </p>
          <p
            className="font-display font-semibold tracking-[-0.025em] leading-[1.2] text-ink"
            style={{ fontSize: "clamp(1.4rem, 2vw + 0.5rem, 2rem)" }}
          >
            Ces blocages ne sont pas une fatalité — ils se{" "}
            <span className="text-signal">structurent, se mesurent, se résolvent</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
