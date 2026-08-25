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


/* HEALTH-INTENT ROUTE GATE — added 2026-08-17 with the /c/consult build.

   /c/consult collects a name, email, mobile, a Norwood/Ludwig selection and a
   prior-procedure answer. That is health-intent input in a form, and H-26 /
   §6 failure mode 7 make a browser analytics tag on such a page non-waivable
   at the skill layer; these practices are BAA-covered and Google will not sign
   one for GA4. Server-side delivery would not launder it either (H-32) — the
   restriction follows the data, not the pipe.

   WIDENED 2026-08-25 TO THE WHOLE /c PREFIX, on Joe's explicit call. The
   paragraph this replaces asked for exactly that call and said not to widen
   without it; the call has now been made, and this is the record of it.

   What forced it: the fixed LP QA checker re-ran this app on 2026-08-25 and
   found GA4 firing live on /c/evaluation, /c/hair-restoration and
   /c/hair-transplant. Every one of them mounts a GHL consult form, so the /c
   prefix and the health-intent set are the same set. PNW had already been
   widened this way on 2026-08-24; this app and its sibling were missed, and
   they then accumulated new /c routes that the narrow gate never covered.

   Gating the PREFIX rather than listing routes is deliberate: a route gate
   written against the routes that existed the day it was written goes silently
   wrong the moment a route is added (H-45), which is precisely what happened
   here. Adding a /c route no longer requires remembering this file.

   Suppressing a tag on a medical page can only ever reduce exposure, so this
   edit cannot hide a violation. Widening it back is a separate decision and
   belongs to Joe (H-43).

   Suppressing a tag on a medical page can only ever reduce exposure, so this
   edit cannot hide a violation. */
const HEALTH_INTENT_ROUTES = ['/c']
const isHealthIntent = (p: string) =>
  HEALTH_INTENT_ROUTES.some((r) => p === r || p.startsWith(r + '/'))

export default function GtmTags() {
  const pathname = usePathname() || ''
  if (pathname.startsWith('/m/') || pathname === '/m') return null
  if (isHealthIntent(pathname)) return null

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
