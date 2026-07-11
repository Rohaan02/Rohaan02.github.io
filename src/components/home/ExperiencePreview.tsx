import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/experience/Timeline";

export default function ExperiencePreview() {
  return (
    <section className="px-gutter py-xl max-w-max-width mx-auto">
      <RevealOnScroll>
        <SectionHeading eyebrow="Career" title="Professional Journey" />
        <Timeline limit={2} />
        <div className="text-center mt-10">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            View full experience timeline
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
