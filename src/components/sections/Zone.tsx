import { ZONE } from "@/data/inventaire";
import {
  SoftBlob,
  SectionMarker,
  LogoWatermark,
  GridPattern,
} from "@/components/ui/Decorations";

/*
 * Section #zone — Afrique francophone, version compacte et épurée.
 *
 * Direction artistique tech-forward IA, soft & dense :
 *  - Layout 2 colonnes : hub Cameroun (col-4) + grille pays (col-8).
 *  - Hub Cameroun en card normale (pas de mise en avant 2x2).
 *  - Pays en pills compactes : drapeau + nom, hover subtil.
 *  - Silhouette Afrique en arrière-plan ultra-discrète.
 *  - Section padding réduit pour densifier.
 */

const FLAGS: Record<string, string> = {
  "Côte d'Ivoire": "🇨🇮",
  "Sénégal": "🇸🇳",
  "Gabon": "🇬🇦",
  "RDC": "🇨🇩",
  "Congo-Brazzaville": "🇨🇬",
  "Tchad": "🇹🇩",
  "Mali": "🇲🇱",
  "Burkina Faso": "🇧🇫",
  "Niger": "🇳🇪",
  "Togo · Bénin": "🇹🇬 🇧🇯",
  "Guinée": "🇬🇳",
};

export default function Zone() {
  return (
    <section
      id="zone"
      className="relative bg-paper text-ink py-20 md:py-24 overflow-hidden"
    >
      {/* Silhouette Afrique en arrière-plan ultra-discrète */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-end pointer-events-none opacity-[0.025]"
      >
        <AfricaSilhouette className="w-[40%] h-auto translate-x-[8%]" />
      </div>

      {/* Blob signal diffus pour adoucir */}
      <SoftBlob
        color="signal"
        size={460}
        opacity={0.06}
        className="absolute -top-24 -left-32"
      />

      {/* Quadrillage fin */}
      <GridPattern
        variant="ink"
        cellSize={80}
        intensity={0.5}
        className="absolute inset-0 md:[--grid-cell:120px]"
      />

      {/* Watermark logo INOV — petite signature en bas à droite */}
      <LogoWatermark
        size={420}
        opacity={0.03}
        rotate={6}
        className="absolute -bottom-16 right-0 scale-[0.5] sm:scale-[0.65] md:scale-75 lg:scale-100 origin-bottom-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Repère éditorial */}
        <SectionMarker
          index="08"
          label="ZONE D'INTERVENTION"
          className="mb-10"
        />

        <div data-reveal="up" className="mb-10 md:mb-12 max-w-3xl">
          <p className="eyebrow">{ZONE.eyebrow}</p>
          <h2 className="h2-display mt-5">{ZONE.title}</h2>
          <p className="lead mt-5">{ZONE.subtitle}</p>
        </div>

        {/* Layout 2 colonnes compact */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Hub Cameroun */}
          <div data-reveal="up" className="col-span-12 md:col-span-4">
            <article className="relative bg-ink text-paper rounded-md p-6 md:p-7 overflow-hidden h-full">
              {/* Halo signal interne */}
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(216,27,96,0.30), transparent 70%)",
                }}
              />

              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                  ● Hub principal
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <span aria-hidden className="text-4xl md:text-5xl leading-none">
                    🇨🇲
                  </span>
                  <h3
                    className="font-display font-semibold tracking-[-0.025em] leading-none"
                    style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)" }}
                  >
                    {ZONE.hub}
                  </h3>
                </div>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/55">
                  Yaoundé · CEMAC
                </p>
              </div>
            </article>
          </div>

          {/* Pays d'intervention en pills compactes */}
          <div data-reveal="up" data-delay="1" className="col-span-12 md:col-span-8">
            <div className="flex items-baseline justify-between gap-4 mb-5">
              <p className="eyebrow-muted">Pays d'intervention</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
                {ZONE.countries.length} territoires
              </p>
            </div>

            {/* Grille de pills denses */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2.5">
              {ZONE.countries.map((country) => (
                <li
                  key={country}
                  className="group inline-flex items-center gap-3 px-3.5 h-12 bg-white border border-line rounded-md hover:border-signal/40 hover:bg-white hover:shadow-[0_4px_14px_-6px_rgba(10,14,26,0.08)] transition-all"
                >
                  <span aria-hidden className="text-xl leading-none shrink-0">
                    {FLAGS[country] ?? "🌍"}
                  </span>
                  <span className="text-sm font-medium text-ink truncate">
                    {country}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AfricaSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 600"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M180,40 Q220,30 260,35 Q310,40 340,50 Q370,55 380,80 Q395,105 400,140 Q410,170 420,200 Q425,230 435,260 Q450,290 455,325 Q460,360 445,395 Q425,425 405,455 Q385,485 365,510 Q340,535 305,545 Q275,555 245,555 Q215,555 195,540 Q175,520 165,490 Q150,460 140,430 Q125,395 110,365 Q90,335 75,300 Q65,270 75,240 Q90,210 105,180 Q120,150 135,120 Q150,90 170,65 Q175,50 180,40 Z M340,150 L380,170 L385,210 L355,225 L335,200 Z"
        opacity="0.85"
      />
    </svg>
  );
}
