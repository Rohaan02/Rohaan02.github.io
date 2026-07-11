import RevealOnScroll from "@/components/shared/RevealOnScroll";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { coreExpertise, techChips } from "@/data/skills";

const colorClasses: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  "secondary-container": "text-secondary-container",
};

export default function ExpertiseGrid() {
  return (
    <section className="px-gutter py-xl">
      <div className="max-w-max-width mx-auto text-center space-y-lg">
        <SectionHeading eyebrow="What I work with" title="Core Expertise" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {coreExpertise.map((item, i) => (
            <RevealOnScroll key={item.name} delayMs={i * 100}>
              <GlassCard className="p-6 tag-float" hover>
                <span
                  className={`material-symbols-outlined text-4xl mb-3 block ${colorClasses[item.color]}`}
                >
                  {item.icon}
                </span>
                <h3 className="font-bold text-lg">{item.name}</h3>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {techChips.map((chip) => (
            <span
              key={chip}
              className="px-5 py-2 glass-card rounded-full text-sm font-label-mono border-white/5"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
