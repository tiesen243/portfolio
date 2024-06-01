import { ChevronsDownIcon } from 'lucide-react'
import Image from 'next/image'

import { Buttons } from './buttons'
import { Cobe } from './cobe'
import { description } from '@/lib/site'

export const HomeSection: React.FC = () => (
  <section id="home" className="min-h-dvh">
    <Cobe />
    <div className="absolute inset-0 z-10 grid h-full w-full place-items-center">
      <Image
        src="/imgs/tiesen.png"
        alt="Tiesen"
        width={1800}
        height={800}
        className="w-3/4 object-cover md:w-1/2"
      />
    </div>

    <div className="absolute inset-0 z-10 mt-10 flex flex-col items-center justify-end gap-4 pb-20 md:pb-12 lg:pb-28">
      <p className="max-w-screen-md text-center text-lg font-medium leading-7 drop-shadow-lg md:text-2xl md:text-white">
        {description}
      </p>

      <Buttons />

      <ChevronsDownIcon className="mt-8 animate-up-down" />
    </div>
  </section>
)
