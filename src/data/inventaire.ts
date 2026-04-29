/*
 * Données verbatim du site INOV Cameroun
 * Source : Inventaire_INOV_Cameroun_v1.1.pdf — copy validé par la Direction.
 * Toute modification de copy nécessite une validation Augustin Njigui.
 */

export const CONTACT = {
  phone: "+33 6 98 56 66 33",
  whatsapp: "33698566633",
  whatsappMessage:
    "Bonjour Augustin, j'aimerais échanger 30 minutes sur les enjeux de transformation IA de mon organisation.",
  emailPrimary: "info@inov-corp.com",
  emailSecondary: "augustin.njigui01@gmail.com",
  linkedin: "https://www.linkedin.com/in/augustin-njigui/",
  city: "Yaoundé, Cameroun",
} as const;

/* —————————————————————————————————————————————————————————————
 * §3 — CONSTAT
 * ——————————————————————————————————————————————————————————— */
export const CONSTAT = {
  eyebrow: "Le constat",
  title: "Les organisations ont les ressources. Ce qui manque, c'est la structure pour avancer.",
  intro:
    "Équipes compétentes, projets ambitieux, direction motivée — pourtant quelque chose freine : décisions tardives, projets essoufflés, IA restée théorique. Ce n'est pas un problème de talent. C'est un problème de méthode et de clarté.",
  problems: [
    {
      n: "01",
      title: "Des projets qui n'avancent pas",
      desc: "Réunions sans décision, chantiers sans pilote, priorités floues à chaque comité.",
    },
    {
      n: "02",
      title: "Une gouvernance mal définie",
      desc: "Sans cadre clair, chaque arbitrage devient un combat d'influence qui ralentit tout.",
    },
    {
      n: "03",
      title: "L'IA : tout le monde en parle, personne ne l'utilise vraiment",
      desc: "Vos équipes voient l'IA partout mais ne savent pas par où commencer.",
    },
    {
      n: "04",
      title: "Le risque de prendre du retard",
      desc: "L'écart de compétitivité se creuse chaque mois. L'attente a un coût réel.",
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
 * §5 — MÉTHODE
 * ——————————————————————————————————————————————————————————— */
export const METHODE = {
  eyebrow: "Méthode",
  title: "Comment ça marche",
  subtitle: "De la première conversation aux résultats concrets",
  steps: [
    {
      n: "1",
      title: "Échange 30 min",
      desc: "On discute de votre situation et vos enjeux.",
      badge: "Gratuit · sans engagement",
    },
    {
      n: "2",
      title: "Proposition calibrée",
      desc: "L'offre adaptée à votre besoin réel, avec périmètre, timing et tarif.",
      badge: "Sous 24h",
    },
    {
      n: "3",
      title: "Démarrage terrain",
      desc: "Mission en présentiel. Livrables clairs à chaque étape.",
      badge: "Présentiel",
    },
    {
      n: "4",
      title: "Résultats livrés",
      desc: "Restitution claire, plan en main. Suivi à distance possible après.",
      badge: "Suivi optionnel",
    },
  ],
  cta: "Démarrer par un échange",
} as const;

/* —————————————————————————————————————————————————————————————
 * §6 — FORMATIONS IA
 * ——————————————————————————————————————————————————————————— */
export const FORMATIONS = {
  eyebrow: "Formations Intelligence Artificielle",
  title: "L'IA, concrètement pour vos équipes",
  subtitle:
    "Deux parcours distincts selon votre public — dirigeants ou cadres. Jusqu'à 15 participants. Animés par Augustin Njigui.",
  tracks: [
    {
      id: "dirigeants",
      title: "Intelligence Artificielle pour Dirigeants",
      audience: "Décideurs, DG, PDG, directeurs",
      duration: "½ journée (3h) ou 1 journée (6h)",
      group: "Jusqu'à 15 participants",
      format: "Présentiel intra-entreprise",
      promise:
        "À l'issue, vous êtes en mesure de cadrer un projet IA et prendre une première décision — sans dépendre d'un expert technique.",
      modules: [
        {
          n: "01",
          title: "Comprendre l'IA en 30 min chrono",
          bullets: [
            "IA en langage business, pas technique",
            "IA générative, prédictive, automatisation : les 3 familles",
            "Les 3 questions à se poser avant tout projet IA",
            "Pourquoi l'IA n'est pas qu'un sujet DSI",
          ],
        },
        {
          n: "02",
          title: "Cas d'usage à forte valeur business",
          bullets: [
            "Exemples concrets par secteur : banque, distribution, services",
            "ROI mesurable : réduction des coûts, gain de temps",
            "Ce qu'un concurrent similaire a déjà mis en place",
          ],
        },
        {
          n: "03",
          title: "Gouvernance, risques et éthique IA",
          bullets: [
            "Risques à ignorer l'IA — et à mal l'implémenter",
            "Qui décide quoi dans une gouvernance IA efficace",
            "Protection des données, conformité, image de marque",
          ],
        },
        {
          n: "04",
          title: "Méthode pour lancer un projet IA",
          bullets: [
            "Les 5 étapes d'un projet IA réussi",
            "Comment choisir un fournisseur ou partenaire",
            "Budget, équipe minimale, timeline réaliste",
          ],
        },
        {
          n: "05",
          title: "Atelier cadrage sur un cas réel",
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
      title: "Intelligence Artificielle pour Cadres",
      audience: "Cadres, managers, responsables de fonction",
      duration: "1 journée ou 2 demi-journées",
      group: "Jusqu'à 15 participants",
      format: "Présentiel intra-entreprise avec démos live",
      promise:
        "Vos cadres repartent avec 3 à 5 outils utilisables dès le lendemain — sans attendre la prochaine réunion de comité.",
      modules: [
        {
          n: "01",
          title: "Vocabulaire et panorama des outils IA",
          bullets: [
            "Termes clés : IA générative, ML, automatisation",
            "Cartographie des outils (ChatGPT, Copilot, Claude, Gemini…)",
            "Ce qui change concrètement dans les métiers",
          ],
        },
        {
          n: "02",
          title: "Outils pratiques et démo en direct",
          bullets: [
            "Comparatif : quand utiliser quoi",
            "Démo live : rédaction, synthèse, traduction, analyse",
            "Outils sectoriels : finance, RH, commercial, juridique",
          ],
        },
        {
          n: "03",
          title: "Cas métiers concrets par fonction",
          bullets: [
            "Gagner 2h par semaine sur tâches répétitives",
            "Rapports, comptes-rendus, emails en quelques minutes",
            "Synthèse de documents longs : contrats, notes, rapports",
          ],
        },
        {
          n: "04",
          title: "Comment exprimer un besoin IA",
          bullets: [
            "Identifier un problème métier qui se prête à l'IA",
            "Méthode RACI-IA : formuler un prompt efficace",
            "Collaborer avec la DSI pour concrétiser",
          ],
        },
        {
          n: "05",
          title: "Ateliers pratiques par fonction",
          bullets: [
            "RH : offre d'emploi, CV, préparation d'entretien",
            "Finance : reporting automatisé, synthèse, anomalies",
            "Commercial : pitch, portefeuille, rédaction propco",
            "Juridique : résumé contrat, clauses sensibles, veille",
            "Communication : discours, présentations, gestion de crise",
          ],
        },
      ],
    },
  ],
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
  role: "Fondateur INOV Cameroun · Directeur de Projets",
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
 * §10 — CONTACT
 * ——————————————————————————————————————————————————————————— */
export const CONTACT_SECTION = {
  eyebrow: "Passez à l'action",
  title: "Parlons de votre organisation.",
  subtitle:
    "Échangeons 30 minutes sur vos enjeux — sans engagement, sans jargon. Réponse sous 24h.",
  selectOptions: [
    "Diagnostic Flash (10 jours)",
    "Structuration & Feuille de route (30 jours)",
    "Accompagnement Transition (60–90 jours)",
    "Formation IA — Dirigeants",
    "Formation IA — Cadres",
    "Je veux d'abord échanger",
  ],
} as const;
