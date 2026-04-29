"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CONTACT } from "@/data/inventaire";

/*
 * Nav fixe — fond paper permanent, drawer mobile soigné.
 *
 * Drawer mobile :
 *  - Header avec logo + close button propre
 *  - Liste de liens en font-display, numérotés Mono à gauche
 *  - Section coordonnées rapides en bas (téléphone, WhatsApp, mail)
 *  - Animations entrée staggered subtiles
 *  - Blob signal très diffus en bg pour douceur
 */

const NAV_LINKS = [
  { href: "#conseil", label: "Conseil" },
  { href: "#formations", label: "Formations" },
  { href: "#projets", label: "Projets" },
  { href: "#profil", label: "Profil" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-paper/90 backdrop-blur-md transition-colors duration-200 ${
          scrolled ? "border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo + wordmark */}
          <a
            href="#accueil"
            className="flex items-center gap-2.5"
            aria-label="INOV Cameroun — Accueil"
          >
            <Image
              src="/inov-logo.png"
              alt=""
              width={32}
              height={26}
              priority
              className="object-contain h-7 w-auto"
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] font-medium text-ink">
              INOV <span className="text-signal">Cameroun</span>
            </span>
          </a>

          {/* Liens desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium bg-ink text-paper px-4 h-9 hover:bg-signal transition-colors"
          >
            Prendre rendez-vous
            <span aria-hidden>→</span>
          </a>

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="md:hidden flex flex-col gap-[5px] items-end p-2 text-ink"
          >
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </button>
        </div>
      </header>

      {/* Drawer mobile — fond paper, refonte design pro */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop overlay subtil */}
        <div
          className={`absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel principal */}
        <div
          className={`absolute inset-y-0 right-0 w-[88%] max-w-md bg-paper shadow-[-20px_0_40px_-20px_rgba(10,14,26,0.20)] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Blob décoratif signal très diffus */}
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(216,27,96,0.10), transparent 70%)",
            }}
          />

          <div className="relative h-full flex flex-col">
            {/* Header drawer */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-line">
              <span className="flex items-center gap-2.5">
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
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-line text-ink-soft hover:text-ink hover:border-ink/30 transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Eyebrow Mono */}
            <p className="px-6 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
              Navigation
            </p>

            {/* Liste de liens */}
            <nav className="flex-1 px-6 mt-3">
              <ul>
                {NAV_LINKS.map((link, i) => (
                  <li
                    key={link.href}
                    className={`transition-all duration-500 ${
                      open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: open ? `${100 + i * 50}ms` : "0ms",
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between gap-4 py-4 border-b border-line hover:border-signal/40 transition-colors"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint group-hover:text-signal transition-colors">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink group-hover:text-signal transition-colors">
                          {link.label}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="text-ink-faint group-hover:text-signal group-hover:translate-x-1 transition-all"
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Coordonnées rapides */}
            <div className="px-6 pb-6 pt-8 mt-auto border-t border-line">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                Contact direct
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    <span aria-hidden className="text-ink-faint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    <span aria-hidden className="text-[#25D366]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                      </svg>
                    </span>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.emailPrimary}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-sm text-ink-soft hover:text-ink transition-colors break-all"
                  >
                    <span aria-hidden className="text-ink-faint">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    {CONTACT.emailPrimary}
                  </a>
                </li>
              </ul>

              {/* CTA principal */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 group flex items-center justify-center gap-2 bg-ink text-paper h-12 text-sm font-semibold rounded-md hover:bg-signal transition-colors"
              >
                Prendre rendez-vous
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
