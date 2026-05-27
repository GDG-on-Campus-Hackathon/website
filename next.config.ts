import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/2025", destination: "/2025/index.html" }];
  },
};

export default nextConfig;
