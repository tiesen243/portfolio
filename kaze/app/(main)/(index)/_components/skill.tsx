import { cn } from '@yuki/ui'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import type { Skill } from '@/lib/data'

import { skills as SKILLS } from '@/lib/data'

export function SkillSection() {
  return (
    <section id='skill' className='container mt-12'>
      <Typography variant='h2' className='mb-0'>
        Skills
      </Typography>
      <Typography className='text-muted-foreground'>
        A collection of skills and technologies I work with, including
        programming languages, frameworks, libraries, and tools.
      </Typography>

      <SkillList title='Programming Languages' skills={SKILLS.languages} />
      <SkillList title='Frameworks & Libraries' skills={SKILLS.frameworks} />
      <SkillList title='Tools & Technologies' skills={SKILLS.tools} />
    </section>
  )
}

const SkillList: React.FC<{ title: string; skills: Skill[] }> = ({
  title,
  skills,
}) => (
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
            'h-8 transition-colors select-none',
            'border-(--skill-color) bg-(--skill-color)/10 text-(--skill-color) hover:bg-(--skill-color)/20',
            'dark:border-(--skill-color-dark) dark:bg-(--skill-color-dark)/10 dark:text-(--skill-color-dark) dark:hover:bg-(--skill-color-dark)/20'
          )}
        >
          <skill.icon className='fill-current' />
          {skill.name}
        </Badge>
      ))}
    </div>
  </section>
)
