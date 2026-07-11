import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { moocs } from "@/data/moocs";

export default function MoocsPreview() {
  const featured = moocs.slice(0, 6);

  return (
    <section className="px-gutter py-xl" id="moocs">
      <RevealOnScroll className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 blur-[80px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="flex flex-col md:flex-row items-center gap-lg">
          <div className="w-24 h-24 bg-tertiary/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-tertiary/20">
            <span className="material-symbols-outlined text-tertiary text-5xl">verified</span>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline-md text-3xl font-extrabold mb-2">Featured Credentials</h2>
            <p className="text-tertiary font-bold text-xl mb-4">
              MOOCs &amp; Professional Certifications
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {featured.map((cert) => (
                <span
                  key={cert.slug}
                  className="px-4 py-2 bg-surface-container rounded-lg text-sm border border-white/5"
                >
                  {cert.title}
                </span>
              ))}
            </div>
            <Link
              href="/moocs"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-6"
            >
              View all credentials
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
