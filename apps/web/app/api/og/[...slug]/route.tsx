import { generateOGImage } from 'fumadocs-ui/og'
import { notFound } from 'next/navigation'

import { loadGoogleFont } from '@/app/api/og/load-google-font'
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

  return generateOGImage({
    site: appName,
    title: page.data.title,
    description: page.data.description,
    // oxlint-disable-next-line nextjs/no-img-element
    icon: <img src={logoUrl} alt='Author Avatar' width={64} height={64} />,
    primaryColor: '#14185a',
    primaryTextColor: '#3f5ec2',
    fonts: [
      {
        name: 'Geist',
        data: fontData,
        weight: 400,
        style: 'normal',
      },
    ],
  })
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }))
}
