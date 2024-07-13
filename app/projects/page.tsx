import type { Metadata, NextPage } from 'next'
import Image from 'next/image'

import { ProjectCard } from '@/components/project-card'
import { ScrollToTop } from '@/components/scroll-to-top'
import { getProjects } from '@/lib/actions'
import { baseUrl } from '@/lib/site'

const description =
  'A showcase of my projects and works. I love to build things that make a difference. Check out my projects!'
export const metadata: Metadata = {
  title: 'Projects',
  description,
  openGraph: { images: `/api/og?title=Projects&desc=${description}`, url: `${baseUrl}/projects` },
  alternates: { canonical: `${baseUrl}/projects` },
}

const Page: NextPage = async () => {
  const projects = await getProjects()

  return (
    <main className="container my-4 flex-1">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mb-4 mt-2 text-lg text-muted-foreground">{description}</p>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <hr className="mx-auto my-4 w-11/12 rounded-full" />

      <section className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={`design-${i + 1}`}
            src={`/imgs/design/${i + 1}.png`}
            alt={`Design ${i + 1}`}
            className="rounded-lg object-cover shadow-lg"
            width={1920}
            height={1080}
          />
        ))}
      </section>

      <ScrollToTop />
    </main>
  )
}

export default Page
