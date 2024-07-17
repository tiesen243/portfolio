import type { NextPage } from 'next'

import { AboutSection } from '@/components/landing/about-section'
import { CTASection } from '@/components/landing/cta-section'
import { HomeSection } from '@/components/landing/home-section'

const Page: NextPage = () => (
  <main className="flex-1">
    <HomeSection />
    <AboutSection />
    <CTASection />
  </main>
)

export default Page
