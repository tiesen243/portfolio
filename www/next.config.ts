import type { NextConfig } from 'next'

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'gravatar.com' }],
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  transpilePackages: ['@yuki/data', '@yuki/ui', '@yuki/validators'],
} satisfies NextConfig

export default nextConfig
