import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

type Props = {
  title: string;
  badge?: string;
  description?: string;
  image?: string;
  tags?: string[];
  detailHref?: string;
  externalHref?: string;
  externalLabel?: string;
};

export default function ProjectCard({
  title,
  badge,
  description,
  image,
  tags,
  detailHref,
  externalHref,
  externalLabel = "Visit Website",
}: Props) {
  return (
    <GlassCard className="overflow-hidden flex flex-col h-full">
      {image ? (
        <div className="aspect-video bg-surface-container relative overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
          {badge ? (
            <span className="absolute top-3 right-3">
              <Badge tone={badge === "E-commerce" ? "secondary" : "neutral"}>{badge}</Badge>
            </span>
          ) : null}
        </div>
      ) : badge ? (
        <div className="p-4 pb-0">
          <Badge tone={badge === "E-commerce" ? "secondary" : "neutral"}>{badge}</Badge>
        </div>
      ) : null}

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-bold text-on-surface">{title}</h3>
        {description ? (
          <p className="text-on-surface-variant text-sm leading-relaxed flex-1">{description}</p>
        ) : (
          <div className="flex-1" />
        )}
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-bold tracking-tighter px-2 py-1 bg-primary/10 text-primary rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-2">
          {detailHref ? (
            <Link
              href={detailHref}
              className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-2.5 transition-all"
            >
              Read more
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          ) : null}
          {externalHref ? (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-on-surface-variant font-bold text-sm hover:text-secondary transition-all"
            >
              {externalLabel}
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}
