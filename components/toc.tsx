export const Toc: React.FC<{ toc: TableOfContent[] }> = ({ toc }) => (
  <div className="fixed top-4 right-4 hidden lg:block">
    <nav className="flex flex-col space-y-2 rounded-lg">
      {toc.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className="hover:text-yuki text-muted-foreground text-xs transition-colors"
          style={{ paddingLeft: `${item.depth * 1}rem` }}
        >
          {item.title}
        </a>
      ))}
    </nav>
  </div>
)

interface TableOfContent {
  depth: number
  url: string
  title: React.ReactNode
}
