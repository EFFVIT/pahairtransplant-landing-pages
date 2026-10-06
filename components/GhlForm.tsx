'use client'
import { useEffect, useRef, useState } from 'react'
import { onIdle } from '@/lib/onIdle'

// ─────────────────────────────────────────────────────────────────────────────
// EFFVIT canonical GHL form embed. Do not fork this per client.
//
// Three rules, each paid for with a real outage. See the
// `effvit-ghl-form-embed` skill for the full contract.
//
// 1. PARAMS BEFORE MOUNT. The iframe is not rendered until the click ids and
//    UTMs have been resolved, so its `src` is never mutated after mount.
//    Swapping src post-mount reloads the widget and blanks the form.
//
// 2. form_embed.js IS MANDATORY. It is GHL's parent-page bridge: it posts
//    `document.location.href` + `document.referrer` + the merged query params
//    to the widget. Without it the widget only sees the iframe's cross-origin
//    Referer, which the browser trims to the bare origin under the default
//    strict-origin-when-cross-origin policy — so every lead lands in GHL as
//    `sessionSource: "Direct traffic"` with null gclid/utm/referrer, even on a
//    real paid click. (Biltmore, 2026-07-16 to 07-23.) It is injected once per
//    page, after every mounted form has its final src.
//
// 3. NEVER LOAD A SECOND IFRAME-RESIZER. form_embed.js bundles its own and
//    re-parents each iframe into an `<id>-wrapper` div. A standalone
//    iframe-resizer then throws `iFrame (<id>) does not exist`, and that
//    uncaught error aborts form_embed's init and leaves an empty wrapper — the
//    form disappears entirely. That is the crash that got form_embed.js
//    deleted from the fleet in the first place. form_embed.js owns resizing.
//
// Hidden-field aliasing (H-27): GHL silently discards any param without a
// matching hidden field on the form. The gclid field was created with key
// `gclid-of`, so the plain `?gclid=` never matches — all spellings are sent.
//
// LAYOUT SLOT (86bbmxw6p). When form_embed.js re-parents the iframe into its
// wrapper, the iframe briefly takes no space, then iframe-resizer grows it to
// the form's real height (~700px on a phone, not the 400px reserved). Measured
// live: the hero card collapsed 501px -> 101px, pulling the hero photo up into
// the viewport, where it painted late and became the LCP (8-11s), then got
// pushed back down (CLS ~0.1). The iframe now sits in a slot whose min-height
// is the form's measured rendered height per breakpoint, so neither the
// re-parent nor the resize moves anything around it.
//
// LAZY (86bbmxw6p). Each GHL widget costs ~2-3s of main-thread CPU on a
// throttled phone, which alone breaks TBT. A below-the-fold form passes
// `lazy`: its iframe is not created until the slot nears the viewport
// (IntersectionObserver), while the slot keeps reserving the height so CLS
// stays fixed. A form mounted after form_embed.js has run is still bridged:
// its `iframeLoaded` message re-runs form_embed's init, and the widget pulls
// the parent URL/params through `fetch-query-params`, which resolves any form
// iframe on the page.
// ─────────────────────────────────────────────────────────────────────────────

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'fbclid']

const FORM_EMBED_SRC = 'https://link.msgsndr.com/js/form_embed.js'

// Default GHL widget host. Elite MD overrides it: api.leadconnectorhq.com is
// DNS-blocked for that practice's visitors, so its forms are served from a
// white-labelled host instead. form_embed.js talks to the iframe by
// contentWindow.postMessage(msg, '*'), so a non-default host still works.
const DEFAULT_HOST = 'api.leadconnectorhq.com'

// How far ahead of the viewport a lazy form starts loading, so the widget is
// usually painted by the time the visitor reaches it.
const LAZY_ROOT_MARGIN = '400px 0px'

// form_embed.js processes every form iframe present when it runs, so one
// injection covers a page with several forms. Components mount in the same
// commit, well before idle fires, so waiting for idle time still lets them
// all settle before the script lands — and keeps its parse/exec cost out of
// the FCP-to-TTI window that Total Blocking Time measures.
let embedScheduled = false
function injectFormEmbedOnce() {
  if (embedScheduled) return
  embedScheduled = true
  onIdle(() => {
    if (document.querySelector(`script[src="${FORM_EMBED_SRC}"]`)) return
    const s = document.createElement('script')
    s.src = FORM_EMBED_SRC
    s.async = true
    document.body.appendChild(s)
  }, 1500)
}

export default function GhlForm({
  formId,
  height = 620,
  tabletHeight = height,
  mobileHeight = height,
  formName = '',
  host = DEFAULT_HOST,
  lazy = false,
}: {
  formId: string
  /** Rendered form height above 768px. */
  height?: number
  /** Rendered form height at 481-768px. */
  tabletHeight?: number
  /** Rendered form height at 480px and below. */
  mobileHeight?: number
  formName?: string
  host?: string
  /** Defer the widget until the slot nears the viewport. Below-the-fold forms only. */
  lazy?: boolean
}) {
  const widgetBase = `https://${host}/widget/form`
  // null until params are resolved — the iframe does not render before then.
  const [src, setSrc] = useState<string | null>(null)
  const [inView, setInView] = useState(!lazy)
  const slotRef = useRef<HTMLDivElement>(null)
  const iframeId = `inline-${formId}`

  useEffect(() => {
    if (inView) return
    const slot = slotRef.current
    if (!slot || !('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { setInView(true); io.disconnect() }
    }, { rootMargin: LAZY_ROOT_MARGIN })
    io.observe(slot)
    return () => io.disconnect()
  }, [inView])

  useEffect(() => {
    if (!inView) return
    const urlParams = new URLSearchParams(window.location.search)
    const out = new URLSearchParams()

    // sessionStorage fallback keeps attribution alive across internal
    // navigation, where the landing params are no longer in the URL.
    ;[...CLICK_ID_KEYS, ...UTM_KEYS].forEach(key => {
      const val = urlParams.get(key) || sessionStorage.getItem(key)
      if (val) {
        try { sessionStorage.setItem(key, val) } catch { /* private mode */ }
        out.set(key, val)
      }
    })

    // utm_* and gbraid/wbraid slugs match their params exactly; the two click
    // ids whose GHL field keys differ get aliased to every spelling in use.
    const gclid = out.get('gclid')
    if (gclid) { out.set('gclid-of', gclid); out.set('gclidof', gclid) }
    const fbclid = out.get('fbclid')
    if (fbclid) { out.set('fbclid-of', fbclid); out.set('fbclidof', fbclid) }

    const qs = out.toString()
    setSrc(qs ? `${widgetBase}/${formId}?${qs}` : `${widgetBase}/${formId}`)
  }, [formId, widgetBase, inView])

  useEffect(() => {
    if (src) injectFormEmbedOnce()
  }, [src])

  // The slot reserves the form's rendered height from first paint, through
  // param resolution, the form_embed.js re-parent and the iframe-resizer pass.
  const slotStyle = {
    width: '100%',
    '--ghl-h': `${height}px`,
    '--ghl-h-t': `${tabletHeight}px`,
    '--ghl-h-m': `${mobileHeight}px`,
  } as React.CSSProperties

  return (
    <div ref={slotRef} className="ghl-slot" style={slotStyle}>
      {src && (
        <iframe
          src={src}
          style={{ width: '100%', border: 'none', borderRadius: '0px', display: 'block' }}
          className="ghl-frame"
          id={iframeId}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height={height}
          data-layout-iframe-id={iframeId}
          data-form-id={formId}
          title={formName || formId}
        />
      )}
    </div>
  )
}
