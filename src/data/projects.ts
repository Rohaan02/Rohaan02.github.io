export type WordpressProject = {
  slug: string;
  name: string;
  category: "Static" | "E-commerce";
  url: string;
  logo?: string;
};

export type UniversityProject = {
  slug: string;
  name: string;
  semester: string;
  description: string;
  fileUrl: string;
  tech: string[];
};

export type CustomProject = {
  slug: string;
  name: string;
  company: string;
  liveUrl: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
};

export const wordpressProjects: WordpressProject[] = [
  {
    slug: "highlands-ranch-carpet-cleaning",
    name: "Highlands Ranch Carpet Cleaning Co",
    category: "Static",
    url: "https://highlandsranchcarpetcleaningco.com/",
    logo: "/images/clients/highlands-ranch-carpet-cleaning.webp",
  },
  {
    slug: "chronicles-of-heavenly-demon",
    name: "Chronicles Of Heavenly Demon",
    category: "Static",
    url: "https://chroniclesofheavenlydemon.net/chronicles-of-heavenly-demon-e/",
    logo: "/images/clients/chronicles-of-heavenly-demon.webp",
  },
  {
    slug: "baofficesupport",
    name: "Baofficesupport",
    category: "Static",
    url: "https://baofficesupport.com/",
    logo: "/images/clients/baofficesupport.webp",
  },
  {
    slug: "cornucopia-co-uk",
    name: "Cornucopia UK",
    category: "Static",
    url: "https://www.cornucopia.co.uk/",
    logo: "/images/clients/cornucopia-co-uk.webp",
  },
  {
    slug: "the-coal-trader",
    name: "The Coal Trader",
    category: "Static",
    url: "https://thecoaltrader.com/",
    logo: "/images/clients/the-coal-trader.webp",
  },
  {
    slug: "jabal-crete",
    name: "Jabal Crete",
    category: "Static",
    url: "http://jabalcrete.com/",
    logo: "/images/clients/jabal-crete.webp",
  },
  {
    slug: "antek-market-france",
    name: "Antek Market France",
    category: "Static",
    url: "http://antek-marketfr.com/",
  },
  {
    slug: "zaash-technologies",
    name: "ZAASH Technologies LLC",
    category: "Static",
    url: "https://www.zaashtechnologies.com/",
    logo: "/images/clients/zaash-technologies.png",
  },
  {
    slug: "wisecare-fastcleanpc",
    name: "Wisecare Fastcleanpc",
    category: "Static",
    url: "https://wisecare.fastcleanpc.com/",
  },
  {
    slug: "lastlook",
    name: "Lastlook",
    category: "E-commerce",
    url: "https://lastlook.pk/",
    logo: "/images/clients/lastlook-pk.png",
  },
  {
    slug: "masalybaz",
    name: "MasalyBaz",
    category: "E-commerce",
    url: "https://masalybaz.pk/",
    logo: "/images/clients/masalybaz-pk.png",
  },
  {
    slug: "shikanji-premix",
    name: "Shikanji Premix",
    category: "E-commerce",
    url: "https://shikanjipremix.com/",
    logo: "/images/clients/shikanjipremix.png",
  },
  {
    slug: "unique-accessories",
    name: "Unique Accessories",
    category: "E-commerce",
    url: "https://uniqueaccessories.pk/",
    logo: "/images/clients/uniqueaccessories-pk.png",
  },
  {
    slug: "the-vault",
    name: "The Vault",
    category: "E-commerce",
    url: "https://vaultkc.com/",
    logo: "/images/clients/vaultkc.png",
  },
  {
    slug: "alrifaa-plants-shop",
    name: "Alrifaa Plants Shop",
    category: "E-commerce",
    url: "https://alrifaaplantsshop.com/",
  },
  {
    slug: "ww-cutting-solutions",
    name: "WW Cutting Solutions",
    category: "E-commerce",
    url: "https://wwcuttingsolutions.pk/",
    logo: "/images/clients/ww-cutting-solutions.webp",
  },
];

export const universityProjects: UniversityProject[] = [
  {
    slug: "amazon-project-html-css",
    name: "Amazon Project (HTML/CSS)",
    semester: "1st Semester Project",
    description:
      "A static clone of the Amazon storefront UI built with plain HTML and CSS, focused on layout structure and responsive fundamentals.",
    fileUrl:
      "https://github.com/Rohaan02/Projects.github.io/blob/main/Amazon-Project-HTML-CSS.zip",
    tech: ["HTML", "CSS"],
  },
  {
    slug: "cpp-hospital-management-system",
    name: "C++ Hospital Management System with OOP",
    semester: "2nd Semester Project",
    description:
      "A console-based hospital management system demonstrating object-oriented programming principles — patient records, doctor scheduling, and billing.",
    fileUrl:
      "https://github.com/Rohaan02/Projects.github.io/blob/main/C%2B%2B%20Hospital%20Management%20System%20with%20Oop.doc",
    tech: ["C++", "OOP"],
  },
  {
    slug: "cpp-airport-management-system",
    name: "C++ Airport Management System with DSA",
    semester: "3rd Semester Project",
    description:
      "An airport management system applying core data structures and algorithms — flight scheduling, queues, and search/sort operations.",
    fileUrl:
      "https://github.com/Rohaan02/Projects.github.io/blob/main/C%2B%2B%20AIrport%20Management%20System%20with%20DSA.docx",
    tech: ["C++", "Data Structures & Algorithms"],
  },
  {
    slug: "cpp-cinema-ticket-center",
    name: "C++ Cinema Ticket Center",
    semester: "3rd Semester Project",
    description:
      "A console application for booking cinema tickets, managing seat availability and showtimes.",
    fileUrl:
      "https://github.com/Rohaan02/Projects.github.io/blob/main/C%2B%2B%20Cinema%20Ticket%20Center.zip",
    tech: ["C++"],
  },
  {
    slug: "coal-project-arduino-nano",
    name: "Coal Project with Arduino Nano",
    semester: "3rd Semester Project",
    description:
      "An embedded systems project using Arduino Nano for coal-related sensor monitoring, combining hardware interfacing with control logic.",
    fileUrl:
      "https://github.com/Rohaan02/Projects.github.io/blob/main/Coal%20Project%20with%20Arduino%20Nano.zip",
    tech: ["Arduino", "Embedded Systems", "C++"],
  },
];

