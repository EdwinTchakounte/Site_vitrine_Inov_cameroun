import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import MetriquesCles from "@/components/sections/MetriquesCles";
import HomeAlarm from "@/components/sections/HomeAlarm";
import HomeMethodePreview from "@/components/sections/HomeMethodePreview";
import Vision from "@/components/sections/Vision";
import ProjetsEnCours from "@/components/sections/ProjetsEnCours";
import HomeProfilsTeaser from "@/components/sections/HomeProfilsTeaser";
import CtaFinal from "@/components/sections/CtaFinal";
import Footer from "@/components/Footer";

/*
 * Page d'accueil — Inov Consulting Cameroun
 * Source : inov-cameroun-contenu.md.pdf
 *
 * Narrative arc + rythme chromatique :
 *   1. Hero (bg-ink)              — fullscreen, slider scroll-up
 *   2. MetriquesCles (bg-paper)   — 3 stats, preuve d'ancrage
 *   3. HomeAlarm (bg-ink)         — rupture sombre, 5 ans / 18 mois (hook)
 *   4. HomeMethodePreview (paper) — frise des 4 étapes mission
 *   5. Vision (bg-primary)        — 40 organisations + 3 piliers + citation
 *   6. ProjetsEnCours (paper)     — 3 projets concrets avec status pills
 *   7. HomeProfilsTeaser (paper)  — split 2 profils + verbatim signature
 *   8. CtaFinal (bg-ink)          — clôture, un partenaire pas un prestataire
 *
 * Les sections détaillées (Constat, Conseil, Profils, Méthode, Formations…)
 * vivent sur leurs pages dédiées (/pourquoi-nous, /methode, /formations…).
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetriquesCles />
        <HomeAlarm />
        <HomeMethodePreview />
        <Vision />
        <ProjetsEnCours />
        <HomeProfilsTeaser />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
