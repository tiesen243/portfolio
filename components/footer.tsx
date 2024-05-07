import Image from 'next/image'

import { Typography } from '@/components/ui/typography'
import { siteConfig } from '@/lib/site'

const Footer: React.FC = () => (
  <footer className="mt-4 border-t py-4">
    <div className="container flex justify-between gap-4">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex h-fit items-center gap-2">
          <div className="rounded-lg border bg-background p-2">
            <div className="size-6">
              <Image src="/images/logo.svg" alt="logo" className="invert" fill />
            </div>
          </div>

          <Typography variant="h4">{siteConfig.meta.applicationName}</Typography>
        </div>

        <ul className="flex flex-col gap-2 pt-2 text-2xl md:col-span-2 md:text-xl">
          {siteConfig.navLinks.map(({ label, url }) => (
            <li key={label}>
              <Typography variant="link" href={url}>
                {label}
              </Typography>
            </li>
          ))}
        </ul>
      </section>
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
