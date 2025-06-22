import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@yuki/ui/button'
import { Typography } from '@yuki/ui/typography'

export default function NotFound() {
  return (
    <main className="container flex min-h-dvh flex-col items-center justify-center gap-8">
      <Image
        src="/assets/images/yuki.png"
        alt="Yuki Not Found"
        width={500}
        height={500}
      />

      <Typography variant="h2" className="text-center">
        404 - Page Not Found
      </Typography>

      <Link href="/" className={buttonVariants({ size: 'lg' })}>
        Take me home
      </Link>
    </main>
  )
}
