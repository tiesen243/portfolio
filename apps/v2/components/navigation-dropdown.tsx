import { Button } from '@yuki/ui/components/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@yuki/ui/components/dropdown-menu'
import {
  CodeXmlIcon,
  FolderKanbanIcon,
  FolderPenIcon,
  MenuIcon,
} from '@yuki/ui/components/icons'
import Link from 'next/link'

import { getPages } from '@/lib/source'

export const NavigationDropdown: React.FC = async () => {
  const [blogs, projects] = await Promise.allSettled([
    getPages('blogs'),
    getPages('projects'),
  ])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant='outline' size='icon-sm' />}>
        <MenuIcon />
        <span className='sr-only'>Toggle navigation menu</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem render={<Link href='/' />}>
          <CodeXmlIcon /> Portfolio
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger render={<Link href='/blogs' />}>
            <FolderPenIcon /> <span className='flex-1'>Blogs</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {blogs.status === 'fulfilled' &&
              blogs.value.map((blog) => (
                <DropdownMenuItem
                  key={blog.url}
                  render={<Link href={blog.url} />}
                >
                  {blog.name}.mdx
                </DropdownMenuItem>
              ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger render={<Link href='/projects' />}>
            <FolderKanbanIcon /> <span className='flex-1'>Projects</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {projects.status === 'fulfilled' &&
              projects.value.map((project) => (
                <DropdownMenuItem
                  key={project.url}
                  render={<Link href={project.url} />}
                >
                  {project.name}.mdx
                </DropdownMenuItem>
              ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
