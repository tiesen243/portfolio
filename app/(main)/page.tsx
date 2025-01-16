import { Hero } from '@/components/hero'
import { Information } from '@/components/information'
import { Introduction } from '@/components/introduction'

export default () => (
  <>
    <div
      className="absolute inset-x-0 top-[200px] h-[250px] max-md:hidden"
      style={{
        background:
          'repeating-linear-gradient(to right, hsl(var(--fd-primary)/.1),hsl(var(--fd-primary)/.1) 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--fd-primary)/.1),hsl(var(--fd-primary)/.1) 1px,transparent 1px,transparent 50px)',
      }}
    />
    <main className="container relative overflow-hidden p-4 lg:py-16">
      <Hero />
      <Introduction />
      <Information />
    </main>
  </>
)
