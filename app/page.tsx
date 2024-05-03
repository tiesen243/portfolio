import type { NextPage } from 'next'

import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Home } from '@/components/home'

const Page: NextPage = () => (
  <>
    <Home />
    <About />
    <Contact />
  </>
)

export default Page
