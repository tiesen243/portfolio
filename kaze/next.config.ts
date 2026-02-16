import type { NextConfig } from 'next'

import { env } from '@yuki/validators/env'
import { createMDX } from 'fumadocs-mdx/next'
import path from 'node:path'

const nextConfig = {
  typedRoutes: true,
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '1.gravatar.com' }],
  },

  transpilePackages: ['@yuki/lib', '@yuki/ui', '@yuki/validators'],

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

const withMdx = createMDX()

export default withMdx(nextConfig)

const socials = {
  github: 'https://github.com/tiesen243',
  facebook: 'https://facebook.com/tiesen243.tsx',
  linkedin: 'https://www.linkedin.com/in/tiesen243',
  x: 'https://x.com/tiesen243',
}
