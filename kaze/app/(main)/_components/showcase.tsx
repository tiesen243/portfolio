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
import Image from 'next/image'

export function ShowcaseSection() {
  return (
    <section
      id='showcase'
      className='container my-12 flex flex-col justify-center'
    >
      <Typography variant='h2'>Featured Projects</Typography>
      <Typography className='text-accent-foreground'>
        Explore a collection of open-source projects and tools built with modern
        technologies.
      </Typography>

      <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {showcases.map((showcase) => (
          <ShowcaseCard key={showcase.title} showcase={showcase} />
        ))}
      </div>
    </section>
  )
}

function ShowcaseCard({ showcase }: { showcase: Showcase }) {
  return (
    <Card className='group/showcase h-full overflow-hidden pt-0 transition-shadow hover:shadow-lg'>
      <div className='relative aspect-video overflow-hidden'>
        <Image
          src={showcase.image}
          alt={showcase.title}
          className='object-cover transition-transform group-hover/showcase:scale-105'
          fill
        />
      </div>

      <CardHeader className='flex-1'>
        <CardTitle className='text-xl'>{showcase.title}</CardTitle>
        <CardDescription className='line-clamp-3'>
          {showcase.description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          variant='outline'
          className='w-full'
          nativeButton={false}
          render={
            // oxlint-disable-next-line no-html-link-for-pages
            <a
              href={showcase.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`View project: ${showcase.title}`}
            />
          }
        >
          View Project
          <ExternalLinkIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
