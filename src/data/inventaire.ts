/*
 * Données verbatim du site Inov Consulting Cameroun
 * Sources :
 *   - inov-cameroun-contenu.md.pdf (refonte v2 — source de vérité contenu)
 *   - formations_inov.pdf (volet formations détaillé)
 *   - Inventaire_INOV_Cameroun_v1.1.pdf (legacy — sections conservées repositionnées)
 *
 * Exception positionnement : hub Yaoundé · Cameroun · CEMAC (pas Douala).
 * Toute modification de copy nécessite une validation Augustin Njigui.
 */

/* —————————————————————————————————————————————————————————————
 * §0 — IDENTITÉ DE MARQUE
 * ——————————————————————————————————————————————————————————— */
export const BRAND = {
  name: "Inov Consulting Cameroun",
  shortName: "Inov Consulting",
  legacyName: "INOV Cameroun",
  tagline: "Intelligence artificielle · Afrique francophone",
  baseline: "Intelligence Artificielle · Afrique",
  year: 2026,
} as const;

export const CONTACT = {
  phone: "+33 6 98 56 66 33",
  whatsapp: "33698566633",
  whatsappMessage:
    "Bonjour Augustin, j'aimerais demander un diagnostic gratuit de 45 minutes pour mon organisation.",
  emailPrimary: "info@inov-corp.com",
  emailSecondary: "augustin.njigui01@gmail.com",
  linkedin: "https://www.linkedin.com/in/augustin-njigui/",
  city: "Yaoundé, Cameroun",
  hubLabel: "Yaoundé · Cameroun · CEMAC",
  languages: "Français · Anglais",
} as const;

/* —————————————————————————————————————————————————————————————
 * §1 — HERO (page d'accueil)
 * Source : inov-cameroun-contenu.md.pdf — Section Hero
 * ——————————————————————————————————————————————————————————— */
export const HERO = {
  surtitre: "Intelligence Artificielle · Afrique",
  title:
    "On installe l'IA dans votre organisation — et on reste jusqu'à ce que ça marche.",
  subtitle:
    "Vous ne manquez pas de volonté de vous transformer. Vous manquez d'un partenaire qui comprend le terrain et la réalité Africaine et vous accompagne de A à Z — pas juste une livraison de code.",
  ctaPrimary: "Demander un diagnostic gratuit",
  ctaSecondary: "Voir la méthode",
} as const;

/* —————————————————————————————————————————————————————————————
 * §1bis — MÉTRIQUES CLÉS (sous le Hero)
 * Source : inov-cameroun-contenu.md.pdf — Métriques clés
 * ——————————————————————————————————————————————————————————— */
