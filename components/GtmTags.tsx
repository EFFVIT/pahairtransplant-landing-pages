'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

// Google Tag Manager, route-gated. GTM-MWLGN7QK fires a Meta Pixel (and other
// client-side tags) on every page. The /m/ paid-social pages are medical
// consult/form pages with health intent, so per H-26 / §6 failure mode 7 they
// must carry NO client-side tracking — no pixel, no GA4. Attribution rides the
// GhlForm params + server-side CAPI instead. Returning null on /m/ means GTM
// never loads there, so window.fbq stays undefined. Every other route keeps GTM
// exactly as before (unchanged behavior).
const GTM_ID = 'GTM-MWLGN7QK'

export default function GtmTags() {
  const pathname = usePathname() || ''
  if (pathname.startsWith('/m/') || pathname === '/m') return null

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}
