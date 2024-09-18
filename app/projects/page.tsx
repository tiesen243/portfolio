import Image from 'next/image'
import Link from 'next/link'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'

import { CardDescription, CardTitle } from '@/components/ui/card'
import { designs, projects } from './_data'

const Page = () => (
  <main className="container flex-1 py-4">
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <CardTitle className="md:col-span-3">Projects</CardTitle>

      <CardDescription className="md:col-span-3">
        Here are some of the projects I've worked on. Click on the images to learn more about each
        project.
      </CardDescription>

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

    <hr className="my-6" />

    <section className="flex flex-col gap-4">
      <CardTitle>Designs</CardTitle>
      <CardDescription>
        Here are some of the designs I've created. Click on the images to view them in full size.
      </CardDescription>

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
