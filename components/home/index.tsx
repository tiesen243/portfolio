import Image from 'next/image'

import { description } from '@/lib/site'
import { ArrowDownIcon } from 'lucide-react'
import { ButtonGroup } from './button-group'
import { Intro } from './intro'

export const Home: React.FC = () => {
  return (
    <section className="container flex min-h-dvh max-w-screen-md flex-col items-center justify-center gap-12">
      <Image src="/images/tiesen.png" alt="Tiesen" width={1920 / 3} height={1080 / 3} />

      <Intro />
      <p className="text-center text-2xl font-medium">{description}</p>
      <ButtonGroup />

      <span className="flex justify-center gap-2 text-lg font-bold">
        See more about me
        <ArrowDownIcon className="animate-up-down" />
      </span>
    </section>
  )
}
