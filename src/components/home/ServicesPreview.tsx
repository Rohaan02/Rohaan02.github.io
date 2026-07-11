import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="px-gutter py-xl max-w-max-width mx-auto" id="services">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="What I offer"
          title="Services"
          description="Custom software, websites, and application development — built end to end."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            See all services
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
