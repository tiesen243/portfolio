import {
  FacebookIcon,
  FolderKanbanIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
  RssIcon,
  XFormerTwitterIcon,
} from '@yuki/ui/icons'
import {
  SidebarItem,
  SidebarSubItem,
  SidebarSubItemContent,
  SidebarSubItemLabel,
} from '@yuki/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'

import { ToggleTheme } from '@/components/toggle-theme'
import { source } from '@/lib/source'
import Tiesen from '@/public/assets/logotype.png'

export function SidebarContent() {
  const pageTree = source.getPageTree()

  return (
    <>
      <figure className='border-b p-4'>
        <Image
          src={Tiesen}
          alt='Tiesen Logo'
          className='w-2/3 object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
        <figcaption className='sr-only'>Tiesen Logo</figcaption>
      </figure>

      <nav className='flex flex-1 flex-col gap-2 px-2 py-4'>
        {pageTree.children.map((nav, idx) => {
          const Icon = icons[nav.icon as keyof typeof icons]
          if (nav.type === 'page')
            return (
              <SidebarItem key={`nav-${idx}`} render={<Link href={nav.url} />}>
                {Icon && <Icon />}
                <span>{nav.name}</span>
              </SidebarItem>
            )

          if (nav.type === 'folder')
            return (
              <SidebarSubItem key={`nav-${idx}`}>
                <SidebarSubItemLabel>
                  {Icon && <Icon />}
                  <span className='truncate'>{nav.name}</span>
                </SidebarSubItemLabel>
                <SidebarSubItemContent>
                  {nav.children.map((child, cidx) => (
                    <SidebarItem
                      key={`nav-child-${cidx}`}
                      render={
                        <Link href={child.type === 'page' ? child.url : '#'}>
                          <span className='truncate'>{child.name}</span>
                        </Link>
                      }
                    />
                  ))}
                </SidebarSubItemContent>
              </SidebarSubItem>
            )

          return null
        })}
      </nav>

      <div className='flex items-center justify-between gap-4 border-t px-4 pt-5 pb-10 md:pb-5'>
        <nav className='flex items-center gap-4'>
          {Object.entries(socials).map(([key, Icon]) => (
            <Link
              key={key}
              href={`/contact/${key}`}
              target='_blank'
              rel='noopener noreferrer'
              prefetch={false}
            >
              <Icon className='size-4 hover:fill-accent-foreground' />
              <span className='sr-only'>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </Link>
          ))}
        </nav>

        <ToggleTheme />
      </div>
    </>
  )
}

const socials = {
  facebook: FacebookIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XFormerTwitterIcon,
}

const icons = {
  HomeIcon,
  MailIcon,
  RssIcon,
  FolderKanbanIcon,
}
