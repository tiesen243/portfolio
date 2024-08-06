import { ImageResponse } from 'next/og'

import { getBaseUrl } from '@/lib/site'

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
  return new ImageResponse(
    (
      <div
        tw="w-full h-full flex justify-center items-center bg-black text-white"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${getBaseUrl()}/images/tiesen.png`} alt={alt} tw="w-5/6" />
      </div>
    ),
    { ...size },
  )
}
