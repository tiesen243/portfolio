// oxlint-disable no-html-link-for-pages

import type { Showcase } from '@/lib/data'

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

import { showcases } from '@/lib/data'

export function ShowcaseSection() {
  return (
    <section
      id='showcase'
      className='container my-12 flex flex-col justify-center'
    >
      <Typography variant='h2'>Featured Projects</Typography>
      <Typography className='text-muted-foreground'>
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

const ShowcaseCard: React.FC<{ showcase: Showcase }> = ({ showcase }) => (
  <Card className='group/showcase h-full overflow-hidden pt-0 transition-shadow hover:shadow-lg'>
    <Image
      src={showcase.image}
      alt={showcase.title}
      className='object-cover aspect-video transition-transform group-hover/showcase:scale-105'
      width={500}
      height={400}
    />

    <CardHeader className='flex-1'>
      <CardTitle className='text-xl' render={<h3 />}>
        {showcase.title}
      </CardTitle>
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
