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
        hostname: '192.168.189.92',
        port: '3004',
        pathname: '/**', // Match all paths
      },
    ],
  },
};

export default nextConfig;
