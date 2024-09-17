import React from 'react'
import { Card, Cards } from 'fumadocs-ui/components/card'

import { projects } from './_data'

const Page = () => {
  return (
    <main className="container">
      <Cards>
        {projects.map((project) => (
          <Card key={project.slug} title={project.title} description={project.preview} />
        ))}
      </Cards>
    </main>
  )
}

export default Page
