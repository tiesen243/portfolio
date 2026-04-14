import type { Skill } from '@/lib/data/skills'

import { Badge } from '@/components/ui/badge'
import { Typography } from '@/components/ui/typography'
import skills from '@/lib/data/skills'
import { cn } from '@/lib/utils'

export function SkillSection() {
  return (
    <section id='skill' className='container mt-6'>
      <Typography variant='h2'>Skills</Typography>
      <Typography className='text-muted-foreground'>
        A collection of skills and technologies I work with, including
        programming languages, frameworks, libraries, and tools.
      </Typography>

      <SkillList title='Programming Languages' skills={skills.languages} />
      <SkillList title='Frameworks & Libraries' skills={skills.frameworks} />
      <SkillList title='Tools & Technologies' skills={skills.tools} />
    </section>
  )
}

const SkillList: React.FC<{ title: string; skills: Skill[] }> = ({
  title,
  skills: _skills,
}) => (
  <section className='mt-6 flex flex-col gap-2'>
    <Typography variant='h3'>{title}</Typography>

    <div className='flex flex-wrap gap-4'>
      {_skills.map((skill) => (
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
            'px-2 py-3 transition-colors select-none',
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
