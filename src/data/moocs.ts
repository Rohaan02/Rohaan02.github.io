export type MoocCertificate = {
  slug: string;
  title: string;
  issuer: string;
  description?: string;
  image: string;
  url: string;
};

export const moocs: MoocCertificate[] = [
  {
    slug: "react-frontend-coursera",
    title: "Front-End Web Development with React",
    issuer: "The Hong Kong University of Science and Technology — Coursera",
    image: "/images/certificates/coursera-react-frontend.jpg",
    url: "https://coursera.org/share/634e0ddac6d6bf262b50a23af0ad57b8",
  },
  {
    slug: "html-css-js-coursera",
    title: "HTML, CSS, JavaScript for Web Developers",
    issuer: "Johns Hopkins University — Coursera",
    image: "/images/certificates/coursera-html-css-js.jpg",
    url: "https://coursera.org/share/8380a5875591d34463056a7742fe1cfd",
  },
  {
    slug: "excel-skills-coursera",
    title: "Excel Skills for Business Essentials",
    issuer: "Macquarie University, Sydney — Coursera",
    image: "/images/certificates/coursera-excel-skills.jpg",
    url: "https://coursera.org/share/30090e32c825baabf3a1d3418f43c379",
  },
  {
    slug: "google-seo-coursera",
    title: "Introduction to Google SEO",
    issuer: "UC Davis — Coursera",
    image: "/images/certificates/coursera-google-seo.jpg",
    url: "https://www.coursera.org/account/accomplishments/verify/L2P3JPRBULZA",
  },
  {
    slug: "wordpress-udemy",
    title: "WordPress Mastery for Beginners — Fast Way to Learn WP",
    issuer: "Abhay Vishnol — Udemy",
    description:
      "Learned WordPress and completed tasks across different website types with responsive design.",
    image: "/images/certificates/wordpress-udemy.jpg",
    url: "https://www.udemy.com/certificate/UC-330bc28c-264d-4d22-8bd8-2bbc8ce72850/",
  },
  {
    slug: "superior-enterprises-internship",
    title: "Certificate of Internship",
    issuer: "Superior Enterprises — Onsite",
    description:
      "Completed practical tasks across different website types: development, maintenance, and modification with responsive design, plus design work in Canva.",
    image: "/images/certificates/superior-enterprises-internship.jpg",
    url: "/images/certificates/superior-enterprises-internship.jpg",
  },
  {
    slug: "techtehvaar-ieee-wie",
    title: "Certificate of Participation — TechTehvaar",
    issuer: "IEEE WIE Lahore Section & Microsoft Learn Student Ambassador",
    image: "/images/certificates/techtehvaar-ieee-wie.jpg",
    url: "/images/certificates/techtehvaar-ieee-wie.jpg",
  },
  {
    slug: "techtehvaar-msla",
    title: "Certificate of Participation — Microsoft Learn Student Ambassador",
    issuer: "IEEE WIE Lahore Section & Microsoft Learn Student Ambassador",
    image: "/images/certificates/techtehvaar-msla.jpg",
    url: "/images/certificates/techtehvaar-msla.jpg",
  },
];
