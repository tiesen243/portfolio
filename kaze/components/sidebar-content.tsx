import { getPageTree } from '@yuki/content'
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
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
import Tiesen from '@/public/assets/logotype.png'

export async function SidebarContent() {
  const pageTree = await getPageTree()

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
        {pageTree.map((nav, idx) => {
          if (nav.type === 'page')
            return (
              <SidebarItem
                key={`nav-${idx}`}
                render={
                  <Link href={nav.url as never}>
                    <nav.icon /> {nav.name}
                  </Link>
                }
              />
            )
          if (nav.type === 'folder')
            return (
              <SidebarSubItem key={`nav-${idx}`}>
                <SidebarSubItemLabel>
                  <nav.icon />
                  <span className='line-clamp-1 capitalize'>{nav.name}</span>
                </SidebarSubItemLabel>
                <SidebarSubItemContent>
                  {nav.children.map((child, cidx) => (
                    <SidebarItem
                      key={`nav-child-${cidx}`}
                      className='line-clamp-1 capitalize'
                      render={
                        <Link href={child.url as never}>{child.name}</Link>
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
