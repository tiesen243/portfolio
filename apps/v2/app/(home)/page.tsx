import { FileBoxIcon, FileTextIcon, FolderKanbanIcon } from 'lucide-react'
import Image from 'next/image'

import { Terminal } from '@/app/(home)/_components/terminal'
import { TerminalContent } from '@/app/(home)/_components/terminal-content'
import { Tree } from '@/app/(home)/_components/tree'
import * as icons from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import data from '@/public/assets/data.json' with { type: 'json' }
import logo from '@/public/assets/logo.svg' with { type: 'image/svg+xml' }

export default function Page(_: PageProps<'/'>) {
  return (
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

      <Terminal>
        <TerminalContent
          command='fastfetch'
          className='flex items-stretch gap-4'
        >
          <div className='relative aspect-square h-44 shrink-0'>
            <Image
              src='https://1.gravatar.com/avatar/48b8ec4ce6c85e06c11bda4381a3ac6cb8161a23e5ea540544c809063090815d?size=256'
              alt='tiesen243'
              className='object-cover'
              sizes='(max-width: 256px) 100vw, 256px'
              fill
            />
          </div>

          <div className='min-w-0 flex-1 [&>p]:truncate'>
            <Typography className='text-primary'>
              {data.handle}@portfolio
            </Typography>

            {Object.entries(data.personalInfo).map(([key, value]) => (
              <Typography key={key}>
                {key
                  .replaceAll(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())}
                : <span className='font-bold'>{String(value)}</span>
              </Typography>
            ))}
          </div>
        </TerminalContent>

        <TerminalContent command='cat ~/README.md'>
          <Typography>{data.bio}</Typography>
        </TerminalContent>

        <TerminalContent command='ls -lah ~/skills'>
          <Tree
            node={{
              content: '.',
              children: data.skills.map((skill) => ({
                content: skill.content,
                children: skill.children.map((sub) => ({
                  icon: icons[sub.icon as keyof typeof icons],
                  content: sub.content,
                })),
              })),
            }}
          />
        </TerminalContent>

        <TerminalContent command='ls -lah ~/projects'>
          <Tree
            node={{
              content: '.',
              children: data.projects.map((project) => ({
                icon: FolderKanbanIcon,
                content: (
                  <>
                    <Typography className='font-bold text-primary'>
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                    <Typography>
                      Repository:{' '}
                      <a
                        href={`https://${project.repository}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary hover:underline'
                      >
                        {project.repository}
                      </a>
                    </Typography>
                    {project.liveDemo && (
                      <Typography>
                        Live Demo:{' '}
                        <a
                          href={`https://${project.liveDemo}`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-primary hover:underline'
                        >
                          {project.liveDemo}
                        </a>
                      </Typography>
                    )}
                  </>
                ),
              })),
            }}
          />
        </TerminalContent>

        <TerminalContent command='ls -lah ~/education'>
          <Tree
            node={{
              content: '.',
              children: data.education.map((edu) => ({
                icon: FileTextIcon,
                content: (
                  <>
                    <div className='flex flex-wrap items-center gap-2 text-primary [&>p]:font-bold'>
                      <Typography>{edu.institution}</Typography> -{' '}
                      <Typography>{edu.degree}</Typography>
                    </div>
                    <Typography className='text-sm text-muted-foreground'>
                      {edu.duration}
                    </Typography>
                    <Typography>{edu.description}</Typography>
                    <Typography>GPA: {edu.gpa}</Typography>
                  </>
                ),
              })),
            }}
          />
        </TerminalContent>

        <TerminalContent command='ls -lah ~/experience'>
          <Tree
            node={{
              content: '.',
              children: data.experience.map((exp) => ({
                icon: FileBoxIcon,
                content: (
                  <>
                    <div className='flex flex-wrap items-center gap-2 text-primary [&>p]:font-bold'>
                      <Typography>{exp.company}</Typography> -{' '}
                      <Typography>{exp.role}</Typography>
                    </div>
                    <Typography className='text-sm text-muted-foreground'>
                      {exp.duration}
                    </Typography>
                    <Typography>{exp.description}</Typography>
                  </>
                ),
              })),
            }}
          />
        </TerminalContent>

        <TerminalContent command='ls -lah ~/certificates'>
          <Tree
            node={{
              content: '.',
              children: data.certificates.map((cert) => ({
                icon: FileTextIcon,
                content: (
                  <>
                    <Typography
                      as='a'
                      href={cert.credential}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-bold text-primary'
                    >
                      {cert.name}
                    </Typography>
                    <Typography>Issued by {cert.issuer}</Typography>
                    <Typography className='text-sm text-muted-foreground'>
                      {cert.date}
                    </Typography>
                  </>
                ),
              })),
            }}
          />
        </TerminalContent>

        <TerminalContent command='cat ~/contact'>
          {data.contact.map((contact) => (
            <Typography key={contact.type}>
              {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}:{' '}
              <a
                href={contact.url ?? `https://${contact.text}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                {contact.text}
              </a>
            </Typography>
          ))}
        </TerminalContent>

        <TerminalContent command='echo $QUOTE'>
          <Typography>I use Arch, btw</Typography>
        </TerminalContent>

        <TerminalContent command='_' />
      </Terminal>
    </main>
  )
}
