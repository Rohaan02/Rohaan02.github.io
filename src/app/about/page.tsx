import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import StatTile from "@/components/ui/StatTile";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { site } from "@/data/site";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${site.name}, a ${site.role} based in ${site.location}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Get to know me"
        title={`About ${site.name}`}
        description={`A closer look at ${site.name}'s background, education, and approach to building software.`}
      />

      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="relative order-2 lg:order-1">
            <div className="glass-card p-4 rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
              <Image
                src={site.profileImage}
                alt={site.name}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-on-surface-variant text-lg leading-relaxed">{site.summary}</p>
            <div className="grid grid-cols-2 gap-4">
              {site.stats.map((stat) => (
                <StatTile key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll>
          <SectionHeading eyebrow="Background" title="Education" align="left" />
          <div className="space-y-6">
            {education.map((item) => (
              <GlassCard key={item.degree} className="p-6 md:p-8">
                <span className="font-label-mono text-xs uppercase tracking-widest text-primary block mb-2">
                  {item.period}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface">{item.degree}</h3>
                <p className="text-secondary font-medium mt-1">{item.institution}</p>
                {item.description ? (
                  <p className="text-on-surface-variant mt-3 leading-relaxed">
                    {item.description}
                  </p>
                ) : null}
              </GlassCard>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="px-gutter py-xl max-w-max-width mx-auto">
        <RevealOnScroll>
          <SectionHeading eyebrow="Toolbox" title="Skills Breakdown" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <GlassCard key={group.title} className="p-6">
                <h3 className="font-bold text-lg text-primary mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-base text-secondary">
                        check_circle
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
