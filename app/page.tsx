import type { NextPage } from 'next'

import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'

const Page: NextPage = () => (
  <main className="flex flex-1 flex-col items-center justify-center overflow-x-hidden">
    <div className="pointer-events-none relative flex place-items-center before:absolute before:h-[700px] before:w-[140px] before:translate-x-1 before:translate-y-[-10px] before:rotate-[-32deg] before:rounded-full before:bg-gradient-to-r before:from-[#0141ff] before:to-[#60c5ff] before:opacity-30 before:blur-[100px] before:content-[''] lg:before:h-[700px] lg:before:w-[240px] lg:before:translate-x-[-100px]" />
    <HeroSection />
    <AboutSection />
    <ContactSection />
  </main>
)

export default Page
