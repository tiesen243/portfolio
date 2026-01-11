import { getPageTree } from '@yuki/content'
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  XFormerTwitterIcon,
} from '@yuki/ui/icons'
import { SidebarItem, SidebarSubItem } from '@yuki/ui/sidebar'
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
                  <Link href={nav.url}>
                    <nav.icon /> {nav.name}
                  </Link>
                }
              />
            )
          if (nav.type === 'folder')
            return (
              <SidebarSubItem
                key={`nav-${idx}`}
                title={
                  <>
                    <nav.icon />{' '}
                    <span className='capitalize line-clamp-1'>{nav.name}</span>
                  </>
                }
              >
                {nav.children.map((child, cidx) => (
                  <SidebarItem
                    key={`nav-child-${cidx}`}
                    className='capitalize line-clamp-1'
                    render={<Link href={child.url}>{child.name}</Link>}
                  />
                ))}
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

// function SidebarFolder({
//   name,
//   icon: Icon,
//   children,
// }: {
//   name: string
//   icon: React.ComponentType
//   children: Array<{
//     name: string
//     url: string
//   }>
// }) {
//   return (
//     <Collapsible>
//       <CollapsibleTrigger className='group w-full inline-flex items-center gap-2 rounded-md border border-transparent px-2 py-1 text-sm transition-colors hover:border-sidebar-accent hover:bg-sidebar-accent/40 hover:text-sidebar-accent-foreground [&_svg]:size-4'>
//         <Icon />
//         <span className='flex-1 text-start'>{name}</span>
//
//         <ChevronRightIcon className='group-data-panel-open:rotate-90 transition-[rotate] duration-200 ease-out' />
//       </CollapsibleTrigger>
//       <CollapsibleContent className='ml-4 pl-2 border-l h-(--collapsible-panel-height) [&[hidden]:not([hidden="until-found"])]:hidden data-ending-style:h-0 data-starting-style:h-0 duration-200 ease-out flex flex-col gap-1'>
//         {children.map((child, cidx) => (
//           <SidebarItem
//             key={`nav-child-${cidx}`}
//             name={child.name}
//             url={child.url}
//           />
//         ))}
//       </CollapsibleContent>
//     </Collapsible>
//   )
// }
