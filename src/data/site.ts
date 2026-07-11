export const site = {
  name: "Rohaan Nadeem",
  role: "Full-Stack Software Engineer",
  taglines: [
    "Full-Stack Software Engineer",
    "TypeScript & JavaScript Specialist",
    "MERN Stack Developer",
    "Building Scalable Web Applications",
  ],
  location: "Lahore, Punjab, Pakistan",
  phoneDisplay: "0308 4439359",
  phoneHref: "tel:+923084439359",
  email: "rohaannadeem2@gmail.com",
  linkedin: "https://www.linkedin.com/in/rohaannadeem",
  github: "https://github.com/Rohaan02/",
  resumeUrl: "/documents/Rohaan-Nadeem-CV.pdf",
  profileImage: "/images/profile.jpg",
  siteUrl: "https://rohaan02.github.io",
  summary:
    "As a Full-Stack Software Engineer, I specialize in architecting and deploying scalable, high-performance web applications using the MERN stack. My passion lies in solving complex problems through clean, efficient code and cloud-native solutions. I have a proven track record of delivering end-to-end software development projects — from database architecture to intuitive front-end design and cloud integration. Whether it’s optimizing existing systems or building new features from the ground up, I thrive on creating digital experiences that are both functional and impactful.",
  stats: [
    { label: "Years of Experience", value: "3+" },
    { label: "Client & University Projects", value: "20+" },
    { label: "Core Technologies", value: "10+" },
    { label: "Published Research", value: "1" },
  ],
};

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
  { label: "Phone", href: site.phoneHref, icon: "call" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "MOOCs", href: "/moocs" },
  { label: "Projects", href: "/projects" },
  { label: "Researches", href: "/researches" },
  { label: "Contact", href: "/contact" },
];
