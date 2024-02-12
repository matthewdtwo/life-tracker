/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  distDir: "docs",
  // basePath: "/life-tracker",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
