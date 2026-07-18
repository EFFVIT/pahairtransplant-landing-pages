'use client'
import React from 'react'

// Shared UI for the Lehigh Meta (paid-social) landing pages under /m/.
// Locked Lehigh brand tokens (mirror PaHairLP.tsx / the /c/ pages) — bright and
// airy, never dark (HARD medical-site rule). No Meta pixel on these pages.

export const DARK = '#043939'
export const ORANGE = '#fc742a'
export const PANEL = '#ebf4f4'
export const WHITE = '#ffffff'
export const TEXT = '#2c2e2b'

export const SERIF = "'Cormorant Infant', Georgia, 'Times New Roman', serif"
export const SANS = "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
export const BTN = "'Roboto', sans-serif"

// Paid-social DNI number used on the start.pahairtransplant.com /meta* pages.
export const PHONE_DISPLAY = '484-917-5141'
export const PHONE_HREF = 'tel:4849175141'
export const EMAIL = 'info@pahairtransplant.com'
export const ADDRESS = '42A S. 3rd St. Suite 201, Easton, PA 18042'
export const PRACTICE = 'Hair Restoration of Lehigh Valley'
export const LOGO = '/logo-pa.webp'

export function CtaButton({
  href = '#form',
  children,
  variant = 'solid',
  style = {},
}: {
  href?: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  style?: React.CSSProperties
}) {
  const base: React.CSSProperties = {
    display: 'inline-block',
    fontFamily: BTN,
    fontWeight: 500,
    fontSize: 18,
    textTransform: 'uppercase',
    borderRadius: 62,
    padding: '15px 32px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  }
  const solid: React.CSSProperties = { background: ORANGE, color: '#000' }
  const outline: React.CSSProperties = { background: 'transparent', border: `2px solid ${TEXT}`, color: TEXT }
  return (
    <a href={href} style={{ ...base, ...(variant === 'solid' ? solid : outline), ...style }}>
      {children}
    </a>
  )
}

export function CheckBadge({ size = 30 }: { size?: number }) {
  return (
    <span style={{
      flexShrink: 0, width: size, height: size, borderRadius: '50%', background: DARK,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg width={Math.round(size * 0.47)} height={Math.round(size * 0.35)} viewBox="0 0 16 12" fill="none" aria-hidden="true">
        <path d="M1.5 6L5.5 10L14.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function StarRow({ size = 16 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <span key={i} style={{ fontSize: size, color: '#f5a623', lineHeight: 1 }}>&#9733;</span>
      ))}
    </div>
  )
}

export function Nav({ ctaLabel = 'Book a Consult' }: { ctaLabel?: string }) {
  return (
    <nav className="lm-nav" style={{
      background: WHITE, minHeight: 96, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '14px 48px', position: 'sticky',
      top: 0, zIndex: 100, boxShadow: '0px 4px 22.7px 0px rgba(0,0,0,0.25)',
    }}>
      <img src={LOGO} alt={PRACTICE} className="lm-nav-logo" style={{ height: 56, width: 'auto', display: 'block' }} />
      <div className="lm-nav-btns" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <a href={PHONE_HREF} className="lm-nav-phone" style={{
          fontFamily: BTN, fontWeight: 700, fontSize: 18, color: DARK, textDecoration: 'none', whiteSpace: 'nowrap',
        }}>{PHONE_DISPLAY}</a>
        <a href="#form" className="lm-nav-btn" style={{
          background: ORANGE, color: '#000', fontFamily: BTN, fontWeight: 500, fontSize: 18,
          textTransform: 'uppercase', borderRadius: 62, padding: '13px 22px', textDecoration: 'none', whiteSpace: 'nowrap',
        }}>{ctaLabel}</a>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#edeeee', padding: '20px 48px 32px', textAlign: 'center' }}>
      <p style={{ fontFamily: SANS, fontSize: 12, lineHeight: 1.7, color: '#555', maxWidth: 900, margin: '0 auto 14px' }}>
        <strong style={{ color: TEXT }}>Medical Disclaimer:</strong> This website provides general information about
        hair restoration procedures. It is not intended to be a substitute for professional medical advice, diagnosis,
        or treatment. Individual results may vary. Not all candidates are eligible for treatment. A medical consultation
        is required to determine candidacy.
      </p>
      <p style={{ fontFamily: BTN, fontWeight: 400, fontSize: 14, color: '#2c2e2b', textTransform: 'uppercase', margin: 0 }}>
        &copy; 2026 {PRACTICE} &bull;{' '}
        <a href="/privacy-policy" style={{ color: '#2c2e2b', textDecoration: 'none' }}>Privacy Policy</a> &bull;{' '}
        <a href="/cookie-policy" style={{ color: '#2c2e2b', textDecoration: 'none' }}>Cookie Policy</a>
      </p>
    </footer>
  )
}
