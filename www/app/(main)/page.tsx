import { env } from '@yuki/validators/env'

import { AboutSection } from './_components/about'
import { HeroSection } from './_components/hero'
import { SkillAndShowcaseSection } from './_components/skillnShowcase'

export default function HomePage() {
  return (
    <>
      {env.VERCEL_PROJECT_PRODUCTION_URL}
      <HeroSection />
      <AboutSection />
      <SkillAndShowcaseSection />
    </>
  )
}
