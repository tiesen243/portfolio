import type { NextPage } from 'next'

import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'

const Page: NextPage = () => (
  <main className="flex flex-1 flex-col items-center justify-center overflow-x-hidden">
    <HeroSection />
    <AboutSection />
    <ContactSection />
  </main>
)

export default Page
