import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "*.pexels.com" },
      { protocol: "https", hostname: "*.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "padel.4prod.tn" },
      { protocol: "https", hostname: "www.clubmahindra.com" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "www.tennisleo.fi" },
      { protocol: "https", hostname: "justpadel.com" },
      { protocol: "https", hostname: "thepadelschool.com" },
    ],
  },
};

export default nextConfig;
