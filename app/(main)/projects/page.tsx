import Image from 'next/image'
import Link from 'next/link'
import { ClockIcon, ExternalLinkIcon, UsersIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { designs, projects } from '@/data'
import { createMetadata } from '@/lib/metadata'

export default function ProjectsPage() {
  return (
    <main className="container shrink pt-4 pb-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Projects
      </h1>

      <section className="mt-8 flex flex-col gap-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Applications and Websites
        </h2>
        <p className="text-muted-foreground leading-7">
          Here are some of the projects I&apos;ve worked on. Click on the cards to view
          more details.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>{' '}
      </section>

      <section className="mt-8 flex flex-col gap-4">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Designs
        </h2>
        <p className="text-muted-foreground leading-7">
          Here are some of the designs I&apos;ve created. Click on the images to view them
          in full size.
        </p>

        {designs.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Design-${idx}`}
            className="rounded-lg"
            priority
          />
        ))}
      </section>
    </main>
  )
}

export const metadata = createMetadata({
  title: 'Projects',
  description: "Here are some of the projects I've worked on.",
  openGraph: {
    images: [
      `/api/og?title=Projects&description=${encodeURIComponent(
        "Here are some of the projects I've worked on.",
      )}`,
    ],
    url: '/projects',
  },
})

const ProjectCard: React.FC<{ project: (typeof projects)[number] }> = ({ project }) => (
  <div className="bg-card text-card-foreground flex h-full w-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-xl">
    <div className="flex grow flex-col items-start gap-1.5 p-6">
      <h3 className="text-xl leading-none font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm">{project.preview}</p>
    </div>

    <div className="space-y-4 p-6 pt-0">
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <ClockIcon className="h-4 w-4" />
          {project.due ? <span>Due in {project.due}</span> : <span>On going</span>}
        </div>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <UsersIcon className="h-4 w-4" />
          <span>{project.members} members</span>
        </div>
      </div>
    </div>

    <div className="bg-muted/50 flex justify-between border-t px-6 py-3">
      <Button variant="outline" size="sm" asChild>
        <Link href={`/projects/${project.slug}`}>Details</Link>
      </Button>
      <Button size="sm" className="gap-1" asChild>
        <Link href={project.repo} target="_blank" rel="noopener noreferrer">
          <ExternalLinkIcon className="h-4 w-4" />
          Open Project
        </Link>
      </Button>
    </div>
  </div>
)
