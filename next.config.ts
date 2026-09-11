import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Origin-Agent-Cluster",
    value: "?1",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
];

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "/*": ["./public/**/*"],
  },
  outputFileTracingIncludes: {
    "/press": ["./assets/press/2026/content.json.enc"],
    "/media": ["./assets/press/2026/content.json.enc"],
    "/media/news": ["./assets/press/2026/content.json.enc"],
    "/press/download/*": ["./assets/press/2026/**/*.enc"],
    "/press/image/*": ["./assets/press/2026/web/*.enc"],
    "/press/video/*": ["./assets/press/2026/Patrick_Davidson_ARX_2026_Cockpit_HD.mp4.enc"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },

  devIndicators: false,

  allowedDevOrigins: ["192.168.88.18"],

  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/press/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store" },
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
    ];
  },
};

export default nextConfig;
