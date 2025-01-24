import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ThemeSwitch } from '@/components/theme-switch'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { navigations, socials } from '@/data'
import Logo from '@/public/assets/tiesen.png'

export const AppSidebar: React.FC<
  React.ComponentProps<typeof Sidebar> & {
    tree: { name: string; url: string }[]
  }
> = ({ tree, ...props }) => (
  <Sidebar {...props}>
    <SidebarHeader>
      <Link href="/">
        <Image src={Logo} alt="Tiesen" className="w-full max-w-[200px]" priority />
      </Link>
    </SidebarHeader>

    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {navigations.map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>{item.name}</Link>
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
                  <Link href={item.url}>{item.name}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

    <SidebarSeparator />

    <SidebarFooter className="flex-row items-center justify-between">
      <nav className="flex items-center gap-2">
        {socials.map((social) => (
          <Link
            key={social.link}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <social.icon className="size-4" />
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeSwitch />
        <SidebarTrigger />
      </div>
    </SidebarFooter>

    <SidebarRail />
  </Sidebar>
)
