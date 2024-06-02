'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export const Cobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
    const size = window.innerWidth < 768 ? 500 : window.innerWidth < 1024 ? 700 : 1000

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0,
      dark: 0.9,
      opacity: 0.6,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [10.796289, 106.693962], size: 0.04 }],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <div className="invisible absolute inset-0 grid h-full w-full place-items-center dark:visible">
      <canvas ref={canvasRef} className="size-[500px] md:size-[700px] lg:size-[1000px]" />
    </div>
  )
}
