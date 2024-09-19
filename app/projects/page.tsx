import Image from 'next/image'
import Link from 'next/link'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'

import { seo } from '@/lib/seo'
import { designs, projects } from './_data'

const Page = () => (
  <main className="container flex-1 py-4">
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <article className="prose md:col-span-3">
        <h1 className="mb-0">Programming Projects</h1>
        <p>
          Here are some of the projects I've worked on. Click on the images to learn more about each
          project.
        </p>
      </article>

      {projects.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`}>
          <Image
            src={`/api/og?title=${project.title}&description=${project.preview}`}
            alt={project.title}
            width={1200}
            height={630}
            className="rounded-lg shadow-lg transition-all hover:brightness-150"
          />
        </Link>
      ))}
    </section>

    <section className="mt-8 flex flex-col gap-4">
      <article className="prose">
        <h1 className="mb-0">Designs</h1>
        <p>
          Here are some of the designs I've created. Click on the images to view them in full size.
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

export default Page

export const metadata = seo({
  title: 'Projects',
  description: "Here are some of the projects I've worked on.",
  images: [
    '/api/og?title=Projects&description=Here%20are%20some%20of%20the%20projects%20I%27ve%20worked%20on.',
  ],
  url: '/projects',
})
