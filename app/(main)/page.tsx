import type { NextPage } from 'next'
import Image from 'next/image'

import { AboutSection } from '@/components/landing/about-section'
import { CTASection } from '@/components/landing/cta-section'
import { HomeSection } from '@/components/landing/home-section'

const Page: NextPage = () => (
  <main className="flex-1">
    <HomeSection />
    <AboutSection />
    <CTASection />

    <Image src="/design/tiesen-v2.png" alt="Tiesen" width={3000} height={1000} />
  </main>
)

export default Page
