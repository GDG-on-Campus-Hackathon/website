import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/2025",
  images: { unoptimized: true },
};

export default nextConfig;
