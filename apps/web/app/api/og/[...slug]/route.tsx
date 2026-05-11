import { notFound } from 'next/navigation'
import { ImageResponse } from 'next/og'

import { loadGoogleFont } from '@/app/api/og/_utils'
import { OpenGraph } from '@/components/ui/open-graph'
import { appName } from '@/lib/shared'
import { getPageImage, source } from '@/lib/source'

export const revalidate = false

export async function GET(
  req: Request,
  { params }: RouteContext<'/api/og/[...slug]'>
) {
  const { slug } = await params
  const page = source.getPage(slug.slice(0, -1))
  if (!page) notFound()

  const fontData = await loadGoogleFont('Geist')
  const logoUrl = new URL('/icon-512.png', req.url).toString()

  return new ImageResponse(
    <OpenGraph
      appName={appName}
      title={page.data.title}
      description={page.data.description}
      image={page.data.image}
      logo={<img src={logoUrl} width={56} height={56} />}
      caption={new URL(req.url).hostname}
    />,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  )
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }))
}
