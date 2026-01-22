import alchemy from 'alchemy'
import { Nextjs } from 'alchemy/cloudflare'
import { config } from 'dotenv'

config({ path: './.env', quiet: true })
config({ path: '../../.env', quiet: true })

const app = await alchemy('portfolio')

export const web = await Nextjs('web', {
  cwd: '../../kaze',
  adopt: true,
  bindings: {
    RESEND_TOKEN: alchemy.env.RESEND_TOKEN ?? '',
    NEXT_PUBLIC_APP_URL: alchemy.env.NEXT_PUBLIC_APP_URL ?? '',
  },
})

console.log(`Web -> ${web.url}`)

await app.finalize()
