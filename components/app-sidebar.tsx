import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import Logo from '@/public/assets/tiesen.png'
import { ThemeBtn } from './theme-btn'

export const AppSidebar: React.FC<
  React.ComponentProps<typeof Sidebar> & {
    tree: { name: string; url: string }[]
  }
> = ({ tree, ...props }) => (
  <Sidebar {...props}>
    <SidebarHeader>
      <Image src={Logo} alt="Tiesen" className="w-full max-w-[200px]" priority />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {[
              { name: 'Home', url: '/' },
              { name: 'Projects', url: '/projects' },
              { name: 'Blogs', url: '/blogs' },
              {
                name: 'Contact',
                url: 'https://gravatar.com/tiesen243',
                isExternal: true,
              },
            ].map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    target={item.isExternal ? '_blank' : '_self'}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Blogs</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {tree.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton className="line-clamp-1 capitalize" asChild>
                  <Link href={item.url}>{item.name.replaceAll('-', ' ')}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarGroup>
        <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <ThemeBtn />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
)
