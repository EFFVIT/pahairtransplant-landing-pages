'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import {
  DARK, ORANGE, PANEL, WHITE, TEXT, SERIF, SANS, BTN,
  PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS, PRACTICE,
  CtaButton, CheckBadge, StarRow, Nav, Footer,
} from '@/components/LehighLPShared'

// Recreation of start.pahairtransplant.com/meta-retargeting/ and
// /meta-retargeting-artas/ (warm paid-social retargeting LPs). Copy reproduced
// verbatim from source (one obvious source typo "Intevention" corrected to
// "Intervention" — see report). Locked Lehigh brand, bright/airy — no dark
// sections. MEDICAL: no browser Meta pixel (route-gated off /m/, H-26); fbclid +
// gclid + UTM ride the shared GhlForm; server-side CAPI does attribution.
//
// ARTAS is a device trademark (compliance FM5). Source keeps manufacturer
// attribution and adds no new device claims — reproduced as-is, nothing added.

const h2Serif: React.CSSProperties = {
  fontFamily: SERIF, fontWeight: 700, textTransform: 'uppercase', color: DARK, lineHeight: 1.13,
}
const REVIEWS = [
  {
    text: 'I visited Hair Restoration of Lehigh Valley about three months ago and have been very pleased with the experience so far. Dr. Patel is fantastic to work with. He is incredibly friendly and took the time to make sure I understood all of my options before moving forward. I really appreciated how clearly he explained the process and set realistic expectations, answering every question I had along the way. The entire experience has been smooth, and I’m glad I found this clinic. Highly recommend.',
    name: 'Mariusz Jarzyna',
  },
  {
    text: 'I had been navigating hair concerns for quite some time before coming here after a recommendation. From the start, the staff was very welcoming and informative. Dr. Patel was professional and made sure I felt comfortable throughout my visit. Overall, it was a positive experience, and I would confidently recommend this practice.',
    name: 'Jessica Donner',
  },
  {
    text: 'Dr. Patel is professional, organized, and takes a thoughtful approach when working with patients. He and his team explained everything clearly, which made the experience easy to understand and comfortable from start to finish. The staff was well trained, personable, and attentive, and I appreciated being given clear post-visit instructions and everything I needed for aftercare. The practice is competitively priced, and overall, it was a very positive experience. Five stars.',
    name: 'Rick Frederick',
  },
]

