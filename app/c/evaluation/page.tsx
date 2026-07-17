import type { Metadata } from 'next'
import PaHairLP from '@/components/PaHairLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.pahairtransplant.com/og/c-evaluation.webp", width: 1200, height: 630, alt: "Free hair loss evaluation at Hair Restoration of Lehigh Valley" }] },
  twitter: { card: "summary_large_image", images: ["https://more.pahairtransplant.com/og/c-evaluation.webp"] },
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
