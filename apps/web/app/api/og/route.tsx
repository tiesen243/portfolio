import { generate as DefaultImage } from '@fumadocs/base-ui/og'
import { ImageResponse } from 'next/og'

import { loadGoogleFont } from '@/app/api/og/load-google-font'
import { appName } from '@/lib/shared'
import { truncateText } from '@/lib/utils'

export const revalidate = false

export async function GET(req: Request, _: RouteContext<'/api/og'>) {
  const url = new URL(req.url)

  const title = url.searchParams.get('title') ?? ''
  const description = url.searchParams.get('description') ?? ''

  const fontData = await loadGoogleFont('Geist')
  const logoUrl = new URL('/icon-512.png', req.url).toString()

  return new ImageResponse(
    <DefaultImage
      site={appName}
      title={truncateText(title, 24)}
      description={truncateText(description, 100)}
      // oxlint-disable-next-line next/no-img-element
      icon={<img src={logoUrl} alt='Author Avatar' width={64} height={64} />}
      primaryColor='#14185a'
      primaryTextColor='#3f5ec2'
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
