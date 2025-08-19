import Image from 'next/image'

import type { Showcase } from '@yuki/data'
import { showcases } from '@yuki/data'
import { Button } from '@yuki/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@yuki/ui/card'
import { ExternalLinkIcon } from '@yuki/ui/icons'
import { Typography } from '@yuki/ui/typography'

export function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="container mb-16 flex flex-col justify-center gap-4"
    >
      <h2 className="sr-only">Showcase section</h2>
      <Typography variant="h4">Featured Projects</Typography>
      <Typography className="text-normal">
        Explore a collection of open-source projects and tools built with modern
        technologies.
      </Typography>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((showcase) => (
          <ShowcaseCard key={showcase.title} showcase={showcase} />
        ))}
      </div>
    </section>
  )
}

function ShowcaseCard({ showcase }: { showcase: Showcase }) {
  return (
    <Card className="group/showcase h-full overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={showcase.image}
          alt={showcase.title}
          className="object-cover transition-transform duration-300 group-hover/showcase:scale-105"
          fill
        />
      </div>

      <CardHeader className="flex-1">
        <CardTitle className="text-xl">{showcase.title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-3 flex-1 text-sm">
          {showcase.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full" asChild>
          <a href={showcase.url} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLinkIcon />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
