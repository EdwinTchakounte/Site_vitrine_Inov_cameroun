import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import RevealProvider from "@/components/RevealProvider";
import ChatBot from "@/components/ChatBot";

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
    default: "INOV Cameroun — Conseil & Formation IA · Yaoundé",
    template: "%s · INOV Cameroun",
  },
  description:
    "Cabinet de conseil en transformation digitale et intelligence artificielle — ancré au Cameroun, rayonnant en Afrique francophone.",
  keywords: [
    "conseil transformation digitale",
    "intelligence artificielle",
    "Cameroun",
    "Yaoundé",
    "Afrique francophone",
    "gouvernance IA",
    "formation IA dirigeants",
    "formation IA cadres",
    "Augustin Njigui",
  ],
  authors: [{ name: "Augustin Njigui" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://inov-cameroun.com",
    siteName: "INOV Cameroun",
    title: "INOV Cameroun — Conseil & Formation IA",
    description:
      "Cabinet de conseil en transformation digitale et intelligence artificielle — ancré au Cameroun, rayonnant en Afrique francophone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "INOV Cameroun — Conseil & Formation IA",
    description:
      "Conseil & formation IA — ancré au Cameroun, rayonnant en Afrique francophone.",
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
      </body>
    </html>
  );
}
