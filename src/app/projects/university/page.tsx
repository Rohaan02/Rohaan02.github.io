import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ProjectCard from "@/components/projects/ProjectCard";
import { universityProjects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "University Projects",
  description: `Coursework and academic projects completed by ${site.name} during his BSCS at Bahria University.`,
};

export default function UniversityProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bahria University — BSCS"
        title="University Projects"
        description="Semester projects spanning web fundamentals, object-oriented programming, data structures & algorithms, and embedded systems."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universityProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.name}
              badge={project.semester}
              description={project.description}
              tags={project.tech}
              externalHref={project.fileUrl}
              externalLabel="View File"
            />
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
