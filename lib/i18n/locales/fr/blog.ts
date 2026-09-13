import type { BlogDict } from "../de/blog";

const blog: BlogDict = {
  list: {
    breadcrumbTitle: "Notre blog",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  sidebarPage: {
    breadcrumbTitle: "Blog avec sidebar",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  posts: [
    {
      category: "Architecture",
      date: "2 juillet 2023",
      titleLine1: "L'architecture est-elle un bon métier",
      titleLine2: "dans notre quotidien ?",
      image: "/assets/img/blog/blog-v1-img1.webp",
      alt: "Agence d'architecture au travail sur un projet",
    },
    {
      category: "Conception",
      date: "2 juillet 2023",
      titleLine1: "L'architecture est un art visuel —",
      titleLine2: "les bâtiments parlent d'eux-mêmes",
      image: "/assets/img/blog/blog-v1-img2.webp",
      alt: "Détail de façade d'un bâtiment contemporain",
    },
    {
      category: "Qualité de construction",
      date: "2 juillet 2023",
      titleLine1: "Nous défendons la qualité et la sécurité,",
      titleLine2: "pour que vous puissiez nous faire confiance",
      image: "/assets/img/blog/blog-v1-img3.webp",
      alt: "Contrôle qualité sur un chantier",
    },
  ],

  /** Cartes longues utilisées sur la variante avec sidebar. */
  sidebarPosts: [
    {
      date: "21 avril 2023",
      author: "Elena Rostova",
      titleLine1: "La meilleure réponse aux problèmes",
      titleLine2: "architecturaux et à la créativité",
      image: "/assets/img/blog/blog-sidebar-img1.webp",
      alt: "Agence d'architecture au travail sur un projet",
    },
    {
      date: "21 avril 2023",
      author: "Marcus Vance",
      titleLine1: "Comment un bon éclairage",
      titleLine2: "transforme une pièce",
      image: "/assets/img/blog/blog-sidebar-img2.webp",
      alt: "Intérieur avec un éclairage en strates",
    },
    {
      date: "21 avril 2023",
      author: "Janes Cooper",
      titleLine1: "Choisir des matériaux qui tiennent",
      titleLine2: "encore après dix ans",
      image: "/assets/img/blog/blog-sidebar-img3.webp",
      alt: "Échantillons de pierre naturelle et de chêne",
    },
    {
      date: "21 avril 2023",
      author: "David Miller",
      titleLine1: "Rénovation énergétique :",
      titleLine2: "par où commencer",
      image: "/assets/img/blog/blog-sidebar-img4.webp",
      alt: "Isolation de façade sur un projet de rénovation",
    },
  ],

  details: {
    breadcrumbTitle: "Détails de l'article",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
    meta: {
      date: "23 mars 2022",
      category: "ARCHITECTURE",
      byLabel: "PAR",
      author: "Elena Rostova",
      commentsLabel: "{count} commentaires",
    },
    heading1: "Une bonne conception commence par le terrain",
    text1:
      "Avant de tracer la première ligne vient l'analyse : orientation, topographie, bâti voisin, plan d'urbanisme et microclimat. Ce n'est qu'une fois ces conditions claires qu'émerge un projet qui exploite la lumière naturelle, réduit les besoins énergétiques et s'inscrit naturellement dans son environnement. Sauter cette étape se paie plus tard — en avenants, en coûts d'exploitation, ou en espaces qui ne sonnent jamais juste.",
    heading2: "Du modèle au chantier",
    text2:
      "Dans le modèle BIM, architecture, structure et équipements techniques se réunissent. Les conflits apparaissent à l'écran plutôt que sur le chantier, les quantités se déterminent de façon fiable et les coûts se prévoient précisément. Il reste alors du temps sur site pour ce qui compte vraiment : la qualité d'exécution.",
    quote:
      "Un bâtiment est réussi quand il paraît encore évident vingt ans plus tard — pas quand il crie le plus fort la première année.",
    quoteAuthor: "Elena Rostova, architecte en chef",
    postedIn: "Publié dans :",
    tags: ["Architecture", "Conception", "Durabilité"],
    shareAria: "Partager l'article",
    imageAlts: {
      main: "Vue intérieure d'un projet résidentiel achevé",
      secondary1: "Détail d'une structure bois-béton",
      secondary2: "Fragment de façade avec vitrage panoramique",
    },
    comments: {
      title: "Commentaires ({count})",
      items: [
        {
          author: "Saiful Islam",
          date: "3 février 2023",
          text: "Très bien expliqué — en particulier l'idée que l'analyse du terrain détermine la qualité du projet qui suit.",
          avatar: "/assets/img/blog/blog-details-img4.webp",
        },
        {
          author: "Jhon Smith",
          date: "3 février 2023",
          text: "La description du processus BIM correspond à notre expérience : détecter les conflits tôt fait gagner le plus de temps au final.",
          avatar: "/assets/img/blog/blog-details-img5.webp",
        },
      ],
      replyLabel: "Répondre",
    },
    form: {
      title: "Écrivez-nous",
      note: "Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués par *",
      name: "Votre nom*",
      email: "Votre e-mail*",
      website: "Site web*",
      message: "Écrire un message*",
      submit: "Envoyer le message",
    },
    sidebar: {
      searchTitle: "Recherche",
      searchPlaceholder: "Mots-clés ici …",
      categoriesTitle: "Catégories",
      categories: [
        "Architecture",
        "Architecture d'intérieur",
        "Rénovation de bâtiments",
        "Conduite de chantier",
      ],
      recentTitle: "Articles récents",
      recentPosts: [
        {
          titleLine1: "Une bonne conception",
          titleLine2: "commence par le terrain",
          date: "21 avril 2023",
          image: "/assets/img/blog/sidebar-img1.webp",
        },
        {
          titleLine1: "Du modèle BIM",
          titleLine2: "au chantier",
          date: "21 avril 2023",
          image: "/assets/img/blog/sidebar-img2.webp",
        },
        {
          titleLine1: "Rénover plutôt",
          titleLine2: "que démolir",
          date: "21 avril 2023",
          image: "/assets/img/blog/sidebar-img3.webp",
        },
      ],
      tagsTitle: "Mots-clés",
      tags: [
        "Conception",
        "Design",
        "Services",
        "Rénovation",
        "BIM",
        "Durabilité",
      ],
    },
  },
};

export default blog;
