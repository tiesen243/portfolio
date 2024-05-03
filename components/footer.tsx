import Image from 'next/image'

import { Typography } from '@/components/ui/typography'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ThemeBtn } from './theme-btn'

const Footer: React.FC<{ className?: string }> = ({ className }) => (
  <footer className={cn('mt-4 border-t py-4', className)}>
    <div className="container flex justify-between gap-4">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex h-fit items-center gap-2">
          <div className="rounded-lg border bg-background p-2">
            <div className="size-6">
              <Image src="/images/logo.svg" alt="logo" className="dark:invert" fill />
            </div>
          </div>

          <Typography variant="h4">{siteConfig.meta.applicationName}</Typography>
        </div>

        <ul className="flex flex-col gap-2 text-2xl md:col-span-2 md:text-xl">
          {siteConfig.navLinks.map(({ label, url }) => (
            <li key={label}>
              <Typography variant="link" href={url}>
                {label}
              </Typography>
            </li>
          ))}
        </ul>
      </section>

      <ThemeBtn />
    </div>

    <hr className="my-4" />
    <div className="container">
      <Typography variant="p" clr="muted" className="text-center">
        &copy; CopyRight {new Date().getFullYear()} | Tiesen. All rights reserved.
      </Typography>
    </div>
  </footer>
)

export default Footer
