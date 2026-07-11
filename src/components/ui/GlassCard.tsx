import type { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass-card rounded-2xl ${hover ? "glow-hover transition-all duration-300" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
