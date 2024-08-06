import createMDX from 'fumadocs-mdx/config'
import { remarkInstall } from 'fumadocs-docgen'

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./env.js')

const withMDX = createMDX({
  mdxOptions: { remarkPlugins: [remarkInstall] },
})

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default withMDX(config)
