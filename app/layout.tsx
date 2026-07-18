import DniSwap from '@/components/DniSwap'
import Script from 'next/script'
import Fab from '@/components/fab/Fab'
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWLGN7QK');`,
          }}
        />
        {/* Meta Pixel moved to <MetaPixel/> (client, route-gated) so it never
            loads on the /m/ paid-social medical pages — HIPAA carve-out H-26. */}
        <MetaPixel />
      </head>
      <body>
        <Fab client="lehigh" />
        <DniSwap />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWLGN7QK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
