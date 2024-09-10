import { ChevronsDown, ContactIcon, DownloadIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="container flex min-h-dvh flex-col items-center justify-center overflow-x-hidden"
  >
    <div className="pointer-events-none relative flex place-items-center before:absolute before:h-[700px] before:w-[140px] before:translate-x-1 before:translate-y-[-10px] before:rotate-[-32deg] before:rounded-full before:bg-gradient-to-r before:from-[#0141ff] before:to-[#60c5ff] before:opacity-30 before:blur-[100px] before:content-[''] lg:before:h-[700px] lg:before:w-[240px] lg:before:translate-x-[-100px]" />

    <Image
      src="/images/tiesen.png"
      alt="Tiesen"
      className="w-full max-w-screen-lg object-cover"
      width={2500}
      height={400}
    />

    <p className="mb-6 text-center text-lg md:text-xl">
      A <b>Weeb Devalopor</b> who love to code and watch anime.
    </p>

    <div className="grid grid-cols-2 place-items-center gap-4">
      <Button className="w-full rounded-full" asChild>
        <Link href="#contact">
          <ContactIcon className="mr-2 size-5" /> Contact Me
        </Link>
      </Button>

      <Button
        variant="outline"
        className="w-full animate-shimmer rounded-full bg-[linear-gradient(110deg,hsl(var(--background)),45%,hsl(var(--input)),55%,hsl(var(--background)))] bg-[length:200%_100%] hover:brightness-150"
        asChild
      >
        <a href="/cv.pdf" download="Tiesen CV" target="_blank" rel="noopener noreferrer">
          <DownloadIcon className="mr-2 size-5" /> Download CV
        </a>
      </Button>
    </div>

    <ChevronsDown className="absolute bottom-6 animate-up-down" size={32} />
  </section>
)
