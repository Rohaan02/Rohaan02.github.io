import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ProjectCard from "@/components/projects/ProjectCard";
import { wordpressProjects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "WordPress Projects",
  description: `Client WordPress websites and e-commerce stores built by ${site.name}.`,
};

export default function WordpressProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client work"
        title="WordPress Projects"
        description="Static business sites and e-commerce stores built and launched for real clients."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wordpressProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.name}
              badge={project.category}
              image={project.logo}
              externalHref={project.url}
              externalLabel="Visit Website"
            />
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
