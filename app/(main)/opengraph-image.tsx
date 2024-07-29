import { getBaseUrl } from '@/lib/site'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Tiesen'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  const image = `${getBaseUrl()}/imgs/tiesen.png`

  return new ImageResponse(
    (
      <div tw="w-full h-full flex justify-center items-center bg-black text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={alt} tw="w-5/6" />
      </div>
    ),
    { ...size },
  )
}
