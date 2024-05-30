import Link from 'next/link'

interface BreadcrumbProps {
  items: Array<{ label: string; href: string }>
  separator?: string
}
export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items, separator = '/' }) => (
  <nav aria-label="Breadcrumb" className="my-4 flex gap-1 text-lg font-medium">
    {items.map((item, index) => (
      <Link key={index} href={item.href}>
        {index !== 0 && <span className="mx-2">{separator}</span>}
        <span className="underline-offset-4 hover:underline">{item.label}</span>
      </Link>
    ))}
  </nav>
)
