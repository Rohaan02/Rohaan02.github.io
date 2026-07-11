import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PublicationCard from "@/components/research/PublicationCard";
import { publications } from "@/data/publications";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Researches",
  description: `Published research and papers authored or co-authored by ${site.name}.`,
};

export default function ResearchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Published work"
        title="Researches"
        description="Peer-reviewed research published during my Computer Science degree at Bahria University."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto space-y-6">
        <RevealOnScroll>
          {publications.map((pub) => (
            <PublicationCard key={pub.slug} publication={pub} />
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
