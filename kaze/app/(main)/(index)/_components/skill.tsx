import type { Skill } from '@yuki/data'

import { cn } from '@yuki/ui'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import { skills } from '@/lib/data'

export function SkillSection() {
  return (
    <section id='skill' className='container mt-12'>
      <Typography variant='h2'>Skills</Typography>
      <Typography className='text-accent-foreground'>
        A collection of skills and technologies I work with, including
        programming languages, frameworks, libraries, and tools.
      </Typography>

      <SkillList title='Programming Languages' skills={skills.languages} />
      <SkillList title='Frameworks & Libraries' skills={skills.frameworks} />
      <SkillList title='Tools & Technologies' skills={skills.tools} />
    </section>
  )
}

function SkillList({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <section className='mt-6 space-y-4'>
      <Typography variant='h3'>{title}</Typography>

      <div className='flex flex-wrap gap-4'>
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant='outline'
            style={
              {
                '--skill-color': skill.color,
                '--skill-color-dark': skill.colorDark,
              } as React.CSSProperties
            }
            className={cn(
              'h-8 text-lg transition-colors select-none',
              'border-(--skill-color) bg-(--skill-color)/10 text-(--skill-color) hover:bg-(--skill-color)/20',
              'dark:border-(--skill-color-dark) dark:bg-(--skill-color-dark)/10 dark:text-(--skill-color-dark) dark:hover:bg-(--skill-color-dark)/20',
            )}
          >
            <skill.icon className='fill-current' />
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  )
}
