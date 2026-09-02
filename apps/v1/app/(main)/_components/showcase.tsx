import { Button } from '@yuki/ui/components/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@yuki/ui/components/card'
import { ExternalLinkIcon } from '@yuki/ui/components/icons'
import { Typography } from '@yuki/ui/components/typography'

import data from '@/data' with { type: 'json' }

export function ShowcaseSection() {
  return (
    <section
      id='showcase'
      className='container my-12 flex flex-col justify-center'
    >
      <Typography variant='h2' className='mb-0'>
        Featured Projects
      </Typography>
      <Typography className='text-muted-foreground'>
        Explore a collection of open-source projects and tools built with modern
        technologies.
      </Typography>

      <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {data.projects.map((showcase) => (
          <Card
            key={showcase.title}
            className='group/showcase h-full overflow-hidden rounded-lg transition-shadow hover:shadow-lg'
          >
            <CardHeader className='flex-1'>
              <CardTitle className='text-xl'>{showcase.title}</CardTitle>
              <CardDescription className='line-clamp-3'>
                {showcase.description}
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <Button
                variant='outline'
                className='w-full rounded-md'
                nativeButton={false}
                render={
                  <a
                    href={`http://${showcase.repository}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`View project: ${showcase.title}`}
                  />
                }
              >
                View Project <ExternalLinkIcon data-icon='inline-end' />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
