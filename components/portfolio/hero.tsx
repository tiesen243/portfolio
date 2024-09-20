import Image from 'next/image'
import Link from 'next/link'
import { Download, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="container flex min-h-dvh max-w-screen-lg flex-col items-center justify-center overflow-x-hidden"
  >
    <div className="pointer-events-none relative flex place-items-center before:absolute before:h-[700px] before:w-[140px] before:translate-x-1 before:translate-y-[-10px] before:rotate-[-32deg] before:rounded-full before:bg-gradient-to-r before:from-[var(--yuki)] before:to-[var(--kaze)] before:opacity-30 before:blur-[100px] before:content-[''] lg:before:h-[700px] lg:before:w-[240px] lg:before:translate-x-[-100px]" />

    <Image
      src="/assets/tiesen.png"
      width={2500}
      height={400}
      alt="tiesen"
      className="h-auto w-full object-cover drop-shadow-lg"
    />

    <Typography level="h1" className="text-center">
      <span className="bg-[linear-gradient(135deg,var(--yuki),69%,hsl(var(--secondary)))] bg-clip-text text-transparent">
        Weeb
      </span>{' '}
      devalowopu with a love for all things{' '}
      <span className="bg-[linear-gradient(135deg,var(--kaze),69%,hsl(var(--secondary)))] bg-clip-text text-transparent">
        anime
      </span>
    </Typography>

    <div className="mt-8 flex gap-6">
      <Button asChild>
        <Link href="/contact">
          <Phone size={20} className="mr-2" /> Contact Me
        </Link>
      </Button>

      <Button
        variant="outline"
        className="animate-shimmer bg-[linear-gradient(110deg,hsl(var(--background)),45%,var(--yuki),55%,hsl(var(--background)))] bg-[length:200%_100%] transition-all ease-linear hover:brightness-125"
        asChild
      >
        <a href="/assets/cv.pdf" download>
          <Download size={20} className="mr-2" /> Download CV
        </a>
      </Button>
    </div>
  </section>
)
