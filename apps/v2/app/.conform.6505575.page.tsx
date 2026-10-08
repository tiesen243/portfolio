import * as icons from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'
import Image from 'next/image'

import { ContactForm } from '@/components/contact-form'
import { HoverLink } from '@/components/hover-link'
import { TerminalContent } from '@/components/terminal'
import { Tree } from '@/components/tree'
import data from '@/public/assets/data.json' with { type: 'json' }

export default function Page(_: PageProps<'/'>) {
  return (
    <>
      <h1 className='sr-only'>Home page of {data.handle}</h1>

      <TerminalContent
        id='portfolio'
        command='fastfetch'
        className='flex-col md:flex-row'
      >
        <h2 className='sr-only'>Portfolio section</h2>

        <div className='relative mr-4 aspect-square size-44 shrink-0'>
          <Image
            src='https://1.gravatar.com/avatar/48b8ec4ce6c85e06c11bda4381a3ac6cb8161a23e5ea540544c809063090815d?size=256'
            alt={data.handle}
            className='object-cover'
            sizes='(max-width: 256px) 100vw, 256px'
            fill
          />
        </div>

        <div className='max-w-full min-w-0 flex-1 [&>p]:truncate'>
          <Typography className='text-primary'>
            {data.handle}@portfolio
          </Typography>

          {Object.entries(data.personalInfo).map(([key, value]) => (
            <Typography key={key}>
              {key
                .replaceAll(/[A-Z]/gu, (match) => ` ${match}`)
                .replace(/^./u, (str) => str.toUpperCase())}
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
              {
                icon: icons.FolderPenIcon,
                content: 'blogs',
                href: '/blogs',
                children: [],
              },
              {
                icon: icons.FolderKanbanIcon,
                content: 'projects',
                href: '/projects',
                children: [],
              },
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
              direction: 'horizontal',
              children: skill.children.map((sub) => ({
                // oxlint-disable-next-line import/namespace
                icon: icons[sub.icon as keyof typeof icons] as React.FC<
                  React.SVGProps<SVGSVGElement>
                >,
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
              icon: icons.FolderKanbanIcon,
              content: (
                <>
                  <Typography className='font-bold text-primary'>
                    {project.title}
                  </Typography>
                  <Typography>{project.description}</Typography>
                  <Typography>
                    Repository:{' '}
                    <HoverLink href={`https://${project.repository}`}>
                      {project.repository}
                    </HoverLink>
                  </Typography>
                  {project.liveDemo && (
                    <Typography>
                      Live Demo:{' '}
                      <HoverLink href={`https://${project.liveDemo}`}>
                        {project.liveDemo}
                      </HoverLink>
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
              icon: icons.FileTextIcon,
              content: (
                <details className='group/education'>
                  <summary className='flex cursor-pointer flex-wrap items-center text-primary [&>p]:font-bold'>
                    <Typography>{edu.institution}</Typography>
                    <span className='mx-1'>-</span>
                    <Typography>{edu.degree}</Typography>
                    <Typography className='w-full text-sm font-normal! text-muted-foreground'>
                      {edu.duration}
                    </Typography>
                  </summary>
                  <div className='duration-300 ease-in-out fade-in group-open/education:animate-in'>
                    <Typography>{edu.description}</Typography>
                    <Typography>GPA: {edu.gpa}</Typography>
                  </div>
                </details>
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
              icon: icons.FileBoxIcon,
              content: (
                <details className='group/experience'>
                  <summary className='flex cursor-pointer flex-wrap items-center text-primary [&>p]:font-bold'>
                    <Typography>{exp.company}</Typography>
                    <span className='mx-1'>-</span>
                    <Typography>{exp.role}</Typography>
                    <Typography className='w-full text-sm font-normal! text-muted-foreground'>
                      {exp.duration}
                    </Typography>
                  </summary>
                  <Typography className='duration-300 ease-in-out fade-in group-open/experience:animate-in'>
                    {exp.description}
                  </Typography>
                </details>
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
              icon: icons.FileTextIcon,
              href: cert.credential,
              isExternal: true,
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

      <TerminalContent
        id='contact'
        command='cat ~/contact.txt'
        className='flex-col gap-3 md:flex-row'
      >
        <h2 className='sr-only'>Contact section</h2>

        <ContactForm />

        <Typography
          variant='ul'
          className='mb-2 ml-0 h-fit list-none border bg-card p-4 shadow-sm'
        >
          <li className='font-bold'>Contact Information:</li>

          {data.contact.map((contact) => (
            <li key={contact.type}>
              {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}:{' '}
              <HoverLink href={contact.url ?? `https://${contact.text}`}>
                {contact.text}
              </HoverLink>
            </li>
          ))}
        </Typography>
      </TerminalContent>
    </>
  )
}
