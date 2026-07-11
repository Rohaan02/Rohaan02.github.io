import Image from "next/image";
import type { MoocCertificate } from "@/data/moocs";
import GlassCard from "@/components/ui/GlassCard";

export default function CertificateCard({ cert }: { cert: MoocCertificate }) {
  return (
    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <GlassCard className="overflow-hidden flex flex-col h-full">
        <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
          <Image src={cert.image} alt={cert.title} fill className="object-cover" />
        </div>
        <div className="p-6 space-y-1">
          <h3 className="text-lg font-bold text-on-surface leading-snug">{cert.title}</h3>
          <p className="text-secondary text-sm font-medium">{cert.issuer}</p>
          {cert.description ? (
            <p className="text-on-surface-variant text-sm leading-relaxed pt-1">
              {cert.description}
            </p>
          ) : null}
        </div>
      </GlassCard>
    </a>
  );
}
