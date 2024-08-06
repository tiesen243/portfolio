import { ChevronsDown } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { description } from '@/lib/site'
import Link from 'next/link'

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="container flex min-h-dvh max-w-screen-xl flex-col items-center justify-center gap-10"
  >
    <Image
      src="/images/tiesen.png"
      alt="Tiesen"
      className="z-10 object-cover"
      width={2500}
      height={400}
    />

    <p className="max-w-screen-md text-center text-2xl font-bold">{description}</p>

    <div className="flex items-center justify-center gap-8 *:transition-all">
      <Button size="lg" className="text-lg hover:scale-105" asChild>
        <Link href="#contact">Contact Me</Link>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="animate-shimmer bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--input)),55%,hsl(var(--background)))] bg-[length:200%_100%] text-lg hover:scale-105"
        asChild
      >
        <a href="/cv.pdf" download="Tiesen CV" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </Button>
    </div>

    <ChevronsDown className="absolute bottom-8 animate-up-down" size={32} />
  </section>
)
