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
      <Typography className='text-normal'>
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
            variant='secondary'
            className={cn(
              'flex items-center gap-2 px-3 py-2 text-lg font-medium transition-all [&>svg]:size-6',
              skill.isInverted ? 'dark:invert' : '',
            )}
            style={{
              backgroundColor: `${skill.color}10`,
              borderColor: skill.color,
              color: skill.color,
            }}
          >
            <skill.icon className='fill-current' />
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
