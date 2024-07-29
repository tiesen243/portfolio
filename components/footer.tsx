import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/lib/site'
import { ThemeSwitch } from './theme-switch'

export const Footer: React.FC = () => (
  <footer className="border-t py-12 lg:py-16">
    <div className="container grid grid-cols-1 gap-4 pb-8 md:grid-cols-3">
      <Link href="/" className="flex items-center gap-2 place-self-start text-xl font-bold">
        <div className="size-12 rounded-lg border p-2">
          <Image
            src="/imgs/logo.svg"
            alt="logo"
            width={32}
            height={32}
            className="object-cover dark:invert"
          />
        </div>
        Tiesen
      </Link>

      <nav className="flex flex-1 items-center justify-center gap-4 place-self-start md:place-self-center">
        {siteConfig.navLinks.map((link, idx) => (
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
        {siteConfig.socials.map((social) => (
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
          <ThemeSwitch />
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
