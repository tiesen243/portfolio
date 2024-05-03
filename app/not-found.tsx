import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import type { NextPage } from 'next'
import Link from 'next/link'

const Page: NextPage = () => {
  return (
    <div className="flex h-[70dvh] flex-col items-center justify-center gap-8">
      <Typography variant="h1">EGG!</Typography>
      <Typography variant="h2" className="border-none">
        404 | Page Not Found
      </Typography>

      <Button
        className="bg-gradient-yuki text-xl font-bold text-white transition-transform hover:scale-105"
        size="lg"
        asChild
      >
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  )
}

export default Page
