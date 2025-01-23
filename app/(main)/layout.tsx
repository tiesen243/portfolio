import { cookies } from 'next/headers'

import { AppSidebar } from '@/components/app-sidebar'
import { Footer } from '@/components/footer'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { getPages } from '@/content'

export default async function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pages = await getPages()
  const tree = pages
    .map((page) => ({
      name: page.frontmatter.title,
      url: `/blogs/${page.slug.join('/')}`,
    }))
    .filter((page) => page.name)

  const isOpen = (await cookies()).get('sidebar:state')?.value === 'true'

  return (
    <SidebarProvider defaultOpen={isOpen}>
      <AppSidebar tree={tree} />
      <SidebarInset className="relative max-w-screen">
        <SidebarTrigger className="fixed bottom-4 left-4 z-10 md:absolute md:top-4" />
        {children}
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
