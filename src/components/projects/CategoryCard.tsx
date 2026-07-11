import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";

export default function CategoryCard({
  href,
  title,
  description,
  icon,
  count,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
  count: number;
}) {
  return (
    <Link href={href}>
      <GlassCard className="p-8 h-full flex flex-col items-center text-center gap-4 group">
        <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-4xl">{icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-on-surface">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed">{description}</p>
        <span className="font-label-mono text-xs uppercase tracking-widest text-primary">
          {count} project{count === 1 ? "" : "s"}
        </span>
      </GlassCard>
    </Link>
  );
}
