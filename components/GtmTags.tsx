'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

/* GA4 ONLY. GTM-MWLGN7QK was removed from this landing page app on 2026-08-15 at
   Joe's direction. Measured live that day, it delivered Microsoft Clarity session
   recording, the Meta pixel, Bing UET and a DoubleClick view-through remarketing
   beacon onto patient-intake pages. Neither Microsoft nor Meta will sign a BAA.

   The container itself was NOT edited, and must not be: Lehigh's own website
   serves the same container, so editing it would strip that site's analytics and
   retargeting too. Scope is the landing page fleet only.

   The /m/ gate below is UNCHANGED. Those paid-social routes are health-intent
   consult pages that carry no client-side tracking at all, GA4 included. This
   change removes tags; it must never add one to a page that was already clean.

   allow_google_signals:false is load-bearing. Without it GA4 linked to Google Ads
   keeps building the same remarketing audiences from the same page views, and
   dropping the beacon achieves nothing (H-32). */
const GA_ID = 'G-X7G76K0WMF'

export default function GtmTags() {
  const pathname = usePathname() || ''
  if (pathname.startsWith('/m/') || pathname === '/m') return null

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js', new Date());
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false,anonymize_ip:true});`}
      </Script>
    </>
  )
}
