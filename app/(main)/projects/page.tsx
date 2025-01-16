import { Card, Cards } from 'fumadocs-ui/components/card'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'

import { createMetadata } from '@/lib/metadata'
import { designs, projects } from './data'

export default () => (
  <main className="container flex-1 py-4">
    <section>
      <article className="prose-neutral dark:prose-invert prose mb-4">
        <h1 className="mb-0">Projects</h1>
        <p>
          Here are some of the projects I've worked on. Click on the cards to view more
          details. You can also view my designs below.
        </p>
      </article>

      <Cards>
        {projects.map((project) => (
          <Card
            key={project.slug}
            title={project.title}
            description={project.preview}
            href={`/projects/${project.slug}`}
          />
        ))}
      </Cards>
    </section>

    <section className="mt-8 flex flex-col gap-4">
      <article className="prose-neutral dark:prose-invert prose">
        <h1 className="mb-0">Designs</h1>
        <p>
          Here are some of the designs I've created. Click on the images to view them in
          full size.
        </p>
      </article>

      {designs.map((design) => (
        <ImageZoom
          key={design}
          src={design}
          alt="Design"
          width={3000}
          height={1000}
          className="rounded-lg"
        />
      ))}
    </section>
  </main>
)

export const metadata = createMetadata({
  title: 'Projects',
  description: "Here are some of the projects I've worked on.",
  openGraph: {
    images: [
      '/api/og?title=Projects&description=Here%20are%20some%20of%20the%20projects%20I%27ve%20worked%20on.',
    ],
    url: '/projects',
  },
})
