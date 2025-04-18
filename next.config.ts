import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  // For custom port configuration
  serverRuntimeConfig: {
    port: 3001,
  },
};

export default nextConfig;
