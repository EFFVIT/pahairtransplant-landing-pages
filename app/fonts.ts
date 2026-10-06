import { Cormorant_Infant, Jost, Roboto, Lato } from 'next/font/google'

export const cormorantInfant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

export const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jost',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

// Only used for the financing price ($188/mo, weight 900), far below the fold —
// not preloaded so it doesn't compete with first-screen fonts.
export const lato = Lato({
  subsets: ['latin'],
  weight: ['900'],
  display: 'swap',
  variable: '--font-lato',
  preload: false,
})
