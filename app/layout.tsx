import DniSwap from '@/components/DniSwap'
import Fab from '@/components/fab/Fab'
import GtmTags from '@/components/GtmTags'
import MetaPixel from '@/components/MetaPixel'
import './globals.css'

export const metadata = {
  openGraph: {
    images: [{ url: 'https://start.pahairtransplant.com/wp-content/uploads/2025/12/PA_Logo.webp', width: 1200, height: 630, alt: 'Hair Restoration of Lehigh Valley' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* GTM + Meta Pixel are route-gated client components: both return null
            on the /m/ paid-social medical pages so no client-side tracking
            (pixel or GA4) loads there — HIPAA carve-out H-26 / §6 FM7. Every
            other route is unchanged. */}
        <GtmTags />
        <MetaPixel />
      </head>
      <body>
        <Fab client="lehigh" />
        <DniSwap />
        {children}
      </body>
    </html>
  )
}
