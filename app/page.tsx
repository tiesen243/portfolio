import type { NextPage } from 'next'

import { AboutSection } from '@/components/landing/about-section'
import { ContactSection } from '@/components/landing/contact-section'
import { HomeSection } from '@/components/landing/home-section'

const Page: NextPage = () => (
  <>
    <HomeSection />
    <AboutSection />
    <ContactSection />
  </>
)

export default Page
