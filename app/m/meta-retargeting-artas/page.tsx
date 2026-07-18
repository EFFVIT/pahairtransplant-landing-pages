import type { Metadata } from 'next'
import LehighMetaRtLP from '@/components/LehighMetaRtLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: 'https://more.pahairtransplant.com/og/m-meta-retargeting-artas.webp', width: 1200, height: 630, alt: 'Worried about surgery or shaving? Get clarity in 60 seconds — Hair Restoration of Lehigh Valley' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.pahairtransplant.com/og/m-meta-retargeting-artas.webp'] },
  title: 'See If You Are a Candidate for Hair Restoration | Hair Restoration of Lehigh Valley',
  robots: 'noindex, nofollow',
}

export default function MetaRetargetingArtasPage() {
  return (
    <LehighMetaRtLP
      heroFormId="H7v96xvbc1YezxzO7DVT"
      bottomFormId="Ue0rGThcW9G5mrecYWC8"
      artas
    />
  )
}
