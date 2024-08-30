import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds:true,
  },
  images: {
    remotePatterns: [
        {
         protocol: "https", 
         hostname: "cdn.dummyjson.com"
        }, 
        {
          hostname:"avatars.githubusercontent.com"
        }
    ],
  },
};

export default nextConfig;
