import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: string;
  external?: boolean;
  className?: string;
};

export default function PrimaryButton({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className = "",
}: Props) {
  const base =
    "px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95";
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-on-primary shadow-xl shadow-primary/30"
      : "glass-card text-on-surface border border-white/10 hover:bg-white/10";

  const content = (
    <>
      {children}
      {icon ? <span className="material-symbols-outlined text-xl">{icon}</span> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variantClasses} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variantClasses} ${className}`}>
      {content}
    </Link>
  );
}
