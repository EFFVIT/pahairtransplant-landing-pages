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
        {/* Fonts were previously loaded via @import in globals.css, which forces
            a serial fetch chain (HTML -> CSS -> @import CSS -> font files) that
            blocks first paint. Preconnect + a direct <link> lets the browser
            discover and fetch these in parallel with everything else in <head>. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;700&family=Jost:wght@400;500;600;700&family=Roboto:wght@400;500;700&family=Lato:wght@700;900&display=swap"
        />
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
