/*
 * Decorations — formes SVG décoratives pour embellir les sections.
 *
 * Composants atomiques :
 *  - <ConcentricCircles /> : 3-4 cercles concentriques outline
 *  - <DotsGrid />          : grille de petits points (data viz subtile)
 *  - <Arc />               : arc de cercle (élément graphique épuré)
 *  - <SoftBlob />          : forme organique molle (gradient flou)
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
