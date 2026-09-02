'use client'

import { Button } from '@yuki/ui/components/button'
import { Typography } from '@yuki/ui/components/typography'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <main className='flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center px-4 py-6 [grid-area:main] md:px-6 xl:px-8'>
      <Typography variant='h1' className='mb-8 text-center'>
        404 - Not Found
      </Typography>

      <Button className='mx-auto rounded-md' onClick={() => router.push('/')}>
        Take me home
      </Button>
    </main>
  )
}
