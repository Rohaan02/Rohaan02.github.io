import type { Metadata } from "next";
import { Geist, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import { experience } from "@/data/experience";
import { techChips } from "@/data/skills";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.summary.slice(0, 155),
  keywords: [
    "Rohaan Nadeem",
    "Full-Stack Software Engineer",
    "MERN Stack Developer",
    "Web Developer Lahore",
    "React Developer",
    "Node.js Developer",
  ],
  authors: [{ name: site.name, url: site.siteUrl }],
  openGraph: {
    type: "website",
    url: site.siteUrl,
    title: `${site.name} | ${site.role}`,
    description: site.summary.slice(0, 155),
    siteName: site.name,
    images: [{ url: site.profileImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.summary.slice(0, 155),
    images: [site.profileImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const currentRoles = experience.filter((role) => role.current);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.name.split(" ")[0],
  jobTitle: site.role,
  description: site.summary,
  url: site.siteUrl,
  image: `${site.siteUrl}${site.profileImage}`,
  email: site.email,
  telephone: site.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  worksFor: currentRoles.map((role) => ({
    "@type": "Organization",
    name: role.company,
  })),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Bahria University",
  },
  knowsAbout: techChips,
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable} ${geist.variable} h-full antialiased`}
    >
      {/* eslint-disable-next-line @next/next/no-page-custom-font -- global icon font, loaded once in the root layout shared by every route */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        precedence="default"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <body className="min-h-full flex flex-col font-body-md">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
