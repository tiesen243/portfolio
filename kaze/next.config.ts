import '@yuki/validators/env'

import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig = {
  typedRoutes: true,
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '1.gravatar.com' }],
  },

  transpilePackages: [
    '@yuki/content',
    '@yuki/data',
    '@yuki/ui',
    '@yuki/validators',
  ],

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

  ...(process.env.NEXT_BUILD_OUTPUT === 'standalone'
    ? {
        output: 'standalone',
        outputFileTracingRoot: path.join(__dirname, '../'),
      }
    : {}),
} satisfies NextConfig

export default nextConfig

const socials = {
  github: 'https://github.com/tiesen243',
  facebook: 'https://facebook.com/tiesen243',
  linkedin: 'https://www.linkedin.com/in/tiesen243',
  x: 'https://x.com/tiesen243',
}
