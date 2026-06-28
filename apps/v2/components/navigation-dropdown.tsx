import {
  CodeXmlIcon,
  FolderKanbanIcon,
  FolderPenIcon,
  MenuIcon,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getPages } from '@/lib/source'

export const NavigationDropdown: React.FC = async () => {
  try {
    const [blogs, projects] = await Promise.all([
      getPages('blogs'),
      getPages('projects'),
    ])

    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant='outline' size='icon-sm' />}
        >
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
              {blogs.map((blog) => (
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
              {projects.map((project) => (
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
  } catch {
    return null
  }
}
