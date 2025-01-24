import Image from 'next/image'
import Link from 'next/link'

import { ThemeSwitch } from '@/components/theme-switch'
import { navigations, socials } from '@/data'
import Logo from '@/public/assets/tiesen.png'

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="sticky inset-0 top-2 z-50 container w-full max-w-screen">
        <div className="bg-background/70 flex h-12 w-full items-center justify-between gap-4 rounded-full border px-6 shadow-lg backdrop-blur-xl backdrop-saturate-150">
          <nav className="flex items-center gap-2">
            <Link href="/">
              <Image src={Logo} alt="Tiesen" className="w-20" priority />
            </Link>

            {navigations.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                target={item.isExternal ? '_blank' : '_self'}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors md:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex h-full items-center gap-4">
            {socials.map((social) => (
              <Link
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <social.icon className="size-4" />
              </Link>
            ))}
            <ThemeSwitch />
          </div>
        </div>
      </header>

      {children}
    </>
  )
}
