// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;


// const nextConfig = {
//   experimental: {
//     appDir: true, // Enable the `app` directory
//   },

// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable the `app` directory
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_HOST, // Dynamically use hostname from env
        port: process.env.NEXT_PUBLIC_PORT, // Dynamically use port from env
        pathname: '/**', // Match all paths
      },
    ],
  },
};

export default nextConfig;