export const METRIQUES_CLES = {
  eyebrow: "Métriques clés",
  items: [
    { label: "Secteurs couverts", value: "3" },
    { label: "Ancrage local", value: "100%" },
    { label: "Approche", value: "IA + Humain toujours" },
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §3 — CONSTAT — "Le vrai problème"
 * Source : inov-cameroun-contenu.md.pdf — Section Problème
 * ——————————————————————————————————————————————————————————— */
export const CONSTAT = {
  eyebrow: "Le vrai problème",
  title:
    "L'IA arrive en Afrique francophone. Mais pas pour tout le monde de la même façon.",
  intro:
    "Les organisations africaines ne manquent ni de volonté ni d'ambition. Elles manquent d'un partenaire qui comprend le terrain — et qui reste jusqu'à ce que la transformation tienne.",
  problems: [
    {
      n: "01",
      title: "Les solutions globales ignorent les réalités locales",
      desc: "Connectivité instable, Mobile Money, langues, habitudes locales, administration — les solutions importées ne tiennent pas le choc.",
    },
    {
      n: "02",
      title: "Les prestataires livrent un outil et disparaissent",
      desc: "Une fois la livraison faite, vos équipes se retrouvent seules face à un outil qu'elles n'ont pas pris en main.",
    },
    {
      n: "03",
      title: "Le marché manque d'acteurs hybrides",
      desc: "Le marché Africain manque d'acteurs qui combinent expertise technique ET accompagnement humain durable.",
    },
    {
      n: "04",
      title: "Le retard se creuse vite",
      desc: "Les PME et organisations qui ne se transforment pas maintenant auront 5 ans de retard dans 18 mois.",
    },
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §4 — CONSEIL (3 offres)
 * ——————————————————————————————————————————————————————————— */
export const CONSEIL = {
  eyebrow: "Offres conseil",
  title: "Trois missions, des résultats mesurables",
  subtitle:
    "Des offres packagées, progressives et complémentaires — calibrées pour les organisations d'Afrique francophone.",
  offers: [
    {
      n: "01",
      title: "Diagnostic Flash",
      titleFull: "Diagnostic Flash Gouvernance & Transformation",
      duration: "10 jours",
      pace: "Démarrage immédiat",
      promise:
        "En 10 jours, vous savez exactement où vous en êtes et sur quoi agir en priorité.",
      deliverables: [
        "Entretiens ciblés dirigeants et responsables clés",
        "Analyse gouvernance, process, risques et performance",
        "Identification des blocages et leviers disponibles",
        "Restitution avec 5 à 10 recommandations opérationnelles",
      ],
      valueLine: "Vision claire, partagée et priorisée — sans ambiguïté.",
      cta: "Démarrer ce diagnostic",
    },
    {
      n: "02",
      title: "Structuration",
      titleFull: "Structuration Transformation & Gouvernance",
      duration: "30 jours",
      pace: "Plan d'action",
      promise:
        "Je transforme le diagnostic en plan d'action concret avec rôles, KPI et feuille de route.",
      deliverables: [
        "Définition de la cible stratégique à 3–6 mois",
        "Priorisation et séquençage des chantiers",
        "Mise en place des rôles, KPI et instances de pilotage",
        "Feuille de route actionnable + tableau de bord",
      ],
      valueLine: "Vos équipes savent où aller, pourquoi, comment mesurer.",
      cta: "Structurer mon organisation",
    },
    {
      n: "03",
      title: "Accompagnement",
      titleFull: "Accompagnement Transition & Mise en Œuvre",
      duration: "60–90 jours",
      pace: "Transformation durable",
      promise:
        "Je reste à vos côtés jusqu'à ce que la transformation soit ancrée — pas sur le papier.",
      deliverables: [
        "Pilotage des premières actions prioritaires",
        "Accompagnement du changement et des équipes",
        "Suivi hebdomadaire des indicateurs, ajustements",
        "Transfert de compétences aux équipes internes",
      ],
      valueLine: "Transformation durable, portée par vos propres équipes.",
      cta: "Démarrer l'accompagnement",
    },
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §5 — MÉTHODE — "Notre méthode"
 * Source : inov-cameroun-contenu.md.pdf — Section Méthode
 * Cycle complet de mission (vs cycle commercial avant-vente legacy).
 * ——————————————————————————————————————————————————————————— */
export const METHODE = {
  eyebrow: "Notre méthode",
  title: "Quatre étapes. Zéro abandon.",
  subtitle:
    "Nous ne livrons pas un projet. Nous construisons une capacité durable dans votre organisation.",
  steps: [
    {
      n: "1",
      title: "Diagnostic gratuit",
      desc: "On cartographie vos processus, vos données disponibles, vos contraintes réelles. On vous dit honnêtement ce que l'IA peut changer pour vous — et ce qu'elle ne peut pas.",
      badge: "Gratuit · 45 min",
    },
    {
      n: "2",
      title: "Solution sur mesure",
      desc: "Pas de template. Une solution conçue pour votre contexte, testée avec vos équipes, itérée jusqu'à ce qu'elle soit juste.",
      badge: "Co-construite",
    },
    {
      n: "3",
      title: "Déploiement accompagné",
      desc: "On est là pendant le lancement. Formation des équipes, ajustements en temps réel, support en français et en anglais.",
      badge: "Présentiel · FR/EN",
    },
    {
      n: "4",
      title: "Suivi à 3 et 6 mois",
      desc: "On revient mesurer l'impact réel. Pas de \"bonne chance\" à la livraison. Un partenariat qui dure.",
      badge: "Suivi inclus",
    },
  ],
  cta: "Demander mon diagnostic gratuit",
} as const;

/* —————————————————————————————————————————————————————————————
 * §6 — FORMATIONS IA
 * Source : formations_inov.pdf (refonte v2 — modules simplifiés).
 *
 * Structure en 5 blocs (§01 à §05 du PDF) :
 *   - hook        — accroche + stat 70%
 *   - constat     — 4 raisons pourquoi la formation IA actuelle échoue
 *   - tracks      — 2 parcours simplifiés (titres modules courts)
 *   - pricing     — Sur devis × 3 tiers
 *   - trainer     — Augustin Njigui (synthèse pour la page formations)
 *   - booking     — CTA Réserver "30 minutes. Zéro jargon."
 *
 * Note compat composant : on conserve les champs group / format / promise
 * sur chaque track (utilisés par Formations.tsx), même si le PDF ne les
 * mentionne pas explicitement — pas de régression visuelle.
 * ——————————————————————————————————————————————————————————— */
export const FORMATIONS = {
  eyebrow: "Formations · 2026",
  title: "Vos équipes comprennent l'IA. Enfin.",
  subtitle:
    "Deux parcours distincts selon votre public — dirigeants ou cadres. Animés par Augustin Njigui, en présentiel intra-entreprise.",

  /* Hook stat — accroche d'ouverture du PDF */
  statHook: {
    figure: "70 %",
    body: "des projets IA en Afrique subsaharienne échouent non pas à cause de la technologie — mais parce que les équipes n'ont pas été préparées.",
  },

  /* §01 · Le constat — 4 raisons d'échec de la formation IA actuelle */
  constat: {
    eyebrow: "§01 · Le constat",
    title: "La formation IA qui existe n'est pas faite pour vous.",
    reasons: [
      {
        n: "01",
        title: "Des cas d'usage sans rapport",
        desc: "Tesla et Netflix ne parlent pas à votre DRH à Yaoundé.",
      },
      {
        n: "02",
        title: "Un jargon qui exclut",
        desc: "LLM, fine-tuning, vector database.",
      },
      {
        n: "03",
        title: "Aucun ancrage opérationnel",
        desc: "On apprend mais on ne sait pas quoi faire dès le lendemain.",
      },
      {
        n: "04",
        title: "Le retard se creuse vite",
        desc: "Un concurrent formé aujourd'hui aura 18 mois d'avance.",
      },
    ],
  },

  /* §02 · Deux parcours — modules simplifiés (titres courts du PDF) */
  tracks: [
    {
      id: "dirigeants",
      label: "Parcours 01 — Dirigeants",
      title: "Intelligence Artificielle pour Dirigeants",
      audience: "DG, PDG, directeurs",
      duration: "½ journée ou 1 journée",
      group: "Jusqu'à 15 participants",
      format: "Présentiel intra-entreprise",
      result: "Cadrer un projet IA sans expert technique",
      promise:
        "À l'issue, vous êtes en mesure de cadrer un projet IA et de prendre une première décision — sans dépendre d'un expert technique.",
      modules: [
        {
          n: "01",
          title: "Comprendre l'IA",
          bullets: [
            "IA en langage business, pas technique",
            "IA générative, prédictive, automatisation : les 3 familles",
            "Les 3 questions à se poser avant tout projet IA",
          ],
        },
        {
          n: "02",
          title: "Cas d'usage business",
          bullets: [
            "Exemples concrets par secteur : banque, distribution, services",
            "ROI mesurable : réduction des coûts, gain de temps",
            "Ce qu'un concurrent similaire a déjà mis en place",
          ],
        },
        {
          n: "03",
          title: "Gouvernance et risques",
          bullets: [
            "Risques à ignorer l'IA — et à mal l'implémenter",
            "Qui décide quoi dans une gouvernance IA efficace",
            "Protection des données, conformité, image de marque",
          ],
        },
        {
          n: "04",
          title: "Lancer un projet IA",
          bullets: [
            "Les 5 étapes d'un projet IA réussi",
            "Comment choisir un fournisseur ou partenaire",
            "Budget, équipe minimale, timeline réaliste",
          ],
        },
        {
          n: "05",
          title: "Atelier réel",
          bullets: [
            "Identifier un problème business qui se prête à l'IA",
            "Évaluer faisabilité, données, bénéfice attendu",
            "Définir les 3 prochaines étapes concrètes",
          ],
        },
      ],
    },
    {
      id: "cadres",
      label: "Parcours 02 — Cadres",
      title: "Intelligence Artificielle pour Cadres",
      audience: "Managers, chefs de projet",
      duration: "1 journée ou 2 demi-journées",
      group: "Jusqu'à 15 participants",
      format: "Présentiel intra-entreprise avec démos live",
      result: "Identifier et piloter un projet IA",
      promise:
        "Vos cadres repartent avec 3 à 5 outils utilisables dès le lendemain — sans attendre la prochaine réunion de comité.",
      modules: [
        {
          n: "01",
          title: "IA dans le métier",
          bullets: [
            "Termes clés : IA générative, ML, automatisation",
            "Cartographie des outils (ChatGPT, Copilot, Claude, Gemini…)",
            "Ce qui change concrètement dans les métiers",
          ],
        },
        {
          n: "02",
          title: "Prompting",
          bullets: [
            "Méthode de formulation efficace",
            "Démo live : rédaction, synthèse, traduction, analyse",
            "Outils sectoriels : finance, RH, commercial, juridique",
          ],
        },
        {
          n: "03",
          title: "Données et sécurité",
          bullets: [
            "Données sensibles : ce qu'on partage et ce qu'on ne partage pas",
            "Conformité, RGPD, propriété intellectuelle",
            "Vérifier une sortie IA — éviter les hallucinations",
          ],
        },
        {
          n: "04",
          title: "Pilotage projet",
          bullets: [
            "Identifier un problème métier qui se prête à l'IA",
            "Méthode RACI-IA : formuler un besoin",
            "Collaborer avec la DSI pour concrétiser",
          ],
        },
        {
          n: "05",
          title: "Atelier use case",
          bullets: [
            "RH : offre d'emploi, CV, préparation d'entretien",
            "Finance : reporting automatisé, synthèse, anomalies",
            "Commercial : pitch, portefeuille, rédaction propco",
            "Juridique : résumé contrat, clauses sensibles, veille",
          ],
        },
      ],
    },
  ],

  /* §03 · Tarifs — tous "Sur devis" */
  pricing: {
    eyebrow: "§03 · Tarifs",
    title: "Tarification simple, sur devis.",
    note: "Ajustés selon le périmètre, la durée et le format. On vous propose un tarif partenaire pour les organisations pionnières.",
    tiers: [
      { label: "Demi-journée", price: "Sur devis" },
      { label: "Journée complète", price: "Sur devis" },
      { label: "Programme sur mesure", price: "Sur devis" },
    ],
  },

  /* §04 · Formateur — synthèse pour la page Formations */
  trainer: {
    eyebrow: "§04 · Formateur",
    name: "Augustin Njigui",
    role: "Fondateur Inov Consulting Cameroun",
    experiences: [
      "Mines-Télécom Paris",
      "Edmond de Rothschild",
      "L'Oréal",
      "CFAO Group",
    ],
    note: "15 ans en transformation SI, exposition C-Level, coordination multi-pays Afrique francophone.",
  },

  /* §05 · Réserver — bloc CTA bas de page */
  booking: {
    eyebrow: "§05 · Réserver",
    title: "30 minutes. Zéro jargon. Une session taillée pour vous.",
    body: "On échange sur vos enjeux, votre public, votre contexte — et on vous propose le parcours qui vous correspond. Sans engagement.",
    cta: "Réserver un échange",
    contactLabel: "Ou écrivez-nous directement",
    contactEmail: "info@inov-corp.com",
  },

  cta: "Réserver cette formation",
} as const;

/* —————————————————————————————————————————————————————————————
 * §7 — PROJETS TYPES
 * ——————————————————————————————————————————————————————————— */
export const PROJETS = {
  eyebrow: "Projets types",
  title: "Secteurs prioritaires en Afrique francophone",
  subtitle: "Des missions alignées sur les réalités et urgences du continent.",
  sectors: [
    {
      n: "01",
      sector: "Secteur public",
      project: "Digitalisation des services administratifs + IA",
      desc: "E-gov, état civil numérique, automatisation des procédures avec IA générative",
    },
    {
      n: "02",
      sector: "Banque & Finance",
      project: "IA pour scoring crédit et détection de fraude",
      desc: "Modèles ML adaptés aux données africaines, inclusion financière via Mobile Money",
    },
    {
      n: "03",
      sector: "Santé",
      project: "Systèmes d'information hospitaliers & télémédecine",
      desc: "Déploiement SIH, IA d'aide au diagnostic, gestion de la chaîne médicale",
    },
    {
      n: "04",
      sector: "ONG & Bailleurs",
      project: "Gestion de projets de développement",
      desc: "Cadre logique, suivi-évaluation, reporting USAID / AFD / Banque Mondiale",
    },
    {
      n: "05",
      sector: "Télécoms & Énergie",
      project: "PMO de grands programmes d'infrastructure",
      desc: "Déploiements réseau, énergie renouvelable, coordination multi-pays",
    },
    {
      n: "06",
      sector: "Éducation",
      project: "Transformation digitale des établissements",
      desc: "Plateformes LMS, outils pédagogiques IA, formation des enseignants au numérique",
    },
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §8 — PROFIL FONDATEUR
 * ——————————————————————————————————————————————————————————— */
export const PROFIL = {
  eyebrow: "Le fondateur",
  title: "15 ans de terrain. Des résultats documentés.",
  name: "Augustin Njigui",
  role: "Fondateur Inov Consulting Cameroun · Directeur de Projets",
  formation:
    "Executive Master — Intelligence Artificielle pour Managers Innovants · Institut Mines-Télécom Business School, Paris (2025–2026)",
  stats: [
    { value: "15+", label: "années en transformation SI" },
    { value: "8+", label: "secteurs d'activité couverts" },
    { value: "C-Level", label: "exposition comités de direction" },
  ],
  experiences: [
    {
      period: "2024 — présent",
      org: "Edmond de Rothschild (CH & LUX)",
      role: "Directeur de Projet",
      detail:
        "Programme critique de relocalisation datacenter en environnement bancaire réglementé.",
    },
    {
      period: "2023 — 2024",
      org: "L'Oréal · France",
      role: "Project Delivery Manager",
      detail:
        "Gouvernance de programmes IT globaux avec équipes internationales distribuées.",
    },
    {
      period: "2020 — 2023",
      org: "Chanel · Transavia · Servier",
      role: "Chef de Projet Senior",
      detail:
        "Transformation IT et métier dans le luxe, l'aviation et la pharma.",
    },
    {
      period: "Avant 2020",
      org: "Devoteam · CFAO Group · Afrique",
      role: "Chef de Projet IT",
      detail:
        "Coordination multi-pays sur 8 filiales africaines — connaissance directe des dynamiques locales.",
    },
  ],
  citation:
    "J'ai coordonné des projets IT sur 8 filiales africaines dans le Groupe CFAO. Je comprends les dynamiques locales et les enjeux business du continent.",
} as const;

/* —————————————————————————————————————————————————————————————
 * §9 — ZONE D'INTERVENTION
 * ——————————————————————————————————————————————————————————— */
export const ZONE = {
  eyebrow: "Zone d'intervention",
  title: "Afrique francophone — notre terrain",
  subtitle:
    "Basés à Yaoundé (Cameroun), hub CEMAC — avec un rayonnement vers l'ensemble de l'Afrique francophone.",
  hub: "Cameroun",
  countries: [
    "Côte d'Ivoire",
    "Sénégal",
    "Gabon",
    "RDC",
    "Congo-Brazzaville",
    "Tchad",
    "Mali",
    "Burkina Faso",
    "Niger",
    "Togo · Bénin",
    "Guinée",
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §X — CONCEPTION (volet transversal — ajouté hors inventaire v1.1)
 *
 * Mis en exergue par la Direction : conception de solutions
 * technologiques sur-mesure interfaçant l'IA pour l'optimisation
 * des traitements et la création de valeur opérationnelle.
 * Présenté comme un volet transversal aux 3 offres conseil.
 * ——————————————————————————————————————————————————————————— */
export const CONCEPTION = {
  eyebrow: "Volet transversal",
  title: "Conception de solutions technologiques interfacées IA",
  subtitle:
    "Au-delà du conseil et de la formation, nous concevons des solutions technologiques sur-mesure intégrant l'intelligence artificielle pour optimiser vos traitements et créer de la valeur opérationnelle.",
  bullets: [
    "Architecture et conception fonctionnelle adaptées au métier",
    "Interfaçage IA — automatisation, prédiction, génération",
    "Optimisation des traitements et flux opérationnels",
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §A — VISION — "40 organisations Africaines augmentées par l'IA"
 * Source : inov-cameroun-contenu.md.pdf — Section Vision + Citation signature
 * ——————————————————————————————————————————————————————————— */
export const VISION = {
  eyebrow: "Notre vision",
  title: "40 organisations Africaines augmentées par l'IA d'ici 2027.",
  body: "Ce n'est pas un slogan. C'est le cap qui guide chaque projet que nous prenons en main. Nous ne cherchons pas à faire beaucoup — nous cherchons à faire bien, profondément, durablement.",
  pillars: [
    {
      n: "01",
      title: "Comprendre avant d'implémenter",
      desc: "Chaque organisation a ses contraintes. On passe du temps à les comprendre avant d'écrire une seule ligne de code.",
    },
    {
      n: "02",
      title: "Des solutions qui fonctionnent ici",
      desc: "Conçues pour le contexte africain : infrastructure, langues, réglementations, pratiques métiers locales.",
    },
    {
      n: "03",
      title: "L'accompagnement jusqu'à l'autonomie",
      desc: "On ne repart pas à la livraison. On reste jusqu'à ce que vos équipes maîtrisent l'outil et en tirent vraiment de la valeur.",
    },
  ],
  signature: {
    quote:
      "L'Afrique n'a pas besoin qu'on lui apporte la technologie. Elle a besoin qu'on lui aide à se l'approprier.",
    author: "Vision · Inov Consulting Cameroun",
  },
} as const;

/* —————————————————————————————————————————————————————————————
 * §B — PROFILS CIBLES — "Ce site est fait pour vous si…"
 * Source : inov-cameroun-contenu.md.pdf — Section Profils cibles
 * ——————————————————————————————————————————————————————————— */
export const PROFILS_CIBLES = {
  eyebrow: "Ce site est fait pour vous si…",
  title: "Deux profils. Une même urgence.",
  profiles: [
    {
      n: "01",
      label: "L'organisation en transition",
      desc: "ONG, institution, PME structurée — vous gérez des données, des équipes, des processus. Vous savez que l'IA pourrait vous aider mais vous ne savez pas par où commencer sans prendre de risque.",
      verbatims: [
        "On manque de temps pour analyser nos données terrain",
        "On perd des heures sur des tâches répétitives",
        "On veut tester l'IA mais sans se planter seul",
      ],
    },
    {
      n: "02",
      label: "L'investisseur ou partenaire stratégique",
      desc: "Vous cherchez un acteur tech sérieux en Afrique francophone pour co-construire, financer ou référencer. Vous avez besoin de preuves d'exécution et d'une équipe qui pense long terme.",
      verbatims: [
        "Je cherche un partenaire tech ancré localement",
        "Je veux investir dans la transformation IA au Cameroun",
        "J'ai besoin d'une équipe fiable pour exécuter",
      ],
    },
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §C — PROJETS EN COURS — "On ne parle pas de ce qu'on va faire"
 * Source : inov-cameroun-contenu.md.pdf — Section Projets en cours
 *
 * Champs strictement issus du PDF : project, context, status.
 * Champs éditoriaux ajoutés (à valider Direction) : sector, location,
 * scope (1 phrase de cadrage), outcome (bénéfice attendu), image.
 * Ces extensions permettent d'afficher chaque projet de manière
 * substantielle sur /secteurs et la home (au lieu d'une simple ligne).
 *
 * Note : 3 projets concrets (legacy = 6 secteurs reste dans PROJETS).
 * ——————————————————————————————————————————————————————————— */
export const PROJETS_EN_COURS = {
  eyebrow: "Projets en cours",
  title: "On ne parle pas de ce qu'on va faire. On le fait.",
  body: "Inov Consulting Cameroun est en phase de lancement — et c'est précisément maintenant que nous accueillons des organisations pionnières. Vous bénéficiez d'une attention maximale de notre équipe, d'un tarif partenaire, et d'une co-construction qui façonne notre méthode avec vous.",
  items: [
    {
      n: "01",
      project: "Automatisation RH / Paie",
      context: "PME · Douala",
      sector: "PME",
      location: "Douala · Cameroun",
      status: "",
      scope: "Pipeline paie mensuel — ingestion des variables, calcul des charges, génération automatisée des bulletins.",
      outcome: "Cycle paie réduit de 5 jours à quelques heures.",
      image: "/sectors/05-telecoms.jpg",
      imageAlt:
        "Infrastructure réseau — automatisation des flux opérationnels",
    },
    {
      n: "02",
      project: "Analyse données terrain",
      context: "ONG · Yaoundé",
      sector: "ONG",
      location: "Yaoundé · Cameroun",
      status: "Pilote actif",
      scope: "Synthèse automatisée des entretiens et indicateurs terrain pour reporting bailleurs (USAID, AFD, Banque Mondiale).",
      outcome: "Reporting bailleurs préparé en heures, plus en semaines.",
      image: "/sectors/04-ong.jpg",
      imageAlt: "Atelier collaboratif sur le terrain — collecte de données",
    },
    {
      n: "03",
      project: "Assistant clientèle IA",
      context: "Finance · Cameroun",
      sector: "Finance",
      location: "Cameroun · multi-sites",
      status: "",
      scope: "Assistant conversationnel multilingue (FR/EN) — FAQ produits, qualification des demandes, escalade humaine pour les cas sensibles.",
      outcome: "Service client 24/7, en français et en anglais.",
      image: "/sectors/02-banque.jpg",
      imageAlt: "Tableau de bord financier — interface assistant clientèle",
    },
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §D — CTA FINAL — "Prochaine étape"
 * Source : inov-cameroun-contenu.md.pdf — Section CTA Final
 * Bloc bas de page d'accueil, bascule vers /contact.
 * ——————————————————————————————————————————————————————————— */
export const CTA_FINAL = {
  eyebrow: "Prochaine étape",
  title: "Votre organisation mérite un partenaire, pas un prestataire.",
  body: "On commence par un diagnostic gratuit de 45 minutes. On vous dit honnêtement ce que l'IA peut changer pour vous — et par où commencer.",
  ctaPrimary: "Demander mon diagnostic gratuit",
  ctaSecondary: "Voir nos projets en cours",
  reassurances: [
    "Réponse sous 24h",
    "Disponible en français et en anglais",
    "Basé à Yaoundé · Cameroun · CEMAC",
  ],
} as const;

/* —————————————————————————————————————————————————————————————
 * §10 — CONTACT
 * ——————————————————————————————————————————————————————————— */
export const CONTACT_SECTION = {
  eyebrow: "Passez à l'action",
  title: "Parlons de votre organisation.",
  subtitle:
    "Échangeons 30 minutes sur vos enjeux — sans engagement, sans jargon. Réponse sous 24h, disponible en français et en anglais.",
  selectOptions: [
    "Diagnostic gratuit (45 min)",
    "Solution sur mesure",
    "Déploiement accompagné",
    "Formation IA — Dirigeants",
    "Formation IA — Cadres",
    "Je veux d'abord échanger",
  ],
} as const;
