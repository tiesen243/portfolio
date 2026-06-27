import type { NextConfig } from 'next'

export default {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ hostname: '1.gravatar.com' }],
  },
} satisfies NextConfig
