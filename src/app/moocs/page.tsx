import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import CertificateCard from "@/components/moocs/CertificateCard";
import { moocs } from "@/data/moocs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "MOOCs & Certifications",
  description: `Massive Open Online Courses and professional certifications completed by ${site.name}.`,
};

export default function MoocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Lifelong learning"
        title="MOOCs & Certifications"
        description="Courses, certifications, and participation credentials from Coursera, Udemy, and industry programs."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moocs.map((cert) => (
            <CertificateCard key={cert.slug} cert={cert} />
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
