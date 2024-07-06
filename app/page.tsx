import type { NextPage } from 'next'

import { AboutSection } from '@/components/landing/about-section'
import { CTASection } from '@/components/landing/cta-section'
import { HomeSection } from '@/components/landing/home-section'
import { ContactSection } from '@/components/landing/contact-section'

const Page: NextPage = () => (
  <main className="flex-1">
    <HomeSection />
    <AboutSection />
    <ContactSection />
    <CTASection />
  </main>
)

export default Page
