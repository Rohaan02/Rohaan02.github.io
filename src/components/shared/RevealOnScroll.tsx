"use client";

import { useReveal } from "@/lib/useReveal";
import type { ReactNode } from "react";

export default function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal-up ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
