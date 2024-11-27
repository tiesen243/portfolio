import Image from 'next/image'
import Link from 'next/link'
import { ChevronsDownIcon, DownloadIcon, PhoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="container flex min-h-[95dvh] max-w-screen-lg flex-col items-center justify-center"
  >
    <Image
      src="/assets/tiesen.png"
      width={2500}
      height={400}
      alt="tiesen"
      className="h-auto w-full object-cover drop-shadow-lg"
      priority
    />

    <Typography level="h1" className="mt-8 text-center md:mt-0">
      Weeb devalowopu with a love for all things anime
    </Typography>

    <div className="mt-16 flex items-center gap-6 md:mt-8">
      <Button asChild>
        <Link href="/contact">
          <PhoneIcon size={20} className="mr-2" /> Contact Me
        </Link>
      </Button>

      <Button variant="outline" asChild>
        <a href="/assets/cv.pdf" download>
          <DownloadIcon size={20} className="mr-2" /> Download CV
        </a>
      </Button>
    </div>

    <ChevronsDownIcon size={28} className="absolute bottom-4 animate-pulse md:bottom-8" />
  </section>
)
