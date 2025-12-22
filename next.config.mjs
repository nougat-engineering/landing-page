/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  // Comment out for local testing with Live Server
  // assetPrefix: '/landing-page',
  // basePath: '/landing-page',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
