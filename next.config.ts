import type { NextConfig } from "next";

const nextConfig: NextConfig & {
  eslint?: {
    ignoreDuringBuilds: boolean;
  };
} = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;