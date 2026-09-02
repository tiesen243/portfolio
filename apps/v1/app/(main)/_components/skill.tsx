import { Badge } from '@yuki/ui/components/badge'
import * as icons from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'

import data from '@/data' with { type: 'json' }

export function SkillSection() {
  return (
    <section id='skill' className='container mt-6'>
      <Typography variant='h2'>Skills</Typography>
      <Typography className='text-muted-foreground'>
        A collection of skills and technologies I work with, including
        programming languages, frameworks, libraries, and tools.
      </Typography>

      {data.skills.map((skill) => (
        <SkillList
          key={skill.content}
          title={skill.content}
          skills={skill.children}
        />
      ))}
    </section>
  )
}

const SkillList: React.FC<{
  title: string
  skills: { icon: string; content: string }[]
}> = ({ title, skills }) => (
  <section className='mt-4 flex flex-col gap-2'>
    <Typography variant='h3'>{title}</Typography>

    <div className='flex flex-wrap gap-4'>
      {skills.map((skill) => {
        // oxlint-disable-next-line import/namespace
        const Icon = icons[skill.icon as keyof typeof icons] as React.FC<
          React.SVGProps<SVGSVGElement>
        >

        return (
          <Badge
            key={skill.content}
            variant='outline'
            className='h-10 rounded-md px-4 py-1 text-lg font-medium [&>svg]:size-5!'
          >
            <Icon /> {skill.content}
          </Badge>
        )
      })}
    </div>
  </section>
)
