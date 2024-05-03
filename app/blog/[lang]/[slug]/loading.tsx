import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { Skeleton } from '@/components/ui/skeleton'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <>
    <BreadCrumbs
      className="list-none"
      items={[
        { name: '~', href: '/' },
        { name: 'Blog', href: '/blog' },
      ]}
    />

    <article className="mx-auto flex max-w-screen-md flex-col items-center gap-4">
      <Skeleton className="h-12 w-4/5" />

      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-4 w-2/4" />
    </article>

    <article className="mx-auto max-w-screen-md space-y-4">
      <Skeleton className="my-4 aspect-video w-full" />

      {Array.from({ length: Math.floor(Math.random() * 10) + 1 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </article>
  </>
)

export default Page
