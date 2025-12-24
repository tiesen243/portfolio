import { AboutSection } from '@/app/(main)/(index)/_components/about'
import { HeroSection } from '@/app/(main)/(index)/_components/hero'
import { ShowcaseSection } from '@/app/(main)/(index)/_components/showcase'
import { SkillSection } from '@/app/(main)/(index)/_components/skill'

export default function HomePage() {
  return (
    <main>
      <h1 className='sr-only'>Tiesen&apos;s Personal Website</h1>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ShowcaseSection />
    </main>
  )
}
