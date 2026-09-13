/**
 * Almanca — Unterseiten.
 *
 * Hinweis: Auf der Projektdetail- und Blogseite stand Platzhaltertext aus dem
 * Online-Marketing. Er wurde durch echte Architektur-Inhalte ersetzt.
 */

const pages = {
  meta: {
    defaultTitle: "ARY Tech Solutions — Kreative Architektur",
    titleTemplate: "%s | ARY Tech Solutions",
    description:
      "Architektur, Innenarchitektur und schlüsselfertiges Bauen in Deutschland und Europa. Planung, Genehmigung und Bauleitung aus einer Hand.",
    keywords: [
      "Architektur",
      "Innenarchitektur",
      "Bauleitung",
      "Gebäudesanierung",
      "Sasbach",
      "Deutschland",
    ],
  },

  cta: {
    titleLine1: "Sie haben ein Projekt im Kopf?",
    titleLine2: "Zögern Sie nicht — sagen Sie einfach Hallo",
    button: "SPRECHEN WIR DARÜBER",
  },

  about: {
    breadcrumbTitle: "Über uns",
    breadcrumbBg: "/assets/img/about/page-header-bg.webp",
    whyChooseImages: [
      {
        src: "/assets/img/about/about-why-choose-img1.webp",
        alt: "Modernes architektonisches Entwurfsmodell",
      },
      {
        src: "/assets/img/about/about-why-choose-img2.webp",
        alt: "Architekturpläne und Materialien",
      },
    ],
  },

  team: {
    breadcrumbTitle: "Unser Team",
    breadcrumbBg: "/assets/img/team/page-header-bg.webp",
    eyebrow: "UNSER TEAM",
    titleLine1: "Unser talentiertes Team",
    titleLine2: "hinter ARY GROUP",
    shareAria: "Profil teilen",
    members: [
      {
        name: "Marcus Vance",
        role: "Leitender Architekt",
        image: "/assets/img/team/team-v2-img1.webp",
      },
      {
        name: "Janes Cooper",
        role: "Leitende Innenarchitektin",
        image: "/assets/img/team/team-v2-img2.webp",
      },
      {
        name: "David Miller",
        role: "Tragwerksplaner",
        image: "/assets/img/team/team-v2-img3.webp",
      },
      {
        name: "Sophia Laurent",
        role: "Landschaftsarchitektin",
        image: "/assets/img/team/team-v2-img4.webp",
      },
      {
        name: "Clara Schmidt",
        role: "Spezialistin für Innenraumkonzepte",
        image: "/assets/img/team/team-v2-img5.webp",
      },
      {
        name: "Alexander Wright",
        role: "Bauleiter",
        image: "/assets/img/team/team-v2-img6.webp",
      },
    ],
  },

  teamDetails: {
    breadcrumbTitle: "Team-Details",
    breadcrumbBg: "/assets/img/team/page-header-bg.webp",
    brandTitle: "ARY GROUP",
    name: "Elena Rostova",
    role: "Leitende Architektin & Projektleiterin",
    imageAlt: "Elena Rostova — Leitende Architektin & Projektleiterin",
    labels: {
      department: "Abteilung:",
      experience: "Erfahrung:",
      email: "E-Mail:",
      phone: "Telefon:",
    },
    department: "Architektur & Innenarchitektur",
    experience: "15 Jahre",
    biographyTitle: "Biografie von Elena Rostova",
    biography1:
      "Mit über 15 Jahren Erfahrung in Architekturplanung, Innenarchitektur und nachhaltigem Baumanagement leitet Elena anspruchsvolle Wohn- und Gewerbeprojekte von der Konzeption bis zur schlüsselfertigen Übergabe.",
    biography2:
      "Sie verbindet zeitgemäße Gestaltung mit fortschrittlicher BIM-Planung, nachhaltigen Materialien und konsequenter Bauüberwachung — damit jedes Projekt in Funktionalität, Langlebigkeit und architektonischer Qualität überzeugt.",
    skills: [
      { label: "Architekturplanung & 3D-BIM", percent: 95 },
      { label: "Innenarchitektur & Raumkonzept", percent: 90 },
      { label: "Bauausführung & Bauüberwachung", percent: 85 },
    ],
    experienceTitle: "Berufliche Stationen",
    positions: [
      { company: "Studio Arki Berlin", role: "Leitende Architektin, BIM" },
      { company: "Metro Urban Builders", role: "Senior Bauleiterin" },
      { company: "Atelier Interior Spaces", role: "Leitende Innenarchitektin" },
      { company: "Alpine Habitat Design", role: "Leitung Nachhaltiges Bauen" },
    ],
    competenciesTitle: "Kernkompetenzen & Spezialisierungen",
    competencies1:
      "Spezialisiert auf umfassende Gebäudeplanung, maßgeschneiderte Raumkonzepte, Koordination der Tragwerksplanung und präzise schlüsselfertige Ausführung.",
    competencies2:
      "Mit Leidenschaft für zeitlose Räume, in denen gestalterische Harmonie auf ökologische Nachhaltigkeit und deutsche Baukultur trifft.",
  },

  projects: {
    breadcrumbTitle: "Unsere Projekte",
    breadcrumbBg: "/assets/img/project/page-header-bg.webp",
  },

  projectDetails: {
    breadcrumbTitle: "Projektdetails",
    breadcrumbBg: "/assets/img/project/page-header-bg.webp",
    heroAlt: "Projektdetail — realisiertes Architekturprojekt",
    labels: {
      published: "Veröffentlicht:",
      category: "KATEGORIE:",
      client: "Bauherr:",
      previous: "Vorheriges",
      next: "Nächstes",
      relatedTitle: "Verwandte Projekte",
      shareAria: "Projekt teilen",
    },
    publishedDate: "20. April 2023",
    category: "Architektur / Neubau",
    client: "Privater Bauherr",
    title: "Architekturlösung und Bauen für die Zukunft",
    text1:
      "Dieses Projekt zeigt, wie sorgfältige Planung und konsequente Ausführung zusammenwirken. Ausgangspunkt war eine genaue Analyse von Grundstück, Ausrichtung und Bauleitplanung. Daraus entstand ein kompakter Baukörper, der Tageslicht optimal nutzt und den Energiebedarf niedrig hält. Tragwerk, Gebäudetechnik und Innenausbau wurden im BIM-Modell abgestimmt, sodass Kollisionen vor Baubeginn erkannt und Kosten verlässlich prognostiziert wurden.",
    text2:
      "In der Ausführung haben wir alle Gewerke selbst koordiniert und die Qualität vor Ort laufend geprüft. Sichtbeton, Eichenholz und großflächige Verglasungen bilden eine ruhige Materialpalette; die Fassade wurde so detailliert, dass Schattenfugen und Materialübergänge exakt dem Entwurf folgen. Das Gebäude wurde termingerecht und innerhalb des vereinbarten Budgets übergeben.",
    tags: ["Neubau", "Wohnbau", "Nachhaltigkeit"],
    previousProject: "Haus Lindenhof",
    nextProject: "Atelier Nordlicht",
  },

  testimonials: {
    breadcrumbTitle: "Referenzen",
    breadcrumbBg: "/assets/img/testimonial/page-header-bg.webp",
    ctaButton: "MEHR LEISTUNGEN",
  },

  faq: {
    breadcrumbTitle: "Häufige Fragen",
    breadcrumbBg: "/assets/img/background/page-header-bg.webp",
    ctaTitleLine1: "Wir helfen Ihnen jederzeit gern",
    ctaTitleLine2: "und beantworten Ihre Fragen",
    ctaButton: "MEHR LEISTUNGEN",
    items: [
      {
        question: "Wie lange dauern Entwurfsplanung und Baugenehmigung?",
        answer:
          "Konzept und Vorentwurf benötigen in der Regel 4 bis 8 Wochen. Die Prüfung des Bauantrags dauert je nach Behörde und Projektgröße üblicherweise 2 bis 4 Monate.",
      },
      {
        question:
          "Bieten Sie schlüsselfertiges Bauen und Generalunternehmerschaft an?",
        answer:
          "Ja. Wir übernehmen die schlüsselfertige Gesamtleistung — Erdarbeiten, Rohbau, Gebäudehülle, technische Gebäudeausrüstung und Innenausbau unter einem Vertrag.",
      },
      {
        question: "Was umfasst Ihre innenarchitektonische Leistung?",
        answer:
          "Optimierung der Raumabläufe, maßgefertigter Möbel- und Schreinerentwurf, Lichtplanung, Materialbeschaffung, fotorealistische 3D-Visualisierungen sowie komplette Möblierung und Montage.",
      },
      {
        question: "Wie stellen Sie Budgettreue sicher und vermeiden Nachträge?",
        answer:
          "Über detaillierte Leistungsverzeichnisse, wettbewerbliche Gewerkevergabe und Verträge mit garantiertem Höchstpreis — abgesichert durch wöchentliche Soll-Ist-Vergleiche.",
      },
      {
        question: "Sanieren Sie auch Altbauten und Denkmäler?",
        answer:
          "Ja. Wir haben besondere Erfahrung in energetischer Modernisierung und Denkmalsanierung und bringen die Vorgaben der Denkmalbehörde mit modernem Wärmeschutz und hohem Wohnkomfort in Einklang.",
      },
      {
        question: "Welchen Nutzen hat 3D-BIM im Bauprozess?",
        answer:
          "BIM erzeugt ein zusammengeführtes 3D-Modell aus Architektur, Tragwerk und technischer Gebäudeausrüstung. Räumliche Kollisionen werden vor Baubeginn beseitigt, was den Bauablauf beschleunigt.",
      },
      {
        question: "Welche Energiestandards erreichen Ihre Gebäude?",
        answer:
          "Wir planen und bauen nach anspruchsvollen Energiestandards (KfW 40, Passivhaus, DGNB) und integrieren Erdwärmepumpen, Photovoltaik und hochwirksame Gebäudehüllen.",
      },
      {
        question:
          "Übernehmen Sie Baugenehmigung und Tragwerksplanung?",
        answer:
          "Ja. Wir koordinieren alle erforderlichen Fachdisziplinen — Bodengutachten, Statik, Brandschutzkonzept und die direkte Abstimmung mit der Bauaufsicht.",
      },
      {
        question: "Welche Gewährleistung und Nachbetreuung bieten Sie?",
        answer:
          "Alle Leistungen werden mit förmlichem Abnahmeprotokoll und umfassender gesetzlicher Gewährleistung (VOB/BGB) übergeben — inklusive strukturierter digitaler Objektdokumentation für den Gebäudebetrieb.",
      },
    ],
  },

  contact: {
    breadcrumbTitle: "Kontakt",
    breadcrumbBg: "/assets/img/background/page-header-bg.webp",
    introTitle: "Kontakt aufnehmen",
    introText:
      "Wir bieten umfassende Architekturplanung, Innenarchitektur und schlüsselfertige Baubetreuung. Sprechen Sie unser Team an — wir setzen Ihre Vision um.",
    contactInfoTitle: "Kontaktdaten",
    formTitle: "Schreiben Sie uns",
    formNote:
      "Ihre E-Mail-Adresse wird nicht veröffentlicht. Pflichtfelder sind mit * markiert.",
    fields: {
      name: "Ihr Name*",
      email: "Ihre E-Mail*",
      phone: "Telefon*",
      subject: "Betreff*",
      website: "Webseite*",
      message: "Nachricht schreiben*",
    },
    submit: "NACHRICHT SENDEN",
    loading: "Bitte warten …",
    mapTitle: "Standort auf Google Maps",
  },

  notFound: {
    breadcrumbTitle: "404 — Seite nicht gefunden",
    code: "404",
    title: "Ups! Seite nicht gefunden",
    text: "Die gesuchte Seite existiert nicht. Möglicherweise wurde sie verschoben oder gelöscht.",
    button: "Zurück zur Startseite",
  },
};

export type PagesDict = typeof pages;

export default pages;
