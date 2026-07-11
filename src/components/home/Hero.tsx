"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { site } from "@/data/site";

const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % site.taglines.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="font-body-lg text-xl md:text-2xl text-on-surface-variant/80 max-w-2xl leading-relaxed min-h-[3.5rem]">
      {site.taglines[index]}
    </p>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex items-center px-gutter py-12"
      id="home"
    >
      <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-12 gap-lg items-center w-full">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-mono text-xs uppercase tracking-widest text-primary">
              Available for new opportunities
            </span>
          </div>

          <h1 className="font-display-lg-mobile md:font-display-lg text-5xl md:text-7xl font-black text-on-surface leading-[1.1]">
            Hi, I&apos;m {site.name} —{" "}
            <span className="gradient-text">Full-Stack Engineer</span>
          </h1>

          <RotatingTagline />

          <div className="flex flex-wrap gap-4 pt-4">
            <PrimaryButton href="/projects" icon="arrow_forward">
              Explore Work
            </PrimaryButton>
            <PrimaryButton href="/contact" variant="ghost">
              Get in Touch
            </PrimaryButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
