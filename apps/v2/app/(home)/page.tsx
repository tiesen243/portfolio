import { Terminal } from '@/app/(home)/_components/terminal'
import { TerminalContent } from '@/app/(home)/_components/terminal-content'
import { Tree } from '@/app/(home)/_components/tree'
import * as icons from '@/components/ui/icons'
import { Typography } from '@/components/ui/typography'
import data from '@/public/assets/data.json' with { type: 'json' }

export default function Page(_: PageProps<'/'>) {
  return (
    <main className='container flex flex-col gap-8 py-4'>
      <h1 className='sr-only'>Welcome to Tiesen243's Portfolio</h1>

      <section id='hero' className='flex items-center gap-4'>
        <icons.ArchLinuxLogo className='size-16 fill-primary' />

        <div className='flex flex-col gap-1'>
          <Typography variant='h2' className='text-primary'>
            tiesen243@portfolio
          </Typography>
          <Typography className='text-sm text-muted-foreground'>
            Full-stack Developer | IoT Engineer
          </Typography>
        </div>
      </section>

      <Terminal>
        <TerminalContent command='cat ~/README.md'>
          <Typography variant='p'>
            Hello! I&apos;m Tiesen, a passionate full-stack developer and IoT
            engineer. I love building innovative solutions that bridge the gap
            between software and hardware. Welcome to my portfolio!
          </Typography>
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

        <TerminalContent command='cat ~/contact'>
          {data.contact.map((contact) => (
            <Typography key={contact.type}>
              {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}:{' '}
              <a href={contact.url} className='text-primary hover:underline'>
                {contact.text}
              </a>
            </Typography>
          ))}
        </TerminalContent>

        <TerminalContent command='_' />
      </Terminal>
    </main>
  )
}
