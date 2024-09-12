import { ImageResponse } from 'next/og'

import { getBaseUrl } from '@/lib/utils'

export const runtime = 'edge'

export const alt = 'Tiesen'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const Image = () =>
  new ImageResponse(
    (
      <div tw="w-full h-full flex justify-center items-center bg-black text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${getBaseUrl()}/images/tiesen.png`} alt={alt} tw="w-5/6" />
      </div>
    ),
    { ...size },
  )

export default Image
