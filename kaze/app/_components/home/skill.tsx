import type { Skill } from '@yuki/data'
import { skills } from '@yuki/data'
import { cn } from '@yuki/ui'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

export function SkillSection() {
  return (
    <section
      id='skill'
      className='container mb-16 flex flex-col justify-center gap-4'
    >
      <Typography variant='h4' component='h2'>
        Skills
      </Typography>
      <Typography className='text-primary'>
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
    <div className='space-y-4'>
      <Typography variant='h5' component='h3'>
        {title}
      </Typography>
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
              'border-[var(--skill-color)] bg-[var(--skill-color)]/10 text-[var(--skill-color)] hover:bg-[var(--skill-color)]/20',
              'dark:border-[var(--skill-color-dark)] dark:bg-[var(--skill-color-dark)]/10 dark:text-[var(--skill-color-dark)] dark:hover:bg-[var(--skill-color-dark)]/20',
            )}
          >
            <skill.icon className='fill-current' />
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
