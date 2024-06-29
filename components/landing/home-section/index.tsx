import { ChevronsDownIcon } from 'lucide-react'
import Image from 'next/image'

import { description } from '@/lib/site'
import { Buttons } from './buttons'

export const HomeSection: React.FC = () => (
  <section
    id="home"
    className="flex min-h-dvh flex-col items-center justify-center gap-16 md:gap-8"
  >
    <Image
      src="/imgs/tiesen.png"
      alt="Tiesen"
      width={1800}
      height={800}
      className="h-auto w-full object-cover drop-shadow-lg md:w-5/6"
    />

    <p className="max-w-screen-md text-center text-lg font-medium leading-7 drop-shadow-lg md:text-2xl">
      {description}
    </p>

    <Buttons />

    <ChevronsDownIcon className="absolute bottom-8 animate-up-down" />
  </section>
)
