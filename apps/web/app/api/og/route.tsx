import { generateOGImage } from '@fumadocs/base-ui/og'

import { loadGoogleFont } from '@/app/api/og/load-google-font'
import { appName } from '@/lib/shared'

export const revalidate = false

export async function GET(req: Request, _: RouteContext<'/api/og'>) {
  const url = new URL(req.url)

  const title = url.searchParams.get('title') ?? ''
  const description = url.searchParams.get('description') ?? ''

  const fontData = await loadGoogleFont('Geist')
  const logoUrl = new URL('/icon-512.png', req.url).toString()

  return generateOGImage({
    site: appName,
    title,
    description,
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
