import type { NextPage } from 'next'
import Image from 'next/image'

import { AboutSection } from '@/components/landing/about-section'
import { ContactSection } from '@/components/landing/contact-section'
import { HomeSection } from '@/components/landing/home-section'

const Page: NextPage = () => (
  <main className="flex-1">
    <HomeSection />
    <AboutSection />
    <ContactSection />

    <Image src="/design/tiesen-v2.png" alt="Tiesen" width={3000} height={1000} />
  </main>
)

export default Page
