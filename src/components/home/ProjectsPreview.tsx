import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { customProjects, universityProjects, wordpressProjects } from "@/data/projects";

export default function ProjectsPreview() {
  const featuredWordpress = wordpressProjects[0];
  const featuredUniversity = universityProjects[0];
  const featuredCustom = customProjects[0];

  return (
    <section className="px-gutter py-xl max-w-max-width mx-auto" id="projects">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="A snapshot across WordPress client work, university projects, and custom software."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title={featuredWordpress.name}
            badge={featuredWordpress.category}
            image={featuredWordpress.logo}
            externalHref={featuredWordpress.url}
            detailHref="/projects/wordpress"
          />
          <ProjectCard
            title={featuredUniversity.name}
            badge={featuredUniversity.semester}
            description={featuredUniversity.description}
            tags={featuredUniversity.tech}
            externalHref={featuredUniversity.fileUrl}
            externalLabel="View File"
            detailHref="/projects/university"
          />
          <ProjectCard
            title={featuredCustom.name}
            badge={featuredCustom.company}
            description={featuredCustom.description}
            tags={featuredCustom.tech}
            detailHref={`/projects/custom/${featuredCustom.slug}`}
            externalHref={featuredCustom.liveUrl}
            externalLabel="Visit Website"
          />
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
