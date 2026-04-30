import Image from "next/image";

/*
 * Decorations — formes SVG décoratives pour embellir les sections.
 *
 * Composants atomiques :
 *  - <ConcentricCircles /> : 3-4 cercles concentriques outline
 *  - <DotsGrid />          : grille de petits points (data viz subtile)
 *  - <Arc />               : arc de cercle (élément graphique épuré)
 *  - <SoftBlob />          : forme organique molle (gradient flou)
 *  - <LogoWatermark />     : logo INOV à très faible opacité (signature de marque)
 *  - <GridPattern />       : grille fine de lignes (texture tech)
 *  - <SectionMarker />     : repère éditorial Mono (§ 03 — CONSEIL)
 *  - <CornerBracket />     : crochet d'angle (cadrage discret)
 *
 * Tous sont positionnés en absolute, pointer-events:none, aria-hidden.
 * À utiliser dans des sections en `relative overflow-hidden`.
 */

type ColorVariant = "ink" | "signal" | "paper";

const STROKE: Record<ColorVariant, string> = {
  ink: "rgba(10, 14, 26, 0.10)",
  signal: "rgba(216, 27, 96, 0.18)",
  paper: "rgba(255, 255, 255, 0.12)",
};

const FILL: Record<ColorVariant, string> = {
  ink: "rgba(10, 14, 26, 0.07)",
  signal: "rgba(216, 27, 96, 0.15)",
  paper: "rgba(255, 255, 255, 0.10)",
};

/* ———————————————————————————————————————————————————————————
 * ConcentricCircles — 3 cercles imbriqués en outline.
 * Donne une signature visuelle "data viz" / "AI orbit" subtile.
 * ——————————————————————————————————————————————————————————— */
export function ConcentricCircles({
  variant = "ink",
  size = 360,
  className = "",
}: {
  variant?: ColorVariant;
  size?: number;
  className?: string;
}) {
  const stroke = STROKE[variant];
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
    >
      <circle cx="100" cy="100" r="40" stroke={stroke} strokeWidth="1" />
      <circle cx="100" cy="100" r="65" stroke={stroke} strokeWidth="1" />
      <circle cx="100" cy="100" r="90" stroke={stroke} strokeWidth="1" />
      <circle
        cx="100"
        cy="100"
        r="3"
        fill={STROKE[variant === "paper" ? "paper" : "signal"]}
      />
      <circle
        cx="140"
        cy="100"
        r="2"
        fill={STROKE[variant === "paper" ? "paper" : "signal"]}
      />
      <circle
        cx="35"
        cy="100"
        r="2"
        fill={STROKE[variant === "paper" ? "paper" : "signal"]}
      />
    </svg>
  );
}

/* ———————————————————————————————————————————————————————————
 * DotsGrid — grille de petits cercles, façon data points / starfield.
 * ——————————————————————————————————————————————————————————— */
export function DotsGrid({
  variant = "ink",
  rows = 6,
  cols = 6,
  spacing = 18,
  size = 1.5,
  className = "",
}: {
  variant?: ColorVariant;
  rows?: number;
  cols?: number;
  spacing?: number;
  size?: number;
  className?: string;
}) {
  const fill = FILL[variant];
  const width = cols * spacing;
  const height = rows * spacing;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * spacing + spacing / 2}
          cy={r * spacing + spacing / 2}
          r={size}
          fill={fill}
        />,
      );
    }
  }

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      {dots}
    </svg>
  );
}

/* ———————————————————————————————————————————————————————————
 * Arc — arc de cercle stylisé, élément graphique épuré.
 * ——————————————————————————————————————————————————————————— */
