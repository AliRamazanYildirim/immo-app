/**
 * Almanca — anasayfa bölümleri (home1 / home2 / home3).
 * Şablondan gelen Lorem Ipsum metinleri gerçek ajans metniyle değiştirildi.
 */

const home = {
  /*--- Home 1 ---*/
  banner1: {
    eyebrow: "Kreative",
    title: "Architektur",
    imageAlt: "Kreative Architektur — Projektansicht",
  },

  features: {
    eyebrow: "UNSERE STÄRKEN",
    items: [
      { title: "Kreative Lösungen", icon: "icon-solution", href: "/service" },
      { title: "Minimalistische Architektur", icon: "icon-blueprint", href: "/architecture" },
      { title: "Räume neu gedacht", icon: "icon-office-building", href: "/interior-design" },
    ],
  },

  about1: {
    eyebrow: "Über das Unternehmen",
    titleLine1: "Architekten, die Ihre Vision",
    titleLine2: "und Leidenschaft bauen",
    text: "Wir verbinden präzise Planung mit gestalterischem Anspruch. Von der ersten Skizze bis zur Schlüsselübergabe begleiten wir Bauherren in Deutschland und Europa — mit klarer Formensprache, nachhaltigen Materialien und verlässlicher Kostenkontrolle.",
    experienceYears: 24,
    experienceLines: ["JAHRE", "BERUFS-", "ERFAHRUNG"],
    progress: [
      { label: "Gestaltung", percent: 80 },
      { label: "Architektur", percent: 90 },
    ],
    imageAlt: "Architektonische Baustelle mit Ingenieuren",
    portraitAlt: "Porträt des Gründers",
    signatureAlt: "Unterschrift des Gründers",
  },

  services1: {
    eyebrow: "UNSERE LEISTUNGEN",
    title: "Unsere Architekturleistungen",
    items: [
      {
        number: "01",
        icon: "icon-blueprint",
        title: "Architektur & Planung",
        text: "Zukunftsweisende architektonische Konzepte, 3D-BIM-Modellierung, Tragwerksplanung und vollständige Baugenehmigungsverfahren.",
        href: "/architecture",
      },
      {
        number: "02",
        icon: "icon-interior-design",
        title: "Innenarchitektur",
        text: "Maßgeschneiderte Raumkonzepte, hochwertige Materialauswahl, individuelle Schreinerdetails und schlüsselfertiges Interior-Styling.",
        href: "/interior-design",
      },
      {
        number: "03",
        icon: "icon-solution",
        title: "Gebäudesanierung",
        text: "Energetische Modernisierung, Denkmalsanierung, Bauwerksinstandsetzung und hocheffiziente Fassadensanierung.",
        href: "/building-renovation",
      },
      {
        number: "04",
        icon: "icon-engineer",
        title: "Bauleitung",
        text: "Generalunternehmerschaft, Bauüberwachung, Gewerkekoordination, strikte Sicherheitsstandards und termingerechte Übergabe.",
        href: "/construction-site",
      },
    ],
  },

  projects1: {
    eyebrow: "UNSERE AKTUELLEN PROJEKTE",
    titleLine1: "Zuletzt realisierte Projekte —",
    titleLine2: "ein Blick in unsere Arbeit",
    items: [
      {
        location: "Freiburg",
        title: "Villa Joshna",
        image: "/assets/img/project/project-v1-img1.webp",
        alt: "Villa Joshna — architektonisches Projekt 1",
      },
      {
        location: "Stuttgart",
        title: "Haus Lindenhof",
        image: "/assets/img/project/project-v1-img2.webp",
        alt: "Haus Lindenhof — architektonisches Projekt 2",
      },
      {
        location: "Straßburg",
        title: "Residenz Rheinblick",
        image: "/assets/img/project/project-v1-img3.webp",
        alt: "Residenz Rheinblick — architektonisches Projekt 3",
      },
      {
        location: "Basel",
        title: "Atelier Nordlicht",
        image: "/assets/img/project/project-v1-img4.webp",
        alt: "Atelier Nordlicht — architektonisches Projekt 4",
      },
    ],
  },

  team1: {
    eyebrow: "UNSER TEAM",
    titleLine1: "Das Team hinter",
    titleLine2: "ARY GROUP",
  },

  faq1: {
    bigTitle: "FAQ",
    items: [
      {
        question:
          "Wie lange dauern Entwurfsplanung und Baugenehmigung?",
        answer:
          "Konzept und Vorentwurf benötigen in der Regel 4 bis 8 Wochen. Die Prüfung des Bauantrags durch die Baubehörde dauert je nach Auslastung und Projektgröße üblicherweise 2 bis 4 Monate.",
      },
      {
        question:
          "Bieten Sie schlüsselfertiges Bauen und Generalunternehmerschaft an?",
        answer:
          "Ja. Wir übernehmen die schlüsselfertige Gesamtleistung — Erdarbeiten, Rohbau, Gebäudehülle, technische Gebäudeausrüstung und Innenausbau aus einer Hand und unter einem Vertrag.",
      },
      {
        question: "Was umfasst Ihre innenarchitektonische Leistung?",
        answer:
          "Optimierung der Raumabläufe, maßgefertigter Möbel- und Schreinerentwurf, Lichtplanung, Materialbeschaffung, fotorealistische 3D-Visualisierungen sowie die komplette Möblierung und Montage.",
      },
      {
        question: "Wie stellen Sie Budgettreue sicher und vermeiden Nachträge?",
        answer:
          "Über detaillierte Leistungsverzeichnisse, wettbewerbliche Gewerkevergabe und Verträge mit garantiertem Höchstpreis — abgesichert durch Zahlungen nach Baufortschritt.",
      },
    ],
  },

  featureTwo: {
    items: [
      {
        titleLine1: "Wir liefern Ihnen",
        titleLine2: "das beste Design",
        icon: "icon-light-bulb",
        image: "/assets/img/resource/feauture-v2-img1.webp",
        href: "/service",
      },
      {
        titleLine1: "Wir haben ein qualifiziertes",
        titleLine2: "Ingenieurteam",
        icon: "icon-engineer",
        image: "/assets/img/resource/feauture-v2-img2.webp",
        href: "/team",
      },
    ],
  },

  video1: {
    titleLine1: "Wir sind führend",
    titleLine2: "in der Architektur",
  },

  testimonial1: {
    eyebrow: "KUNDENSTIMMEN",
    title: "Was Kunden über ARY GROUP sagen",
  },

  /*--- Home 2 ---*/
  banner2: {
    brandTitle: "ARY GROUP",
    titleLine1: "Architektur ist",
    titleLine2: "bewohnte Skulptur",
    imageAlt: "Architektur ist bewohnte Skulptur",
  },

  about2: {
    eyebrow: "ARY GROUP KENNENLERNEN",
    titleLine1: "Wir kümmern uns um alles,",
    titleLine2: "damit Ihr Ziel Realität wird",
    text: "Von der Machbarkeitsprüfung bis zur Abnahme behalten wir Termine, Kosten und Qualität im Blick. Sie haben einen Ansprechpartner — wir koordinieren Fachplaner, Behörden und Gewerke.",
    listItems: [
      "Machbarkeitsstudien",
      "Konzeptentwurf",
      "Individuelle Planung & Ausstattung",
    ],
  },

  whyChooseUs: {
    items: [
      {
        icon: "icon-office-building",
        title: "Architektonische Gestaltung",
        text: "Innovative Tragwerkskonzepte mit nachhaltigen Materialien, intelligenter Flächennutzung und bioklimatischen Entwurfsprinzipien.",
      },
      {
        icon: "icon-interior-design",
        title: "Wohnqualität, die bleibt",
        text: "Durchdachte Wohnwelten, die ergonomischen Komfort, zeitlose Materialität und maßgeschneiderte Lichtkonzepte verbinden.",
      },
      {
        icon: "icon-targeted",
        title: "Professionelle Planung",
        text: "Belastbare Kostenschätzung, realistische Terminplanung, rechtssichere Genehmigungen und reibungslose Ausführung.",
      },
    ],
  },

  services2: {
    eyebrow: "UNSERE LEISTUNGEN",
    title: "Unsere Architekturleistungen",
    items: [
      {
        icon: "icon-blueprint",
        title: "Architektur & Planung",
        text: "Visionäre Entwürfe, nachhaltige Baupläne und präzise 3D-BIM-Koordination für modernes Wohnen.",
        href: "/architecture",
        image: "/assets/img/service/service-v2-bg-architecture.webp",
      },
      {
        icon: "icon-engineer",
        title: "Generalunternehmung",
        text: "Umfassende Bauüberwachung, technische Ausführung und schlüsselfertige Realisierung auf höchstem Qualitätsniveau.",
        href: "/construction-site",
        image: "/assets/img/service/service-v2-bg-construction.webp",
      },
      {
        icon: "icon-interior-design",
        title: "Innenarchitektur",
        text: "Harmonische Innenräume, die ergonomischen Komfort, edle Materialien und maßgefertigten Innenausbau vereinen.",
        href: "/interior-design",
        image: "/assets/img/service/service-v2-bg-interior.webp",
      },
      {
        icon: "icon-solution",
        title: "Gebäudesanierung",
        text: "Energetische Modernisierung, Denkmalsanierung und hocheffiziente Fassadensanierung.",
        href: "/building-renovation",
        image: "/assets/img/service/service-v2-bg-renovation.webp",
      },
    ],
  },

  action: {
    title: "Sie haben ein Projekt im Kopf?",
    subtitle: "Zögern Sie nicht — sagen Sie einfach Hallo",
    cta: "SPRECHEN WIR DARÜBER",
  },

  news: {
    eyebrow: "AUS UNSEREM BLOG",
    title: "Aktuelle Beiträge",
  },

  contactForm: {
    eyebrow: "WIR SIND FÜR SIE DA",
    title: "Haben Sie Fragen?",
    fields: {
      name: "Ihr Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      message: "Ihre Nachricht",
    },
    submit: "NACHRICHT SENDEN",
    loading: "Bitte warten …",
    counters: [
      { value: 48, labelLine1: "Architekten und", labelLine2: "Ingenieure" },
      {
        value: 256,
        labelLine1: "Auszeichnungen für",
        labelLine2: "architektonische Qualität",
      },
    ],
    imageAlt: "Kontakt — moderne Architektur",
  },

  /*--- Home 3 ---*/
  banner3: {
    title: "NEUE ART ZU LEBEN",
    followUs: "Folgen Sie uns",
    ctaSecondary: "JETZT STARTEN",
    imageAlt: "Neue Art zu leben",
  },

  services3: {
    items: [
      {
        icon: "icon-office-building",
        title: "Architektonische Gestaltung",
        text: "Innovative Tragwerkskonzepte mit nachhaltigen Materialien, intelligenter Flächennutzung und bioklimatischen Entwurfsprinzipien.",
      },
      {
        icon: "icon-interior-design",
        title: "Harmonische Innenräume",
        text: "Durchdachte Wohnwelten, die ergonomischen Komfort, zeitlose Materialität und maßgeschneiderte Lichtkonzepte verbinden.",
      },
      {
        icon: "icon-targeted",
        title: "Präzise Projektplanung",
        text: "Belastbare Kostenschätzung, realistische Terminplanung, rechtssichere Genehmigungen und reibungslose Ausführung.",
      },
    ],
  },

  awards: {
    eyebrow: "Internationale Auszeichnungen",
    title: "Auszeichnungen & Erfolge",
    month: "OKT",
    day: "25",
    logoAlt: "Logo der Auszeichnung",
    items: [
      {
        project: "Villa Daniel, Rumänien",
        award: "Red Dot Design Award",
        image: "/assets/img/resource/awards-v1-img1.webp",
      },
      {
        project: "Haus Seeblick, Schweiz",
        award: "German Design Award",
        image: "/assets/img/resource/awards-v1-img2.webp",
      },
      {
        project: "Atelier Nordlicht, Basel",
        award: "Iconic Awards Architecture",
        image: "/assets/img/resource/awards-v1-img3.webp",
      },
      {
        project: "Residenz Rheinblick, Straßburg",
        award: "Architizer A+ Award",
        image: "/assets/img/resource/awards-v1-img4.webp",
      },
    ],
  },

  video3: {
    scrollingText: "ARY KREATIVE ARCHITEKTURLÖSUNGEN",
  },

  projects3: {
    eyebrow: "UNSERE AKTUELLEN PROJEKTE",
    title: "Werfen Sie einen Blick auf unsere Projekte",
  },

  testimonial3: {
    eyebrow: "KUNDENSTIMMEN",
    titleLine1: "Warum Kunden",
    titleLine2: "mit uns arbeiten",
  },

  about3: {
    projectAlt: "Projektübersicht Architektur",
    buildingAlt: "Moderner Gebäudebau",
    interiorAlt: "Innenarchitektonisches Detail",
  },

  team3: {
    eyebrow: "UNSER TEAM",
  },

  beforeAfter: {
    eyebrow: "// TRANSFORMATIONSGALERIE",
    titleLine1: "Vom Rohbau zur Perfektion",
    titleLine2: "Erleben Sie unsere Bauqualität im Detail",
    text: "Verschieben Sie die vertikale Trennlinie mit der Maus oder per Touch, um den 1:1 Unterschied zwischen der baulichen Rohbauphase und der vollendeten, bezugsfertigen Architektur zu entdecken.",
    tablistAria: "Transformations-Beispiele",
    sliderAria: "Vorher-Nachher Vergleichs-Schieberegler",
    presets: {
      before: "Vorher",
      beforeTitle: "Vollständig Vorher (Rohbau)",
      split: "50 / 50",
      splitTitle: "50/50 Ansicht",
      after: "Nachher",
      afterTitle: "Vollständig Nachher (Schlüsselfertig)",
    },
    projects: [
      {
        id: "luxury-villa-exterior",
        tabNumber: "01",
        tabTitle: "Exklusives Villenanwesen",
        category: "Architektur & Rohbau",
        subtitle:
          "Beton-Tragwerk & Poolaushub ➔ Bezugsfertige Luxusresidenz mit Infinity-Pool & Panoramaverglasung",
        beforeImg: "/assets/img/project/villa-transformation-before.webp",
        beforeAlt:
          "Exklusive Villa während der Rohbauphase mit Betonstruktur, Gerüst und Pool-Aushub",
        beforeBadge: "Rohbauphase",
        afterImg: "/assets/img/project/villa-transformation-after.webp",
        afterAlt:
          "Vollendete Luxusvilla mit Swimmingpool, Glasgeländern und moderner Fassadengestaltung",
        afterBadge: "Schlüsselfertig",
      },
      {
        id: "luxury-living-interior",
        tabNumber: "02",
        tabTitle: "Meisterhafter Innenausbau",
        category: "Interieur & Kernsanierung",
        subtitle:
          "Rohboden & Kamin-Rohbau ➔ Vollendete Raumkultur mit Travertin-Kamin & Fischgrätparkett",
        beforeImg: "/assets/img/project/interior-transformation-before.webp",
        beforeAlt:
          "Wohnbereich in der Rohbauphase mit unverputzten Wänden und Fußbodenheizungsverrohrung",
        beforeBadge: "Rohbauphase",
        afterImg: "/assets/img/project/interior-transformation-after.webp",
        afterAlt:
          "Schlüsselfertiger Designer-Wohnsalon mit beleuchtetem Kamin und edlem Eichenparkett",
        afterBadge: "Schlüsselfertig",
      },
    ],
  },

  featureExplore: {
    eyebrow: "UNSERE STÄRKEN ENTDECKEN",
    titleLine1: "Wir liefern die beste",
    titleLine2: "Architektur & Innenarchitektur",
    text: "Wir entwickeln innovative, nachhaltige Architekturentwürfe, maßgeschneiderte Innenraumatmosphären und eine belastbare Bauleitung. Unser integriertes Team verbindet gestalterische Vision mit präziser Ingenieurleistung — für Räume, die Bestand haben.",
    imageAlt: "Architektur & Innenarchitektur",
  },
};

export type HomeDict = typeof home;

export default home;
