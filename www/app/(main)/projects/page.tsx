import Image from 'next/image'
import Link from 'next/link'

import { getPages } from '@yuki/content'
import { Badge } from '@yuki/ui/badge'
import { Typography } from '@yuki/ui/typography'

import { formatDate } from '@/lib/utils'

export default async function ProjectListPage() {
  const pages = await getPages('projects')

  return (
    <article className="container flex min-h-[calc(100dvh-2rem)] flex-col gap-8 py-12">
      <div>
        <Typography variant="h3" component="h1">
          Projects
        </Typography>
        <Typography className="text-muted-foreground">
          Explore my projects where I showcase my work, experiments, and
          contributions to various open-source initiatives. Each project
          highlights my skills in web development, design, and problem-solving.
        </Typography>
      </div>

      <section className="flex flex-col gap-4">
        <Typography variant="h4" component="h2">
          Featured Projects
        </Typography>

        {pages.map((page) => (
          <Link key={page.slug} href={page.url}>
            <div className="flex items-start justify-between gap-4">
              <Typography
                variant="h4"
                component="h2"
                className="line-clamp-2 hover:underline"
              >
                {page.frontmatter.title}
              </Typography>

              <Typography className="text-muted-foreground shrink-0 text-sm">
                {formatDate(page.frontmatter.publishedAt)}
              </Typography>
            </div>

            <Typography className="text-muted-foreground line-clamp-3">
              {page.frontmatter.description}
            </Typography>

            <div className="mt-2 flex flex-wrap gap-1">
              {page.frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Typography variant="h4" component="h2" className="lg:col-span-2">
          Design Showcase
        </Typography>

        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Project ${index + 1}`}
            width={600}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        ))}
      </section>
    </article>
  )
}

const images = [
  '/assets/images/showcases/tiesen-v2.png',
  '/assets/images/showcases/goldenglow.png',
  '/assets/images/showcases/lin-yushia.png',
  '/assets/images/showcases/tiesen-v1.png',
]
