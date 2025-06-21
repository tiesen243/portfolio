import { AboutSection } from './_components/about'
import { HeroSection } from './_components/hero'
import { SkillAndShowcaseSection } from './_components/skillnShowcase'

export default function HomePage() {
  return (
    <main className="pb-8">
      <HeroSection />
      <AboutSection />
      <SkillAndShowcaseSection />
    </main>
  )
}
