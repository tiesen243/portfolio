import { FileBoxIcon, FileTextIcon, FolderKanbanIcon } from 'lucide-react'
import Image from 'next/image'

import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
import * as icons from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import data from '@/public/assets/data.json' with { type: 'json' }

export default function Page(_: PageProps<'/'>) {
  return (
    <>
      <h1 className='sr-only'>Home page of {data.handle}</h1>

      <TerminalContent id='portfolio' command='fastfetch'>
        <h2 className='sr-only'>Portfolio section</h2>

        <div className='relative mr-4 aspect-square h-44 shrink-0'>
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

      <TerminalContent id='README.md' command='cat ~/portfolio/README.md'>
        <h2 className='sr-only'>Bio section</h2>

        <Typography>{data.bio}</Typography>
      </TerminalContent>

      <TerminalContent command='echo $QUOTE'>
        <h2 className='sr-only'>Quote section</h2>

        <Typography>I use Arch, btw</Typography>
      </TerminalContent>

      <TerminalContent command='ls ~'>
        <h2 className='sr-only'>Portfolio directory section</h2>

        <Tree
          node={{
            content: '.',
            children: [
              { content: 'blogs', href: '/blogs', children: [] },
              { content: 'projects', href: '/projects', children: [] },
              { content: 'portfolio', href: '/#portfolio', children: [] },
              { content: 'contact.txt', href: '/#contact' },
              { content: 'cv-en.pdf', href: '/assets/cv-en.pdf' },
              { content: 'cv-vi.pdf', href: '/assets/cv-vi.pdf' },
            ],
          }}
        />
      </TerminalContent>

      <TerminalContent id='skills' command='ls -la ~/portfolio/skills'>
        <h2 className='sr-only'>Skills section</h2>

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

      <TerminalContent
        id='key-projects'
        command='ls -la ~/portfolio/key-projects'
      >
        <h2 className='sr-only'>Key projects section</h2>

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

      <TerminalContent id='education' command='ls -la ~/portfolio/education'>
        <h2 className='sr-only'>Education section</h2>

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

      <TerminalContent id='experience' command='ls -la ~/portfolio/experience'>
        <h2 className='sr-only'>Experience section</h2>

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

      <TerminalContent
        id='certificates'
        command='ls -la ~/portfolio/certificates'
      >
        <h2 className='sr-only'>Certificates section</h2>

        <Tree
          node={{
            content: '.',
            children: data.certificates.map((cert) => ({
              icon: FileTextIcon,
              href: cert.credential,
              content: (
                <>
                  <Typography className='font-bold text-primary'>
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

      <TerminalContent id='contact' command='cat ~/contact.txt'>
        <h2 className='sr-only'>Contact section</h2>

        <Typography variant='ul' className='ml-0 list-none'>
          {data.contact.map((contact) => (
            <li key={contact.type}>
              {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}:{' '}
              <a
                href={contact.url ?? `https://${contact.text}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                {contact.text}
              </a>
            </li>
          ))}
        </Typography>
      </TerminalContent>

      <TerminalContent command='echo $COPYRIGHT'>
        <h2 className='sr-only'>Copyright section</h2>

        <Typography>
          ©{new Date().getFullYear()} tiesen243. All rights reserved.
        </Typography>
      </TerminalContent>
    </>
  )
}
