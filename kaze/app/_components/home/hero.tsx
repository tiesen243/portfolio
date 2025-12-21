import {
  ContactIcon,
  DownloadIcon,
  FolderKanbanIcon,
  RssIcon,
} from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'
import Image from 'next/image'
import Link from 'next/link'
import Tiesen from '@/public/assets/logotype.png'

export function HeroSection() {
  return (
    <section
      id='hero'
      className='container flex min-h-dvh flex-col items-center justify-center'
      style={{ '--max-width': '800px' } as React.CSSProperties}
    >
      <h2 className='sr-only'>Hero section</h2>

      <code className='mb-6 text-primary'>"use portfolio"</code>

      <Image
        src={Tiesen}
        alt='Tiesen'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='mx-auto h-auto w-(--max-width)'
      />

      <Typography className='mt-6 max-w-(--max-width) text-center text-pretty'>
        I believe this world is{' '}
        <span className='font-medium text-primary'>flat</span>, because{' '}
        <span className='font-medium text-primary'>loli</span> is my world OwO
      </Typography>

      <nav className='mt-8 flex w-full max-w-(--max-width) flex-col gap-4'>
        {navs.map((nav) => (
          <Link
            key={nav.label}
            href={nav.href}
            prefetch={nav.href.endsWith('.pdf') ? false : true}
            className='flex items-center justify-between'
          >
            <Typography className='inline-flex items-center gap-2'>
              <nav.icon className='size-4' />
              <span>{nav.label}</span>
            </Typography>

            <kbd data-shortcut={nav.shortcut} className='text-primary'>
              {nav.shortcut}
            </kbd>
          </Link>
        ))}
      </nav>
    </section>
  )
}

const navs = [
  {
    icon: DownloadIcon,
    label: 'Dowload Resume',
    shortcut: 'r',
    href: '/assets/cv.pdf',
  },
  {
    icon: ContactIcon,
    label: 'Contact Me',
    shortcut: 'c',
    href: '/contact',
  },
  {
    icon: FolderKanbanIcon,
    label: 'Projects',
    shortcut: 'p',
    href: '/projects',
  },
  {
    icon: RssIcon,
    label: 'Blogs',
    shortcut: 'b',
    href: '/blogs',
  },
] as const
