import Image from 'next/image'
import { Download, Github } from 'lucide-react'

import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="container flex min-h-dvh max-w-screen-lg flex-col items-center justify-center"
  >
    <Image
      src="/images/tiesen.png"
      width={2500}
      height={400}
      alt="tiesen"
      className="object-cover drop-shadow-lg"
    />

    <Typography level="h1" className="text-center">
      <span className="bg-[linear-gradient(135deg,#AB1D1C,69%,hsl(var(--background)))] bg-clip-text text-transparent">
        Weeb
      </span>{' '}
      developer with a love for all things{' '}
      <span className="bg-[linear-gradient(135deg,#E18317,69%,hsl(var(--background)))] bg-clip-text text-transparent">
        anime
      </span>
      .
    </Typography>

    <div className="mt-8 flex gap-6">
      <Button variant="outline" asChild>
        <a href="https://github.com/tiesen243" target="_blank" rel="noopener noreferrer">
          <Github size={20} className="mr-2" /> Github
        </a>
      </Button>

      <Button
        variant="outline"
        className="animate-shimmer bg-[linear-gradient(110deg,hsl(var(--background)),45%,#AB1D1C,55%,hsl(var(--background)))] bg-[length:200%_100%]"
        asChild
      >
        <a href="/cv.pdf" download>
          <Download size={20} className="mr-2" /> Download CV
        </a>
      </Button>
    </div>
  </section>
)
