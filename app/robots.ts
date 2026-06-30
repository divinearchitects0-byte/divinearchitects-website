import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://divinearchitects.co.in/sitemap.xml",
    host: "https://divinearchitects.co.in",
  };
}