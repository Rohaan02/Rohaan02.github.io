import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { customProjects } from "@/data/projects";
import { publications } from "@/data/publications";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/services",
    "/moocs",
    "/projects",
    "/projects/wordpress",
    "/projects/university",
    "/projects/custom",
    "/researches",
    "/contact",
  ];

  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...customProjects.map((p) => `/projects/custom/${p.slug}`),
    ...publications.map((p) => `/researches/${p.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${site.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
