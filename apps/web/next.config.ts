import '@/env'
import type { NextConfig } from 'next'

import { createMDX } from 'fumadocs-mdx/next'

import basic from '@/lib/data/basic'

const withMDX = createMDX()

const config = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '1.gravatar.com' }],
  },

  redirects() {
    return [
      {
        source: '/assets/cv.pdf',
        destination: 'https://youtu.be/dQw4w9WgXcQ',
        permanent: true,
      },
      ...Object.entries(basic.socials).map(([key, value]) => ({
        source: `/contact/${key}`,
        destination: value,
        permanent: true,
      })),
    ]
  },
} satisfies NextConfig

export default withMDX(config)

// oxlint-disable-next-line promise/prefer-await-to-then
import('@opennextjs/cloudflare').then((m) => m.initOpenNextCloudflareForDev())
