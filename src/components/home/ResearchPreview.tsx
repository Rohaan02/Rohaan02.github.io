import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import PublicationCard from "@/components/research/PublicationCard";
import { publications } from "@/data/publications";

export default function ResearchPreview() {
  return (
    <section className="px-gutter py-xl max-w-max-width mx-auto" id="researches">
      <RevealOnScroll>
        <SectionHeading eyebrow="Published work" title="Featured Research" />
        <PublicationCard publication={publications[0]} />
      </RevealOnScroll>
    </section>
  );
}
