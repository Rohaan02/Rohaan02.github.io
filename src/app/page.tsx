import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import MoocsPreview from "@/components/home/MoocsPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import ResearchPreview from "@/components/home/ResearchPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ExpertiseGrid />
      <ExperiencePreview />
      <ServicesPreview />
      <MoocsPreview />
      <ProjectsPreview />
      <ResearchPreview />
      <ContactCTA />
    </>
  );
}
