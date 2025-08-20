import '@yuki/validators/env'

import type { NextConfig } from 'next'

const nextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'gravatar.com' }],
  },

  async redirects() {
    return [
      {
        source: '/assets/cv.pdf',
        destination: 'https://youtu.be/dQw4w9WgXcQ',
        permanent: true,
      },
      ...Object.entries(socials).map(([key, value]) => ({
        source: `/contact/${key}`,
        destination: value,
        permanent: true,
      })),
    ]
  },

  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  transpilePackages: ['@yuki/data', '@yuki/ui', '@yuki/validators'],
} satisfies NextConfig

export default nextConfig

const socials = {
  github: 'https://github.com/tiesen243',
  facebook: 'https://facebook.com/tiesen243.nanoda',
  linkedin: 'https://www.linkedin.com/in/tiesen243',
  x: 'https://x.com/tiesen243',
}
