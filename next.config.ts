/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import '@/env'

import type { NextConfig } from 'next'
import { createMDX } from 'fumadocs-mdx/next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'gravatar.com' },
      { protocol: 'https', hostname: 'github.com' },
    ],
  },
}

const withMDX = createMDX()

export default withMDX(nextConfig)
