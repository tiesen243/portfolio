import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

const Page: NextPage = () => (
  <div className="flex h-[65dvh] flex-col items-center justify-center gap-4">
    <Image src="/imgs/404.png" width={1920 / 2} height={1080 / 2} alt="404" />
    <Button
      className="bg-yuki text-xl font-bold text-white transition-transform ease-linear hover:scale-105"
      size="lg"
      asChild
    >
      <Link href="/">Take me home</Link>
    </Button>
  </div>
)

export default Page
