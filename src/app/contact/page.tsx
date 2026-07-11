import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ContactForm from "@/components/contact/ContactForm";
import SocialIcon from "@/components/ui/SocialIcon";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for custom software, website, or app development projects.`,
};

const contactInfo = [
  { icon: "location_on", label: "Location", value: site.location, href: undefined },
  { icon: "call", label: "Phone", value: site.phoneDisplay, href: site.phoneHref },
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "linkedin", label: "LinkedIn", value: "rohaannadeem", href: site.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title="Get in Touch"
        description="Currently accepting selective projects and engineering collaborations — reach out and let's build something exceptional."
      />

      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-5 gap-lg">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => (
              <GlassCard key={item.label} className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <SocialIcon icon={item.icon} className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant block">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-bold text-on-surface hover:text-primary transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-bold text-on-surface">{item.value}</span>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="lg:col-span-3 p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h2>
            <ContactForm />
          </GlassCard>
        </RevealOnScroll>
      </section>
    </>
  );
}
