import {
  FolderKanbanIcon,
  FolderPenIcon,
  HouseIcon,
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

export const NavigatorDropdown: React.FC = async () => {
  const [blogs, projects] = await Promise.all([
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
          <HouseIcon /> Home
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger render={<Link href='/blogs' />}>
            <FolderPenIcon /> Blogs
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
            <FolderKanbanIcon /> Projects
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
}
