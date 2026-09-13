/**
 * Almanca — Blog (Liste, Detail, Sidebar-Variante).
 * Der ursprüngliche Platzhaltertext (Online-Marketing) wurde durch
 * fachlich passende Architektur-Inhalte ersetzt.
 */

const blog = {
  list: {
    breadcrumbTitle: "Unser Blog",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  sidebarPage: {
    breadcrumbTitle: "Blog mit Sidebar",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  posts: [
    {
      category: "Architektur",
      date: "2. Juli 2023",
      titleLine1: "Ist Architektur ein guter Beruf",
      titleLine2: "für unseren Alltag?",
      image: "/assets/img/blog/blog-v1-img1.webp",
      alt: "Architekturbüro bei der Entwurfsarbeit",
    },
    {
      category: "Gestaltung",
      date: "2. Juli 2023",
      titleLine1: "Architektur ist eine visuelle Kunst —",
      titleLine2: "Gebäude sprechen für sich",
      image: "/assets/img/blog/blog-v1-img2.webp",
      alt: "Fassadendetail eines modernen Gebäudes",
    },
    {
      category: "Bauqualität",
      date: "2. Juli 2023",
      titleLine1: "Wir stehen für Qualität und Sicherheit,",
      titleLine2: "damit Sie uns vertrauen können",
      image: "/assets/img/blog/blog-v1-img3.webp",
      alt: "Baustelle mit Qualitätskontrolle",
    },
  ],

  /** Sidebar varyantındaki uzun kartlar. */
  sidebarPosts: [
    {
      date: "21. April 2023",
      author: "Elena Rostova",
      titleLine1: "Beste Lösung für architektonische",
      titleLine2: "Aufgaben und Kreativität",
      image: "/assets/img/blog/blog-sidebar-img1.webp",
      alt: "Architekturbüro bei der Entwurfsarbeit",
    },
    {
      date: "21. April 2023",
      author: "Marcus Vance",
      titleLine1: "Wie eine gute Lichtplanung",
      titleLine2: "den Raum verändert",
      image: "/assets/img/blog/blog-sidebar-img2.webp",
      alt: "Innenraum mit geschichteter Lichtplanung",
    },
    {
      date: "21. April 2023",
      author: "Janes Cooper",
      titleLine1: "Materialwahl, die auch nach",
      titleLine2: "zehn Jahren überzeugt",
      image: "/assets/img/blog/blog-sidebar-img3.webp",
      alt: "Materialmuster aus Naturstein und Eiche",
    },
    {
      date: "21. April 2023",
      author: "David Miller",
      titleLine1: "Energetische Sanierung:",
      titleLine2: "womit Sie anfangen sollten",
      image: "/assets/img/blog/blog-sidebar-img4.webp",
      alt: "Fassadendämmung im Sanierungsprojekt",
    },
  ],

  details: {
    breadcrumbTitle: "Blog-Details",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
    meta: {
      date: "23. März 2022",
      category: "ARCHITEKTUR",
      byLabel: "VON",
      author: "Elena Rostova",
      commentsLabel: "{count} Kommentare",
    },
    heading1: "Gute Planung beginnt beim Grundstück",
    text1:
      "Bevor die erste Linie gezeichnet wird, steht die Analyse: Ausrichtung, Topografie, Nachbarbebauung, Bauleitplanung und Mikroklima. Erst wenn diese Rahmenbedingungen klar sind, entsteht ein Entwurf, der Tageslicht nutzt, den Energiebedarf senkt und sich selbstverständlich in die Umgebung einfügt. Wer diesen Schritt überspringt, zahlt später — in Nachträgen, in Betriebskosten oder in Räumen, die sich nie richtig anfühlen.",
    heading2: "Vom Modell zur Baustelle",
    text2:
      "Im BIM-Modell werden Architektur, Tragwerk und Gebäudetechnik zusammengeführt. Kollisionen zeigen sich am Bildschirm statt auf der Baustelle, Mengen lassen sich verlässlich ermitteln und Kosten präzise prognostizieren. Auf der Baustelle bleibt dann Zeit für das, was wirklich zählt: Ausführungsqualität.",
    quote:
      "Ein Gebäude ist gut, wenn es nach zwanzig Jahren noch selbstverständlich wirkt — nicht, wenn es im ersten Jahr am lautesten auffällt.",
    quoteAuthor: "Elena Rostova, Leitende Architektin",
    postedIn: "Veröffentlicht in:",
    tags: ["Architektur", "Planung", "Nachhaltigkeit"],
    shareAria: "Beitrag teilen",
    imageAlts: {
      main: "Innenansicht eines realisierten Wohnprojekts",
      secondary1: "Detail einer Holz-Beton-Konstruktion",
      secondary2: "Fassadenausschnitt mit Panoramaverglasung",
    },
    comments: {
      title: "Kommentare ({count})",
      items: [
        {
          author: "Saiful Islam",
          date: "3. Februar 2023",
          text: "Sehr gut erklärt — besonders der Punkt, dass die Grundstücksanalyse über die Qualität des späteren Entwurfs entscheidet.",
          avatar: "/assets/img/blog/blog-details-img4.webp",
        },
        {
          author: "Jhon Smith",
          date: "3. Februar 2023",
          text: "Die Beschreibung des BIM-Prozesses deckt sich mit unserer Erfahrung: Kollisionen früh erkennen spart am Ende die meiste Zeit.",
          avatar: "/assets/img/blog/blog-details-img5.webp",
        },
      ],
      replyLabel: "Antworten",
    },
    form: {
      title: "Schreiben Sie uns",
      note: "Ihre E-Mail-Adresse wird nicht veröffentlicht. Pflichtfelder sind mit * markiert.",
      name: "Ihr Name*",
      email: "Ihre E-Mail*",
      website: "Webseite*",
      message: "Nachricht schreiben*",
      submit: "Nachricht senden",
    },
    sidebar: {
      searchTitle: "Suche",
      searchPlaceholder: "Suchbegriff eingeben …",
      categoriesTitle: "Kategorien",
      categories: [
        "Architektur",
        "Innenarchitektur",
        "Gebäudesanierung",
        "Bauleitung",
      ],
      recentTitle: "Neueste Beiträge",
      recentPosts: [
        {
          titleLine1: "Gute Planung beginnt",
          titleLine2: "beim Grundstück",
          date: "21. April 2023",
          image: "/assets/img/blog/sidebar-img1.webp",
        },
        {
          titleLine1: "Vom BIM-Modell",
          titleLine2: "zur Baustelle",
          date: "21. April 2023",
          image: "/assets/img/blog/sidebar-img2.webp",
        },
        {
          titleLine1: "Sanieren statt",
          titleLine2: "abreißen",
          date: "21. April 2023",
          image: "/assets/img/blog/sidebar-img3.webp",
        },
      ],
      tagsTitle: "Schlagwörter",
      tags: [
        "Planung",
        "Gestaltung",
        "Leistungen",
        "Sanierung",
        "BIM",
        "Nachhaltigkeit",
      ],
    },
  },
};

export type BlogDict = typeof blog;

export default blog;
