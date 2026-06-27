import Image from 'next/image'

import { Terminal } from '@/components/terminal'
import { Typography } from '@/components/ui/typography'
import data from '@/public/assets/data.json' with { type: 'json' }
import logo from '@/public/assets/logo.svg' with { type: 'image/svg+xml' }

export const Wrapper: React.FC<React.ComponentProps<typeof Terminal>> = (
  props
) => (
  <main className='container flex flex-col gap-8 py-4'>
    <h1 className='sr-only'>Welcome to Tiesen243's Portfolio</h1>

    <section id='hero' className='flex items-center gap-4'>
      <Image src={logo} alt='logo' className='size-14' />

      <div className='flex flex-col gap-1'>
        <Typography variant='h2' className='text-primary'>
          {data.handle}@portfolio
        </Typography>
        <Typography className='text-sm text-muted-foreground'>
          {data.personalInfo.title}
        </Typography>
      </div>
    </section>

    <Terminal {...props} />
  </main>
)
