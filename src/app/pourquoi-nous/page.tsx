import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Constat from "@/components/sections/Constat";
import Vision from "@/components/sections/Vision";
import ProfilsCibles from "@/components/sections/ProfilsCibles";

/*
 * Page /pourquoi-nous
 * Source : inov-cameroun-contenu.md.pdf — Section Problème + Section Vision + Profils cibles
 *
 * Composition (rythme paper → primary → paper) :
 *   - Constat (4 douleurs PDF)        — bg-paper
 *   - Vision (40 orgs + 3 piliers)    — bg-primary (rupture sombre)
 *   - ProfilsCibles (2 profils)       — bg-paper
 */
export const metadata: Metadata = {
  title: "Pourquoi nous",
  description:
    "L'IA arrive en Afrique francophone, mais pas pour tout le monde de la même façon. Découvrez pourquoi un partenaire ancré localement change tout.",
};

export default function PourquoiNous() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Constat />
        <Vision />
        <ProfilsCibles />
      </main>
      <Footer />
    </>
  );
}
