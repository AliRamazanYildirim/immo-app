import type { BlogDict } from "../de/blog";

const blog: BlogDict = {
  list: {
    breadcrumbTitle: "Our Blog",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  sidebarPage: {
    breadcrumbTitle: "Blog with Sidebar",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  posts: [
    {
      category: "Architecture",
      date: "2 July 2023",
      titleLine1: "Is architecture a good career",
      titleLine2: "in our daily life?",
      image: "/assets/img/blog/blog-v1-img1.webp",
      alt: "Architecture studio working on a design",
    },
    {
      category: "Design",
      date: "2 July 2023",
      titleLine1: "Architecture is a visual art —",
      titleLine2: "buildings speak for themselves",
      image: "/assets/img/blog/blog-v1-img2.webp",
      alt: "Facade detail of a modern building",
    },
    {
      category: "Build Quality",
      date: "2 July 2023",
      titleLine1: "We stand for quality and safety,",
      titleLine2: "so you can trust us",
      image: "/assets/img/blog/blog-v1-img3.webp",
      alt: "Construction site quality inspection",
    },
  ],

  /** Long-form cards used on the sidebar variant. */
  sidebarPosts: [
    {
      date: "21 April 2023",
      author: "Elena Rostova",
      titleLine1: "The best solution for architectural",
      titleLine2: "problems and creativity",
      image: "/assets/img/blog/blog-sidebar-img1.webp",
      alt: "Architecture studio working on a design",
    },
    {
      date: "21 April 2023",
      author: "Marcus Vance",
      titleLine1: "How good lighting design",
      titleLine2: "transforms a room",
      image: "/assets/img/blog/blog-sidebar-img2.webp",
      alt: "Interior with layered lighting design",
    },
    {
      date: "21 April 2023",
      author: "Janes Cooper",
      titleLine1: "Choosing materials that still",
      titleLine2: "convince after ten years",
      image: "/assets/img/blog/blog-sidebar-img3.webp",
      alt: "Material samples in natural stone and oak",
    },
    {
      date: "21 April 2023",
      author: "David Miller",
      titleLine1: "Energy retrofits:",
      titleLine2: "where you should start",
      image: "/assets/img/blog/blog-sidebar-img4.webp",
      alt: "Facade insulation on a renovation project",
    },
  ],

  details: {
    breadcrumbTitle: "Blog Details",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
    meta: {
      date: "23 March 2022",
      category: "ARCHITECTURE",
      byLabel: "BY",
      author: "Elena Rostova",
      commentsLabel: "{count} comments",
    },
    heading1: "Good design starts with the site",
    text1:
      "Before the first line is drawn comes the analysis: orientation, topography, neighbouring buildings, zoning plan and microclimate. Only once these conditions are clear does a design emerge that uses daylight, reduces energy demand and sits naturally in its surroundings. Skip this step and you pay for it later — in variations, in running costs, or in rooms that never quite feel right.",
    heading2: "From model to building site",
    text2:
      "In the BIM model, architecture, structure and building services come together. Clashes appear on screen rather than on site, quantities can be determined reliably and costs forecast precisely. That leaves time on site for what really matters: execution quality.",
    quote:
      "A building is good when it still feels self-evident twenty years on — not when it shouts loudest in its first year.",
    quoteAuthor: "Elena Rostova, Lead Architect",
    postedIn: "Posted in:",
    tags: ["Architecture", "Planning", "Sustainability"],
    shareAria: "Share post",
    imageAlts: {
      main: "Interior view of a completed residential project",
      secondary1: "Detail of a timber-concrete structure",
      secondary2: "Facade section with panoramic glazing",
    },
    comments: {
      title: "Comments ({count})",
      items: [
        {
          author: "Saiful Islam",
          date: "3 February 2023",
          text: "Very well explained — especially the point that site analysis determines the quality of the later design.",
          avatar: "/assets/img/blog/blog-details-img4.webp",
        },
        {
          author: "Jhon Smith",
          date: "3 February 2023",
          text: "The description of the BIM process matches our experience: finding clashes early saves the most time in the end.",
          avatar: "/assets/img/blog/blog-details-img5.webp",
        },
      ],
      replyLabel: "Reply",
    },
    form: {
      title: "Let's Get in Touch",
      note: "Your email address will not be published. Required fields are marked *",
      name: "Your Name*",
      email: "Your Email*",
      website: "Website*",
      message: "Write Message*",
      submit: "Send message",
    },
    sidebar: {
      searchTitle: "Search",
      searchPlaceholder: "Keywords here …",
      categoriesTitle: "Categories",
      categories: [
        "Architecture",
        "Interior Design",
        "Building Renovation",
        "Construction Management",
      ],
      recentTitle: "Recent Posts",
      recentPosts: [
        {
          titleLine1: "Good design starts",
          titleLine2: "with the site",
          date: "21 April 2023",
          image: "/assets/img/blog/sidebar-img1.webp",
        },
        {
          titleLine1: "From BIM model",
          titleLine2: "to building site",
          date: "21 April 2023",
          image: "/assets/img/blog/sidebar-img2.webp",
        },
        {
          titleLine1: "Renovate instead",
          titleLine2: "of demolish",
          date: "21 April 2023",
          image: "/assets/img/blog/sidebar-img3.webp",
        },
      ],
      tagsTitle: "Tags",
      tags: [
        "Planning",
        "Design",
        "Services",
        "Renovation",
        "BIM",
        "Sustainability",
      ],
    },
  },
};

export default blog;
