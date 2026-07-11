export type Author = {
  name: string;
  linkedin?: string;
  affiliation: string;
  isMe?: boolean;
};

export type Publication = {
  slug: string;
  title: string;
  venue: string;
  date: string;
  location: string;
  doi: string;
  doiUrl: string;
  ieeeUrl: string;
  isbn?: string;
  publisher: string;
  authors: Author[];
  abstract: string;
  citesInPapers?: number;
  fullTextViews?: number;
};

export const publications: Publication[] = [
  {
    slug: "extraction-of-user-defined-information-from-pdf",
    title: "Extraction of User-Defined Information from PDF",
    venue:
      "2024 International Conference on Decision Aid Sciences and Applications (DASA)",
    date: "11–12 December 2024 (added to IEEE Xplore 17 January 2025)",
    location: "Manama, Bahrain",
    doi: "10.1109/DASA63652.2024.10836169",
    doiUrl: "https://doi.org/10.1109/DASA63652.2024.10836169",
    ieeeUrl: "https://ieeexplore.ieee.org/document/10836169",
    publisher: "IEEE",
    citesInPapers: 7,
    fullTextViews: 251,
    authors: [
      {
        name: "Rohaan Nadeem",
        isMe: true,
        affiliation:
          "Department of Computer Sciences, Bahria University Lahore Campus, Lahore, Pakistan",
      },
      {
        name: "Tahir Iqbal",
        linkedin: "https://www.linkedin.com/in/tahirik/",
        affiliation:
          "Department of Computer Sciences, Bahria University Lahore Campus, Lahore, Pakistan",
      },
      {
        name: "Noor Fatima",
        linkedin: "https://www.linkedin.com/in/noor-fatima-2571a222a/",
        affiliation:
          "Software Development and Testing Engineering, Lahore, Pakistan",
      },
      {
        name: "Junaid Altaf",
        linkedin: "https://www.linkedin.com/in/junaid-altaf/",
        affiliation: "Gulab Devi Educational Complex, Lahore, Pakistan",
      },
      {
        name: "Asma Irshad",
        affiliation:
          "School of Biochemistry and Biotechnology, University of the Punjab, Lahore, Pakistan",
      },
      {
        name: "Asif Farooq",
        linkedin: "https://www.linkedin.com/in/asif-farooq-32a11090/",
        affiliation:
          "Department of Computer Sciences, Bahria University Lahore Campus, Lahore, Pakistan",
      },
    ],
    abstract:
      "Exporting selected textual data from PDF formats is a challenging task due to the diverse structures of these documents. This project introduces a tool for efficient extraction of user-defined textual data from PDF documents using PyMuPDF. The system is specifically designed to handle text-based content, ensuring precision and speed for researchers, analysts, and professionals. The tool does not focus on handling non-textual elements or diverse PDF layouts, making it a streamlined solution for text-based PDF processing.",
  },
];
