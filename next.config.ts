import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
