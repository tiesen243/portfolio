import Image from 'next/image'
import Link from 'next/link'
import * as lucideReact from 'lucide-react'

import { ThemeBtn } from './theme-btn'

export const Footer: React.FC = () => (
  <footer className="border-t py-12 lg:py-16">
    <div className="container grid grid-cols-1 gap-4 pb-8 md:grid-cols-3">
      <Link href="/" className="flex items-center gap-2 place-self-start text-xl font-bold">
        <div className="size-12 rounded-lg border p-2">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={32}
            height={32}
            className="object-cover dark:invert"
          />
        </div>
        Tiesen
      </Link>

      <nav className="flex flex-1 items-center justify-center gap-4 place-self-start md:place-self-center">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="font-medium underline-offset-4 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <section className="flex w-full items-center justify-start gap-4 place-self-end md:w-fit">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow me on ${social.label}`}
            className="transition-opacity ease-linear hover:opacity-50"
          >
            <social.icon />
          </a>
        ))}

        <div className="flex flex-1 justify-end">
          <ThemeBtn />
        </div>
      </section>
    </div>

    <hr />

    <div className="container flex items-center justify-center pt-8">
      <p className="text-muted-foreground">
        &copy; {new Date().getFullYear()} Tiesen | All rights reserved.
      </p>
    </div>
  </footer>
)

const navLinks = [
  { label: 'Home', url: '/#hero' },
  { label: 'About', url: '/#about' },
  { label: 'Contact', url: '/#contact' },
  { label: 'Projects', url: '/projects' },
  { label: 'Blog', url: '/blog' },
]

const socials = [
  {
    label: 'Github',
    href: 'https://github.com/tiesen243',
    icon: lucideReact.GithubIcon,
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/tiesen243/',
    icon: lucideReact.LinkedinIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/tiesen243.tsx/',
    icon: lucideReact.FacebookIcon,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/tiesen243',
    icon: lucideReact.TwitterIcon,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@tiesen243',
    icon: lucideReact.YoutubeIcon,
  },
  {
    label: 'Gravatar',
    href: 'https://gravatar.com/tiesen243',
    icon: lucideReact.ListCollapseIcon,
  },
]
