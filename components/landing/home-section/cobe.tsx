'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export const Cobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
    const size = window.innerWidth > 768 ? 1000 : 520

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.5,
      opacity: 0.69,
      mapSamples: 16000,
      mapBrightness: 10,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [10.796307, 106.693962], size: 0.02 }],
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
    <div className="grid h-dvh w-full place-items-center">
      <canvas ref={canvasRef} className="aspect-square size-[520px] max-w-full md:size-[1000px]" />
    </div>
  )
}
