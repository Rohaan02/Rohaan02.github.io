import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import Timeline from "@/components/experience/Timeline";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `The professional journey of ${site.name} across full-stack engineering, GRC consulting, and web development roles.`,
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Professional Journey"
        description="A technical chronicle of architecting scalable solutions, from WordPress landing pages to full MERN-stack platforms and GRC consulting."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll>
          <Timeline />
        </RevealOnScroll>
      </section>
    </>
  );
}
