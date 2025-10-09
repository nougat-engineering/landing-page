/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  assetPrefix: '/landing-page',
  basePath: '/landing-page',
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
