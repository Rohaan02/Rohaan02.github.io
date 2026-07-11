import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { customProjects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return customProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = customProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function CustomProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = customProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageHero eyebrow={project.company} title={project.name} description={project.description} />

      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-3 text-primary">Overview</h2>
              <p className="text-on-surface-variant leading-relaxed">{project.longDescription}</p>
            </GlassCard>
            <GlassCard className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary mt-0.5">
                      check_circle
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6 text-center space-y-4">
              <p className="text-on-surface-variant">See it live</p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 transition-all"
              >
                Visit Website
                <span className="material-symbols-outlined text-lg">open_in_new</span>
              </a>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-surface-container rounded-lg text-sm border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
            <GlassCard className="p-6 text-center space-y-4">
              <p className="text-on-surface-variant">Want something like this built?</p>
              <PrimaryButton href="/contact" className="w-full">
                Get in Touch
              </PrimaryButton>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
