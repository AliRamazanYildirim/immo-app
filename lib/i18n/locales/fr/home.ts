import type { HomeDict } from "../de/home";

const home: HomeDict = {
  banner1: {
    eyebrow: "Architecture",
    title: "Créative",
    imageAlt: "Architecture créative — vue du projet",
  },

  features: {
    eyebrow: "NOS ATOUTS",
    items: [
      { title: "Solutions créatives", icon: "icon-solution", href: "/service" },
      { title: "Architecture minimaliste", icon: "icon-blueprint", href: "/architecture" },
      { title: "Espaces réinventés", icon: "icon-office-building", href: "/interior-design" },
    ],
  },

  about1: {
    eyebrow: "À propos de l'entreprise",
    titleLine1: "Des architectes qui bâtissent",
    titleLine2: "votre vision et votre passion",
    text: "Nous associons une planification rigoureuse à une véritable exigence de conception. De la première esquisse à la remise des clés, nous accompagnons nos clients en Allemagne et en Europe — avec un langage formel clair, des matériaux durables et une maîtrise fiable des coûts.",
    experienceYears: 24,
    experienceLines: ["ANS", "D'EXPÉRIENCE", "PROFESSIONNELLE"],
    progress: [
      { label: "Conception", percent: 80 },
      { label: "Architecture", percent: 90 },
    ],
    imageAlt: "Chantier architectural avec des ingénieurs",
    portraitAlt: "Portrait du fondateur",
    signatureAlt: "Signature du fondateur",
  },

  services1: {
    eyebrow: "NOS SERVICES",
    title: "Nos services d'architecture",
    items: [
      {
        number: "01",
        icon: "icon-blueprint",
        title: "Architecture & planification",
        text: "Concepts architecturaux avant-gardistes, modélisation BIM 3D, ingénierie structurelle et obtention complète des permis de construire.",
        href: "/architecture",
      },
      {
        number: "02",
        icon: "icon-interior-design",
        title: "Architecture d'intérieur",
        text: "Conception spatiale sur mesure, sélection de matériaux haut de gamme, menuiserie personnalisée et aménagement clé en main.",
        href: "/interior-design",
      },
      {
        number: "03",
        icon: "icon-solution",
        title: "Rénovation de bâtiments",
        text: "Modernisation énergétique, restauration du patrimoine, reprise structurelle et rénovation de façades à haute performance.",
        href: "/building-renovation",
      },
      {
        number: "04",
        icon: "icon-engineer",
        title: "Conduite de chantier",
        text: "Entreprise générale, surveillance de chantier, coordination des corps de métier, protocoles de sécurité stricts et livraison dans les délais.",
        href: "/construction-site",
      },
    ],
  },

  projects1: {
    eyebrow: "NOS PROJETS RÉCENTS",
    titleLine1: "Nos dernières réalisations —",
    titleLine2: "un aperçu de notre travail",
    items: [
      {
        location: "Fribourg-en-Brisgau",
        title: "Villa Joshna",
        image: "/assets/img/project/project-v1-img1.webp",
        alt: "Villa Joshna — projet architectural 1",
      },
      {
        location: "Stuttgart",
        title: "Maison Lindenhof",
        image: "/assets/img/project/project-v1-img2.webp",
        alt: "Maison Lindenhof — projet architectural 2",
      },
      {
        location: "Strasbourg",
        title: "Résidence Rheinblick",
        image: "/assets/img/project/project-v1-img3.webp",
        alt: "Résidence Rheinblick — projet architectural 3",
      },
      {
        location: "Bâle",
        title: "Atelier Nordlicht",
        image: "/assets/img/project/project-v1-img4.webp",
        alt: "Atelier Nordlicht — projet architectural 4",
      },
    ],
  },

  team1: {
    eyebrow: "NOTRE ÉQUIPE",
    titleLine1: "L'équipe derrière",
    titleLine2: "ARY GROUP",
  },

  faq1: {
    bigTitle: "FAQ",
    items: [
      {
        question:
          "Combien de temps prennent la conception et le permis de construire ?",
        answer:
          "Le concept et l'avant-projet nécessitent généralement 4 à 8 semaines. L'instruction du permis de construire par l'administration demande habituellement 2 à 4 mois, selon sa charge de travail et l'ampleur du projet.",
      },
      {
        question:
          "Proposez-vous la construction clé en main et l'entreprise générale ?",
        answer:
          "Oui. Nous assurons la prestation complète clé en main — terrassement, gros œuvre, enveloppe du bâtiment, lots techniques et finitions intérieures, d'une seule source et sous un seul contrat.",
      },
      {
        question:
          "Que comprend votre prestation d'architecture d'intérieur ?",
        answer:
          "Optimisation des circulations, conception de mobilier et de menuiserie sur mesure, plans d'éclairage, sourcing des matériaux, rendus 3D photoréalistes ainsi que l'ameublement et la pose complets.",
      },
      {
        question:
          "Comment garantissez-vous le respect du budget et évitez-vous les dépassements ?",
        answer:
          "Par des devis quantitatifs détaillés, une mise en concurrence des corps de métier et des contrats à prix maximum garanti — sécurisés par des paiements liés à l'avancement.",
      },
    ],
  },

  featureTwo: {
    items: [
      {
        titleLine1: "Nous vous offrons",
        titleLine2: "le meilleur design",
        icon: "icon-light-bulb",
        image: "/assets/img/resource/feauture-v2-img1.webp",
        href: "/service",
      },
      {
        titleLine1: "Nous avons une équipe",
        titleLine2: "d'ingénieurs qualifiés",
        icon: "icon-engineer",
        image: "/assets/img/resource/feauture-v2-img2.webp",
        href: "/team",
      },
    ],
  },

  video1: {
    titleLine1: "Nous sommes leaders",
    titleLine2: "dans l'architecture",
  },

  testimonial1: {
    eyebrow: "TÉMOIGNAGES CLIENTS",
    title: "Ce que les clients disent d'ARY GROUP",
  },

  banner2: {
    brandTitle: "ARY GROUP",
    titleLine1: "L'architecture est",
    titleLine2: "une sculpture habitée",
    imageAlt: "L'architecture est une sculpture habitée",
  },

  about2: {
    eyebrow: "DÉCOUVRIR ARY GROUP",
    titleLine1: "Nous prenons tout en charge",
    titleLine2: "pour concrétiser votre objectif",
    text: "De l'étude de faisabilité à la réception, nous gardons la maîtrise des délais, des coûts et de la qualité. Vous avez un seul interlocuteur — nous coordonnons les bureaux d'études, les administrations et les corps de métier.",
    listItems: [
      "Études de faisabilité",
      "Conception du concept",
      "Planification & aménagement sur mesure",
    ],
  },

  whyChooseUs: {
    items: [
      {
        icon: "icon-office-building",
        title: "Conception architecturale",
        text: "Concepts structurels innovants, matériaux durables, utilisation intelligente des surfaces et principes de conception bioclimatique.",
      },
      {
        icon: "icon-interior-design",
        title: "Une qualité de vie durable",
        text: "Des espaces de vie pensés pour allier confort ergonomique, matérialité intemporelle et éclairage sur mesure.",
      },
      {
        icon: "icon-targeted",
        title: "Planification professionnelle",
        text: "Estimation des coûts fiable, planning réaliste, conformité réglementaire et exécution sans accroc.",
      },
    ],
  },

  services2: {
    eyebrow: "NOS SERVICES",
    title: "Nos services d'architecture",
    items: [
      {
        icon: "icon-blueprint",
        title: "Architecture & planification",
        text: "Concepts visionnaires, plans de construction durables et coordination BIM 3D précise pour un habitat moderne.",
        href: "/architecture",
        image: "/assets/img/service/service-v2-bg-architecture.webp",
      },
      {
        icon: "icon-engineer",
        title: "Entreprise générale",
        text: "Surveillance complète du chantier, exécution technique et réalisation clé en main, sans compromis sur la qualité.",
        href: "/construction-site",
        image: "/assets/img/service/service-v2-bg-construction.webp",
      },
      {
        icon: "icon-interior-design",
        title: "Architecture d'intérieur",
        text: "Des intérieurs harmonieux alliant confort ergonomique, matériaux nobles et menuiserie sur mesure.",
        href: "/interior-design",
        image: "/assets/img/service/service-v2-bg-interior.webp",
      },
      {
        icon: "icon-solution",
        title: "Rénovation de bâtiments",
        text: "Modernisation énergétique, restauration du patrimoine et rénovation de façades à haute performance.",
        href: "/building-renovation",
        image: "/assets/img/service/service-v2-bg-renovation.webp",
      },
    ],
  },

  action: {
    title: "Vous avez un projet en tête ?",
    subtitle: "N'hésitez pas à nous dire bonjour",
    cta: "PARLONS-EN",
  },

  news: {
    eyebrow: "NOTRE BLOG",
    title: "Nos dernières actualités",
  },

  contactForm: {
    eyebrow: "NOUS SOMMES À VOTRE ÉCOUTE",
    title: "Une question ?",
    fields: {
      name: "Votre nom",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      message: "Votre message",
    },
    submit: "ENVOYER LE MESSAGE",
    loading: "Veuillez patienter …",
    counters: [
      { value: 48, labelLine1: "Architectes et", labelLine2: "ingénieurs" },
      {
        value: 256,
        labelLine1: "Prix pour l'excellence",
        labelLine2: "architecturale",
      },
    ],
    imageAlt: "Contact — architecture moderne",
  },

  banner3: {
    title: "UNE NOUVELLE FAÇON DE VIVRE",
    followUs: "Suivez-nous",
    ctaSecondary: "COMMENCER MAINTENANT",
    imageAlt: "Une nouvelle façon de vivre",
  },

  services3: {
    items: [
      {
        icon: "icon-office-building",
        title: "Conception architecturale",
        text: "Concepts structurels innovants, matériaux durables, utilisation intelligente des surfaces et principes de conception bioclimatique.",
      },
      {
        icon: "icon-interior-design",
        title: "Harmonie des espaces intérieurs",
        text: "Des espaces de vie pensés pour allier confort ergonomique, matérialité intemporelle et éclairage sur mesure.",
      },
      {
        icon: "icon-targeted",
        title: "Planification de précision",
        text: "Estimation des coûts fiable, planning réaliste, conformité réglementaire et exécution sans accroc.",
      },
    ],
  },

  awards: {
    eyebrow: "Prix internationaux",
    title: "Prix & distinctions",
    month: "OCT",
    day: "25",
    logoAlt: "Logo du prix",
    items: [
      {
        project: "Villa Daniel, Roumanie",
        award: "Red Dot Design Award",
        image: "/assets/img/resource/awards-v1-img1.webp",
      },
      {
        project: "Maison Seeblick, Suisse",
        award: "German Design Award",
        image: "/assets/img/resource/awards-v1-img2.webp",
      },
      {
        project: "Atelier Nordlicht, Bâle",
        award: "Iconic Awards Architecture",
        image: "/assets/img/resource/awards-v1-img3.webp",
      },
      {
        project: "Résidence Rheinblick, Strasbourg",
        award: "Architizer A+ Award",
        image: "/assets/img/resource/awards-v1-img4.webp",
      },
    ],
  },

  video3: {
    scrollingText: "ARY SOLUTIONS D'ARCHITECTURE CRÉATIVE",
  },

  projects3: {
    eyebrow: "NOS PROJETS RÉCENTS",
    title: "Découvrez nos projets",
  },

  testimonial3: {
    eyebrow: "TÉMOIGNAGES CLIENTS",
    titleLine1: "Pourquoi les clients",
    titleLine2: "travaillent avec nous",
  },

  about3: {
    projectAlt: "Vue d'ensemble du projet d'architecture",
    buildingAlt: "Construction d'un bâtiment moderne",
    interiorAlt: "Détail d'architecture d'intérieur",
  },

  team3: {
    eyebrow: "NOTRE ÉQUIPE",
  },

  beforeAfter: {
    eyebrow: "// GALERIE DE TRANSFORMATIONS",
    titleLine1: "Du gros œuvre à la perfection",
    titleLine2: "Découvrez notre qualité de construction en détail",
    text: "Déplacez la ligne de séparation verticale à la souris ou au doigt pour découvrir la différence 1:1 entre la phase de gros œuvre et l'architecture achevée, prête à habiter.",
    tablistAria: "Exemples de transformations",
    sliderAria: "Curseur de comparaison avant / après",
    presets: {
      before: "Avant",
      beforeTitle: "Entièrement avant (gros œuvre)",
      split: "50 / 50",
      splitTitle: "Vue 50/50",
      after: "Après",
      afterTitle: "Entièrement après (clé en main)",
    },
    projects: [
      {
        id: "luxury-villa-exterior",
        tabNumber: "01",
        tabTitle: "Propriété de villa exclusive",
        category: "Architecture & gros œuvre",
        subtitle:
          "Structure béton & excavation de la piscine ➔ Résidence de luxe prête à habiter avec piscine à débordement & vitrage panoramique",
        beforeImg: "/assets/img/project/villa-transformation-before.webp",
        beforeAlt:
          "Villa exclusive en phase de gros œuvre avec structure béton, échafaudage et excavation de la piscine",
        beforeBadge: "Gros œuvre",
        afterImg: "/assets/img/project/villa-transformation-after.webp",
        afterAlt:
          "Villa de luxe achevée avec piscine, garde-corps en verre et façade contemporaine",
        afterBadge: "Clé en main",
      },
      {
        id: "luxury-living-interior",
        tabNumber: "02",
        tabTitle: "Aménagement intérieur d'exception",
        category: "Intérieur & rénovation complète",
        subtitle:
          "Dalle brute & cheminée en gros œuvre ➔ Salon abouti avec cheminée en travertin & parquet à bâtons rompus",
        beforeImg: "/assets/img/project/interior-transformation-before.webp",
        beforeAlt:
          "Séjour en phase de gros œuvre avec murs non enduits et réseau de chauffage au sol",
        beforeBadge: "Gros œuvre",
        afterImg: "/assets/img/project/interior-transformation-after.webp",
        afterAlt:
          "Salon design clé en main avec cheminée allumée et parquet en chêne noble",
        afterBadge: "Clé en main",
      },
    ],
  },

  featureExplore: {
    eyebrow: "DÉCOUVRIR NOS ATOUTS",
    titleLine1: "Nous offrons la meilleure",
    titleLine2: "architecture intérieure et extérieure",
    text: "Nous concevons des projets architecturaux innovants et durables, des atmosphères intérieures sur mesure et une conduite de chantier solide. Notre équipe intégrée allie créativité visionnaire et ingénierie précise — pour des espaces qui durent.",
    imageAlt: "Architecture & architecture d'intérieur",
  },
};

export default home;
