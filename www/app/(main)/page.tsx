import { AboutSection } from './_components/about'
import { HeroSection } from './_components/hero'

export default function HomePage() {
  return (
    <main className="pb-8">
      <HeroSection />
      <AboutSection />
    </main>
  )
}