export function Arc({
  variant = "signal",
  size = 280,
  className = "",
}: {
  variant?: ColorVariant;
  size?: number;
  className?: string;
}) {
  const stroke = STROKE[variant];
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
    >
      <path
        d="M 20 100 A 80 80 0 0 1 180 100"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M 40 100 A 60 60 0 0 1 160 100"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ———————————————————————————————————————————————————————————
 * SoftBlob — blob organique en gradient radial flou.
 * Variantes : signal (magenta), accent (cobalt), paper (white).
 * ——————————————————————————————————————————————————————————— */
export function SoftBlob({
  color = "signal",
  size = 480,
  opacity = 0.25,
  className = "",
}: {
  color?: "signal" | "accent" | "primary";
  size?: number;
  opacity?: number;
  className?: string;
}) {
  const colorMap = {
    signal: "rgba(216, 27, 96, 1)",
    accent: "rgba(41, 98, 255, 1)",
    primary: "rgba(10, 23, 56, 1)",
  };
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(closest-side, ${colorMap[color]}, transparent 70%)`,
        opacity,
        borderRadius: "50%",
      }}
    />
  );
}

/* ———————————————————————————————————————————————————————————
 * LogoWatermark — logo INOV en signature de marque, opacité très faible.
 *
 * Hors flux (pointer-events: none), caché sur mobile par défaut pour
 * préserver l'épure mobile. Tailles et opacités calibrées pour rester
 * subliminales : on doit les sentir, pas les voir.
 * ——————————————————————————————————————————————————————————— */
export function LogoWatermark({
  size = 480,
  opacity = 0.04,
  rotate = 0,
  monochrome = "ink",
  className = "",
}: {
  size?: number;
  opacity?: number;
  rotate?: number;
  /** "ink" pour fonds clairs, "paper" pour fonds sombres */
  monochrome?: "ink" | "paper" | "none";
  className?: string;
}) {
  const filter =
    monochrome === "ink"
      ? "grayscale(1) brightness(0)"
      : monochrome === "paper"
      ? "grayscale(1) brightness(0) invert(1)"
      : undefined;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
    >
      <Image
        src="/inov-logo.png"
        alt=""
        width={size}
        height={size}
        loading="lazy"
        sizes={`${size}px`}
        className="object-contain w-full h-full"
        style={filter ? { filter } : undefined}
      />
    </div>
  );
}

/* ———————————————————————————————————————————————————————————
 * GridPattern — quadrillage fin de lignes, façon plan d'architecte.
 * Pure CSS (background-image lin-gradients) : zéro DOM extra.
 * ——————————————————————————————————————————————————————————— */
export function GridPattern({
  variant = "ink",
  cellSize = 96,
  intensity = 1,
  className = "",
}: {
  variant?: "ink" | "paper";
  cellSize?: number;
  /** Multiplicateur d'opacité (0.5 = moitié, 1.5 = renforcé) */
  intensity?: number;
  className?: string;
}) {
  const baseAlpha = variant === "paper" ? 0.06 : 0.05;
  const alpha = Math.min(1, baseAlpha * intensity);
  const color =
    variant === "paper"
      ? `rgba(255,255,255,${alpha})`
      : `rgba(10,14,26,${alpha})`;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={
        {
          "--grid-cell": `${cellSize}px`,
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: "var(--grid-cell) var(--grid-cell)",
        } as React.CSSProperties
      }
    />
  );
}

/* ———————————————————————————————————————————————————————————
 * SectionMarker — repère éditorial Mono (façon livre).
 * Désactivé en flex pour pouvoir le placer en absolute dans la marge
 * verticale d'une section (rotation 90deg). Visible lg+ uniquement.
 * ——————————————————————————————————————————————————————————— */
export function SectionMarker({
  index,
  total = "09",
  label,
  variant = "ink",
  className = "",
}: {
  index: string;
  total?: string;
  label: string;
  variant?: "ink" | "paper";
  className?: string;
}) {
  const tone =
    variant === "paper" ? "text-paper/40" : "text-ink-faint";
  const accent = "text-signal";
  return (
    <div
      aria-hidden="true"
      className={`hidden lg:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] ${tone} ${className}`}
    >
      <span className={accent}>§</span>
      <span>{index}</span>
      <span className="opacity-50">/</span>
      <span className="opacity-50">{total}</span>
      <span className="ml-2 inline-block w-6 h-px bg-current opacity-40" />
      <span>{label}</span>
    </div>
  );
}

/* ———————————————————————————————————————————————————————————
 * CornerBracket — crochet d'angle minimaliste (haut-gauche, etc.).
 * Évoque le cadrage technique / blueprint. Très discret.
 * ——————————————————————————————————————————————————————————— */
export function CornerBracket({
  position = "tl",
  size = 32,
  variant = "ink",
  className = "",
}: {
  position?: "tl" | "tr" | "bl" | "br";
  size?: number;
  variant?: "ink" | "paper";
  className?: string;
}) {
  const stroke =
    variant === "paper" ? "rgba(255,255,255,0.30)" : "rgba(10,14,26,0.20)";
  const paths: Record<typeof position, string> = {
    tl: `M 1 ${size} L 1 1 L ${size} 1`,
    tr: `M 0 1 L ${size - 1} 1 L ${size - 1} ${size}`,
    bl: `M 1 0 L 1 ${size - 1} L ${size} ${size - 1}`,
    br: `M 0 ${size - 1} L ${size - 1} ${size - 1} L ${size - 1} 0`,
  };
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <path
        d={paths[position]}
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="square"
      />
    </svg>
  );
}

/* ———————————————————————————————————————————————————————————
 * Diamond — losange outline stylisé (rotated square).
 * Pour une signature graphique plus variée que rect/cercle.
 * ——————————————————————————————————————————————————————————— */
export function Diamond({
  variant = "ink",
  size = 200,
  filled = false,
  className = "",
}: {
  variant?: ColorVariant;
  size?: number;
  filled?: boolean;
  className?: string;
}) {
  const stroke = STROKE[variant];
  const fill = filled ? FILL[variant] : "none";
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
    >
      <path
        d="M 100 20 L 180 100 L 100 180 L 20 100 Z"
        stroke={stroke}
        strokeWidth="1"
        fill={fill}
      />
      <path
        d="M 100 50 L 150 100 L 100 150 L 50 100 Z"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

/* ———————————————————————————————————————————————————————————
 * TwinSquircle — losange aux coins arrondis, jumelé décalé.
 *
 * Forme "soft facet" : deux squircles (rounded squares rotés 45°)
 * empilés en décalé pour un effet de profondeur jumelée.
 * Plus tendre qu'un Diamond pur, plus original qu'un cercle.
 * ——————————————————————————————————————————————————————————— */
export function TwinSquircle({
  variant = "signal",
  size = 240,
  className = "",
}: {
  variant?: ColorVariant;
  size?: number;
  className?: string;
}) {
  const stroke = STROKE[variant];
  const fill = FILL[variant];
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
    >
      {/* Squircle 1 — fond rempli, plus large, légèrement à gauche-bas */}
      <g transform="translate(-6 8)">
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          rx="28"
          ry="28"
          fill={fill}
          stroke={stroke}
          strokeWidth="1"
          transform="rotate(45 100 100)"
        />
      </g>
      {/* Squircle 2 — outline seul, plus petit, décalé droite-haut */}
      <g transform="translate(14 -10)">
        <rect
          x="55"
          y="55"
          width="90"
          height="90"
          rx="22"
          ry="22"
          stroke={stroke}
          strokeWidth="1"
          fill="none"
          transform="rotate(45 100 100)"
        />
      </g>
    </svg>
  );
}

/* ———————————————————————————————————————————————————————————
 * OrbDuo — deux orbes circulaires jumelés en gradient soft.
 *
 * Forme alternative à SoftBlob, en paire (un grand + un petit
 * légèrement détaché). Utile en signature de section.
 * ——————————————————————————————————————————————————————————— */
export function OrbDuo({
  color = "signal",
  size = 280,
  opacity = 0.25,
  className = "",
}: {
  color?: "signal" | "accent" | "primary";
  size?: number;
  opacity?: number;
  className?: string;
}) {
  const colorMap = {
    signal: "rgba(216, 27, 96, 1)",
    accent: "rgba(41, 98, 255, 1)",
    primary: "rgba(10, 23, 56, 1)",
  };
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Orbe principal */}
      <div
        className="absolute"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(closest-side, ${colorMap[color]}, transparent 70%)`,
          opacity,
          borderRadius: "50%",
          top: 0,
          left: 0,
        }}
      />
      {/* Orbe jumeau plus petit, détaché en bas-droit */}
      <div
        className="absolute"
        style={{
          width: size * 0.45,
          height: size * 0.45,
          background: `radial-gradient(closest-side, ${colorMap[color]}, transparent 70%)`,
          opacity: opacity * 0.85,
          borderRadius: "50%",
          bottom: -size * 0.08,
          right: -size * 0.06,
        }}
      />
    </div>
  );
}

/* ———————————————————————————————————————————————————————————
 * RingHalf — demi-anneau utile sur les coins de section.
 * ——————————————————————————————————————————————————————————— */
export function RingHalf({
  variant = "ink",
  size = 320,
  className = "",
}: {
  variant?: ColorVariant;
  size?: number;
  className?: string;
}) {
  const stroke = STROKE[variant];
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      width={size}
      height={size / 2}
      viewBox="0 0 200 100"
      fill="none"
    >
      <path
        d="M 0 100 A 100 100 0 0 1 200 100"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M 30 100 A 70 70 0 0 1 170 100"
        stroke={stroke}
        strokeWidth="1"
      />
      <path
        d="M 60 100 A 40 40 0 0 1 140 100"
        stroke={stroke}
        strokeWidth="1"
      />
    </svg>
  );
}
