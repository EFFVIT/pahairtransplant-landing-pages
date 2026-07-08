import type { Metadata } from 'next'
import PaHairLP from '@/components/PaHairLP'

export const metadata: Metadata = {
  title: 'Hair Restoration Consultation | Hair Restoration of Lehigh Valley',
  robots: 'noindex, nofollow',
}

export default function HairRestorationPage() {
  return (
    <PaHairLP
      heroFormId="SmOTe9GS6e3ZlXAKRIK1"
      bottomFormId="R0qQX7D7Xcagmd5xl26d"
    />
  )
}
