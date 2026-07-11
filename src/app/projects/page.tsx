import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import CategoryCard from "@/components/projects/CategoryCard";
import { customProjects, universityProjects, wordpressProjects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `WordPress client projects, university coursework, and custom software built by ${site.name}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Projects"
        description="Browse by category — client WordPress builds, university coursework, and custom software case studies."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            href="/projects/wordpress"
            title="WordPress Projects"
            description="Client websites and e-commerce stores built and deployed with WordPress."
            icon="language"
            count={wordpressProjects.length}
          />
          <CategoryCard
            href="/projects/university"
            title="University Projects"
            description="Coursework spanning web fundamentals, OOP, data structures, and embedded systems."
            icon="school"
            count={universityProjects.length}
          />
          <CategoryCard
            href="/projects/custom"
            title="Custom Projects"
            description="Original MERN-stack software and case studies from professional engineering roles."
            icon="deployed_code"
            count={customProjects.length}
          />
        </RevealOnScroll>
      </section>
    </>
  );
}
