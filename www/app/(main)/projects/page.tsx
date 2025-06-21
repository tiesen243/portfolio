import Image from 'next/image'
import Link from 'next/link'

import { getPages } from '@yuki/content'
import { Typography } from '@yuki/ui/typography'

export default async function BlogListPage() {
  const pages = await getPages('projects')

  return (
    <article className="container flex flex-col gap-6 py-12">
      <Typography variant="h3" component="h1">
        Projects
      </Typography>
      <Typography className="text-muted-foreground">
        Explore the projects I have worked on, showcasing my skills and
        creativity. Each project reflects my dedication to quality and
        innovation.
      </Typography>

      <div className="flex flex-col gap-4">
        {pages.map((page) => (
          <Link
            key={page.slug}
            href={`/projects/${page.slug}`}
            className="border-b pb-4"
          >
            <Typography variant="h4" component="h2">
              {page.frontmatter.title}
            </Typography>
            <Typography className="text-muted-foreground">
              {page.frontmatter.description}
            </Typography>
          </Link>
        ))}
      </div>

      <div className="grid gap-4">
        {images.map((image, index) => (
          <Image
            src={image}
            alt={`Project Image ${index + 1}`}
            key={index}
            width={800}
            height={450}
            className="w-full rounded-lg"
          />
        ))}
      </div>
    </article>
  )
}
const images = [
  '/assets/images/showcases/tiesen-v2.png',
  '/assets/images/showcases/goldenglow.png',
  '/assets/images/showcases/lin-yushia.png',
  '/assets/images/showcases/tiesen-v1.png',
]
