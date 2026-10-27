import type { MetadataRoute } from "next";
import { navItems } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({ url: absoluteUrl(item.href) }));
}
