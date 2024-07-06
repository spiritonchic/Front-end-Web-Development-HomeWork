/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/Front-end-Web-Development-HomeWork',
  assetPrefix: '/Front-end-Web-Development-HomeWork/',
  images: { 
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


export default nextConfig;
