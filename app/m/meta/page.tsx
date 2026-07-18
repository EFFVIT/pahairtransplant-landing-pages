import type { Metadata } from 'next'
import LehighMetaLP from '@/components/LehighMetaLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: 'https://more.pahairtransplant.com/og/m-meta.webp', width: 1200, height: 630, alt: 'See if hair restoration is right for you — Hair Restoration of Lehigh Valley' }] },
  twitter: { card: 'summary_large_image', images: ['https://more.pahairtransplant.com/og/m-meta.webp'] },
  title: 'See If Hair Restoration Is Right For You | Hair Restoration of Lehigh Valley',
  robots: 'noindex, nofollow',
}

export default function MetaPage() {
  return (
    <LehighMetaLP
      heroFormId="xvDUpfWj3iSlkemVjs4z"
      bottomFormId="qykhwtXnl00YVSY2zhC7"
    />
  )
}
