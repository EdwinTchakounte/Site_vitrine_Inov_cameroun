import Image from "next/image";
import Link from "next/link";
import { METRIQUES_CLES } from "@/data/inventaire";
import {
  DotsGrid,
  SoftBlob,
  LogoWatermark,
  ConcentricCircles,
  TwinSquircle,
  OrbDuo,
  RingHalf,
  Arc,
} from "@/components/ui/Decorations";

/*
 * Section #metriques — bandeau visuel sous le Hero.
 * Source : inov-cameroun-contenu.md.pdf — Section "Métriques clés"
 *
 * Direction artistique :
 *  - Pont visuel entre le Hero (bg-ink) et la suite.
 *  - 3 cards visuelles avec image + valeur + détail explicite.
 *    → "3 secteurs" devient "PME · ONG · Finance" (explicite, pas abstrait).
 *    → "100% ancrage" devient "Yaoundé · Cameroun · CEMAC" (lieu réel).
 *    → "IA + Humain" devient "Méthode systémique. On reste."
 *  - CTA + flèche scroll-hint en bas pour inciter à continuer.
 *  - Image en haut de chaque card (ratio 16:10), overlay subtil pour lisibilité du texte.
 *  - Hover : image zoom léger + élévation card.
 */

/* Données visuelles enrichies par stat — découplées de l'inventaire PDF
 * (inventaire = value + label seulement, conformes au PDF). */
type StatVisual = {
  image: string;
  imageAlt: string;
  detail: string;
  tag: string;
  accentClass: "ink" | "signal" | "accent";
};

const STAT_VISUALS: StatVisual[] = [
  {
    /* Card 1 — "3 secteurs couverts" → 3 secteurs verticaux cohérents
     * parmi les 6 prioritaires du CDC (Santé, Éducation, Finance retenus
     * comme verticaux à plus fort levier IA en Afrique francophone). */
    image: "/sectors/03-sante.jpg",
    imageAlt: "Médecin consultant un dossier numérique",
    detail: "Santé · Éducation · Finance",
    tag: "Verticaux prioritaires",
    accentClass: "ink",
  },
  {
    /* Card 2 — "100% ancrage local" → on précise où, concrètement. */
    image: "/hero-ai-4.jpg",
    imageAlt: "Visualisation de données globales — réseau Afrique",
    detail: "Yaoundé · Cameroun · CEMAC",
    tag: "🇨🇲 Hub principal",
    accentClass: "signal",
  },
  {
    /* Card 3 — "IA + Humain toujours" → on explicite la méthode derrière. */
    image: "/hero-team.jpg",
    imageAlt: "Équipe en collaboration sur un projet IA",
    detail: "Pas de livraison sèche. On reste.",
    tag: "Méthode systémique",
    accentClass: "accent",
  },
];

const ACCENT_TEXT: Record<StatVisual["accentClass"], string> = {
  ink: "text-ink",
  signal: "text-signal",
  accent: "text-accent",
};

const ACCENT_BG_LINE: Record<StatVisual["accentClass"], string> = {
  ink: "bg-ink/20",
  signal: "bg-signal",
  accent: "bg-accent",
};

const ACCENT_TAG_BG: Record<StatVisual["accentClass"], string> = {
  ink: "bg-ink/[0.06] border-ink/15 text-ink",
  signal: "bg-signal/10 border-signal/30 text-signal",
  accent: "bg-accent/10 border-accent/30 text-accent",
};

/* Variations soft facet — chaque carte a sa propre identité géométrique :
 * - radius asymétriques alternés (rounded-tl + rounded-br vs miroir)
 * - stagger vertical en desktop pour rythmer (1ère et 3ème un peu plus basses)
 * - plaque jumelle fantôme décalée derrière, teintée selon l'accent */
