import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Project root explicite — Turbopack a du mal à auto-détecter le root
   * quand le nom de dossier contient des espaces ou des parenthèses
   * (ex. "inov-cameroun (Copy)"). On force via process.cwd() (= dir où
   * `next dev` est lancé). */
  turbopack: {
    root: process.cwd(),
  },
  images: {
    /* Sources distantes autorisées pour next/image.
     * Unsplash = banque d'images temporaires utilisées en attendant
     * les photos sourcées par la Direction. À nettoyer avant la mise
     * en production finale (ne garder que les domaines réellement utilisés). */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
