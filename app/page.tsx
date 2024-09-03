import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'
import { HeroSection } from '@/components/home/hero-section'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <main className="flex-1">
    <HeroSection />
    <AboutSection />
    <ContactSection />
  </main>
)

export default Page
