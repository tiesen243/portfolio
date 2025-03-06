import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center py-8">
      <Image
        src="/assets/yuki.png"
        alt="Yuki"
        width={300}
        height={300}
        className="mb-8 object-cover"
      />
      <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Oops! Page Not Found
      </h1>
      <p className="mb-8 leading-7 [&:not(:first-child)]:mt-6">
        Looks like this page got lost in cyberspace!
      </p>

      <Link
        href="/"
        className={buttonVariants({ variant: 'outline', size: 'lg' })}
      >
        Take me home
      </Link>
    </main>
  )
}
