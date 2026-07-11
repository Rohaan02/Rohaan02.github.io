import RevealOnScroll from "@/components/shared/RevealOnScroll";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { site } from "@/data/site";

export default function ContactCTA() {
  return (
    <section className="px-gutter py-xl mb-xl">
      <RevealOnScroll className="max-w-max-width mx-auto glass-card rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden border-white/5">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-secondary/10 blur-[120px] rounded-full" />
        <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10">
          Ready to build <span className="gradient-text">the future?</span>
        </h2>
        <p className="text-on-surface-variant text-xl md:text-2xl mb-12 max-w-2xl mx-auto relative z-10">
          Currently accepting selective projects and engineering collaborations. Let&apos;s build
          something exceptional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
          <PrimaryButton href={`mailto:${site.email}`} variant="ghost" icon="mail" external>
            Direct Email
          </PrimaryButton>
        </div>
      </RevealOnScroll>
    </section>
  );
}
