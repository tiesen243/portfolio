import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

export const ViewMore: React.FC = () => (
  <section className="grid grid-cols-1 gap-4 text-xl font-bold capitalize md:grid-cols-2">
    {['projects', 'blog'].map((tab) => (
      <Link href={`/${tab}`} key={tab} className="group flex items-center">
        {tab}

        <div className="ml-2 h-[2px] flex-grow">
          <div className="h-full w-0 bg-primary transition-all ease-linear group-hover:w-full" />
        </div>
        <ChevronRightIcon className="-ml-2 text-foreground opacity-0 transition-opacity ease-linear group-hover:opacity-100" />
      </Link>
    ))}
  </section>
)
