import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },

  devIndicators: false,

  allowedDevOrigins: ["192.168.88.18"],
};

export default nextConfig;