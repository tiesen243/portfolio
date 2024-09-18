import type { NextPage } from 'next'

import { AboutSection } from '@/components/portfolio/about'
import { HeroSection } from '@/components/portfolio/hero'

const Page: NextPage = () => (
  <main>
    <HeroSection />
    <AboutSection />
  </main>
)

export default Page
