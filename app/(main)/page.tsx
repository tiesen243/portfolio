import { HeroSection } from './_componets/hero'
import { InformationSection } from './_componets/information'
import { Introduction } from './_componets/introduction'

export default function HomePage() {
  return (
    <main>
      <h1 className="sr-only">Tiesen&apos;s Portfolio</h1>

      <HeroSection />

      <Introduction />

      <InformationSection />
    </main>
  )
}
