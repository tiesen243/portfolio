import { Typography } from '@yuki/ui/components/typography'
import Image from 'next/image'

import data from '@/data' with { type: 'json' }

export const AboutSection: React.FC = () => (
  <section id='about' className='container grid md:grid-cols-3'>
    <div className='md:col-span-2 space-y-2'>
      <Typography variant='h2'>About Me</Typography>
      <Typography>{data.bio}</Typography>

      <Typography variant='ul'>
        {Object.entries(data.personalInfo).map(([key, value]) => (
          <li key={key}>
            {key
              .replaceAll(/[A-Z]/gu, (match) => ` ${match}`)
              .replace(/^./u, (str) => str.toUpperCase())}
            : <span className='font-bold'>{String(value)}</span>
          </li>
        ))}
      </Typography>
    </div>

    <div className='relative aspect-square max-w-full'>
      <Image
        src='https://1.gravatar.com/avatar/48b8ec4ce6c85e06c11bda4381a3ac6cb8161a23e5ea540544c809063090815d?s=400'
        alt='Profile picture of the author'
        className='rounded-xl object-cover shadow-md'
        sizes='(max-width: 768px) 100vw, 400px'
        priority
        fill
      />
    </div>
  </section>
)
