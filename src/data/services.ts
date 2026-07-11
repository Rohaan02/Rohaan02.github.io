export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary";
  heroDescription: string;
  process: { title: string; description: string }[];
  techStack: string[];
  addOns?: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Bespoke, scalable software built around your exact business workflow — from internal tools to full SaaS platforms.",
    icon: "deployed_code",
    color: "primary",
    heroDescription:
      "I design and build custom software tailored to your business — replacing spreadsheets and manual processes with reliable, scalable systems. Using the MERN stack, Go, and Ruby on Rails, I deliver end-to-end solutions covering database architecture, API design, and cloud deployment.",
    process: [
      {
        title: "Discovery & Requirements",
        description:
          "Understanding your workflow, business rules, and constraints to scope a solution that fits — not a generic template.",
      },
      {
        title: "Architecture & Database Design",
        description:
          "Designing a scalable data model and API structure (MongoDB, MySQL, or PostgreSQL) suited to your data and access patterns.",
      },
      {
        title: "Development & Integration",
        description:
          "Building clean, maintainable backend services and frontend interfaces, integrating third-party APIs where needed.",
      },
      {
        title: "Deployment & Support",
        description:
          "Deploying to AWS or your host of choice with Docker, and providing ongoing support as your requirements evolve.",
      },
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "React.js",
      "MongoDB",
      "MySQL",
      "AWS",
      "Docker",
      "Go (Golang)",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription:
      "Fast, responsive, SEO-friendly websites — from WordPress landing pages to full custom-built platforms.",
    icon: "language",
    color: "secondary",
    heroDescription:
      "From WordPress landing pages to fully custom-built platforms with Next.js and React, I build websites that load fast, rank well, and convert — with responsive design across every screen size.",
    process: [
      {
        title: "Planning & Structure",
        description: "Mapping out site structure, content, and SEO strategy before writing a single line of code.",
      },
      {
        title: "Design & Build",
        description:
          "Building with WordPress (Elementor/WPBakery) for content-driven sites, or React/Next.js for fully custom builds.",
      },
      {
        title: "SEO & Performance",
        description:
          "On-page SEO, image/asset optimization, and Core Web Vitals tuning so the site is genuinely discoverable and fast.",
      },
      {
        title: "Launch & Handover",
        description: "Deploying, connecting your domain, and handing over a site that's easy to maintain and extend.",
      },
    ],
    techStack: ["WordPress", "Elementor", "WPBakery", "React.js", "Next.js", "Tailwind CSS"],
    addOns: [
      {
        title: "E-commerce",
        description:
          "Full online store builds with product catalogs, cart, checkout, and payment integration — delivered for clients like Lastlook, MasalyBaz, and Shikanji Premix.",
      },
      {
        title: "SEO Optimization",
        description:
          "Technical and on-page SEO audits, keyword-driven content structure, and performance improvements to increase organic reach.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    shortDescription:
      "Cross-platform and web-based application development, backed by solid API design and cloud infrastructure.",
    icon: "smartphone",
    color: "tertiary",
    heroDescription:
      "I build application experiences — from responsive web apps that behave like native apps to backend services and APIs that power mobile clients — with a focus on performance and clean architecture.",
    process: [
      {
        title: "Product Scoping",
        description: "Defining core flows and platform requirements to keep the build focused and shippable.",
      },
      {
        title: "API & Backend",
        description: "Building robust REST APIs with Node.js/Express, backed by MongoDB, MySQL, or PostgreSQL.",
      },
      {
        title: "Frontend Experience",
        description: "Building responsive, app-like interfaces in React with attention to state, loading, and error states.",
      },
      {
        title: "Deployment & Monitoring",
        description: "Deploying to AWS with Docker, plus monitoring and iterating post-launch.",
      },
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Docker"],
  },
];
