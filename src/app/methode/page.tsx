import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Methode from "@/components/sections/Methode";
import Conseil from "@/components/sections/Conseil";

/*
 * Page /methode — "Notre méthode"
 * Source : inov-cameroun-contenu.md.pdf — Section Méthode (4 étapes mission)
 *
 * Composition :
 *   - Methode : "Quatre étapes. Zéro abandon." (Diagnostic / Solution / Déploiement / Suivi)
 *   - Conseil : 3 offres packagées repositionnées en aval (Diagnostic Flash / Structuration / Accompagnement)
 *   - Le volet CONCEPTION (transversal IA) est intégré dans Conseil.tsx
 */
export const metadata: Metadata = {
  title: "Notre méthode",
  description:
    "Quatre étapes. Zéro abandon. Diagnostic gratuit, solution sur mesure, déploiement accompagné, suivi à 3 et 6 mois.",
};

export default function MethodePage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Methode />
        <Conseil />
      </main>
      <Footer />
    </>
  );
}
