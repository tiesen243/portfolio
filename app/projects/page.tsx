import type { NextPage } from 'next'
import Image from 'next/image'

import { designs, projects } from '@/lib/data'
import { seo } from '@/lib/seo'
import { ProjectCard } from './_components/project-card'

const description =
  'A showcase of my projects and works. I love to build things that make a difference. Check out my projects!'
export const metadata = seo({
  title: 'Projects',
  description,
  image: `/og?title=Projects&desc=${description}`,
  url: 'projects',
})

const Page: NextPage = async () => (
  <main className="container my-4 flex-1">
    <h1 className="text-4xl font-bold">Projects</h1>
    <p className="mb-4 mt-2 text-lg text-muted-foreground">{description}</p>

    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>

    <hr className="mx-auto my-4 w-11/12 rounded-full" />

    <section className="space-y-4">
      {designs.map(({ name, src }) => (
        <Image
          key={name}
          src={src}
          alt={name}
          className="h-auto w-full rounded-lg object-cover shadow-lg"
          width={3000}
          height={1000}
        />
      ))}
    </section>
  </main>
)

export default Page
