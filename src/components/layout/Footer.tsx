import Link from "next/link";
import SocialIcon from "@/components/ui/SocialIcon";
import { navLinks, site, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest/40 backdrop-blur-md border-t border-white/5 w-full mt-auto">
      <div className="max-w-max-width mx-auto px-gutter py-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-lg">
          <div className="text-center md:text-left space-y-2">
            <span className="text-2xl md:text-3xl font-black gradient-text">{site.name}</span>
            <p className="font-label-mono text-sm text-on-surface-variant tracking-wider uppercase">
              {site.role} • {site.location}
            </p>
            <p className="text-xs text-on-surface-variant/60">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-all text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg glass-card text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all"
              >
                <SocialIcon icon={s.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
