import { HomeLayout } from 'fumadocs-ui/layouts/home'

import { baseOptions } from '../layout.config'

export default ({ children }: { children: React.ReactNode }) => (
  <HomeLayout {...baseOptions}>{children}</HomeLayout>
)
