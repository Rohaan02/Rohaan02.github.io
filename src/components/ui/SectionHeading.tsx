export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`space-y-4 mb-lg ${align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"}`}
    >
      {eyebrow ? (
        <span className="font-label-mono text-xs uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-headline-md text-4xl md:text-5xl font-extrabold gradient-text">
        {title}
      </h2>
      {description ? (
        <p className="text-on-surface-variant text-lg leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
