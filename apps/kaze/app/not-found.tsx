'use client'

import { buttonVariants } from '@yuki/ui/button'
import { Typography } from '@yuki/ui/typography'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DocsNotFoundError() {
  const pathName = usePathname()

  const target = {
    blogs: { href: '/blogs' as const, label: 'Go to blogs' },
    projects: { href: '/projects' as const, label: 'Go to projects' },
  }[pathName.split('/')[1] ?? ''] ?? { href: '/', label: 'Take me home' }

  return (
    <main className='container flex min-h-[calc(100dvh-1.5rem)] flex-col items-center justify-center gap-8'>
      <Image
        src='/assets/images/yuki.webp'
        alt='Yuki Not Found'
        width={500}
        height={500}
        priority
      />

      <Typography variant='h2' className='text-center'>
        404 - Page Not Found
      </Typography>

      <Typography className='text-center text-muted-foreground'>
        Sorry, the page you are looking for does not exist.
      </Typography>

      <Link href={target.href} className={buttonVariants({ size: 'lg' })}>
        {target.label}
      </Link>
    </main>
  )
}
