import Link from 'next/link'

export const Filters: React.FC<{ tags: string[]; currentTag?: string }> = ({
  tags,
  currentTag,
}) => (
  <nav className="col-span-1 flex gap-4 md:col-span-3">
    <Link href="/blog" className={currentTag ? 'text-muted-foreground hover:underline' : ''}>
      All
    </Link>

    {tags.map((tag) => (
      <Link
        key={tag}
        href={`/blog?tag=${tag}`}
        className={currentTag === tag ? '' : 'text-muted-foreground hover:underline'}
      >
        {tag}
      </Link>
    ))}
  </nav>
)
