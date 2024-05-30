import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Page: NextPage = () => (
  <div className="flex h-[60dvh] flex-col items-center justify-center gap-8">
    <h1 className="scroll-m-20 text-4xl font-black tracking-tight md:text-6xl">EGG!</h1>
    <h2 className="mt-4 scroll-m-20 pb-4 text-3xl font-semibold tracking-tight md:text-5xl">
      404 | Page Not Found OwO
    </h2>

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
