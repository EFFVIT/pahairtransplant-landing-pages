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

export const lato = Lato({
  subsets: ['latin'],
  weight: ['700', '900'],
  display: 'swap',
  variable: '--font-lato',
})
