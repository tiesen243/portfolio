import Image from 'next/image'
import Link from 'next/link'

import { CardTitle } from '@/components/ui/card'

export interface Project {
  slug: string
  name: string
  preview: string
  description: string
  stack: string[]
  repo: string
  demo?: string
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Link href={`/projects/${project.slug}`} className="rounded-lg border hover:bg-secondary">
    <div className="aspect-video w-full">
      <Image
        src={`/og?title=${project.name}&desc=${project.preview}`}
        alt={project.name}
        className="rounded-t-lg object-cover shadow-lg"
        fill
      />
    </div>

    <div className="space-y-2 p-6">
      <CardTitle>{project.name}</CardTitle>

      <ul className="flex flex-wrap gap-x-1 gap-y-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="inline-block whitespace-nowrap rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </Link>
)
