import type { Metadata } from 'next'
import PaHairLP from '@/components/PaHairLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.pahairtransplant.com/og/c-hair-restoration.webp", width: 1200, height: 630, alt: "Hair restoration consultation in the Lehigh Valley, Pennsylvania" }] },
  twitter: { card: "summary_large_image", images: ["https://more.pahairtransplant.com/og/c-hair-restoration.webp"] },
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
