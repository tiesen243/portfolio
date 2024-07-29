import { ChevronsDownIcon } from 'lucide-react'
import Image from 'next/image'

import { description } from '@/lib/site'
import { Buttons } from './buttons'

export const HomeSection: React.FC = () => (
  <section
    id="home"
    className="flex min-h-dvh flex-col items-center justify-center gap-16 px-8 md:gap-8"
  >
    <Image
      src="/imgs/tiesen.png"
      alt="Tiesen"
      className="w-full object-cover md:w-3/4"
      width={2500}
      height={400}
    />

    <p className="max-w-screen-md text-center text-lg font-medium leading-7 drop-shadow-lg md:text-2xl">
      {description}
    </p>

    <Buttons />

    <ChevronsDownIcon className="absolute bottom-8 animate-up-down" />
  </section>
)
