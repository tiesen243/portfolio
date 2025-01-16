import { generateOGImage } from 'fumadocs-ui/og'

import { createMetadata } from '@/lib/metadata'

export const GET = (req: Request) => {
  const searchParams = new URL(req.url).searchParams
  const meta = createMetadata({})

  return generateOGImage({
    // @ts-expect-error - `title` is string
    title: searchParams.get('title') ?? meta.title,
    description: searchParams.get('description') ?? String(meta.description),
    site: 'Tiesen',
    primaryColor: '#0F1E3B',
    primaryTextColor: '#7aa2f7',
  })
}
