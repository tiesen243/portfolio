import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@/components/ui/typography'
import data from '@/public/assets/data.json' with { type: 'json' }
import logo from '@/public/assets/logo.svg' with { type: 'image/svg+xml' }

export const Header: React.FC = () => (
  <header
    id='hero'
    className='container flex items-center gap-4 overflow-hidden py-8'
  >
    <Image src={logo} alt='logo' className='size-14' />

    <Link href='/' className='flex flex-col gap-1'>
      <Typography variant='h2' className='truncate text-primary'>
        {data.handle}@portfolio
      </Typography>
      <Typography className='truncate text-sm text-muted-foreground'>
        {data.personalInfo.title}
      </Typography>
    </Link>
  </header>
)
