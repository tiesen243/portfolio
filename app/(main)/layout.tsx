import { HomeLayout } from 'fumadocs-ui/layouts/home'

import { baseConfigs } from '@/app/layout.config'

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <HomeLayout {...baseConfigs}>
      {children}

      <footer className="border-t py-6">
        <div className="flex items-center justify-center gap-4">
          <p>
            Copyright (c) {new Date().getFullYear()} Tiesen. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </HomeLayout>
  )
}
