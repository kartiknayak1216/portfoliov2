import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "firebasestorage.googleapis.com"
    },{
      protocol: "https",
      hostname:"drive.google.com"
    }]
  },
  eslint:{
    ignoreDuringBuilds:true
   }
};

export default nextConfig;
