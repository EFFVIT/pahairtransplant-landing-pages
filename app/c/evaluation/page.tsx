import type { Metadata } from 'next'
import PaHairLP from '@/components/PaHairLP'

export const metadata: Metadata = {
  title: 'Free Hair Loss Evaluation | Hair Restoration of Lehigh Valley',
  robots: 'noindex, nofollow',
}

export default function EvaluationPage() {
  return (
    <PaHairLP
      heroFormId="SmOTe9GS6e3ZlXAKRIK1"
      bottomFormId="R0qQX7D7Xcagmd5xl26d"
    />
  )
}
