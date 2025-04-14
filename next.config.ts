import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  // Set the server to use port 3001
  experimental: {
    customServer: true,
  },
  serverRuntimeConfig: {
    port: 3001,
  },
};

export default nextConfig;
