import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ProjectCard from "@/components/projects/ProjectCard";
import { customProjects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Custom Projects",
  description: `Original custom software case studies from ${site.name}'s professional engineering roles.`,
};

export default function CustomProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional work"
        title="Custom Projects"
        description="Original software case studies drawn from professional engineering roles — architecture, tech stack, and impact."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.name}
              badge={project.company}
              description={project.description}
              tags={project.tech}
              detailHref={`/projects/custom/${project.slug}`}
              externalHref={project.liveUrl}
              externalLabel="Visit Website"
            />
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
