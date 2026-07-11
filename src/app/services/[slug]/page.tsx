import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { services } from "@/data/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} description={service.heroDescription} />

      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">How it works</h2>
              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <GlassCard key={step.title} className="p-6 flex gap-4">
                    <span className="text-3xl font-black text-primary/40 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {service.addOns ? (
              <div>
                <h2 className="text-2xl font-bold mb-6 gradient-text">Add-ons</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.addOns.map((addon) => (
                    <GlassCard key={addon.title} className="p-6">
                      <h3 className="font-bold text-lg mb-1">{addon.title}</h3>
                      <p className="text-on-surface-variant leading-relaxed text-sm">
                        {addon.description}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
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
              <p className="text-on-surface-variant">Have a project in mind?</p>
              <PrimaryButton href="/contact" className="w-full">
                Start a Conversation
              </PrimaryButton>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
