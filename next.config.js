/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/Front-end-Web-Development-HomeWork",
  assetPrefix: "/Front-end-Web-Development-HomeWork/",
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.xkcd.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
