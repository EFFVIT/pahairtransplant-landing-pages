import type { Metadata } from 'next'
import LehighMetaRtLP from '@/components/LehighMetaRtLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: 'https://more.pahairtransplant.com/og/m-meta-retargeting.webp', width: 1200, height: 630, alt: 'Worried about surgery or shaving? Get answers in 60 seconds — Hair Restoration of Lehigh Valley' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.pahairtransplant.com/og/m-meta-retargeting.webp'] },
  title: 'See If You Are a Candidate for Hair Restoration | Hair Restoration of Lehigh Valley',
  robots: 'noindex, nofollow',
}

export default function MetaRetargetingPage() {
  return (
    <LehighMetaRtLP
      heroFormId="lhzsG2yAI6igXivf8meN"
      bottomFormId="UyikaNF2D2Egci6IbhM2"
    />
  )
}
