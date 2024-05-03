/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['shiki'],
  },
  redirects: async () => {
    return [
      {
        source: '/blog',
        destination: '/blog/en',
        permanent: true,
      },
    ]
  },
}
