/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./env.js')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  transpilePackages: ['next-mdx-remote'],
  experimental: { serverComponentsExternalPackages: ['shiki', 'picocolors'] },
  images: { remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }] },
}

export default config
