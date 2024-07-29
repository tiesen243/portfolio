import { getBaseUrl } from '@/lib/site'

const robots = () => ({
  rules: [
    { userAgent: '*' },
    {
      userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider', 'YandexBot'],
      disallow: ['/cv.pdf'],
    },
  ],
  sitemap: `${getBaseUrl()}/sitemap.xml`,
  host: getBaseUrl(),
})

export default robots
