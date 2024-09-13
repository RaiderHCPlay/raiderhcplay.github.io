/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/raiderhcplay.github.io",
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
