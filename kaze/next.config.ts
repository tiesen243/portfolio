import type { NextConfig } from 'next'

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import { env } from '@yuki/validators/env'

import path from 'node:path'

const nextConfig = {
  typedRoutes: true,
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '1.gravatar.com' }],
  },

  transpilePackages: [
    '@yuki/content',
    '@yuki/lib',
    '@yuki/ui',
    '@yuki/validators',
  ],

  redirects() {
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

  ...(env.NEXT_BUILD_OUTPUT === 'standalone'
    ? {
        output: 'standalone',
        outputFileTracingRoot: path.join(__dirname, '../'),
      }
    : {}),
} satisfies NextConfig

export default nextConfig
if (!env.VERCEL) initOpenNextCloudflareForDev()

const socials = {
  github: 'https://github.com/tiesen243',
  facebook: 'https://facebook.com/tiesen243.tsx',
  linkedin: 'https://www.linkedin.com/in/tiesen243',
  x: 'https://x.com/tiesen243',
}