type CardVariant = {
  /** Rayons asymétriques sur la carte principale */
  radius: string;
  /** Décalage vertical desktop (pour stagger) */
  stagger: string;
  /** Teinte de la plaque jumelle */
  twinTint: string;
  /** Décalage de la plaque jumelle */
  twinOffset: string;
  /** Rayons miroir pour la plaque jumelle */
  twinRadius: string;
};

const CARD_VARIANTS: CardVariant[] = [
  {
    radius: "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md",
    stagger: "",
    twinTint: "bg-signal/10 border-signal/20",
    twinOffset: "translate-x-2 translate-y-2",
    twinRadius: "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md",
  },
  {
    radius: "rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md",
    stagger: "",
    twinTint: "bg-accent/10 border-accent/20",
    twinOffset: "-translate-x-2 translate-y-2",
    twinRadius: "rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md",
  },
  {
    radius: "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md",
    stagger: "",
    twinTint: "bg-ink/[0.06] border-ink/15",
    twinOffset: "translate-x-2 translate-y-2",
    twinRadius: "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md",
  },
];

export default function MetriquesCles() {
  return (
    <section
      aria-label="Notre ancrage en chiffres"
      className="relative bg-paper text-ink pt-8 md:pt-0 pb-14 md:pb-20 overflow-hidden"
    >
      {/* ——— Décorations background ———
       * Empilage de formes douces et variées (pas que des rectangles) :
       *  - SoftBlob signal/accent : halos diffus
       *  - LogoWatermark : signature de marque centrale, très basse opacité
       *  - ConcentricCircles : signature data-viz / orbit IA
       *  - Diamond : losange outline (forme géométrique différenciante)
       *  - RingHalf : demi-anneau de cadrage
       *  - Arc : courbe douce
       *  - DotsGrid : grain technique discret
       */}
      <SoftBlob
        color="signal"
        size={560}
        opacity={0.06}
        className="absolute -top-40 -right-32"
      />
      <SoftBlob
        color="accent"
        size={460}
        opacity={0.05}
        className="absolute -bottom-40 -left-32"
      />
      <SoftBlob
        color="primary"
        size={380}
        opacity={0.04}
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />

      {/* Logo INOV en watermark central — signature de marque très diffuse */}
      <LogoWatermark
        size={620}
        opacity={0.04}
        rotate={-4}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.45] sm:scale-[0.65] md:scale-90 lg:scale-100"
      />

      {/* Cercles concentriques — orbit IA, coin haut-gauche */}
      <ConcentricCircles
        variant="ink"
        size={300}
        className="absolute -top-20 -left-20 opacity-50 hidden sm:block"
      />

      {/* TwinSquircle — losange aux coins doux, jumelé, signature soft facet */}
      <TwinSquircle
        variant="signal"
        size={260}
        className="absolute top-20 right-2 md:right-12 opacity-70 hidden md:block"
      />

      {/* OrbDuo — duo de cercles soft milieu-gauche */}
      <OrbDuo
        color="accent"
        size={240}
        opacity={0.07}
        className="absolute top-1/3 -left-14 hidden lg:block"
      />

      {/* Demi-anneau — angle bas-droit, courbure douce */}
      <RingHalf
        variant="ink"
        size={360}
        className="absolute -bottom-2 -right-10 opacity-50 hidden lg:block"
      />

      {/* Arc — courbe en bas-gauche */}
      <Arc
        variant="signal"
        size={260}
        className="absolute -bottom-10 left-8 opacity-40 hidden lg:block"
      />

      {/* Grille de points — texture data fine */}
      <DotsGrid
        variant="ink"
        rows={6}
        cols={10}
        spacing={22}
        size={1.4}
        className="absolute top-12 right-4 opacity-25 scale-50 md:scale-75 lg:scale-100 origin-top-right"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* En-tête éditorial */}
        <div
          data-reveal="up"
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-10 mb-3 md:mb-5"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal mb-1.5">
              ● {METRIQUES_CLES.eyebrow}
            </p>
            <h2
              className="font-display font-semibold tracking-[-0.025em] leading-[1.1] text-ink"
              style={{ fontSize: "clamp(1.5rem, 2.4vw + 0.4rem, 2.25rem)" }}
            >
              Notre ancrage,{" "}
              <span className="text-signal italic font-medium">en chiffres</span>.
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint md:text-right shrink-0">
            03 / 03
          </p>
        </div>

        {/* 3 cards visuelles avec image — soft facets jumelées
         * Chaque carte a un radius asymétrique différent + une plaque
         * jumelle fantôme derrière (offset, teintée à l'accent). */}
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 lg:gap-6">
          {METRIQUES_CLES.items.map((item, i) => {
            const visual = STAT_VISUALS[i] ?? STAT_VISUALS[0];
            const variant = CARD_VARIANTS[i] ?? CARD_VARIANTS[0];
            return (
              <div
                key={item.label}
                data-reveal="up"
                data-delay={String((i % 3) + 1)}
                className={`group/card relative ${variant.stagger}`}
              >
                {/* Plaque jumelle fantôme — derrière, décalée, teintée */}
                <div
                  aria-hidden
                  className={`absolute inset-0 border ${variant.twinTint} ${variant.twinRadius} ${variant.twinOffset} transition-transform duration-500 group-hover/card:translate-x-3 group-hover/card:translate-y-3`}
                />

                {/* Carte principale */}
                <div
                  className={`relative bg-white border border-line ${variant.radius} transition-all duration-300 hover:border-ink/25 lg:group-hover/card:-translate-y-1 lg:group-hover/card:shadow-[0_30px_70px_-25px_rgba(10,14,26,0.22)] overflow-hidden`}
                >
                  {/* Image en header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-line">
                    <Image
                      src={visual.image}
                      alt={visual.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover/card:scale-[1.05]"
                    />
                    {/* Voile bas pour lisibilité du tag */}
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent"
                    />
                    {/* Tag flottant en bas-gauche */}
                    <span
                      className={`absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 h-7 rounded-full border font-mono text-[10px] uppercase tracking-[0.1em] backdrop-blur-sm ${ACCENT_TAG_BG[visual.accentClass]}`}
                    >
                      {visual.tag}
                    </span>
                    {/* Index card en haut-droit */}
                    <span
                      aria-hidden
                      className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/85"
                    >
                      · 0{i + 1}
                    </span>
                  </div>

                  {/* Contenu sous l'image */}
                  <div className="p-6 md:p-7">
                    <dt
                      className={`font-display font-bold tracking-[-0.045em] leading-none transition-colors ${ACCENT_TEXT[visual.accentClass]}`}
                      style={{ fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.5rem)" }}
                    >
                      {item.value}
                    </dt>

                    {/* Ligne d'accent qui s'étend au hover */}
                    <span
                      aria-hidden
                      className={`block mt-4 h-px w-10 ${ACCENT_BG_LINE[visual.accentClass]} transition-all duration-500 group-hover/card:w-full`}
                    />

                    <dd className="mt-4">
                      <span className="block font-mono text-[12px] uppercase tracking-[0.12em] text-ink-soft font-medium leading-[1.5]">
                        {item.label}
                      </span>
                      <span className="mt-2 block text-[14.5px] text-ink leading-[1.55] font-medium">
                        {visual.detail}
                      </span>
                    </dd>
                  </div>
                </div>
              </div>
            );
          })}
        </dl>

        {/* Bridge vers la suite — CTA explicite + scroll hint */}
        <div
          data-reveal="up"
          className="mt-10 md:mt-12 flex flex-col items-center text-center gap-4"
        >
          <Link
            href="/secteurs"
            className="group inline-flex items-center gap-3 text-[15px] font-semibold text-ink hover:text-signal transition-colors"
          >
            <span className="link-line">Voir nos projets en cours</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <span
            aria-hidden
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint flex items-center gap-2 animate-pulse"
          >
            <span className="block w-px h-6 bg-ink-faint" />
            Continuer
          </span>
        </div>
      </div>
    </section>
  );
}
