import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Custom software, website, and app development services offered by ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What I offer"
        title="Services"
        description="Custom software, websites, and app development — built end to end, from architecture to deployment."
      />
      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </RevealOnScroll>
      </section>
    </>
  );
}
