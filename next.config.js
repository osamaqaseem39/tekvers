/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'cdn.jsdelivr.net'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Optimize for mobile devices with responsive sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce quality on mobile for faster loading
    dangerouslyAllowSVG: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Target modern browsers to avoid legacy polyfills
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Optimize production builds
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
}

module.exports = nextConfig
