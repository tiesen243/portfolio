'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import Yuki from '@/public/assets/yuki.webp'

export default function NotFound() {
  const router = useRouter()

  return (
    <main className='flex min-h-[calc(100dvh-3.5rem)] flex-col items-center justify-center px-4 py-6 [grid-area:main] md:px-6 xl:px-8'>
      <Image
        src={Yuki}
        alt='Yuki'
        className='mx-auto w-1/3 rounded-lg object-cover'
      />

      <Typography variant='h1' className='text-center'>
        404 - Not Found
      </Typography>

      <Button className='mx-auto' onClick={() => router.push('/')}>
        Take me home
      </Button>
    </main>
  )
}
