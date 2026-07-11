import type { ExperienceItem } from "@/data/experience";
import GlassCard from "@/components/ui/GlassCard";
import CompanyBadge from "./CompanyBadge";

export default function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <div className="relative pl-16 md:pl-24 group">
      <div
        className={`absolute left-2.5 md:left-6.5 top-8 w-3.5 h-3.5 rounded-full z-20 ${
          item.current ? "bg-primary animate-pulse" : "bg-outline group-hover:bg-primary transition-colors"
        }`}
      />
      <GlassCard className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row gap-6">
          <CompanyBadge companySlug={item.companySlug} companyName={item.company} />
          <div className="flex-1 space-y-3">
            <div>
              <span className="font-label-mono text-xs uppercase tracking-widest text-primary block mb-1">
                {item.period}
              </span>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface">{item.role}</h3>
              <p className="text-secondary font-bold text-lg">
                {item.company} <span className="text-on-surface-variant font-normal text-sm">— {item.location}</span>
              </p>
            </div>
            <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
            {item.highlights ? (
              <ul className="space-y-2 pt-1">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
