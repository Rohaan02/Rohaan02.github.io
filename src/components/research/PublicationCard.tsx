import Link from "next/link";
import type { Publication } from "@/data/publications";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

export default function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <GlassCard className="p-8 md:p-10 relative">
      <div className="absolute top-6 right-6">
        <Badge tone="primary">IEEE Xplore</Badge>
      </div>
      <div className="space-y-4 max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{publication.title}</h3>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-on-surface-variant font-label-mono text-xs uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            {publication.date}
          </span>
          <span>•</span>
          <span>{publication.location}</span>
        </div>
        <p className="text-on-surface-variant/90 leading-relaxed line-clamp-3">
          {publication.abstract}
        </p>
        <Link
          href={`/researches/${publication.slug}`}
          className="inline-flex items-center gap-2 text-primary font-black hover:gap-3 transition-all"
        >
          Read full publication
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>
    </GlassCard>
  );
}
