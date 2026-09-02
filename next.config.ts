import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/img/:path*",
        destination: "/assets/img/:path*",
      },
    ];
  },
};

export default nextConfig;

