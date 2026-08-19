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
    slug: "igknighttech-software-engineer-full-stack-developer",
    company: "IgknightTech",
    companySlug: "igknighttech",
    role: "Software Engineer (Full Stack Developer)",
    period: "December 2025 — Present",
    location: "Johar Town, Lahore, Pakistan",
    current: true,
    description:
      "Architecting and building scalable, high-impact web applications across multiple domains and a versatile stack, transitioning seamlessly between front-end and back-end responsibilities to deliver clean, maintainable code that ensures high performance, responsiveness, and a seamless user experience.",
    highlights: [
      "Building applications using MERN (MongoDB, Express, React, Node.js), Go (Golang), and Ruby on Rails, with React.js front-end interfaces and API/server-side logic on the back end.",
      "Delivering end-to-end features across the full stack to meet complex client requirements, from architecture through to a responsive, high-performance UI.",
      "Handled end-to-end deployment and hosting on AWS and Hostinger, including server configuration, VPC setup, and performance optimization.",
      "Used Docker for containerization and n8n for workflow automation to streamline development and reduce manual processes.",
      "Collaborated closely with the engineering team under the mentorship of Team Lead Jawad to resolve complex engineering challenges; also gained hands-on experience with WordPress development and customization.",
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
