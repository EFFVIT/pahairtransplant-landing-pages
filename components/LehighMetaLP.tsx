'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import {
  DARK, ORANGE, PANEL, WHITE, TEXT, SERIF, SANS, BTN,
  PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS,
  CtaButton, CheckBadge, Nav, Footer,
} from '@/components/LehighLPShared'

// Recreation of start.pahairtransplant.com/meta/ (cold paid-social consult LP)
// on the fleet. Copy reproduced verbatim from source. Locked Lehigh brand
// (bright/airy — no dark sections). MEDICAL: no browser Meta pixel here; the
// root-layout pixel is route-gated off /m/ (HIPAA carve-out H-26). fbclid +
// gclid + UTM ride the shared GhlForm; server-side CAPI does attribution.

const h2Serif: React.CSSProperties = {
  fontFamily: SERIF, fontWeight: 700, textTransform: 'uppercase', color: DARK, lineHeight: 1.13,
}

export default function LehighMetaLP({
  heroFormId,
  bottomFormId,
}: {
  heroFormId: string
  bottomFormId: string
}) {
  return (
    <div style={{ fontFamily: SANS, color: TEXT }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      <Nav ctaLabel="Book a Consult" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="form" className="lm-pad" style={{ background: PANEL, padding: '56px 48px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="lm-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'start' }}>
            {/* Left */}
            <div>
              <h1 className="lm-h1" style={{ ...h2Serif, fontSize: 42, marginBottom: 18, maxWidth: 640 }}>
                See If Hair Restoration Is Right For You&mdash;Before You Commit to Surgery
              </h1>
              <p style={{ fontFamily: SANS, fontWeight: 500, fontSize: 20, color: TEXT, marginBottom: 28, lineHeight: 1.5, maxWidth: 560 }}>
                A private, personalized consultation to evaluate your hair loss, treatment options, and expected
                results&mdash;guided by experienced medical professionals.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, marginBottom: 28 }}>
                <CtaButton href="#form">Book a Consult</CtaButton>
                <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, color: TEXT, fontSize: 15, fontWeight: 600, textDecoration: 'none', fontFamily: SANS }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6495 14.5551 13.8197C14.4808 13.9899 14.3718 14.1428 14.2352 14.2686C14.0986 14.3944 13.9373 14.4903 13.7616 14.5502C13.5859 14.6101 13.3997 14.6327 13.2147 14.6167C11.1636 14.3934 9.19352 13.6899 7.46668 12.5633C5.86054 11.5354 4.49459 10.1695 3.46668 8.56334C2.33608 6.82805 1.63239 4.84869 1.41335 2.78667C1.39735 2.60301 1.4197 2.41839 1.47902 2.24354C1.53834 2.06869 1.63328 1.90783 1.75798 1.77125C1.88267 1.63467 2.03448 1.52544 2.20382 1.45047C2.37317 1.3755 2.55636 1.33646 2.74168 1.336H4.74168C5.06525 1.33285 5.37884 1.44923 5.6238 1.66294C5.86877 1.87665 6.02859 2.17205 6.07335 2.49334C6.15721 3.13039 6.31282 3.75585 6.53668 4.35734C6.62575 4.59667 6.64663 4.85607 6.59693 5.10668C6.54723 5.35729 6.42897 5.58911 6.25601 5.77534L5.40668 6.62467C6.36026 8.30431 7.7357 9.67976 9.41535 10.6333L10.2647 9.78401C10.4509 9.61105 10.6827 9.49279 10.9333 9.44309C11.1839 9.39338 11.4434 9.41426 11.6827 9.50333C12.2842 9.72719 12.9096 9.8828 13.5467 9.96667C13.8714 10.0119 14.1687 10.1746 14.383 10.4239C14.5972 10.6732 14.7136 10.9923 14.7107 11.32L14.6667 11.28Z" fill={DARK} />
                  </svg>
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
              <div className="lm-trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, maxWidth: 460 }}>
                {['Real procedures', 'Personalized care', 'Real patients', 'Performed in-clinic'].map(label => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckBadge size={24} />
                    <span style={{ fontFamily: SANS, fontSize: 15, color: TEXT }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form card + before/after */}
            <div>
              <div style={{ background: WHITE, borderRadius: 8, padding: '24px', marginBottom: 20, boxShadow: '10px 10px 10.1px rgba(0,0,0,0.20)' }}>
                <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: 20, color: '#1a1a1a', margin: '0 0 4px', textAlign: 'center' }}>Request Your Evaluation</p>
                <p style={{ fontFamily: SANS, fontSize: 14, color: '#555', margin: '0 0 14px', textAlign: 'center' }}>Every treatment plan is customized&mdash;no templates, no shortcuts.</p>
                <GhlForm formId={heroFormId} height={400} formName="Banner Form - META LEAD GEN" />
              </div>
              <img src="/img/m/meta-hero.webp" alt="Actual patient hair restoration results at Hair Restoration of Lehigh Valley" style={{ width: '100%', borderRadius: 12, display: 'block', marginBottom: 12 }} />
              <img src="/img/m/meta-ba2.webp" alt="Before and after hair restoration patient results" style={{ width: '100%', borderRadius: 12, display: 'block', marginBottom: 8 }} />
              <p style={{ textAlign: 'center', fontFamily: SANS, fontSize: 12, color: '#8a8f8d', margin: 0 }}>Actual Patient Results &middot; Individual results vary</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THIS IS NOT A SALES APPOINTMENT ──────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '72px 48px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 40, marginBottom: 12 }}>This Is Not a Sales Appointment</h2>
          <p style={{ fontFamily: SANS, fontWeight: 500, fontSize: 18, color: TEXT, margin: '0 auto 40px', maxWidth: 660, lineHeight: 1.6 }}>
            A comprehensive medical consultation focused on your health, eligibility, and long-term success.
          </p>
          <div className="lm-two-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, textAlign: 'left' }}>
            {[
              ['Medical Eligibility', 'Determine whether you’re medically eligible'],
              ['Review Options', 'Review surgical and non-surgical options'],
              ['Realistic Outcomes', 'Understand realistic outcomes and timelines'],
              ['Safety & Planning', 'Discuss recovery, safety, and long-term planning'],
            ].map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 14, background: '#f8fbfa', border: '1px solid #dce8e5', borderRadius: 12, padding: '20px 22px' }}>
                <CheckBadge size={28} />
                <div>
                  <h3 style={{ fontFamily: SANS, fontSize: 17, fontWeight: 700, color: DARK, margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontFamily: SANS, fontSize: 14, color: '#444', margin: 0, lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERMANENT ────────────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: PANEL, padding: '72px 48px' }}>
        <div className="lm-two-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 36, marginBottom: 20 }}>Hair Restoration Is Permanent&mdash;Mistakes Are Too</h2>
            <p style={{ fontFamily: SANS, fontSize: 17, color: TEXT, margin: '0 0 16px', lineHeight: 1.7 }}>
              Hair restoration isn&rsquo;t cosmetic filler. It&rsquo;s a permanent medical procedure that requires careful
              planning and skilled execution.
            </p>
            <p style={{ fontFamily: SANS, fontSize: 17, color: DARK, fontWeight: 600, margin: 0, lineHeight: 1.7 }}>
              This consultation exists to help you avoid rushed decisions, over-harvesting, and unnatural results &mdash;
              and to determine whether treatment makes sense for you at all.
            </p>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img src="/img/m/consult.webp" alt="Patient during a hair loss consultation" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '72px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 40, textAlign: 'center', marginBottom: 44 }}>How It Works</h2>
          <div className="lm-three-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginBottom: 28 }}>
            {[
              ['1', 'Request a Consultation', 'Submit a short, private form.'],
              ['2', 'Speak With a Patient Advisor', 'Review your goals and next steps.'],
              ['3', 'In-Clinic Evaluation', 'Confirm candidacy and personalized options.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: DARK, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 22, fontWeight: 800 }}>{n}</div>
                <h3 style={{ fontFamily: SANS, fontSize: 19, fontWeight: 700, color: DARK, margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontFamily: SANS, fontSize: 15, color: '#555', margin: 0, lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontFamily: SANS, fontSize: 14, color: '#6a7282', fontStyle: 'italic', margin: '0 0 24px' }}>No obligation. Private and confidential.</p>
          <div style={{ textAlign: 'center' }}>
            <CtaButton href="#final-form">See If I&rsquo;m a Candidate</CtaButton>
          </div>
        </div>
      </section>

      {/* ── INCENTIVE (bright accent band) ───────────────────────────────── */}
      <section className="lm-pad" style={{ background: PANEL, padding: '48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', border: `2px solid ${DARK}`, borderRadius: 16, padding: '36px 28px', background: WHITE }}>
          <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 28, marginBottom: 12 }}>Limited Consultation Incentive Available</h2>
          <p style={{ fontFamily: SANS, fontSize: 16, color: TEXT, margin: 0, lineHeight: 1.6 }}>
            Qualified candidates may be eligible for preferred pricing during their consultation.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ─────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '72px 48px' }}>
        <div className="lm-two-grid" style={{ maxWidth: 1050, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 34, marginBottom: 24 }}>If You&rsquo;re Going to Do This, Do It Informed</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={PHONE_HREF} style={{ color: DARK, fontFamily: SANS, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} style={{ color: DARK, fontFamily: SANS, fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{EMAIL}</a>
              <span style={{ color: TEXT, fontFamily: SANS, fontSize: 16 }}>{ADDRESS}</span>
            </div>
          </div>
          <div id="final-form" style={{ background: '#f8fbfa', border: '1px solid #dce8e5', borderRadius: 16, padding: '24px' }}>
            <p style={{ fontFamily: SANS, fontSize: 18, fontWeight: 700, color: DARK, margin: '0 0 14px', textAlign: 'center' }}>Check My Eligibility</p>
            <GhlForm formId={bottomFormId} height={440} formName="Footer Form - META LEAD GEN" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
