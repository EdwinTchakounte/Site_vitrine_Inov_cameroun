import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/sections/Contact";

/*
 * Page /contact — "Parler de mon projet"
 * Source : inov-cameroun-contenu.md.pdf — Section CTA Final + Contact
 *
 * Composition :
 *   - Contact : formulaire + coordonnées + WhatsApp (existant)
 *
 * Réassurances PDF : Réponse sous 24h · Disponible en français et en anglais · Basé à Yaoundé
 */
export const metadata: Metadata = {
  title: "Parler de mon projet",
  description:
    "Demandez votre diagnostic gratuit de 45 minutes. Réponse sous 24h, disponible en français et en anglais, ancré à Yaoundé · CEMAC.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
