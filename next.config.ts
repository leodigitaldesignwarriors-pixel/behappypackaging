import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows cache-busting query strings (?v=<mtime>) on local /public/images
    // assets — see src/lib/cacheBust.ts.
    localPatterns: [{ pathname: "/images/**" }],
  },
};

export default nextConfig;
