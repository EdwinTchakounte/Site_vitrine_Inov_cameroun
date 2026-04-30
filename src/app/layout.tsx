import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RevealProvider from "@/components/RevealProvider";
import ChatBot from "@/components/ChatBot";
import CookieBanner from "@/components/CookieBanner";

/*
 * Pairing typographique tech-forward IA — refonte profonde 2026.
 *
 * Inter (sans-serif) — corps de texte, navigation, CTAs.
 *   La référence neutre, ultra-lisible, conçue pour les écrans.
 *   Utilisée par Linear, Vercel, OpenAI, Anthropic.
 *
 * Inter Tight — variantes condensées pour les titres H1/H2.
 *   Tracking serré naturel, perfect pour les display modernes.
 *
 * JetBrains Mono — détails tech : eyebrows uppercase, numéros,
 *   labels tabulaires, métadonnées. Signature subtile "tech-forward IA".
 *
 * Toutes auto-hébergées par next/font (RGPD safe, font-display: swap).
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inov-cameroun.com"),
  title: {
    default: "Inov Consulting Cameroun — Intelligence Artificielle · Yaoundé",
    template: "%s · Inov Consulting Cameroun",
  },
  description:
    "On installe l'IA dans votre organisation — et on reste jusqu'à ce que ça marche. Ancré à Yaoundé · CEMAC, rayonnement Afrique francophone.",
  keywords: [
    "intelligence artificielle",
    "IA Afrique",
    "Cameroun",
    "Yaoundé",
    "CEMAC",
    "Afrique francophone",
    "transformation digitale",
    "diagnostic IA gratuit",
    "formation IA dirigeants",
    "formation IA cadres",
    "Augustin Njigui",
    "Inov Consulting",
  ],
  authors: [{ name: "Augustin Njigui" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://inov-cameroun.com",
    siteName: "Inov Consulting Cameroun",
    title: "Inov Consulting Cameroun — Intelligence Artificielle",
    description:
      "On installe l'IA dans votre organisation — et on reste jusqu'à ce que ça marche. Yaoundé · CEMAC · Afrique francophone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inov Consulting Cameroun — Intelligence Artificielle",
    description:
      "On installe l'IA dans votre organisation — et on reste jusqu'à ce que ça marche.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <RevealProvider />
        {children}
        <ChatBot />
        <CookieBanner />
      </body>
    </html>
  );
}
