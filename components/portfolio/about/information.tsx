import Link from 'next/link'
import { Activity, FlaskConical, GraduationCap, Heart, Notebook, PanelsTopLeft } from 'lucide-react'

import { projects } from '@/app/projects/_data'
import { Typography } from '@/components/ui/typography'
import { education, experiences, hobbies, skills, stuffs } from './data'

export const Information: React.FC = () =>
  informations.map((info) => (
    <div
      key={info.id}
      className="mt-8 rounded-lg border bg-card p-6 text-card-foreground shadow-md"
    >
      <div className="absolute -top-4 flex items-center gap-2">
        <info.icon />
        <Typography level="h3">{info.title}</Typography>
      </div>
      {info.content}
    </div>
  ))

const informations = [
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    content: (
      <article className="flex flex-col gap-2">
        {education.map((edu) => (
          <div key={edu.id} className="space-y-1">
            <time className="text-muted-foreground">{edu.time}</time>
            <Typography level="h4">{edu.school}</Typography>
            {edu.major && <p className="leading-7">{edu.major}</p>}
            {edu.gpa && <p className="leading-7">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </article>
    ),
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: Notebook,
    content: (
      <article className="grid grid-cols-3 gap-x-4 gap-y-6 md:grid-cols-4 xl:grid-cols-6">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-2 place-self-auto">
            <skill.icon
              width={28}
              fill={skill.color}
              className={!skill.color ? 'dark:invert' : ''}
            />
            <Typography level="h4">{skill.title}</Typography>
          </div>
        ))}
      </article>
    ),
  },
  {
    id: 'experiences',
    title: 'Experiences',
    icon: Activity,
    content: (
      <article className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="space-y-1">
            <time className="text-muted-foreground">{exp.time}</time>
            <Typography level="h4">{exp.title}</Typography>
            <p className="leading-7">{exp.description}</p>
          </div>
        ))}
      </article>
    ),
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    icon: Heart,
    content: (
      <article className="flex flex-col gap-2">
        {hobbies.map((hobby) => (
          <Typography key={hobby.id} level="h4" className="inline-flex gap-2">
            <hobby.icon />
            {hobby.title}
          </Typography>
        ))}
      </article>
    ),
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: PanelsTopLeft,
    content: (
      <article className="flex flex-col gap-2">
        {projects.slice(0, 3).map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Typography level="h4" className="hover:underline">
              {project.title}
            </Typography>
            <p className="leading-7 text-muted-foreground">{project.preview}</p>
          </Link>
        ))}

        <Link href="/projects" className="hover:underline">
          <Typography level="h4">View all projects</Typography>
        </Link>
      </article>
    ),
  },
  {
    id: 'stuffs',
    title: 'Some stuffs i have made',
    icon: FlaskConical,
    content: (
      <article className="flex flex-col gap-2">
        {stuffs.map((stuff) => (
          <a key={stuff.id} href={stuff.link} target="_blank" rel="noopener noreferrer">
            <Typography level="h4" className="hover:underline">
              {stuff.title}
            </Typography>
            <p className="leading-7 text-muted-foreground">{stuff.description}</p>
          </a>
        ))}

        <Link href="/blogs">
          <Typography level="h4" className="hover:underline">
            My blog
          </Typography>
          <p className="leading-7 text-muted-foreground">
            Where i write about my journey and everything i like
          </p>
        </Link>
      </article>
    ),
  },
]
