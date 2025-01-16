import { HomeLayout } from 'fumadocs-ui/layouts/home'

import { baseOptions } from '@/app/layout.config'
import { Footer } from '@/components/footer'

export default ({ children }: { children: React.ReactNode }) => (
  <HomeLayout {...baseOptions}>
    {children}
    <Footer />
  </HomeLayout>
)
