import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const iconByCompany: Record<string, string> = {
  igknightech: "engineering",
  rislix: "security",
  "heights-studio": "apartment",
  expertscloud: "cloud",
  "vision-plus": "visibility",
  "superior-tech-solutions": "workspace_premium",
};

const colorByCompany: Record<string, string> = {
  igknightech: "text-primary bg-primary/20",
  rislix: "text-secondary bg-secondary/20",
  "heights-studio": "text-tertiary bg-tertiary/20",
  expertscloud: "text-primary bg-primary/20",
  "vision-plus": "text-secondary bg-secondary/20",
  "superior-tech-solutions": "text-tertiary bg-tertiary/20",
};

// Drop a real logo file at public/logos/{companySlug}.png and it will
// automatically replace the icon fallback below — no code changes needed.
function hasLogo(companySlug: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "logos", `${companySlug}.png`));
}

export default function CompanyBadge({
  companySlug,
  companyName,
}: {
  companySlug: string;
  companyName: string;
}) {
  const color = colorByCompany[companySlug] ?? "text-primary bg-primary/20";

  if (hasLogo(companySlug)) {
    return (
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-white/5">
        <Image
          src={`/logos/${companySlug}.png`}
          alt={`${companyName} logo`}
          width={64}
          height={64}
          className="w-full h-full object-contain p-2"
        />
      </div>
    );
  }

  const icon = iconByCompany[companySlug] ?? "business_center";
  return (
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${color}`}
    >
      <span className="material-symbols-outlined text-4xl" aria-label={companyName}>
        {icon}
      </span>
    </div>
  );
}
