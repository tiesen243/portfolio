import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/lib/site'
import { ThemeSwitch } from './theme-switch'

export const Footer: React.FC = () => (
  <footer className="border-t py-4">
    <div className="container flex justify-between gap-4">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex h-fit items-center gap-2">
          <div className="rounded-lg border bg-background p-2">
            <div className="size-6">
              <Image src="/imgs/logo.svg" alt="logo" className="invert" fill />
            </div>
          </div>

          <p className="text-xl font-bold">{siteConfig.meta.applicationName}</p>
        </div>

        <nav className="flex flex-col gap-2 pt-2 text-2xl md:col-span-2 md:text-xl">
          {siteConfig.navLinks.map(({ label, url }) => (
            <Link key={label} href={url} className="underline-offset-4 hover:underline">
              {label}
            </Link>
          ))}
        </nav>
      </section>

      <ThemeSwitch />
    </div>

    <hr className="my-4" />
    <div className="container">
      <p className="text-center">
        &copy; CopyRight {new Date().getFullYear()} | Tiesen. All rights reserved.
      </p>
    </div>
  </footer>
)
