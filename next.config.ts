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
    domains: ['via.placeholder.com'], // Add external image domains here
  },
};

export default nextConfig;
