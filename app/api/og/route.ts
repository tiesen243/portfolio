import { generateOGImage } from 'fumadocs-ui/og'

import { seo } from '@/lib/seo'

export const GET = (req: Request) => {
  const searchParams = new URL(req.url).searchParams

  return generateOGImage({
    title: searchParams.get('title') ?? String(seo({}).title),
    description: searchParams.get('description') ?? String(seo({}).description),
    site: 'Tiesen',
    primaryColor: '#0F1E3B',
    primaryTextColor: '#A3C7E4',
  })
}
