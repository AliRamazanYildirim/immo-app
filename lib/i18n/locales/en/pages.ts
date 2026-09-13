import type { PagesDict } from "../de/pages";

const pages: PagesDict = {
  meta: {
    defaultTitle: "ARY Tech Solutions — Creative Architecture",
    titleTemplate: "%s | ARY Tech Solutions",
    description:
      "Architecture, interior design and turnkey construction across Germany and Europe. Planning, permitting and site management from a single source.",
    keywords: [
      "architecture",
      "interior design",
      "construction management",
      "building renovation",
      "Sasbach",
      "Germany",
    ],
  },

  cta: {
    titleLine1: "Have a project in mind?",
    titleLine2: "Don't hesitate to say hello",
    button: "LET'S TALK",
  },

  about: {
    breadcrumbTitle: "About Us",
    breadcrumbBg: "/assets/img/about/page-header-bg.webp",
    whyChooseImages: [
      {
        src: "/assets/img/about/about-why-choose-img1.webp",
        alt: "Modern architectural design model",
      },
      {
        src: "/assets/img/about/about-why-choose-img2.webp",
        alt: "Architectural blueprints and materials",
      },
    ],
  },

  team: {
    breadcrumbTitle: "Our Team",
    breadcrumbBg: "/assets/img/team/page-header-bg.webp",
    eyebrow: "OUR TEAM",
    titleLine1: "Our talented team",
    titleLine2: "behind ARY GROUP",
    shareAria: "Share profile",
    members: [
      {
        name: "Marcus Vance",
        role: "Senior Architect",
        image: "/assets/img/team/team-v2-img1.webp",
      },
      {
        name: "Janes Cooper",
        role: "Lead Interior Designer",
        image: "/assets/img/team/team-v2-img2.webp",
      },
      {
        name: "David Miller",
        role: "Structural Engineer",
        image: "/assets/img/team/team-v2-img3.webp",
      },
      {
        name: "Sophia Laurent",
        role: "Landscape Architect",
        image: "/assets/img/team/team-v2-img4.webp",
      },
      {
        name: "Clara Schmidt",
        role: "Interior Concepts Specialist",
        image: "/assets/img/team/team-v2-img5.webp",
      },
      {
        name: "Alexander Wright",
        role: "Construction Manager",
        image: "/assets/img/team/team-v2-img6.webp",
      },
    ],
  },

  teamDetails: {
    breadcrumbTitle: "Team Details",
    breadcrumbBg: "/assets/img/team/page-header-bg.webp",
    brandTitle: "ARY GROUP",
    name: "Elena Rostova",
    role: "Lead Architect & Project Director",
    imageAlt: "Elena Rostova — Lead Architect & Project Director",
    labels: {
      department: "Department:",
      experience: "Experience:",
      email: "Email:",
      phone: "Phone:",
    },
    department: "Architecture & Interior Design",
    experience: "15 years",
    biographyTitle: "Elena Rostova's Biography",
    biography1:
      "With over 15 years of experience in architectural planning, interior design and sustainable construction management, Elena leads demanding residential and commercial developments from concept through turnkey delivery.",
    biography2:
      "She combines contemporary design with advanced BIM planning, sustainable materials and rigorous site supervision — so every project convinces in functionality, longevity and architectural quality.",
    skills: [
      { label: "Architectural design & 3D BIM", percent: 95 },
      { label: "Interior design & spatial concept", percent: 90 },
      { label: "Construction & site supervision", percent: 85 },
    ],
    experienceTitle: "Professional Experience",
    positions: [
      { company: "Studio Arki Berlin", role: "Lead Architect, BIM" },
      { company: "Metro Urban Builders", role: "Senior Construction Manager" },
      { company: "Atelier Interior Spaces", role: "Principal Interior Designer" },
      { company: "Alpine Habitat Design", role: "Sustainable Architecture Lead" },
    ],
    competenciesTitle: "Key Competencies & Specialisations",
    competencies1:
      "Specialising in comprehensive building design, bespoke spatial concepts, structural engineering coordination and precise turnkey execution.",
    competencies2:
      "Passionate about timeless spaces where design harmony meets environmental sustainability and German building culture.",
  },

  projects: {
    breadcrumbTitle: "Our Projects",
    breadcrumbBg: "/assets/img/project/page-header-bg.webp",
  },

  projectDetails: {
    breadcrumbTitle: "Project Details",
    breadcrumbBg: "/assets/img/project/page-header-bg.webp",
    heroAlt: "Project detail — completed architecture project",
    labels: {
      published: "Published:",
      category: "CATEGORY:",
      client: "Client:",
      previous: "Previous",
      next: "Next",
      relatedTitle: "Related Projects",
      shareAria: "Share project",
    },
    publishedDate: "20 April 2023",
    category: "Architecture / New build",
    client: "Private client",
    title: "Architectural Solutions and Building for the Future",
    text1:
      "This project shows how careful planning and consistent execution work together. The starting point was a precise analysis of the plot, orientation and zoning plan. The result is a compact volume that makes the most of daylight and keeps energy demand low. Structure, building services and interior fit-out were coordinated in the BIM model, so clashes were found before construction began and costs forecast reliably.",
    text2:
      "During construction we coordinated every trade ourselves and checked quality continuously on site. Exposed concrete, oak and large-format glazing form a calm material palette; the facade was detailed so that shadow gaps and material transitions follow the design exactly. The building was handed over on schedule and within the agreed budget.",
    tags: ["New build", "Residential", "Sustainability"],
    previousProject: "Haus Lindenhof",
    nextProject: "Atelier Nordlicht",
  },

  testimonials: {
    breadcrumbTitle: "Testimonials",
    breadcrumbBg: "/assets/img/testimonial/page-header-bg.webp",
    ctaButton: "MORE SERVICES",
  },

  faq: {
    breadcrumbTitle: "Frequently Asked Questions",
    breadcrumbBg: "/assets/img/background/page-header-bg.webp",
    ctaTitleLine1: "We are always ready to help you",
    ctaTitleLine2: "and answer your questions",
    ctaButton: "MORE SERVICES",
    items: [
      {
        question: "How long do design and building permits take?",
        answer:
          "Concept and preliminary design usually take 4 to 8 weeks. Building permit review generally takes 2 to 4 months depending on the authority and project scale.",
      },
      {
        question: "Do you offer turnkey construction and general contracting?",
        answer:
          "Yes. We deliver the complete turnkey package — excavation, shell construction, building envelope, MEP engineering and interior finishes under one contract.",
      },
      {
        question: "What is included in your interior architecture service?",
        answer:
          "Spatial flow optimisation, bespoke furniture and millwork design, lighting plans, material sourcing, photorealistic 3D renders plus complete furnishing and installation.",
      },
      {
        question: "How do you ensure budget compliance and avoid overruns?",
        answer:
          "Through detailed bills of quantities, competitive trade tendering and guaranteed-maximum-price contracts — secured by weekly variance audits.",
      },
      {
        question: "Do you renovate older or heritage-listed buildings?",
        answer:
          "Yes. We have particular expertise in energy-efficient modernisation and heritage restoration, reconciling conservation requirements with modern thermal performance and high living comfort.",
      },
      {
        question: "How does 3D BIM benefit the building process?",
        answer:
          "BIM creates a federated 3D model combining architecture, structure and MEP systems. Spatial clashes are eliminated before construction, which accelerates the build schedule.",
      },
      {
        question: "What energy standards do your buildings achieve?",
        answer:
          "We design and build to demanding energy standards (KfW 40, Passivhaus, DGNB), integrating geothermal heat pumps, photovoltaics and high-performance building envelopes.",
      },
      {
        question: "Do you manage building permits and structural engineering?",
        answer:
          "Yes. We coordinate all required disciplines — soil surveys, structural design, fire safety concepts and direct liaison with building control.",
      },
      {
        question: "What warranty and aftercare do you provide?",
        answer:
          "All works are handed over with a formal acceptance protocol and comprehensive statutory warranty (VOB/BGB) — including structured digital operations manuals for building maintenance.",
      },
    ],
  },

  contact: {
    breadcrumbTitle: "Contact Us",
    breadcrumbBg: "/assets/img/background/page-header-bg.webp",
    introTitle: "Get in Touch",
    introText:
      "We provide comprehensive architectural planning, interior design and turnkey construction consultation. Contact our team to bring your vision to life.",
    contactInfoTitle: "Contact Info",
    formTitle: "Let's Get in Touch",
    formNote:
      "Your email address will not be published. Required fields are marked *",
    fields: {
      name: "Your Name*",
      email: "Your Email*",
      phone: "Phone*",
      subject: "Subject*",
      website: "Website*",
      message: "Write Message*",
    },
    submit: "SEND MESSAGE",
    loading: "Please wait …",
    mapTitle: "Location on Google Maps",
  },

  notFound: {
    breadcrumbTitle: "404 — Page Not Found",
    code: "404",
    title: "Oops! Page not found",
    text: "The page you are looking for does not exist. It might have been moved or deleted.",
    button: "Back to home",
  },
};

export default pages;
