import Link from 'next/link'

export const Desktop: React.FC<React.PropsWithChildren> = ({ children }) => (
  <aside className="fixed inset-0 w-1/5 p-4 pl-2">
    <Link href="/" className="pl-2 text-2xl font-bold">
      Tiesen | Blog
    </Link>

    <Link
      href="/blog"
      className="pl-2 text-muted-foreground transition-colors ease-linear hover:text-foreground"
    >
      All posts
    </Link>

    <h2 className="pl-2 pt-4 text-xl font-medium">On this page</h2>
    <hr className="my-2 ml-2" />
    {children}
  </aside>
)
