/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/img/:path*",
        destination: "/assets/img/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
