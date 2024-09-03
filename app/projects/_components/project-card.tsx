import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

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
  <Link
    href={`/projects/${project.slug}`}
    className="rounded-lg border shadow-md hover:bg-secondary"
  >
    <div className="aspect-video w-full">
      <Image
        src={`/og?title=${project.name}&desc=${project.preview}`}
        alt={project.name}
        className="rounded-t-lg object-cover shadow-lg"
        fill
      />
    </div>

    <div className="space-y-2 p-6">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{project.name}</h3>

      <ul className="flex flex-wrap gap-x-1 gap-y-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </ul>
    </div>
  </Link>
)
