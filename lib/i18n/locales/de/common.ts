/**
 * Almanca — ortak metinler (kaynak dil / source of truth).
 * Diğer diller bu dosyanın tip yapısına uymak zorundadır.
 */

const common = {
  nav: {
    home: "Startseite",
    homeOne: "Startseite Eins",
    homeTwo: "Startseite Zwei",
    homeThree: "Startseite Drei",
    about: "Über uns",
    services: "Leistungen",
    servicesOverview: "Leistungsübersicht",
    architecture: "Architektur",
    interiorDesign: "Innenarchitektur",
    buildingRenovation: "Gebäudesanierung",
    constructionSite: "Bauleitung",
    pages: "Seiten",
    team: "Team",
    teamDetails: "Team-Details",
    projects: "Projekte",
    projectDetails: "Projektdetails",
    testimonials: "Referenzen",
    faq: "FAQ",
    contact: "Kontakt",
    blog: "Blog",
  },

  actions: {
    discoverMore: "Mehr entdecken",
    watchOurVideos: "Unsere Videos ansehen",
    exploreService: "LEISTUNG ANSEHEN",
    exploreFeature: "LEISTUNGSMERKMAL",
    joinOurTeam: "WERDEN SIE TEIL DES TEAMS",
    readMore: "Weiterlesen",
    viewAllProjects: "Alle Projekte ansehen",
    getInTouch: "Kontakt aufnehmen",
    sendMessage: "Nachricht senden",
    subscribe: "Abonnieren",
    loadMore: "Mehr laden",
  },

  labels: {
    address: "Adresse",
    phone: "Telefon",
    email: "E-Mail",
    callUs: "Rufen Sie uns an:",
    projectQuestion: "Haben Sie ein Projekt im Kopf? Rufen Sie uns an:",
  },

  a11y: {
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    toggleSubmenu: "Untermenü ein-/ausklappen",
    backToTop: "Zurück nach oben",
    openSearch: "Suche öffnen",
    closeSearch: "Suche schließen",
    playVideo: "Video abspielen",
    previousSlide: "Vorheriger Slide",
    nextSlide: "Nächster Slide",
    socialProfile: "Unser Profil auf {network}",
  },

  search: {
    label: "Hier suchen",
    placeholder: "Hier suchen …",
    submit: "Suche abschicken",
  },

  breadcrumb: {
    home: "Startseite",
  },

  language: {
    /** Dil değiştiricinin erişilebilirlik etiketi. */
    switcherLabel: "Sprache",
    switcherAria: "Sprache wählen — aktuell Deutsch",
    currentAria: "Aktuelle Sprache",
  },

  /** Şirket tanıtım metinleri — dile göre değişir, siteConfig'te tutulmaz. */
  company: {
    slogan: "Kreative Architektur",
    description:
      "Zeitgemäße Architektur, hochwertige Innenarchitektur und schlüsselfertiges Bauen in Deutschland und Europa — von der Planung bis zur Übergabe aus einer Hand.",
  },

  footer: {
    navigationTitle: "Navigation",
    quickLinkTitle: "Schnellzugriff",
    usefulLinksTitle: "Nützliche Links",
    contactTitle: "Kontakt",
    newsletterTitle: "Newsletter",
    newsletterText:
      "Abonnieren Sie unseren Newsletter für aktuelle Neuigkeiten und Projekte",
    emailPlaceholder: "email@beispiel.de",
    links: {
      home: "Startseite",
      aboutUs: "Über uns",
      services: "Leistungen",
      contactUs: "Kontakt",
      support: "Support",
      portfolio: "Portfolio",
      projects: "Projekte",
      faq: "FAQ",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
    },
    copyright: "Copyright ©",
    by: "von",
    allRightsReserved: "Alle Rechte vorbehalten",
  },

  newsletter: {
    title: "Newsletter abonnieren",
    placeholder: "Ihre E-Mail-Adresse",
    submit: "Abonnieren",
  },
};

/** Diğer dillerin uyması gereken sözleşme. */
export type CommonDict = typeof common;

export default common;
