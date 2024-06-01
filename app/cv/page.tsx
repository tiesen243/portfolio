import type { NextPage } from 'next'

import { Button } from '@/components/ui/button'

const Page: NextPage = () => (
  <>
    <embed src="/cv.pdf" type="application/pdf" className="my-4 h-[50dvh] w-full flex-1" />

    <a href="/cv.pdf" className="flex justify-center" download>
      <Button>Download</Button>
    </a>
  </>
)

export default Page
