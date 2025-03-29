import Link from 'next/link'

import { projectsSource } from '@/lib/source'

export const ProjectList: React.FC = () => {
  const projects = projectsSource
    .getPages()
    .filter((page) => page.url !== '/projects')
    .sort((a, b) => a.data.order - b.data.order)

  return (
    <ul className="not-prose grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <li key={project.url}>
          <Link
            href={project.url}
            className="bg-fd-card text-fd-card-foreground hover:bg-fd-secondary flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-colors"
          >
            <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                {project.data.title}
              </h2>
              <div className="flex items-center justify-between gap-2">
                <time className="text-fd-muted-foreground block text-sm">
                  {project.data.due}
                </time>
                <p className="text-fd-muted-foreground text-sm">
                  {project.data.members} members
                </p>
              </div>
              <p className="text-muted-foreground line-clamp-2 text-sm">
                {project.data.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 px-6 [.border-t]:pt-6">
              {project.data.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-fd-primary text-fd-primary-foreground rounded-md px-2 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
