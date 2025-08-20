'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { buttonVariants } from '@yuki/ui/button'
import { Typography } from '@yuki/ui/typography'

export default function NotFound() {
  const pathName = usePathname()

  return (
    <main className="container flex min-h-[calc(100dvh-1.5rem)] flex-col items-center justify-center gap-8">
      <Image
        src="/assets/images/yuki.webp"
        alt="Yuki Not Found"
        width={500}
        height={500}
      />

      <Typography variant="h2" className="text-center">
        404 - Page Not Found
      </Typography>

      <Typography className="text-muted-foreground text-center">
        Sorry, the blog page you are looking for does not exist.
      </Typography>

      <Link
        href={pathName.startsWith('/blogs') ? '/blogs' : '/projects'}
        className={buttonVariants({ size: 'lg' })}
      >
        Go back to {pathName.startsWith('/blogs') ? 'Blogs' : 'Projects'}
      </Link>
    </main>
  )
}
