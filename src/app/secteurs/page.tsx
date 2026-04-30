import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Projets from "@/components/sections/Projets";
import ProjetsEnCours from "@/components/sections/ProjetsEnCours";
import Zone from "@/components/sections/Zone";

/*
 * Page /secteurs
 * Source : inov-cameroun-contenu.md.pdf — Section Projets en cours + Zone d'intervention
 *
 * Composition :
 *   - Projets         : 6 secteurs prioritaires (legacy CDC)
 *   - ProjetsEnCours  : 3 projets concrets en cours (PDF)
 *   - Zone            : Yaoundé hub CEMAC + 11 pays Afrique francophone
 */
export const metadata: Metadata = {
  title: "Secteurs",
  description:
    "Secteurs prioritaires en Afrique francophone : public, banque, santé, ONG, télécoms, éducation. Projets en cours et zone d'intervention CEMAC.",
};

export default function SecteursPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Projets />
        <ProjetsEnCours />
        <Zone />
      </main>
      <Footer />
    </>
  );
}
