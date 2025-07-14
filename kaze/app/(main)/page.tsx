import { AboutSection } from '@/app/(main)/_components/about'
import { HeroSection } from '@/app/(main)/_components/hero'
import { SkillAndShowcaseSection } from '@/app/(main)/_components/skillnShowcase'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillAndShowcaseSection />
    </>
  )
}
