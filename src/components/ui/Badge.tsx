export default function Badge({
  children,
  tone = "primary",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "primary" | "secondary" | "tertiary" | "neutral";
  className?: string;
}) {
  const toneClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    tertiary: "bg-tertiary/10 text-tertiary border-tertiary/20",
    neutral: "bg-surface-container text-on-surface-variant border-white/5",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label-mono font-bold uppercase tracking-wider border ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
