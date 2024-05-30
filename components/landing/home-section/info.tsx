'use client'

import { TypeAnimation } from 'react-type-animation'

export const Info: React.FC = () => (
  <p className="text-center font-mono text-3xl font-black md:text-4xl">
    <TypeAnimation
      className="bg-yuki bg-clip-text text-transparent"
      sequence={sequence}
      repeat={Infinity}
    />
  </p>
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
