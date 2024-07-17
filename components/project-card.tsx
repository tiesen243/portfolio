import { GithubIcon, LinkIcon } from 'lucide-react'
import Image from 'next/image'

import { buttonVariants } from '@/components/ui/button'
import * as card from '@/components/ui/card'

export interface Project {
  id: string
  name: string
  description: string
  language: string
  topics: string[]
  html_url: string
  homepage: string
  created_at: Date
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <card.Card key={project.id} className="group aspect-video">
    <Image
      src={`/og?title=${project.name.replace(/-/g, ' ')}&desc=${project.description}`}
      alt={project.name}
      className="aspect-video rounded-lg object-cover drop-shadow-lg"
      fill
    />

    <div className="absolute inset-0 flex items-center justify-center gap-12 rounded-t-lg bg-background/70 opacity-0 backdrop-saturate-150 group-hover:opacity-100 group-hover:backdrop-blur-xl">
      {project.homepage && (
        <a
          href={project.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            variant: 'ghost',
            className: 'h-14 w-14',
          })}
        >
          <LinkIcon size={32} />
        </a>
      )}
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({
          variant: 'ghost',
          className: 'h-14 w-14',
        })}
      >
        <GithubIcon size={32} />
      </a>
    </div>
  </card.Card>
)
