import Image from 'next/image'

import type { Showcase, Skill } from '@yuki/data'
import { showcases, skills } from '@yuki/data'
import { cn } from '@yuki/ui'
import { Badge } from '@yuki/ui/badge'
import { Button } from '@yuki/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@yuki/ui/card'
import { ExternalLinkIcon } from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'

export function SkillAndShowcaseSection() {
  return (
    <section
      id="skill-showcase"
      className="container mb-12 flex min-h-dvh flex-col justify-center gap-12"
    >
      <h2 className="sr-only">Skills & Showcase section</h2>

      <section className="grid gap-4">
        <h3 className="sr-only">Skills section</h3>
        <Typography variant="h4">Skills</Typography>
        <Typography className="text-normal">
          A collection of skills and technologies I work with, including
          programming languages, frameworks, libraries, and tools.
        </Typography>

        <SkillList title="Programming Languages" skills={skills.languages} />
        <SkillList title="Frameworks & Libraries" skills={skills.frameworks} />
        <SkillList title="Tools & Technologies" skills={skills.tools} />
      </section>

      <section className="grid gap-4">
        <h3 className="sr-only">Showcase section</h3>
        <Typography variant="h4">Featured Projects</Typography>
        <Typography className="text-normal">
          Explore a collection of open-source projects and tools built with
          modern technologies.
        </Typography>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showcases.map((showcase) => (
            <ShowcaseCard key={showcase.title} showcase={showcase} />
          ))}
        </div>
      </section>
    </section>
  )
}

interface SkillListProps {
  title: string
  skills: Skill[]
}

function SkillList({ title, skills }: SkillListProps) {
  return (
    <div className="space-y-4">
      <Typography variant="h5">{title}</Typography>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="secondary"
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
            <skill.icon className="fill-current" />
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}

function ShowcaseCard({ showcase }: { showcase: Showcase }) {
  return (
    <Card className="group h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={showcase.image}
          alt={showcase.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      <CardHeader className="flex-1">
        <CardTitle className="text-xl">{showcase.title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3 flex-1 text-sm">
          {showcase.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full" asChild>
          <a href={showcase.url} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLinkIcon />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
