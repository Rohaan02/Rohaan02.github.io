"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center w-full px-gutter h-20 max-w-max-width mx-auto">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={site.profileImage}
            alt={site.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="font-headline-md text-xl md:text-2xl font-extrabold gradient-text">
            {site.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-primary font-bold transition-all"
                  : "text-on-surface-variant hover:text-primary transition-colors font-medium"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex px-6 py-2 bg-primary text-on-primary font-bold rounded-lg hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-on-surface"
        >
          <span className="material-symbols-outlined text-3xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open ? (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 px-gutter py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                isActive(link.href)
                  ? "text-primary font-bold"
                  : "text-on-surface-variant font-medium"
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-3 bg-primary text-on-primary font-bold rounded-lg text-center"
          >
            Resume
          </a>
        </div>
      ) : null}
    </nav>
  );
}
