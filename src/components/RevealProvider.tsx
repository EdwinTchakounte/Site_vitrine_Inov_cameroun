"use client";

import { useEffect } from "react";

/*
 * RevealProvider — gère les animations d'entrée des éléments [data-reveal].
 *
 * Posé une seule fois dans <body> (layout.tsx), il :
 *  1. Scanne les [data-reveal] présents au mount.
 *  2. Marque immédiatement is-visible ceux qui sont dans le viewport
 *     (= contenu au-dessus de la ligne de flottaison, hero principalement).
 *  3. Observe les autres via IntersectionObserver — is-visible
 *     est ajouté quand l'élément entre dans la zone (threshold 12% + rootMargin -64px).
 *  4. Surveille aussi les ajouts dynamiques de DOM via MutationObserver
 *     (utile pour les onglets Formations qui montent/démontent leurs panels).
 *
 * prefers-reduced-motion : on passe tout en is-visible immédiatement,
 * la CSS désactive aussi les transitions par règle media.
 */
export default function RevealProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = (el: Element) => el.classList.add("is-visible");

    if (reduced) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -64px 0px" },
    );

    const observeOrReveal = (el: HTMLElement) => {
      if (el.classList.contains("is-visible")) return;
      // Si l'élément est déjà dans le viewport au mount, on l'anime tout de suite
      // (sinon il resterait invisible pour toujours puisque l'observer ne se déclenche
      // qu'aux franchissements).
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (inView) {
        // micro-délai pour que la transition CSS ait le temps de s'amorcer
        requestAnimationFrame(() => reveal(el));
      } else {
        observer.observe(el);
      }
    };

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach(observeOrReveal);

    // Surveille les nouveaux noeuds (changement d'onglet, accordéon, etc.)
    const mutObs = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches?.("[data-reveal]")) observeOrReveal(n);
          n.querySelectorAll?.<HTMLElement>("[data-reveal]").forEach(
            observeOrReveal,
          );
        });
      });
    });
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return null;
}
