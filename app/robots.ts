import { getBaseUrl } from '@/lib/site'

const robots = () => ({
  rules: [{ userAgent: '*' }],
  sitemap: `${getBaseUrl()}/sitemap.xml`,
  host: getBaseUrl(),
})

export default robots
