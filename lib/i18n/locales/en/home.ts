import type { HomeDict } from "../de/home";

const home: HomeDict = {
  banner1: {
    eyebrow: "Creative",
    title: "Architecture",
    imageAlt: "Creative architecture — project view",
  },

  features: {
    eyebrow: "EXPLORE FEATURE",
    items: [
      { title: "Creative Solutions", icon: "icon-solution", href: "/service" },
      { title: "Minimal Architecture", icon: "icon-blueprint", href: "/architecture" },
      { title: "Spaces Reimagined", icon: "icon-office-building", href: "/interior-design" },
    ],
  },

  about1: {
    eyebrow: "About Company",
    titleLine1: "Architects who build your",
    titleLine2: "vision and passion",
    text: "We combine precise planning with design ambition. From the first sketch to handover, we guide clients across Germany and Europe — with a clear formal language, sustainable materials and reliable cost control.",
    experienceYears: 24,
    experienceLines: ["YEARS", "WORKING", "EXPERIENCE"],
    progress: [
      { label: "Design", percent: 80 },
      { label: "Architecture", percent: 90 },
    ],
    imageAlt: "Architectural construction site with engineers",
    portraitAlt: "Portrait of the founder",
    signatureAlt: "Founder's signature",
  },

  services1: {
    eyebrow: "OUR SERVICES",
    title: "Our Architecture Services",
    items: [
      {
        number: "01",
        icon: "icon-blueprint",
        title: "Architecture & Planning",
        text: "Forward-thinking architectural concepts, 3D BIM modelling, structural engineering and complete statutory permit approvals.",
        href: "/architecture",
      },
      {
        number: "02",
        icon: "icon-interior-design",
        title: "Interior Design",
        text: "Bespoke spatial design, high-end material selection, custom millwork details and tailored turnkey interior styling.",
        href: "/interior-design",
      },
      {
        number: "03",
        icon: "icon-solution",
        title: "Building Renovation",
        text: "Energy-efficient modernisation, heritage restoration, structural remediation and high-performance facade retrofits.",
        href: "/building-renovation",
      },
      {
        number: "04",
        icon: "icon-engineer",
        title: "Construction Management",
        text: "Full-scope general contracting, site supervision, trade coordination, strict safety protocols and on-time handover.",
        href: "/construction-site",
      },
    ],
  },

  projects1: {
    eyebrow: "OUR RECENT PROJECTS",
    titleLine1: "Projects we recently delivered —",
    titleLine2: "a look at our work",
    items: [
      {
        location: "Freiburg",
        title: "Villa Joshna",
        image: "/assets/img/project/project-v1-img1.webp",
        alt: "Villa Joshna — architectural project 1",
      },
      {
        location: "Stuttgart",
        title: "Haus Lindenhof",
        image: "/assets/img/project/project-v1-img2.webp",
        alt: "Haus Lindenhof — architectural project 2",
      },
      {
        location: "Strasbourg",
        title: "Residenz Rheinblick",
        image: "/assets/img/project/project-v1-img3.webp",
        alt: "Residenz Rheinblick — architectural project 3",
      },
      {
        location: "Basel",
        title: "Atelier Nordlicht",
        image: "/assets/img/project/project-v1-img4.webp",
        alt: "Atelier Nordlicht — architectural project 4",
      },
    ],
  },

  team1: {
    eyebrow: "OUR TEAM",
    titleLine1: "The team behind",
    titleLine2: "ARY GROUP",
  },

  faq1: {
    bigTitle: "FAQ",
    items: [
      {
        question: "How long do design and building permits take?",
        answer:
          "Concept and preliminary design usually take 4 to 8 weeks. Municipal building permit reviews generally require 2 to 4 months, depending on the authority's workload and the scale of the project.",
      },
      {
        question: "Do you offer turnkey construction and general contracting?",
        answer:
          "Yes. We deliver complete turnkey projects — excavation, shell construction, building envelope, MEP engineering and interior finishes from a single source under one contract.",
      },
      {
        question: "What is included in your interior architecture service?",
        answer:
          "Spatial flow optimisation, bespoke furniture and millwork design, lighting plans, material sourcing, photorealistic 3D renders plus complete furnishing and installation.",
      },
      {
        question: "How do you ensure budget compliance and avoid overruns?",
        answer:
          "Through detailed bills of quantities, competitive trade tendering and guaranteed-maximum-price contracts — secured by milestone-based payments.",
      },
    ],
  },

  featureTwo: {
    items: [
      {
        titleLine1: "We will provide you",
        titleLine2: "with the best design",
        icon: "icon-light-bulb",
        image: "/assets/img/resource/feauture-v2-img1.webp",
        href: "/service",
      },
      {
        titleLine1: "We have a qualified",
        titleLine2: "engineering team",
        icon: "icon-engineer",
        image: "/assets/img/resource/feauture-v2-img2.webp",
        href: "/team",
      },
    ],
  },

  video1: {
    titleLine1: "We are the leader",
    titleLine2: "in architecture",
  },

  testimonial1: {
    eyebrow: "CLIENT TESTIMONIALS",
    title: "What clients say about ARY GROUP",
  },

  banner2: {
    brandTitle: "ARY GROUP",
    titleLine1: "Architecture is",
    titleLine2: "inhabited sculpture",
    imageAlt: "Architecture is inhabited sculpture",
  },

  about2: {
    eyebrow: "GET TO KNOW ARY GROUP",
    titleLine1: "We take care of everything",
    titleLine2: "so your goal becomes real",
    text: "From feasibility study to final handover we keep schedule, cost and quality in view. You have one point of contact — we coordinate specialist planners, authorities and trades.",
    listItems: [
      "Feasibility studies",
      "Conceptual design",
      "Custom planning & fit-out",
    ],
  },

  whyChooseUs: {
    items: [
      {
        icon: "icon-office-building",
        title: "Architectural Design",
        text: "Innovative structural concepts crafted with sustainable materials, smart space utilisation and bioclimatic design principles.",
      },
      {
        icon: "icon-interior-design",
        title: "Living Quality That Lasts",
        text: "Curated living environments combining ergonomic comfort, timeless materiality and bespoke lighting arrangements.",
      },
      {
        icon: "icon-targeted",
        title: "Professional Planning",
        text: "Rigorous cost estimation, realistic scheduling, regulatory compliance and seamless execution management.",
      },
    ],
  },

  services2: {
    eyebrow: "OUR SERVICES",
    title: "Our Architecture Services",
    items: [
      {
        icon: "icon-blueprint",
        title: "Architecture & Planning",
        text: "Visionary architectural concepts, sustainable building plans and precise 3D BIM coordination for modern living.",
        href: "/architecture",
        image: "/assets/img/service/service-v2-bg-architecture.webp",
      },
      {
        icon: "icon-engineer",
        title: "General Contracting",
        text: "Full-scope site supervision, technical execution and turnkey construction with uncompromising quality standards.",
        href: "/construction-site",
        image: "/assets/img/service/service-v2-bg-construction.webp",
      },
      {
        icon: "icon-interior-design",
        title: "Interior Design",
        text: "Harmonious interiors combining ergonomic comfort, refined materials and custom bespoke architectural millwork.",
        href: "/interior-design",
        image: "/assets/img/service/service-v2-bg-interior.webp",
      },
      {
        icon: "icon-solution",
        title: "Building Renovation",
        text: "Energy-efficient modernisation, heritage restoration and high-performance structural facade retrofits.",
        href: "/building-renovation",
        image: "/assets/img/service/service-v2-bg-renovation.webp",
      },
    ],
  },

  action: {
    title: "Have a project in mind?",
    subtitle: "Don't hesitate to say hello",
    cta: "LET'S TALK",
  },

  news: {
    eyebrow: "FROM OUR BLOG",
    title: "Read our latest news",
  },

  contactForm: {
    eyebrow: "WE ARE READY TO HELP",
    title: "Have any questions?",
    fields: {
      name: "Your name",
      email: "Email address",
      phone: "Phone number",
      message: "Write your message",
    },
    submit: "SEND YOUR MESSAGE",
    loading: "Please wait …",
    counters: [
      { value: 48, labelLine1: "Architects and", labelLine2: "engineers" },
      {
        value: 256,
        labelLine1: "Awards for architectural",
        labelLine2: "excellence",
      },
    ],
    imageAlt: "Contact — modern architecture",
  },

  banner3: {
    title: "NEW WAY OF LIVING",
    followUs: "Follow Us",
    ctaSecondary: "GET STARTED NOW",
    imageAlt: "New way of living",
  },

  services3: {
    items: [
      {
        icon: "icon-office-building",
        title: "Architectural Design",
        text: "Innovative structural concepts crafted with sustainable materials, smart space utilisation and bioclimatic design principles.",
      },
      {
        icon: "icon-interior-design",
        title: "Interior Spatial Harmony",
        text: "Curated living environments combining ergonomic comfort, timeless materiality and bespoke lighting arrangements.",
      },
      {
        icon: "icon-targeted",
        title: "Precision Project Planning",
        text: "Rigorous cost estimation, realistic scheduling, regulatory compliance and seamless execution management.",
      },
    ],
  },

  awards: {
    eyebrow: "International Awards",
    title: "Awards & Achievements",
    month: "OCT",
    day: "25",
    logoAlt: "Award logo",
    items: [
      {
        project: "Villa Daniel, Romania",
        award: "Red Dot Design Award",
        image: "/assets/img/resource/awards-v1-img1.webp",
      },
      {
        project: "Haus Seeblick, Switzerland",
        award: "German Design Award",
        image: "/assets/img/resource/awards-v1-img2.webp",
      },
      {
        project: "Atelier Nordlicht, Basel",
        award: "Iconic Awards Architecture",
        image: "/assets/img/resource/awards-v1-img3.webp",
      },
      {
        project: "Residenz Rheinblick, Strasbourg",
        award: "Architizer A+ Award",
        image: "/assets/img/resource/awards-v1-img4.webp",
      },
    ],
  },

  video3: {
    scrollingText: "ARY CREATIVE ARCHITECTURE SOLUTIONS",
  },

  projects3: {
    eyebrow: "OUR RECENT PROJECTS",
    title: "Take a look at our projects",
  },

  testimonial3: {
    eyebrow: "CLIENT TESTIMONIALS",
    titleLine1: "Why clients",
    titleLine2: "work with us",
  },

  about3: {
    projectAlt: "Architecture project overview",
    buildingAlt: "Modern building construction",
    interiorAlt: "Interior architectural detail",
  },

  team3: {
    eyebrow: "OUR TEAM",
  },

  beforeAfter: {
    eyebrow: "// TRANSFORMATION GALLERY",
    titleLine1: "From shell to perfection",
    titleLine2: "See our build quality in detail",
    text: "Drag the vertical divider with your mouse or by touch to discover the 1:1 difference between the structural shell phase and the finished, move-in-ready architecture.",
    tablistAria: "Transformation examples",
    sliderAria: "Before-and-after comparison slider",
    presets: {
      before: "Before",
      beforeTitle: "Fully before (shell phase)",
      split: "50 / 50",
      splitTitle: "50/50 view",
      after: "After",
      afterTitle: "Fully after (turnkey)",
    },
    projects: [
      {
        id: "luxury-villa-exterior",
        tabNumber: "01",
        tabTitle: "Exclusive villa estate",
        category: "Architecture & shell construction",
        subtitle:
          "Concrete structure & pool excavation ➔ Move-in-ready luxury residence with infinity pool & panoramic glazing",
        beforeImg: "/assets/img/project/villa-transformation-before.webp",
        beforeAlt:
          "Exclusive villa during the shell phase with concrete structure, scaffolding and pool excavation",
        beforeBadge: "Shell phase",
        afterImg: "/assets/img/project/villa-transformation-after.webp",
        afterAlt:
          "Completed luxury villa with swimming pool, glass balustrades and modern facade design",
        afterBadge: "Turnkey",
      },
      {
        id: "luxury-living-interior",
        tabNumber: "02",
        tabTitle: "Masterful interior fit-out",
        category: "Interior & full refurbishment",
        subtitle:
          "Bare floor & fireplace shell ➔ Finished living culture with travertine fireplace & herringbone parquet",
        beforeImg: "/assets/img/project/interior-transformation-before.webp",
        beforeAlt:
          "Living area during the shell phase with unplastered walls and underfloor heating pipework",
        beforeBadge: "Shell phase",
        afterImg: "/assets/img/project/interior-transformation-after.webp",
        afterAlt:
          "Turnkey designer living room with lit fireplace and fine oak parquet",
        afterBadge: "Turnkey",
      },
    ],
  },

  featureExplore: {
    eyebrow: "EXPLORE OUR FEATURE",
    titleLine1: "We provide the best",
    titleLine2: "architecture & interior design",
    text: "We deliver innovative, sustainable architectural designs, bespoke interior atmospheres and robust construction management. Our integrated team combines visionary creativity with precise engineering to bring exceptional spaces to life.",
    imageAlt: "Architecture & interior design",
  },
};

export default home;
