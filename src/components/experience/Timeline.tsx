import { experience } from "@/data/experience";
import TimelineItem from "./TimelineItem";

export default function Timeline({ limit }: { limit?: number }) {
  const items = limit ? experience.slice(0, limit) : experience;

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent" />
      <div className="space-y-8">
        {items.map((item) => (
          <TimelineItem key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
