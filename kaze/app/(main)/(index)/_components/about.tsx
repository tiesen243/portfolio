import { Typography } from '@yuki/ui/typography'
import Image from 'next/image'

import { basic } from '@/lib/data'

export function AboutSection() {
  return (
    <>
      <section id='about' className='container grid md:grid-cols-3'>
        <div className='md:col-span-2'>
          <Typography variant='h2'>About Me</Typography>
          <Typography>
            Hi, I&apos;m Tiesen, a weeb devalopa with a passion for building
            innovative solutions. I love working with TypeScript and Next.js to
            create dynamic web applications. When I&apos;m not coding, you can
            find me exploring new technologies or contributing to open-source
            projects.
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
            priority
            fill
          />
        </div>
      </section>

      <section
        id='certifications'
        className='container mt-6 flex flex-col gap-0'
      >
        <Typography variant='h3'>Certifications</Typography>

        {basic.certifications.map((certification) => (
          <section
            key={certification.name}
            className='relative ml-4 border-l border-primary p-8 pt-0 last:pb-0'
          >
            <div className='absolute top-0 -left-1.5 size-2.5 rounded-full bg-primary' />
            <Typography variant='h5' render={<h4 />} className='-mt-2'>
              {certification.name}
            </Typography>
            <Typography className='text-muted-foreground'>
              Issued by {certification.issuer} on {certification.date}
            </Typography>
            <Typography>{certification.description}</Typography>
            <Typography
              render={
                <a
                  href={certification.link}
                  target='_blank'
                  rel='noopener noreferrer'
                />
              }
              className='hover:underline'
            >
              View Certificate
            </Typography>
          </section>
        ))}
      </section>

      <section id='education' className='container mt-6 flex flex-col gap-0'>
        <Typography variant='h3'>Educations</Typography>

        {basic.educations.map((education) => (
          <div
            key={education.school}
            className='relative ml-4 border-l border-primary p-8 pt-0 last:pb-0'
          >
            <div className='absolute top-0 -left-1.5 size-2.5 rounded-full bg-primary' />
            <Typography variant='h5' render={<h4 />} className='-mt-2'>
              {education.school}
            </Typography>
            <Typography className='text-muted-foreground'>
              {education.duration}
            </Typography>
            <Typography>
              {education.major} {education.gpa && `- GPA: ${education.gpa}`}
            </Typography>
          </div>
        ))}
      </section>

      <section id='experience' className='container mt-6 flex flex-col gap-0'>
        <Typography variant='h3'>Experiences</Typography>

        {basic.experiences.map((exp) => (
          <section
            key={exp.company}
            className='relative ml-4 border-l border-primary p-8 pt-0 last:pb-0'
          >
            <div className='absolute top-0 -left-1.5 size-2.5 rounded-full bg-primary' />
            <Typography variant='h4' className='-mt-2'>
              {exp.company}
            </Typography>
            <Typography className='text-muted-foreground'>
              {exp.duration}
            </Typography>
            <Typography>{exp.position}</Typography>
            <Typography>{exp.description}</Typography>
          </section>
        ))}
      </section>
    </>
  )
}
