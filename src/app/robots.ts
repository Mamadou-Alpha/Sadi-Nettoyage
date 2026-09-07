import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-config";

// Next.js sert automatiquement ce fichier à /robots.txt.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
