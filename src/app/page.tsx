import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Constat from "@/components/sections/Constat";
import Conseil from "@/components/sections/Conseil";
import Methode from "@/components/sections/Methode";
import Formations from "@/components/sections/Formations";
import Projets from "@/components/sections/Projets";
import Profil from "@/components/sections/Profil";
import Zone from "@/components/sections/Zone";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

/*
 * Page d'accueil — site one-page INOV Cameroun.
 *
 * Ordre des sections (CDC §4 + Inventaire v1.1) :
 *   #accueil → #constat → #conseil → #methode → #formations
 *   → #projets → #profil → #zone → #contact → footer
 *
 * Rythme chromatique alterné pour la respiration éditoriale :
 *   Hero (primary) → Constat (canvas) → Conseil (canvas) → Methode (primary)
 *   → Formations (canvas) → Projets (canvas) → Profil (primary) → Zone (canvas)
 *   → Contact (canvas) → Footer (primary plus sombre)
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Constat />
        <Conseil />
        <Methode />
        <Formations />
        <Projets />
        <Profil />
        <Zone />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
