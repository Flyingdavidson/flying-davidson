import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    host: "https://flyingdavidson.com",
    sitemap: "https://flyingdavidson.com/sitemap.xml",
  };
}
