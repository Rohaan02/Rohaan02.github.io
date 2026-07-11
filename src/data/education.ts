export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description?: string;
};

export const education: EducationItem[] = [
  {
    degree: "BSCS — Bachelor of Science in Computer Science",
    institution: "Bahria University (Project of Pakistan Navy), Lahore Campus",
    period: "Sep 2020 — Aug 2024",
    description:
      "Completed a 4-year Computer Science degree, including a published IEEE research paper during final year on automated PDF data extraction.",
  },
  {
    degree: "Primary to Intermediate (FSc. Pre-Engineering)",
    institution: "Crescent Model Higher Secondary School",
    period: "Oct 2008 — Jul 2020",
    description:
      "Completed schooling from Class 1 through intermediate (FSc. Pre-Engineering), building the foundation for a career in engineering and computer science.",
  },
];
