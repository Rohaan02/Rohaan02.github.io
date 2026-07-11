import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { publications } from "@/data/publications";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return publications.map((pub) => ({ slug: pub.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const publication = publications.find((p) => p.slug === slug);
  if (!publication) return {};
  return {
    title: publication.title,
    description: publication.abstract.slice(0, 155),
  };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const publication = publications.find((p) => p.slug === slug);
  if (!publication) notFound();

  return (
    <>
      <PageHero eyebrow={publication.venue} title={publication.title} />

      <section className="px-gutter py-lg max-w-max-width mx-auto">
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-3 text-primary">Abstract</h2>
              <p className="text-on-surface-variant leading-relaxed">
                {publication.abstract}
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-4 text-primary">Authors</h2>
              <ul className="space-y-4">
                {publication.authors.map((author) => (
                  <li
                    key={author.name}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
                  >
                    <span className="font-bold text-on-surface">
                      {author.name}
                      {author.isMe ? (
                        <Badge tone="primary" className="ml-2">
                          Me
                        </Badge>
                      ) : null}
                    </span>
                    <span className="text-on-surface-variant text-sm">
                      {author.affiliation}
                    </span>
                    {author.linkedin ? (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary text-sm font-medium hover:underline"
                      >
                        LinkedIn
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6 space-y-3">
              <h3 className="font-bold text-lg mb-2">Publication Details</h3>
              <DetailRow label="Publisher" value={publication.publisher} />
              <DetailRow label="Conference Date" value={publication.date} />
              <DetailRow label="Location" value={publication.location} />
              <DetailRow label="DOI" value={publication.doi} />
              {typeof publication.citesInPapers === "number" ? (
                <DetailRow
                  label="Cites in Papers"
                  value={String(publication.citesInPapers)}
                />
              ) : null}
              {typeof publication.fullTextViews === "number" ? (
                <DetailRow
                  label="Full Text Views"
                  value={String(publication.fullTextViews)}
                />
              ) : null}
            </GlassCard>

            <GlassCard className="p-6 space-y-3">
              <a
                href={publication.ieeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-primary text-on-primary font-bold rounded-xl hover:brightness-110 transition-all"
              >
                View on IEEE Xplore
              </a>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
      <span className="text-on-surface text-sm break-words">{value}</span>
    </div>
  );
}