export default function LehighMetaRtLP({
  heroFormId,
  bottomFormId,
  artas = false,
}: {
  heroFormId: string
  bottomFormId: string
  artas?: boolean
}) {
  const heroBadge = 'See If I’m A Candidate'
  const heroH1 = artas
    ? 'Worried about surgery or shaving? Get clarity in 60 seconds.'
    : 'Worried about surgery or shaving? Get answers in 60 seconds.'
  const heroSub = artas
    ? 'ARTAS®-assisted precision helps protect your donor area and plan for natural-looking results—based on your hair loss pattern.'
    : 'Hair restoration protects your donor area and plans for natural-looking results—based on your hair loss pattern.'

  const costList = artas
    ? ['The surgeon’s experience', 'Technique selection (FUE vs FUT)', 'Planning and long-term outcome']
    : ['The surgeon’s experience', 'Technique selection (FUE vs FUT)', 'Amount and quality of your donor hair region']

  const shavingList = artas
    ? ['ARTAS®-assisted graft selection consistency (when appropriate)', 'Donor preservation-focused planning', 'Natural growth pattern placement strategy']
    : ['Precise graft selection consistency (when appropriate)', 'Donor preservation-focused planning', 'Natural growth pattern placement strategy']

  const decisionList = ['Proper diagnosis', 'Long-term planning', 'Ethical candidacy screening']

  const decisionClose = artas
    ? 'Not everyone is an ideal candidate. Consultation exists to protect the patient first.'
    : 'Not everyone is an ideal candidate for hair restoration treatment. Consultations exist to protect the patient first.'

  const shavingClose = artas
    ? 'Your consultation determines whether ARTAS®, manual FUE, or a hybrid approach fits your pattern.'
    : 'Your consultation determines the best type of hair restoration procedure for your needs and whether a hybrid approach where a surgical procedure is paired with a non-surgical treatment, all designed specifically for your hair loss pattern.'

  const nextStep2 = artas
    ? 'Confirm best approach (ARTAS®/manual/hybrid)'
    : 'Confirm the treatment method, alone or hybrid, for your needs'

  return (
    <div style={{ fontFamily: SANS, color: TEXT }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      <Nav ctaLabel="See If I’m a Candidate" />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="form" className="lm-pad" style={{ background: PANEL, padding: '56px 48px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="lm-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'start' }}>
            <div>
              <span style={{ display: 'inline-block', background: DARK, color: '#fff', fontFamily: BTN, fontSize: 13, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '7px 16px', borderRadius: 40, marginBottom: 16 }}>
                {heroBadge}
              </span>
              {artas && (
                <p style={{ fontFamily: SANS, fontSize: 15, color: DARK, fontWeight: 600, margin: '0 0 12px' }}>
                  We’ll confirm if ARTAS® or another method is best for your goals.
                </p>
              )}
              <h1 className="lm-h1" style={{ ...h2Serif, fontSize: 40, marginBottom: 16, maxWidth: 620 }}>{heroH1}</h1>
              <p style={{ fontFamily: SANS, fontWeight: 500, fontSize: 19, color: TEXT, marginBottom: 24, lineHeight: 1.5, maxWidth: 560 }}>{heroSub}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, marginBottom: 8 }}>
                <CtaButton href="#form">Check Eligibility</CtaButton>
                <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, color: DARK, fontFamily: SANS, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div>
              <div style={{ background: WHITE, borderRadius: 8, padding: '24px', marginBottom: 20, boxShadow: '10px 10px 10.1px rgba(0,0,0,0.20)' }}>
                <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: 20, color: '#1a1a1a', margin: '0 0 6px', textAlign: 'center' }}>Get answers in 60 seconds</p>
                <GhlForm formId={heroFormId} height={400} formName={artas ? 'Banner Form - META RETARGETING  Artas' : 'Banner Form - META RETARGETING'} />
              </div>
              <img src="/img/m/rt-hero.webp" alt="Before and after hair restoration patient results at Hair Restoration of Lehigh Valley" style={{ width: '100%', borderRadius: 12, display: 'block', marginBottom: 8 }} />
              <p style={{ textAlign: 'center', fontFamily: SANS, fontSize: 12, color: '#8a8f8d', margin: 0 }}>Actual Patient Results &middot; Individual results vary</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST FOR / NOT IDEAL IF ──────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '64px 48px' }}>
        <div className="lm-two-grid" style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ background: '#f8fbfa', border: '1px solid #dce8e5', borderRadius: 16, padding: '28px 30px' }}>
            <h3 style={{ fontFamily: SANS, fontSize: 20, fontWeight: 700, color: DARK, margin: '0 0 16px' }}>Best For</h3>
            {['Early to moderate loss', 'Want natural density', 'Prefer physician planning'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <CheckBadge size={24} />
                <span style={{ fontFamily: SANS, fontSize: 15, color: TEXT }}>&ldquo;{t}&rdquo;</span>
              </div>
            ))}
          </div>
          <div style={{ background: '#fbf3ef', border: '1px solid #f2d9cc', borderRadius: 16, padding: '28px 30px' }}>
            <h3 style={{ fontFamily: SANS, fontSize: 20, fontWeight: 700, color: '#b0492a', margin: '0 0 16px' }}>Not ideal if:</h3>
            {['Seeking the cheapest option', 'Expect guaranteed density', 'Unwilling to follow long-term plan'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: '#e0a58f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>&times;</span>
                <span style={{ fontFamily: SANS, fontSize: 15, color: TEXT }}>&ldquo;{t}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ textAlign: 'center', fontFamily: SANS, fontSize: 15, color: DARK, fontWeight: 600, marginTop: 24 }}>
          Not sure? <a href="#form" style={{ color: ORANGE, textDecoration: 'none' }}>Check candidacy &gt;</a>
        </p>
      </section>

      {/* ── WAITING ──────────────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: PANEL, padding: '72px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 34, marginBottom: 10 }}>
            If You&rsquo;ve Been Waiting to &ldquo;Think About It&rdquo;&mdash;This Is Why
          </h2>
          <p style={{ fontFamily: SANS, fontWeight: 500, fontSize: 19, color: TEXT, marginBottom: 44 }}>Hair Loss Doesn&rsquo;t Pause While You Decide</p>
          <div className="lm-three-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
            {['Donor Hair Quality Declines Over Time', 'Earlier Intervention = More Natural Outcomes', 'Waiting Limits Future Options'].map(t => (
              <div key={t} style={{ background: WHITE, borderRadius: 12, padding: '28px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ margin: '0 auto 14px', width: 40, height: 40 }}><CheckBadge size={40} /></div>
                <p style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: DARK, margin: 0, lineHeight: 1.4 }}>{t}</p>
              </div>
            ))}
          </div>
          <CtaButton href="#final-form">See If I&rsquo;m a Candidate</CtaButton>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '72px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 40, textAlign: 'center', marginBottom: 12 }}>Real Patients. Real Experiences.</h2>
          <p style={{ fontFamily: SANS, fontWeight: 500, fontSize: 18, color: TEXT, textAlign: 'center', marginBottom: 44 }}>Verified patient experiences shared after their visit.</p>
          <div className="lm-three-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ background: '#f8fbfa', border: '1px solid #dce8e5', borderRadius: 12, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <img src="/img/m/quote.webp" alt="" aria-hidden="true" style={{ width: 32, height: 'auto' }} />
                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.75, color: '#444', flex: 1 }}>{r.text}</p>
                <div>
                  <StarRow />
                  <p style={{ fontFamily: SANS, fontSize: 13, fontWeight: 700, color: DARK, marginTop: 8 }}>- {r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ISN'T IT CHEAPER ─────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: PANEL, padding: '72px 48px' }}>
        <div className="lm-two-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 34, marginBottom: 18 }}>&ldquo;Isn&rsquo;t It Cheaper Somewhere Else?&rdquo;</h2>
            <p style={{ fontFamily: SANS, fontSize: 18, fontWeight: 600, color: DARK, margin: '0 0 14px' }}>Hair restoration is not a commodity</p>
            <p style={{ fontFamily: SANS, fontSize: 16, color: TEXT, margin: '0 0 10px' }}>Cost reflects:</p>
            <div style={{ marginBottom: 20 }}>
              {costList.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <CheckBadge size={22} />
                  <span style={{ fontFamily: SANS, fontSize: 15, color: TEXT }}>{t}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: SANS, fontSize: 16, color: TEXT, margin: '0 0 8px' }}>One procedure done right &gt; multiple corrections later</p>
            <p style={{ fontFamily: SANS, fontSize: 16, fontWeight: 700, color: DARK, margin: 0 }}>The real cost is choosing wrong &mdash; not choosing carefully.</p>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img src="/img/m/phone.webp" alt="Patient speaking with a hair restoration advisor by phone" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── CONCERNED ABOUT SHAVING ──────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '72px 48px' }}>
        <div className="lm-two-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img src="/img/m/marking.webp" alt="Provider marking a patient hairline before hair restoration" style={{ width: '100%', display: 'block' }} />
          </div>
          <div>
            <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 32, marginBottom: 16 }}>Concerned about shaving or downtime?</h2>
            <p style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: DARK, margin: '0 0 12px' }}>Not every procedure requires full shaving</p>
            <p style={{ fontFamily: SANS, fontSize: 16, color: TEXT, margin: '0 0 10px' }}>Modern techniques prioritize:</p>
            <div style={{ marginBottom: 20 }}>
              {shavingList.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 10 }}>
                  <CheckBadge size={22} />
                  <span style={{ fontFamily: SANS, fontSize: 15, color: TEXT }}>{t}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: DARK, margin: '0 0 10px' }}>Consultation determines:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 18 }}>
              {['Technique', 'Shaving requirements', 'Expected outcome'].map(t => (
                <div key={t} style={{ background: '#f8fbfa', border: '1px solid #dce8e5', borderRadius: 8, padding: '10px 12px', textAlign: 'center', fontFamily: SANS, fontSize: 13, fontWeight: 600, color: DARK }}>{t}</div>
              ))}
            </div>
            <p style={{ fontFamily: SANS, fontSize: 15, color: TEXT, margin: '0 0 22px', lineHeight: 1.6 }}>{shavingClose}</p>
            <CtaButton href="#form">Find Out What Applies To Me</CtaButton>
          </div>
        </div>
      </section>

      {/* ── WHY ARTAS (artas only) ───────────────────────────────────────── */}
      {artas && (
        <section className="lm-pad" style={{ background: PANEL, padding: '72px 48px' }}>
          <div className="lm-two-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
            <div>
              <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 34, marginBottom: 6 }}>Why ARTAS&reg;</h2>
              <p style={{ fontFamily: SANS, fontSize: 15, fontStyle: 'italic', color: '#555', margin: '0 0 18px' }}>(when you&rsquo;re a match)</p>
              {['Assists with consistent extraction patterns', 'Supports donor-area preservation planning', 'Helps reduce human fatigue variability'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <CheckBadge size={22} />
                  <span style={{ fontFamily: SANS, fontSize: 15, color: TEXT }}>{t}</span>
                </div>
              ))}
              <p style={{ fontFamily: SANS, fontSize: 15, fontStyle: 'italic', color: '#555', margin: '16px 0 22px' }}>
                ARTAS&reg; isn&rsquo;t for everyone&mdash;your candidacy determines the best method.
              </p>
              <CtaButton href="#final-form">See If I&rsquo;m a Candidate</CtaButton>
            </div>
            <div style={{ borderRadius: 12, overflow: 'hidden', background: WHITE, padding: 24 }}>
              <img src="/img/m/artas-device.webp" alt="ARTAS iX robotic hair restoration system (Venus Concept)" style={{ width: '100%', display: 'block' }} />
              <p style={{ textAlign: 'center', fontFamily: SANS, fontSize: 11, color: '#8a8f8d', margin: '10px 0 0' }}>ARTAS&reg; is a registered trademark of Venus Concept.</p>
            </div>
          </div>
        </section>
      )}

      {/* ── ARE YOU A CANDIDATE (meta-rt only) ───────────────────────────── */}
      {!artas && (
        <section className="lm-pad" style={{ background: PANEL, padding: '56px 48px', textAlign: 'center' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 32, marginBottom: 22 }}>Are You a Candidate For Hair Restoration?</h2>
            <div style={{ display: 'inline-block', textAlign: 'left', marginBottom: 20 }}>
              {['Your specific type of hair loss will be diagnosed', 'The extent of your current hair loss'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                  <CheckBadge size={22} />
                  <span style={{ fontFamily: SANS, fontSize: 16, color: TEXT }}>{t}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: SANS, fontSize: 16, color: DARK, fontWeight: 600, margin: '0 auto 24px', maxWidth: 620, lineHeight: 1.6 }}>
              Hair restoration isn&rsquo;t for everyone&mdash;your candidacy determines the best method.
            </p>
            <CtaButton href="#final-form">See If I&rsquo;m a Candidate</CtaButton>
          </div>
        </section>
      )}

      {/* ── WHAT HAPPENS NEXT ────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '72px 48px' }}>
        <div className="lm-two-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 36, marginBottom: 28 }}>What happens next</h2>
            {[
              'Review your hair loss pattern + donor supply',
              nextStep2,
              'Leave with a realistic plan + timeline (no commitment)',
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: '50%', background: DARK, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 18, fontWeight: 800 }}>{i + 1}</div>
                <h3 style={{ fontFamily: SANS, fontSize: 18, fontWeight: 600, color: DARK, margin: '6px 0 0', lineHeight: 1.4 }}>{t}</h3>
              </div>
            ))}
            <p style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, color: DARK, margin: '4px 0 0' }}>Consult: ~30 minutes &bull; Plan delivered same day</p>
          </div>
          <div style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img src="/img/m/consult.webp" alt="Patient during a hair loss consultation" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── MEDICAL DECISION ─────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: PANEL, padding: '72px 48px' }}>
        <div className="lm-two-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ borderRadius: 12, overflow: 'hidden' }}>
            <img src="/img/m/denim.webp" alt="Hair restoration patient" style={{ width: '100%', display: 'block' }} />
          </div>
          <div>
            <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 34, marginBottom: 16 }}>Hair Restoration Is a Medical Decision</h2>
            <p style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: DARK, margin: '0 0 14px' }}>Results depend on:</p>
            {decisionList.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                <CheckBadge size={22} />
                <span style={{ fontFamily: SANS, fontSize: 16, color: TEXT }}>{t}</span>
              </div>
            ))}
            <p style={{ fontFamily: SANS, fontSize: 15, color: TEXT, margin: '14px 0 0', lineHeight: 1.6 }}>{decisionClose}</p>
            <div style={{ marginTop: 24 }}>
              <CtaButton href="#final-form">Schedule a Consultation</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLAN EARLIER ─────────────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: WHITE, padding: '64px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 30, marginBottom: 28 }}>Hair loss changes over time&mdash;planning earlier preserves options.</h2>
          <div className="lm-three-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 40, textAlign: 'left' }}>
            {['Donor supply is finite', 'Earlier planning can improve natural coverage strategy', 'A consult clarifies what’s realistic now'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: '#f8fbfa', border: '1px solid #dce8e5', borderRadius: 12, padding: '20px 22px' }}>
                <CheckBadge size={24} />
                <span style={{ fontFamily: SANS, fontSize: 15, color: TEXT }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            <a href={PHONE_HREF} style={{ color: DARK, fontFamily: SANS, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} style={{ color: DARK, fontFamily: SANS, fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{EMAIL}</a>
            <span style={{ color: TEXT, fontFamily: SANS, fontSize: 16 }}>{ADDRESS}</span>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE TODAY + FORM ────────────────────────────────────────── */}
      <section className="lm-pad" style={{ background: PANEL, padding: '72px 48px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="lm-h2" style={{ ...h2Serif, fontSize: 34, marginBottom: 24 }}>Schedule your Consultation Today</h2>
          <div id="final-form" style={{ background: WHITE, borderRadius: 12, padding: '28px 24px', boxShadow: '0 4px 22px rgba(0,0,0,0.10)', textAlign: 'left' }}>
            <GhlForm formId={bottomFormId} height={460} formName={artas ? 'Footer Form -  META RETARGETING Artas' : 'Footer Form -  META RETARGETING'} />
          </div>
          <p style={{ fontFamily: SANS, fontSize: 15, color: DARK, fontWeight: 600, marginTop: 18 }}>Confidential &bull; No obligation &bull; Personalized</p>
          <div style={{ marginTop: 20 }}>
            <CtaButton href="#form">See If I&rsquo;m a Candidate</CtaButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
