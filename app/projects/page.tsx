import type { Metadata, NextPage } from 'next'
import Image from 'next/image'

import { ProjectCard } from '@/components/project-card'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
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
    <>
      <Breadcrumbs
        items={[
          { label: '~', href: '/#about' },
          { label: 'Projects', href: '/projects' },
        ]}
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <hr className="my-4" />

      <section className="mt-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src={`/imgs/design/${i + 1}.png`}
            alt={`Design ${i + 1}`}
            className="rounded-lg object-cover shadow-lg"
            width={1920}
            height={1080}
          />
        ))}
      </section>

      <ScrollToTop />
    </>
  )
}

export default Page
