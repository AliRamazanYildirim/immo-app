/**
 * Almanca — wiederverwendete Slider-Inhalte (Team, Referenzen, Projekte).
 * Markennamen stehen nicht hier: Eigennamen sind sprachunabhängig und
 * bleiben als Konstante in der jeweiligen Slider-Komponente.
 */

const shared = {
  teamSlider: {
    shareAria: "Profil teilen",
    members: [
      {
        name: "Julian Meier",
        role: "Projektarchitekt",
        image: "/assets/img/team/team-v1-img1.webp",
      },
      {
        name: "Annette Black",
        role: "Leitung Innenarchitektur",
        image: "/assets/img/team/team-v1-img2.webp",
      },
      {
        name: "Lucas Hoffmann",
        role: "BIM- & 3D-Spezialist",
        image: "/assets/img/team/team-v1-img3.webp",
      },
      {
        name: "Hannah Weber",
        role: "Bauleiterin",
        image: "/assets/img/team/team-v1-img4.webp",
      },
    ],
  },

  reviewsShort: [
    "ARY GROUP hat unsere Villa weit über unsere Erwartungen hinaus umgesetzt. Der Fokus auf Tageslicht, klare konstruktive Linien und fließende Übergänge nach außen hat aus unserer Vorstellung einen zeitlosen, funktionalen Rückzugsort gemacht.",
    "Von der Bauantragsunterlage bis zum maßgefertigten Innenausbau hat das Team unseren Firmencampus mit vollständiger Kostentransparenz, ohne Budgetabweichung und auf hohem technischen Niveau realisiert.",
    "Komplexe Bauvorschriften und die energetische Sanierung unseres historischen Gebäudes wirkten dank 3D-BIM-Planung und engagierter Bauüberwachung mühelos. Ein außergewöhnlicher Partner.",
  ],

  clientThumbs: [
    {
      name: "Julian Meier",
      role: "Bauherr Einfamilienhaus",
      image: "/assets/img/testimonial/testimonials-v1-img1.webp",
    },
    {
      name: "Annette Black",
      role: "Bauherrin Wohnanlage",
      image: "/assets/img/testimonial/testimonials-v1-img2.webp",
    },
    {
      name: "Lucas Hoffmann",
      role: "Bauherr Gewerbeobjekt",
      image: "/assets/img/testimonial/testimonials-v1-img3.webp",
    },
  ],

  testimonials: [
    {
      name: "Marcus Vance",
      role: "Bauherr Gewerbeimmobilie",
      image: "/assets/img/testimonial/testimonials-v2-img1.webp",
      text: "ARY GROUP hat unser Mischnutzungsgebäude mit kompromissloser konstruktiver Präzision und vollständiger Kostentransparenz übergeben. Generalunternehmerschaft und Bauüberwachung sind hier auf einem wirklich hohen Niveau.",
    },
    {
      name: "Janes Cooper",
      role: "Eigentümerin Privatvilla",
      image: "/assets/img/testimonial/testimonials-v2-img2.webp",
      text: "Die Innenarchitektur und die Raumabläufe in unserem Haus sind beeindruckend. Der maßgefertigte Innenausbau, die akustische Abstimmung und die Materialwahl aus Naturstein und Eiche haben unsere Erwartungen deutlich übertroffen.",
    },
    {
      name: "David Martinez",
      role: "Bauherr Bürogebäude",
      image: "/assets/img/testimonial/testimonials-v2-img3.webp",
      text: "Die durchgängige 3D-BIM-Planung und die vollständigen Genehmigungsunterlagen haben den Weg durch komplexe Bauvorschriften mühelos gemacht. Ein herausragender Partner für modernes Bauen.",
    },
    {
      name: "Sophia Laurent",
      role: "Eigentümerin denkmalgeschütztes Anwesen",
      image: "/assets/img/testimonial/testimonials-v2-img4.webp",
      text: "Die Sanierung unseres denkmalgeschützten Gebäudes verlangte behutsames Handwerk. ARY GROUP hat Gebäudehülle und Heizung modernisiert und dabei die historische Fassade respektiert.",
    },
    {
      name: "Alexander Wright",
      role: "Bauherr Wohnbauprojekt",
      image: "/assets/img/testimonial/testimonials-v2-img5.webp",
      text: "Strikte Arbeitssicherheit, konsequente Einhaltung der Bauabschnitte und tägliche Koordination der Nachunternehmer haben dafür gesorgt, dass unsere Wohnanlage mit 45 Einheiten termingerecht übergeben wurde.",
    },
    {
      name: "Clara Schmidt",
      role: "Geschäftsführerin Boutique-Hotel",
      image: "/assets/img/testimonial/testimonials-v2-img6.webp",
      text: "Unsere Gäste loben immer wieder die Lichtstimmung und die Ruhe der Räume. ARY GROUP hat in jeder Suite und in der Lobby architektonische Eleganz und maßgefertigten Innenausbau umgesetzt.",
    },
  ],

  projects: {
    detailsHref: "/project-details",
    items: [
      {
        location: "Freiburg",
        title: "Villa Joshna",
        alt: "Villa Joshna — Außenarchitektur",
      },
      {
        location: "Stuttgart",
        title: "Haus Lindenhof",
        alt: "Haus Lindenhof — Innenansicht",
      },
      {
        location: "Straßburg",
        title: "Residenz Rheinblick",
        alt: "Residenz Rheinblick — konstruktives Detail",
      },
      {
        location: "Basel",
        title: "Atelier Nordlicht",
        alt: "Atelier Nordlicht — moderne Innenarchitektur",
      },
      {
        location: "Köln",
        title: "Wohnquartier Rheinauhafen",
        alt: "Wohnquartier Rheinauhafen — Gesamtansicht",
      },
      {
        location: "Zürich",
        title: "Bürohaus Seefeld",
        alt: "Bürohaus Seefeld — Fassadendetail",
      },
    ],
  },

};

export type SharedDict = typeof shared;

export default shared;
