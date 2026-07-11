import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import StatTile from "@/components/ui/StatTile";
import { site } from "@/data/site";

export default function AboutPreview() {
  return (
    <section className="px-gutter py-xl max-w-max-width mx-auto" id="about">
      <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div className="relative">
          <div className="glass-card p-4 rounded-3xl overflow-hidden aspect-square max-w-md mx-auto transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src={site.profileImage}
              alt={site.name}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="font-headline-md text-4xl md:text-5xl font-extrabold gradient-text">
            About My Journey
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
            {site.summary.slice(0, 260)}...
          </p>
          <div className="grid grid-cols-2 gap-4">
            {site.stats.slice(0, 2).map((stat) => (
              <StatTile key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Read more about me
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
