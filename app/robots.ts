import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/press/manage", "/press/access", "/press/events", "/press/download/"],
    },
    host: "https://www.flyingdavidson.com",
    sitemap: "https://www.flyingdavidson.com/sitemap.xml",
  };
}
