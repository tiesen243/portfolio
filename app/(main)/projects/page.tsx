import Image from 'next/image'
import Link from 'next/link'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug}>
              <Card className="hover:bg-secondary transition-colors">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.preview}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
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
