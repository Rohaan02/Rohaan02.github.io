import Link from "next/link";
import type { Service } from "@/data/services";
import GlassCard from "@/components/ui/GlassCard";

const colorClasses: Record<Service["color"], string> = {
  primary: "text-primary bg-primary/20",
  secondary: "text-secondary bg-secondary/20",
  tertiary: "text-tertiary bg-tertiary/20",
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`}>
      <GlassCard className="p-8 h-full flex flex-col gap-4 group">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${colorClasses[service.color]}`}
        >
          <span className="material-symbols-outlined text-3xl">{service.icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-on-surface">{service.title}</h3>
        <p className="text-on-surface-variant leading-relaxed flex-1">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
          Learn more
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </span>
      </GlassCard>
    </Link>
  );
}
