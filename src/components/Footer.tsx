import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/data/inventaire";

/*
 * Footer — minimaliste tech-forward.
 *
 * 4 colonnes desktop (identité + 3 listes), empilées mobile.
 * Fond ink (presque-noir) pour une vraie cloture visuelle.
 */

const QUICK_LINKS = [
  { href: "#conseil", label: "Conseil" },
  { href: "#formations", label: "Formations" },
  { href: "#projets", label: "Projets" },
  { href: "#profil", label: "Profil" },
  { href: "#contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
];

export default function Footer() {
  const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <footer className="relative bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-24 pb-10">
        <div className="grid grid-cols-12 gap-10 md:gap-12">
          {/* Identité */}
          <div className="col-span-12 md:col-span-4">
            <Link
              href="#accueil"
              className="inline-flex items-center gap-2.5"
              aria-label="INOV Cameroun — Accueil"
            >
              <Image
                src="/inov-logo.png"
                alt=""
                width={32}
                height={26}
                className="object-contain h-7 w-auto"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] font-medium">
                INOV <span className="text-signal">Cameroun</span>
              </span>
            </Link>

            <p className="mt-6 text-sm text-paper/55 leading-[1.6] font-normal max-w-xs">
              Cabinet de conseil en transformation digitale et intelligence
              artificielle.
            </p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">
              {CONTACT.city}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Liens du site" className="col-span-6 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">
              Navigation
            </p>
            <ul className="mt-5 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper/75 hover:text-paper font-normal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="col-span-6 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">
              Contact
            </p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-sm text-paper/75 hover:text-paper font-normal transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.emailPrimary}`}
                  className="text-sm text-paper/75 hover:text-paper font-normal transition-colors break-all"
                >
                  {CONTACT.emailPrimary}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/75 hover:text-paper font-normal transition-colors"
                >
                  WhatsApp ↗
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/75 hover:text-paper font-normal transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className="col-span-12 md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">
              Légal
            </p>
            <ul className="mt-5 space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-paper/75 hover:text-paper font-normal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ligne basse */}
        <div className="mt-16 pt-5 border-t border-paper/10">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/40">
            © 2026 INOV Cameroun — Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
