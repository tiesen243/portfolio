import Link from 'next/link'

export const Nav: React.FC<{ tags: string[]; currentTag?: string }> = ({ tags, currentTag }) => (
  <nav className="mb-4 flex gap-4">
    <Link href="/blog" className={currentTag ? 'text-muted-foreground hover:underline' : ''}>
      All
    </Link>

    {tags.map((tag) => (
      <Link
        key={tag}
        href={`/blog?tag=${tag}`}
        className={currentTag ? '' : 'text-muted-foreground hover:underline'}
      >
        {tag}
      </Link>
    ))}
  </nav>
)
