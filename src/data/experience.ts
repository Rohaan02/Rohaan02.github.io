export type ExperienceItem = {
  slug: string;
  company: string;
  companySlug: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  description: string;
  highlights?: string[];
};

export const experience: ExperienceItem[] = [
  {
    slug: "igknightech-software-engineer",
    company: "IgknighTech",
    companySlug: "igknightech",
    role: "Software Engineer",
    period: "May 2026 — Present",
    location: "Johar Town, Lahore",
    current: true,
    description:
      "Architecting and developing high-impact web applications across a versatile stack, transitioning seamlessly between front-end and back-end responsibilities to deliver clean, maintainable code that meets complex client requirements.",
    highlights: [
      "Building applications using MERN (MongoDB, Express, React, Node.js), Go (Golang), and Ruby on Rails.",
      "Delivering end-to-end features across the full stack with modern frameworks.",
      "Collaborating closely with the engineering team under the mentorship of Team Lead Jawad to streamline workflows and resolve complex engineering challenges.",
    ],
  },
  {
    slug: "rislix-associate-grc-consultant",
    company: "Rislix",
    companySlug: "rislix",
    role: "Associate GRC Consultant",
    period: "March 2026 — Present",
    location: "Remote",
    current: true,
    description:
      "Bridging technology and governance — supporting Governance, Risk, and Compliance initiatives alongside full-stack engineering work, aligning technical practices with security and compliance standards.",
  },
  {
    slug: "heights-studio-full-stack-developer",
    company: "Heights Studio",
    companySlug: "heights-studio",
    role: "Full Stack Developer",
    period: "December 2025 — May 2026 (6 months)",
    location: "Wapda Town, Lahore, Pakistan",
    current: false,
    description:
      "Built and maintained scalable web-based applications across multiple domains, contributing to both frontend and backend development to ensure high performance, responsiveness, and seamless user experience.",
    highlights: [
      "Developed dynamic, user-friendly interfaces using React.js on the frontend.",
      "Worked with APIs and server-side logic to support application functionality and integrations.",
      "Handled end-to-end deployment and hosting on AWS and Hostinger, including server configuration and performance optimization.",
      "Used Docker for containerization to streamline development and deployment workflows.",
      "Designed and implemented workflow automations with n8n to reduce manual processes.",
      "Gained hands-on experience with AWS services, VPC configuration, and WordPress development.",
    ],
  },
  {
    slug: "expertscloud-associate-software-engineer",
    company: "ExpertsCloud",
    companySlug: "expertscloud",
    role: "Associate Software Engineer",
    period: "July 2024 — December 2025 (1 year 6 months)",
    location: "Bahria Town, Lahore, Punjab, Pakistan",
    current: false,
    description:
      "Collaborated with a dynamic team to design and develop scalable web applications using the MERN (MongoDB, Express.js, React, Node.js) stack.",
    highlights: [
      "Built and optimized backend APIs and implemented responsive user interfaces.",
      "Ensured seamless integration between frontend and backend systems.",
      "Debugged and troubleshot issues to improve application performance and user experience.",
    ],
  },
  {
    slug: "vision-plus-aspnet-developer",
    company: "Vision Plus Technologies",
    companySlug: "vision-plus",
    role: "ASP.NET Developer",
    period: "August 2023 — October 2023 (3 months)",
    location: "Lahore, Punjab, Pakistan",
    current: false,
    description:
      "Worked as a Full Stack Developer developing ERP solutions for clients using ASP.NET MVC, building, customizing, and maintaining enterprise-level web applications.",
  },
  {
    slug: "vision-plus-aspnet-developer-intern",
    company: "Vision Plus Technologies",
    companySlug: "vision-plus",
    role: "ASP.NET Developer Intern",
    period: "June 2022 — September 2022 (4 months)",
    location: "Lahore, Punjab, Pakistan",
    current: false,
    description:
      "Gained hands-on experience in ASP.NET web development, focusing on frontend fundamentals and assisting in web-based projects, plus WordPress development and customization.",
  },
  {
    slug: "superior-tech-solutions-wordpress-developer",
    company: "Superior Tech Solutions",
    companySlug: "superior-tech-solutions",
    role: "WordPress Developer",
    period: "March 2022 — May 2022 (3 months)",
    location: "Gulberg, Lahore, Punjab, Pakistan",
    current: false,
    description:
      "Designed and developed client-focused landing pages using WordPress page builders such as Elementor and WPBakery, assisting with on-page SEO and performance improvements.",
  },
];
