export type SkillGroup = {
  title: string;
  skills: string[];
};

export const coreExpertise = [
  { name: "TypeScript", icon: "code_blocks", color: "primary" },
  { name: "Node.js", icon: "terminal", color: "secondary" },
  { name: "React", icon: "layers", color: "tertiary" },
  { name: "AWS", icon: "cloud_queue", color: "secondary-container" },
];

export const techChips = [
  "MongoDB",
  "Express.js",
  "Next.js",
  "Docker",
  "MySQL",
  "Redux",
  "Go (Golang)",
  "Ruby on Rails",
  "REST APIs",
  "n8n Automation",
  "WordPress",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C++", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "ASP.NET MVC", "Go (Golang)", "Ruby on Rails"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, VPC, S3)", "Docker", "Hostinger", "n8n Automation"],
  },
  {
    title: "CMS & Tools",
    skills: ["WordPress (Elementor, WPBakery)", "Git & GitHub", "Canva", "On-page SEO"],
  },
];
