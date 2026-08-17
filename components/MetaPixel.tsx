'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

// Meta Pixel gated by route. HIPAA carve-out (H-26 / §6 failure mode 7):
// health-intent consult/form pages are medical pages, so NO browser Meta Pixel
// loads there — attribution rides server-side CAPI. Meta will not sign a BAA.
//
// /c/ ADDED 2026-08-17. The gate previously named only /m/, which was correct
// for the routes that existed when it was written and silently wrong the moment
// a consult route was added: /c/consult collects a name, email, mobile, a
// Norwood/Ludwig selection and a prior-procedure answer, and would have loaded
// this pixel over all of it. The sibling /c/ routes on this app are the same
// shape — consult and evaluation form pages — so the gate covers the prefix
// rather than one path, which is the direction that cannot hide a violation.
// This suppresses a pixel on medical pages; it can only ever reduce exposure.
const PIXEL_ID = '509801668226244'

const HEALTH_INTENT = ['/m', '/c']

export default function MetaPixel() {
  const pathname = usePathname() || ''
  if (HEALTH_INTENT.some((p) => pathname === p || pathname.startsWith(p + '/'))) return null

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
