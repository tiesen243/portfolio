import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export const metadata = {
  title: '404',
  description: 'Page not found',
}

const Page: NextPage = () => (
  <main className="flex h-[65dvh] flex-1 flex-col items-center justify-center gap-4">
    <Image src="/imgs/404.png" width={1920 / 2} height={1080 / 2} alt="404" />

    <Button
      size="lg"
      className="bg-gradient-to-b from-primary to-muted-foreground text-xl font-bold"
      asChild
    >
      <Link href="/">Take me home</Link>
    </Button>
  </main>
)

export default Page
