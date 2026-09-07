import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

// Next.js sert automatiquement ce fichier à /sitemap.xml.
// Pensez à mettre à jour `lastModified` si vous modifiez fortement une page.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/zones-desservies", priority: 0.8, changeFrequency: "monthly" },
    { path: "/a-propos", priority: 0.6, changeFrequency: "monthly" },
    { path: "/temoignages", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
