import Image from 'next/image'

import { Typography } from '@/components/ui/typography'
import basic from '@/lib/data/basic'

export const AboutSection: React.FC = () => (
  <section id='about' className='container grid md:grid-cols-3'>
    <div className='md:col-span-2'>
      <Typography variant='h2'>About Me</Typography>
      <Typography>
        Hi, I&apos;m Tiesen, a weeb devalopa with a passion for building
        innovative solutions. I love working with TypeScript and Next.js to
        create dynamic web applications. When I&apos;m not coding, you can find
        me exploring new technologies or contributing to open-source projects.
      </Typography>
      <Typography className='text-primary'>
        Feel free to reach out if you want to collaborate or just chat about
        tech!
      </Typography>

      <Typography variant='ul'>
        <li>
          <strong>Name:</strong> {basic.name}
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${basic.email}`} className='hover:underline'>
            {basic.email}
          </a>
        </li>
        <li>
          <strong>Date of Birth:</strong> {basic.dateOfBirth}
        </li>
        <li>
          <strong>Location:</strong> {basic.location}
        </li>
        <li>
          <strong>Languages:</strong> {basic.languages.join(', ')}
        </li>
      </Typography>
    </div>

    <div className='relative aspect-square max-w-full'>
      <Image
        src='https://1.gravatar.com/avatar/48b8ec4ce6c85e06c11bda4381a3ac6cb8161a23e5ea540544c809063090815d?s=400'
        alt={basic.nickname}
        className='rounded-xl object-cover shadow-md'
        sizes='(max-width: 768px) 100vw, 400px'
        priority
        fill
      />
    </div>
  </section>
)
