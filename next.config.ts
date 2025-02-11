import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'i.imgur.com'
    },
  {
    protocol: 'https',
    hostname: 'iili.io'
  }
  ],
    minimumCacheTTL: 60 * 60 * 24,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
