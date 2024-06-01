import { ChevronsDownIcon } from 'lucide-react'
import Image from 'next/image'

import { description } from '@/lib/site'
import { Buttons } from './buttons'
import { Cobe } from './cobe'

export const HomeSection: React.FC = () => (
  <section id="home" className="min-h-dvh">
    <Cobe />
    <div className="absolute inset-0 grid h-full w-full place-items-center">
      <Image
        src="/imgs/tiesen.png"
        alt="Tiesen"
        width={1800}
        height={800}
        className="w-full object-cover drop-shadow-lg md:w-3/4"
      />
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 pb-16">
      <p className="max-w-screen-md text-center text-lg font-medium leading-7 drop-shadow-lg md:text-2xl">
        {description}
      </p>

      <Buttons />

      <ChevronsDownIcon className="mt-8 animate-up-down" />
    </div>
  </section>
)
