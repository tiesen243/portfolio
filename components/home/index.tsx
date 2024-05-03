import Image from 'next/image'

import { ButtonGroup } from './button-group'
import { Intro } from './intro'
import { description } from '@/lib/site'

export const Home: React.FC = () => (
  <section
    id="home"
    className="mx-auto flex min-h-dvh max-w-screen-md flex-col justify-center gap-8"
  >
    <Image src={'/images/tiesen.png'} alt="Tiesen" width={1000} height={350} />

    <Intro />

    <p className="border-none text-center text-2xl font-medium leading-10 [&:not(:first-child)]:mt-4">
      {description}
    </p>

    <ButtonGroup />
  </section>
)
