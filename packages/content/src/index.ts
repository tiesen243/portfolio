import fs from 'node:fs/promises'

async function getPage(source: 'blogs' | 'projects', slugs: string[]) {}

async function getPages(source: 'blogs' | 'projects') {
  const dir = new URL(`../${source}/`, import.meta.url)
  const files = await fs.readdir(dir, { withFileTypes: true })
  console.log(files)
}

export { getPage, getPages }
