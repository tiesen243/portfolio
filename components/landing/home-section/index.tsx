import Image from 'next/image'

import { ChevronsDownIcon } from 'lucide-react'
import { Buttons } from './buttons'
import { Cobe } from './cobe'
import { Info } from './info'

export const HomeSection: React.FC = () => (
  <section id="home" className="min-h-dvh">
    <Cobe />
    <div className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4">
      <Image
        src="/imgs/tiesen.png"
        alt="Tiesen"
        width={1920 / 4}
        height={1080 / 4}
        className="h-auto w-1/2"
      />
      <Info />
    </div>

    <div className="absolute inset-0 z-10 flex flex-col items-center justify-end gap-4 pb-20 md:pb-36">
      <p className="max-w-screen-md text-center text-lg font-medium leading-7 drop-shadow-lg md:text-2xl md:text-white">
        I&apos;m a weeb developer who loves to build things. I enjoy working with TypeScript,
        Next.js, and ElysiaJS. I&apos;m also a fan of anime, manga, and light novels.
      </p>

      <Buttons />

      <ChevronsDownIcon className="animate-up-down" />
    </div>
  </section>
)
