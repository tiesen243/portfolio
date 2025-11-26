import { AboutSection } from '@/app/_components/home/about'
import { HeroSection } from '@/app/_components/home/hero'
import { ShowcaseSection } from '@/app/_components/home/showcase'
import { SkillSection } from '@/app/_components/home/skill'

export default function HomePage() {
  return (
    <>
      <h1 className='sr-only'>Tiesen's Personal Website</h1>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ShowcaseSection />
    </>
  )
}
