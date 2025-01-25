import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { getPages } from '@/content'

export default async function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pages = await getPages()
  const tree = pages
    .map((page) => ({
      name: page.frontmatter.title,
      url: `/blogs/${page.slug.join('/')}`,
    }))
    .filter((page) => page.name)

  return (
    <SidebarProvider>
      <AppSidebar tree={tree} className="z-20" />
      <SidebarInset className="max-w-screen">
        <SidebarTrigger className="fixed bottom-2 left-4 z-10" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
