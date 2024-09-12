import Link from 'next/link'

import { createId } from '@/components/mdx'
import { type Post } from '@/lib/actions/mdx'

export const Toc: React.FC<{ toc: Post['toc'] }> = ({ toc }) => (
  <ul className="list-none pl-4">
    {toc.map((header) => (
      <li key={header.title} className="text-lg">
        <Link href={`#${createId(header.title)}`} className="hover:underline">
          {header.title}
        </Link>

        {header.toc && <Toc toc={header.toc} />}
      </li>
    ))}
  </ul>
)
