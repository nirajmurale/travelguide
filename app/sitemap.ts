import type { MetadataRoute } from "next";
import { spots } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://travelguide.example";
  return ["/", "/explore", "/add", "/about", "/contact", ...spots.map(s => `/spot/${s.slug}`)].map(path => ({ url: `${base}${path}`, lastModified: new Date("2026-01-01"), changeFrequency: "weekly", priority: path === "/" ? 1 : .8 }));
}
