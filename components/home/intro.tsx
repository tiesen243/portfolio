'use client'

import { TypeAnimation } from 'react-type-animation'

export const Intro: React.FC = () => (
  <h1 className="text-center font-mono text-3xl font-black md:text-5xl">
    {'< '}
    <TypeAnimation
      className="bg-gradient-yuki bg-clip-text text-transparent"
      sequence={sequence}
      repeat={Infinity}
    />
    {'/>'}
  </h1>
)

const sequence = [
  'Weeb Developer',
  1000,
  'Fontend Developer',
  1000,
  'Backend Developer',
  1000,
  'Electronic Engineer',
  1000,
]
