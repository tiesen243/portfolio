import { AboutSection } from '@/app/(main)/_components/about'
import { HeroSection } from '@/app/(main)/_components/hero'
import { ShowcaseSection } from '@/app/(main)/_components/showcase'
import { SkillSection } from '@/app/(main)/_components/skill'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ShowcaseSection />
    </>
  )
}
