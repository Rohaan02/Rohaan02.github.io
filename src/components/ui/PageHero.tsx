export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="px-gutter py-lg max-w-max-width mx-auto">
      <div className="max-w-3xl">
        {eyebrow ? (
          <span className="font-label-mono text-xs uppercase tracking-widest text-primary block mb-3">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl font-black text-on-surface mb-4">
          {title}
        </h1>
        {description ? (
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
