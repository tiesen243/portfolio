/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./env.js')

/* MDX configuration */
import createMDX from 'fumadocs-mdx/config'
import { remarkInstall } from 'fumadocs-docgen'

const withMdx = createMDX({
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [remarkInstall],
  },
})

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default withMdx(config)
