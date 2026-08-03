import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { customProjects } from "@/data/projects";

export default function ProjectsPreview() {
  const featured = customProjects.slice(0, 3);

  return (
    <section className="px-gutter py-xl max-w-max-width mx-auto" id="projects">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="Custom software built for Rislix, Amica Digital Services, and beyond."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
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
        </div>
        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Browse all projects
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
