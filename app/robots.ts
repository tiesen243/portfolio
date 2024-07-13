import { baseUrl } from '@/lib/site'

const robots = () => ({
  rules: [{ userAgent: '*' }],
  sitemap: `${baseUrl}/sitemap.xml`,
  host: baseUrl,
})

export default robots
