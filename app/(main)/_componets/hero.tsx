import Image from 'next/image'
import { ChevronDownIcon } from 'lucide-react'

import { skills } from '@/lib/data'
import Tiesen from '@/public/assets/tiesen.png'

export const HeroSection: React.FC = () => (
  <section className="relative pb-12 md:min-h-[calc(100dvh-3rem)] md:pb-0">
    <h2 className="sr-only">hero section</h2>
    <div
      className="absolute inset-x-0 top-[200px] -z-50 h-[250px] bg-red-300 opacity-10 max-md:hidden"
      style={{
        background:
          'repeating-linear-gradient(to right, var(--color-fd-primary),var(--color-fd-primary) 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, var(--color-fd-primary),var(--color-fd-primary) 1px,transparent 1px,transparent 50px)',
      }}
    />

    <section className="container flex flex-col items-center gap-4 md:pt-20">
      <h3 className="sr-only">title section</h3>

      <Image
        src={Tiesen}
        alt="Tiesen"
        sizes="(max-width: 500px) 100vw, 500px"
        className="mb-6 w-full max-w-[500px] px-4 drop-shadow-lg"
        priority
      />
      <p className="max-w-prose text-center text-lg text-pretty md:text-xl">
        <span className="text-yuki">Next.js</span> developer by day.{' '}
        <span className="text-yuki">Anime</span> enthusiast and{' '}
        <span className="text-yuki">Linux</span> tinkerer by night. Building
        clean, <span className="text-yuki">responsive web solutions</span>.
      </p>

      <a
        className="animate-shimmer bg-fd-background inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-md border bg-[linear-gradient(110deg,var(--color-fd-background),45%,var(--color-fd-secondary),55%,var(--color-fd-background))] bg-[length:200%_100%] px-6 text-sm font-medium whitespace-nowrap shadow-xs transition-all outline-none hover:scale-105 focus:outline-none active:scale-95 has-[>svg]:px-4"
        href="/assets/cv.pdf"
        download
      >
        View my CV
      </a>
    </section>

    <section className="container mt-12 space-y-4">
      <h3 className="sr-only">skills section</h3>

      <Marquee>
        {skills.map((skill, i) => (
          <SkillItem key={i} {...skill} />
        ))}
      </Marquee>

      <Marquee direction="reverse">
        {skills.map((skill, i) => (
          <SkillItem key={i} {...skill} />
        ))}
      </Marquee>
    </section>

    <ChevronDownIcon className="absolute bottom-8 left-1/2 hidden size-8 -translate-x-1/2 transform animate-bounce md:flex" />
  </section>
)

const Marquee: React.FC<{
  children: React.ReactNode
  direction?: 'normal' | 'reverse'
}> = ({ children, direction = 'normal' }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="from-fd-background absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r to-transparent" />
      <ul
        className={`flex gap-4 ${direction === 'normal' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
      >
        {children}
        {children}
      </ul>
      <div className="from-fd-background absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l to-transparent" />
    </div>
  )
}
const SkillItem: React.FC<{
  title: string
  Icon: React.ComponentType<{ className?: string }>
}> = ({ title, Icon }) => {
  return (
    <li className="bg-fd-card text-fd-card-foreground flex items-center justify-center gap-2 rounded-lg p-4 whitespace-nowrap shadow-sm">
      <Icon className="size-6" />
      <span className="text-lg">{title}</span>
    </li>
  )
}
