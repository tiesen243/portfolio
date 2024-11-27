import { generateOGImage } from 'fumadocs-ui/og'

import { metadataImage } from '@/lib/seo'

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: 'Tiesen',
    primaryColor: '#0F1E3B',
    primaryTextColor: '#A3C7E4',
  })
})

export function generateStaticParams() {
  return metadataImage.generateParams()
}
