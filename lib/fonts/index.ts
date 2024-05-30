import localFont from 'next/font/local'

const geistSans = localFont({
  src: './GeistVF.woff',
  variable: '--font-sans',
  preload: true,
})
const geistMono = localFont({
  src: './GeistMonoVF.woff',
  variable: '--font-mono',
  preload: true,
})

export const font = `${geistSans.variable} ${geistMono.variable} font-sans`