export const customProjects: CustomProject[] = [
  {
    slug: "amica-digital-services",
    name: "Amica Digital Services",
    company: "Heights Studio",
    liveUrl: "https://amicadigitalservices.com/",
    description:
      "A React + Node.js marketing platform for an AI-automation agency, built around a weighted lead-scoring intake form that auto-routes prospects to tailored email sequences.",
    longDescription:
      "Built the full client-facing platform for Amica Digital Services, an AI-automation and growth-marketing agency: a multi-page React (Vite) site covering Home, Services (with dynamic per-service detail pages), Pricing, About, a Blog, and a client case study, backed by an Express + Nodemailer API for transactional email. The centerpiece is a Formik/Yup-validated intake form that runs every submission through a custom weighted scoring algorithm — monthly and setup budget, timeline, decision-making authority, industry vertical, interest in AI automation, existing CRM, and response-time expectations — to compute a 0–100 fit score, then instantly branches the visitor to a Qualified, Semi-Qualified, or Not-Qualified outcome screen while the backend fires the matching email template over Hostinger Titan SMTP.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "Formik", "Yup", "Node.js", "Express.js", "Nodemailer"],
    highlights: [
      "Custom weighted lead-scoring engine (0–100) that classifies prospects as Qualified, Semi-Qualified, or Not-Qualified in real time.",
      "Automated, tier-specific email delivery (qualified lead, semi-qualified lead, team notification, welcome email) via an Express + Nodemailer API.",
      "Dedicated intake variant and messaging for the care-agency industry vertical, plus dynamic per-route SEO metadata across the site.",
    ],
  },
  {
    slug: "amica-digital-italy",
    name: "Amica Digital — Italian Edition",
    company: "Heights Studio",
    liveUrl: "https://amicadigital.it/",
    description:
      "The Italian-market localization of Amica Digital Services — the same React/Node.js platform fully translated with EN/IT language switching.",
    longDescription:
      "Localized the Amica Digital Services platform for the Italian market at amicadigital.it, adding full internationalization with react-i18next and automatic browser-language detection across separate English and Italian translation bundles. It shares the same architecture as the English platform — the multi-page React (Vite) front end, the Formik/Yup lead-qualification intake flow with weighted scoring, and the Express + Nodemailer backend for tier-based transactional email — adapted end-to-end for an Italian-speaking audience, and deployed as an independent frontend/backend from the primary site.",
    tech: ["React", "Vite", "react-i18next", "Tailwind CSS", "React Router", "Formik", "Yup", "Node.js", "Express.js", "Nodemailer"],
    highlights: [
      "Full EN/IT internationalization with react-i18next and automatic browser-language detection.",
      "Same lead-scoring intake and tiered email-automation engine as the English platform, localized for the Italian market.",
      "Independently deployed frontend and backend serving amicadigital.it alongside amicadigitalservices.com.",
    ],
  },
  {
    slug: "rislix",
    name: "Rislix — Cybersecurity, GRC & AI Governance",
    company: "Rislix",
    liveUrl: "https://rislix.com/",
    description:
      "The marketing and lead-generation site for Rislix, a cybersecurity, GRC, and AI-governance consultancy — a multi-page React platform with Microsoft Graph-powered transactional email.",
    longDescription:
      "Built the public-facing platform for Rislix, a cybersecurity, GRC (Governance, Risk & Compliance), and AI-governance consultancy: a multi-page React (Vite) site spanning Home, an 11-service \"What We Do\" catalog, a \"Who We Help\" segment for SMEs, entrepreneurs, and directors, a 6-tier pricing page, 4 client case studies, an About Us page, and a filterable 10-article Knowledge Centre. The contact flow is backed by an Express API that authenticates against Azure AD via MSAL's confidential-client OAuth2 flow and sends both an admin lead-notification email and a user confirmation email through the Microsoft Graph API's sendMail endpoint, rather than a conventional SMTP relay. The frontend ships through a git-pull-based cPanel deployment workflow, with SEO handled via react-helmet-async.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "MUI Icons",
      "react-helmet-async",
      "Node.js",
      "Express.js",
      "Microsoft Graph API",
      "Azure MSAL",
    ],
    highlights: [
      "11-service catalog, 6-tier pricing, 4 case studies, and a filterable 10-article knowledge base across a fully-routed multi-page React site.",
      "Contact form delivers email via the Microsoft Graph API (OAuth2 client-credentials flow through Azure MSAL) instead of plain SMTP — separate admin-notification and user-confirmation messages per submission.",
      "Git-pull-based cPanel deployment workflow for zero-build-on-server production releases.",
    ],
  },
];
