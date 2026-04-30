import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FormationsHeader from "@/components/sections/FormationsHeader";
import FormationsConstat from "@/components/sections/FormationsConstat";
import Formations from "@/components/sections/Formations";
import FormationsPricing from "@/components/sections/FormationsPricing";
import FormationsTrainer from "@/components/sections/FormationsTrainer";
import FormationsBooking from "@/components/sections/FormationsBooking";

/*
 * Page /formations — Formations & Accompagnement
 * Source : formations_inov.pdf — refonte complète selon les §01 à §05.
 *
 * Orchestration des 6 blocs :
 *   1. Header           — accroche + statHook 70%
 *   2. Constat (§01)    — 4 raisons d'échec — bg-ink (rupture sombre)
 *   3. Tracks (§02)     — onglets Dirigeants/Cadres + accordéon modules
 *   4. Pricing (§03)    — 3 tiers Sur devis
 *   5. Trainer (§04)    — Augustin Njigui — bg-primary (rupture sombre)
 *   6. Booking (§05)    — "30 minutes. Zéro jargon."
 *
 * Rythme chromatique : paper → ink → paper → paper → primary → paper
 */
export const metadata: Metadata = {
  title: "Formations",
  description:
    "Vos équipes comprennent l'IA. Enfin. Deux parcours simplifiés (Dirigeants et Cadres), formateur ancré localement, format présentiel intra-entreprise.",
};

export default function FormationsPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <FormationsHeader />
        <FormationsConstat />
        <Formations />
        <FormationsPricing />
        <FormationsTrainer />
        <FormationsBooking />
      </main>
      <Footer />
    </>
  );
}
