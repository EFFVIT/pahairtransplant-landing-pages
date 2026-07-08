'use client'
import { Suspense, useState } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

// ── DESIGN TOKENS ──────────────────────────────────────────────────────────
const DARK    = '#043939'
const ORANGE  = '#fc742a'
const PANEL   = '#ebf4f4'
const WHITE   = '#ffffff'
const TEXT    = '#2c2e2b'
const TEAL    = '#0d5c56'

// ── ICONS ────────────────────────────────────────────────────────────────

function IconCircle({ children, size = 90 }: { children: React.ReactNode; size?: number }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: DARK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      {children}
    </div>
  )
}

function CalendarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="white" strokeWidth="1.6"/>
      <path d="M3 9H21" stroke="white" strokeWidth="1.6"/>
      <path d="M8 2V6" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M16 2V6" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7.5 13.5L11 13.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7.5 17L14.5 17" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function GoalIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="1.4" fill="white"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="white" strokeWidth="1.6"/>
      <path d="M19 19L15.2 15.2" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function ClipboardIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" stroke="white" strokeWidth="1.6"/>
      <rect x="8.5" y="2.5" width="7" height="3" rx="1" fill="white"/>
      <path d="M8.5 12L11 14.5L15.8 9.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckBadge() {
  return (
    <span style={{
      flexShrink: 0,
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: DARK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
        <path d="M1.5 6L5.5 10L14.5 1.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

function CapabilitiesIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="16" height="19" rx="2" stroke={DARK} strokeWidth="1.6"/>
      <rect x="8" y="1.3" width="8" height="3" rx="1" fill={DARK}/>
      <path d="M8 11L10.5 13.5L16 8" stroke={DARK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 17H16" stroke={DARK} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function SafetyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L20 5.5V11C20 16 16.8 20 12 22C7.2 20 4 16 4 11V5.5L12 2Z" stroke={DARK} strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M8.5 12L11 14.5L15.8 9" stroke={DARK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PatientFirstIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C12 21 3.5 15.5 3.5 9.5C3.5 6.5 5.8 4.3 8.6 4.3C10 4.3 11.2 5 12 6C12.8 5 14 4.3 15.4 4.3C18.2 4.3 20.5 6.5 20.5 9.5C20.5 15.5 12 21 12 21Z" stroke={DARK} strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  )
}

function StarRow({ size = 16 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[0, 1, 2, 3, 4].map(i => (
        <span key={i} style={{ fontSize: size, color: '#f5a623', lineHeight: 1 }}>&#9733;</span>
      ))}
    </div>
  )
}

// ── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'What is alopecia, and are there different types?',
    a: 'Alopecia is a general medical term used to describe hair loss. There are several types of alopecia, and each can affect the scalp or other areas of the body in different ways. Some forms are related to genetics, while others may be associated with immune response, hormonal changes, stress, or underlying health conditions. A medical evaluation can help identify the specific type and contributing factors.',
  },
  {
    q: 'Is hair loss always permanent?',
    a: 'Hair loss is not always permanent. In some cases, hair thinning or shedding may be temporary and related to factors such as stress, illness, hormonal changes, or nutritional deficiencies. Other forms of hair loss may be progressive or long-term. Because causes can vary, a medical evaluation is often the best way to understand whether hair loss may be temporary or ongoing.',
  },
  {
    q: 'How is hair loss typically evaluated by a medical professional?',
    a: 'Hair loss is typically evaluated through a review of medical history, a discussion of symptoms, and a physical examination of the scalp or affected areas. In some cases, additional information such as family history, lifestyle factors, or general health considerations may be reviewed. The goal of an evaluation is to better understand possible causes, not to make assumptions about outcomes.',
  },
  {
    q: 'Can stress, hormones, or lifestyle factors affect hair loss?',
    a: 'Yes, stress, hormonal changes, and certain lifestyle factors may influence hair growth and shedding patterns. Physical or emotional stress, changes in hormone levels, diet, sleep habits, and overall health can all play a role. The impact of these factors varies from person to person, which is why hair loss is often assessed in the context of overall health.',
  },
  {
    q: 'Are there non-surgical options that may be discussed for hair loss conditions?',
    a: 'Depending on the underlying cause, non-surgical approaches may be discussed as part of a broader conversation about hair loss management. These discussions are typically individualized and based on medical history, hair loss patterns, and overall health. Not every option is appropriate for every person, and recommendations can vary widely.',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className="pah-pad" style={{ background: WHITE, padding: '80px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 className="pah-h2-xl" style={{
          fontFamily: "'Cormorant Infant', Georgia, serif",
          fontWeight: 700,
          fontSize: 40,
          lineHeight: 1.129,
          color: DARK,
          textAlign: 'center',
          textTransform: 'uppercase' as const,
          marginBottom: 40,
        }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} style={{ borderRadius: 16, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: PANEL,
                    border: 'none',
                    padding: '18px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 24,
                    cursor: 'pointer',
                    textAlign: 'left' as const,
                    borderRadius: isOpen ? '16px 16px 0 0' : 16,
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 16, fontWeight: 600, color: TEXT, lineHeight: 1.35 }}>{item.q}</span>
                  <span style={{ fontSize: 24, fontWeight: 300, color: DARK, flexShrink: 0, lineHeight: 1 }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div style={{ background: '#f4faf9', padding: '20px 28px 24px', borderRadius: '0 0 16px 16px' }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#444', margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── PROPS ────────────────────────────────────────────────────────────────────

interface Props {
  heroFormId?: string
  bottomFormId?: string
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function PaHairLP({
  heroFormId = 'SmOTe9GS6e3ZlXAKRIK1',
  bottomFormId = 'R0qQX7D7Xcagmd5xl26d',
}: Props) {
  return (
    <div style={{ fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif", color: TEXT }}>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav className="pah-nav" style={{
        background: WHITE,
        height: 164,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 64px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0px 4px 22.7px 0px rgba(0,0,0,0.45)',
      }}>
        <img
          src="/logo-pa.webp"
          alt="Hair Restoration of Lehigh Valley"
          className="pah-nav-logo"
          style={{ height: 84, width: 'auto', display: 'block' }}
        />
        <div className="pah-nav-btns" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a
            href="#form"
            className="pah-nav-btn"
            style={{
              background: ORANGE,
              color: '#000',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              textTransform: 'uppercase' as const,
              borderRadius: 62,
              padding: '15px 22px',
              textDecoration: 'none',
              whiteSpace: 'nowrap' as const,
            }}
          >
            Book Your Consultation
          </a>
          <a
            href="tel:4842762638"
            className="pah-nav-btn"
            style={{
              background: 'transparent',
              color: '#2e2f2a',
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              textTransform: 'uppercase' as const,
              borderRadius: 62,
              padding: '15px 22px',
              textDecoration: 'none',
              whiteSpace: 'nowrap' as const,
            }}
          >
            484-276-2638
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="pah-hero" id="form" style={{
        position: 'relative',
        background: PANEL,
        overflow: 'hidden',
      }}>
        {/* Photo layer - lower portion of hero */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: '38%', overflow: 'hidden' }}>
          <img
            src="/hero-bg.png"
            alt=""
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.95) 100%)',
          }} />
        </div>

        <div className="pah-hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto', padding: '56px 64px 64px' }}>
          <div className="pah-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'start' }}>

            {/* Left col - heading */}
            <div className="pah-hero-left" style={{ paddingTop: 24 }}>
              <h1 className="pah-hero-h1" style={{
                fontFamily: "'Cormorant Infant', Georgia, 'Times New Roman', serif",
                fontWeight: 700,
                fontSize: 40,
                textTransform: 'uppercase' as const,
                color: DARK,
                lineHeight: 1.13,
                marginBottom: 20,
                maxWidth: 620,
              }}>
                Medical Evaluation for Thinning Hair &amp; Hair Loss Conditions
              </h1>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 25,
                color: TEXT,
                marginBottom: 14,
                lineHeight: 1.35,
                maxWidth: 560,
              }}>
                Discover the cause of your hair loss and learn which treatment options fit your goals and hair biology.
              </p>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: 18,
                color: TEXT,
                marginBottom: 0,
                lineHeight: 1.55,
                maxWidth: 560,
              }}>
                Request your consultation to discuss your hair loss concerns with a licensed medical professional.
              </p>

              {/* Trust badge sits over the photo, so keep it in the flow lower on the left col for stacked mobile layout */}
              <div className="pah-hero-trust" style={{ marginTop: 260, display: 'flex', alignItems: 'center', gap: 14, maxWidth: 420 }}>
                <img src="/stars-rating.png" alt="5 star rating" style={{ height: 30, width: 'auto', flexShrink: 0 }} />
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: WHITE,
                  lineHeight: 1.4,
                  margin: 0,
                }}>
                  Patient-Centered Care<br />
                  <span style={{ fontWeight: 400, fontSize: 14 }}>Patients appreciate our personalized, doctor-led approach.</span>
                </p>
              </div>
            </div>

            {/* Right col - form card */}
            <div className="pah-hero-right">
              <div style={{
                background: WHITE,
                borderRadius: 8,
                padding: '28px 24px 24px',
                width: '100%',
                boxShadow: '10px 10px 10.1px rgba(0,0,0,0.32)',
              }}>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                  fontSize: 22,
                  color: '#1a1a1a',
                  marginBottom: 20,
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}>
                  Request Your Evaluation
                </p>
                <GhlForm formId={heroFormId} height={400} formName="Request Your Hair Consultation - Hair Restoration Google" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ────────────────────────────────────────────────────────── */}
      <section className="pah-pad" style={{ background: WHITE, padding: '72px 48px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="pah-h2-xl" style={{
            fontFamily: "'Cormorant Infant', Georgia, serif",
            fontWeight: 700,
            fontSize: 40,
            textTransform: 'uppercase' as const,
            lineHeight: 1.129,
            color: DARK,
            marginBottom: 16,
            textAlign: 'center',
          }}>
            Your Hair Loss Plan Is Just Three Steps Away
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            fontSize: 20,
            color: TEXT,
            textAlign: 'center',
            marginBottom: 56,
            lineHeight: 'normal',
          }}>
            It&apos;s simpler than you think, and it all starts with a conversation.
          </p>

          <div className="pah-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 32,
            marginBottom: 40,
          }}>
            {[
              { icon: <CalendarIcon />, title: 'Schedule Your Evaluation', text: 'Pick a time that works best for you.' },
              { icon: <GoalIcon />, title: 'Share Your Goals', text: 'Tell us what you want to improve.' },
              { icon: <SearchIcon />, title: 'Hair Loss Assessment', text: 'Your provider examines thinning patterns.' },
              { icon: <ClipboardIcon />, title: 'Personalized Assessment', text: 'No pressure. No sales pitch. Just answers.' },
            ].map((step, i) => (
              <div
                key={i}
                className="pah-step-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 12px',
                }}
              >
                <IconCircle>{step.icon}</IconCircle>
                <h3 style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: DARK,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  margin: '20px 0 8px',
                  textTransform: 'uppercase' as const,
                }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, color: '#555', margin: 0, lineHeight: 1.5 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            fontSize: 18,
            color: TEXT,
            textAlign: 'center',
            marginTop: 24,
            lineHeight: 'normal',
          }}>
            No pressure. No obligation. Just honest answers about your options.
          </p>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: '#777',
            textAlign: 'center',
            marginTop: 12,
            lineHeight: 'normal',
          }}>
            You&apos;re in the right place - thousands start here every week.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <a
              href="#form"
              style={{
                display: 'inline-block',
                background: ORANGE,
                color: '#000',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 18,
                textTransform: 'uppercase' as const,
                borderRadius: 62,
                padding: '15px 40px',
                textDecoration: 'none',
              }}
            >
              Request Your Evaluation
            </a>
          </div>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: '#777',
            textAlign: 'center',
            marginTop: 20,
            lineHeight: 'normal',
          }}>
            Fast. Private. No obligation.
          </p>
        </div>
      </section>

      {/* ── WHY PATIENTS FEEL CONFIDENT (checklist) ─────────────────────── */}
      <section className="pah-pad" style={{ background: PANEL, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="pah-h2-xl" style={{
            fontFamily: "'Cormorant Infant', Georgia, serif",
            fontWeight: 700,
            fontSize: 40,
            textTransform: 'uppercase' as const,
            lineHeight: 1.129,
            color: DARK,
            textAlign: 'center',
            marginBottom: 12,
          }}>
            Why Patients Feel Confident Choosing Our Team - and Why You Can Too
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            fontSize: 20,
            color: TEXT,
            textAlign: 'center',
            marginBottom: 52,
            lineHeight: 'normal',
          }}>
            Real care. Real support. Real patient-first focus.
          </p>

          <div className="pah-features-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '28px 64px',
            marginBottom: 48,
          }}>
            {[
              { title: 'Designed for Your Hair Loss Pattern', text: 'Personalized plans based on your stage, evaluation findings, and goals.' },
              { title: 'Visible, Measurable Progress', text: 'Track changes over time through follow-up assessments.' },
              { title: 'Guidance Focused on Healthy-Looking Hair Over Time', text: 'Recommendations based on proven medical and appearance-supporting approaches.' },
              { title: 'Safe Care. Proven Protocols.', text: 'Strict standards for consistent, high-quality patient care.' },
              { title: 'Tailored to You', text: 'Your plan is based on your evaluation, goals, and long-term hair needs.' },
              { title: 'Trusted by Thousands', text: 'Real patients. Real reviews. Real experiences.' },
              { title: 'Step-by-Step Guidance', text: 'Know what to expect during your evaluation and throughout your care plan.' },
              { title: 'Built for Real-Life Confidence', text: 'Feel prepared and confident in your everyday life again.' },
              { title: 'Support When You Need It Most', text: 'Real guidance through your evaluation, recommendations, and every step of your journey.' },
              { title: 'Start with a Free Consultation', text: 'Get answers, options, and a personalized plan - no pressure.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <CheckBadge />
                <div>
                  <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 20, color: DARK, margin: '0 0 4px' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, color: '#444', margin: 0, lineHeight: 1.5 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pah-btn-row" style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' as const }}>
            <a
              href="#form"
              style={{
                background: ORANGE,
                color: '#000',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 18,
                textTransform: 'uppercase' as const,
                borderRadius: 62,
                padding: '15px 32px',
                textDecoration: 'none',
                whiteSpace: 'nowrap' as const,
              }}
            >
              Request Your Consultation
            </a>
            <a
              href="#form"
              style={{
                background: 'transparent',
                border: `2px solid ${TEXT}`,
                color: TEXT,
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                fontSize: 18,
                textTransform: 'uppercase' as const,
                borderRadius: 62,
                padding: '15px 32px',
                textDecoration: 'none',
                whiteSpace: 'nowrap' as const,
              }}
            >
              Request Your Evaluation
            </a>
          </div>
        </div>
      </section>

      {/* ── BIO ──────────────────────────────────────────────────────────── */}
      <section className="pah-pad" style={{ background: WHITE, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div className="pah-bio-grid" style={{ display: 'grid', gridTemplateColumns: '40% 1fr', gap: 64, alignItems: 'start' }}>

            {/* Photo — LEFT */}
            <div style={{ borderRadius: 5, overflow: 'hidden', flexShrink: 0, background: DARK }}>
              <img
                src="/dr-bio.png"
                alt="Dr. Nish Patel - Hair Restoration of Lehigh Valley"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              />
            </div>

            {/* Text — RIGHT */}
            <div>
              <h2 className="pah-h2-xl" style={{
                fontFamily: "'Cormorant Infant', Georgia, serif",
                fontWeight: 700,
                fontSize: 36,
                textTransform: 'uppercase' as const,
                lineHeight: 1.129,
                color: DARK,
                marginBottom: 16,
              }}>
                Meet Dr. Nish Patel: Specialist in Hair Loss Evaluation &amp; Treatment Planning
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                color: TEXT,
                lineHeight: 'normal',
                marginBottom: 28,
              }}>
                Verified patient experiences from real consultations and care.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 17, lineHeight: 1.7, color: TEXT, marginBottom: 20 }}>
                Dr. Nish Patel is a licensed physician with a background in family medicine and extensive experience in clinical evaluation and patient care. He earned his Bachelor of Science in Biochemistry from Temple University and his medical degree from NOVA Southeastern College of Osteopathic Medicine. He completed his residency training at Arnot Ogden Medical Center.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 17, lineHeight: 1.7, color: TEXT, marginBottom: 20 }}>
                Dr. Patel&apos;s medical experience includes years of hands-on patient assessment, diagnosis, and care coordination. In his current practice, he focuses on the evaluation of hair loss conditions and works closely with patients to understand contributing factors such as medical history, genetics, and overall health.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 17, lineHeight: 1.7, color: TEXT, marginBottom: 36 }}>
                At Hair Restoration of Lehigh Valley, Dr. Patel emphasizes a thoughtful, individualized approach to hair loss care. Each patient evaluation is designed to provide clear information, address questions, and support informed decision-making based on personal needs and goals. His focus is on patient education, transparency, and medically appropriate care planning.
              </p>
              <a
                href="#form"
                style={{
                  display: 'inline-block',
                  background: ORANGE,
                  color: '#000',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: 'uppercase' as const,
                  borderRadius: 62,
                  padding: '15px 32px',
                  textDecoration: 'none',
                }}
              >
                Request Your Evaluation
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────────── */}
      <section className="pah-pad" style={{ background: PANEL, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 className="pah-h2-xl" style={{
            fontFamily: "'Cormorant Infant', Georgia, serif",
            fontWeight: 700,
            fontSize: 40,
            textTransform: 'uppercase' as const,
            lineHeight: 1.129,
            color: DARK,
            textAlign: 'center',
            marginBottom: 16,
          }}>
            Real Patients. Real Experiences.
          </h2>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 500,
            fontSize: 20,
            color: TEXT,
            textAlign: 'center',
            lineHeight: 'normal',
            marginBottom: 48,
          }}>
            Verified patient experiences shared after their visit.
          </p>
          <div className="pah-reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
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
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  background: WHITE,
                  borderRadius: 12,
                  padding: '32px 28px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                <img src="/quote-icon.png" alt="" aria-hidden="true" style={{ width: 32, height: 'auto' }} />
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#444', flex: 1 }}>{review.text}</p>
                <div>
                  <StarRow />
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 700, color: DARK, marginTop: 8 }}>- {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING ────────────────────────────────────────────────────── */}
      <section className="pah-fin-outer" style={{ background: '#edeeee', padding: '82px 48px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="pah-fin-section">

          {/* Left — text content */}
          <div className="pah-fin-left" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="pah-h2-lg" style={{
              fontFamily: "'Cormorant Infant', Georgia, serif",
              fontWeight: 700,
              fontSize: 36,
              textTransform: 'uppercase' as const,
              lineHeight: 1.129,
              color: TEXT,
              marginBottom: 14,
            }}>
              Getting Help for Hair Loss Can Be{' '}
              <span style={{ color: DARK }}>More Affordable Than You Think</span>
            </h2>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: 22,
              color: TEXT,
              lineHeight: 'normal',
              marginBottom: 24,
            }}>
              Flexible monthly plans built for real patients.
            </p>
            <div style={{ marginBottom: 32 }}>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                color: TEXT,
                lineHeight: 'normal',
                marginBottom: 4,
              }}>As low as</p>
              <p className="pah-price-big" style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 900,
                fontSize: 66,
                color: DARK,
                lineHeight: 1.129,
                margin: 0,
              }}>$188/mo</p>
            </div>

            {/* White card */}
            <div style={{
              background: WHITE,
              borderRadius: 15,
              padding: '32px 40px',
            }}>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                color: TEXT,
                lineHeight: 'normal',
                marginBottom: 16,
              }}>
                Fast, simple payment plans
              </p>
              <p style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: '#000000',
                lineHeight: 1.5,
                marginBottom: 24,
              }}>
                The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
              </p>
              <a
                href="#form"
                style={{
                  display: 'inline-block',
                  background: ORANGE,
                  color: '#000',
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 18,
                  textTransform: 'uppercase' as const,
                  borderRadius: 62,
                  padding: '15px 32px',
                  textDecoration: 'none',
                }}
              >
                Request Your Evaluation
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="pah-fin-photo" style={{ borderRadius: 5, overflow: 'hidden', height: 620 }}>
            <img
              src="/financing-photo.png"
              alt=""
              aria-hidden="true"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

        </div>
      </section>

      {/* ── CAPABILITIES / SAFETY / PATIENT-FIRST ───────────────────────── */}
      <section className="pah-pad" style={{ background: WHITE, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="pah-h2-xl" style={{
            fontFamily: "'Cormorant Infant', Georgia, serif",
            fontWeight: 700,
            fontSize: 40,
            textTransform: 'uppercase' as const,
            lineHeight: 1.129,
            color: DARK,
            textAlign: 'center',
            marginBottom: 10,
          }}>
            Why Patients Feel Confident Choosing Our Team
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, color: '#666', marginBottom: 52, lineHeight: 1.5, textAlign: 'center' }}>
            Real capabilities. Real safety. Real patient-first care.
          </p>
          <div className="pah-commit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {[
              {
                icon: <CapabilitiesIcon />,
                title: 'Capabilities',
                items: [
                  'Comprehensive evaluation of hair loss patterns',
                  'Personalized care plans built around your goals',
                  'During your visit, you’ll receive a professional evaluation and guidance on managing hair loss, based on established clinical understanding.',
                  'Support for complex cases requiring multi-factor planning',
                ],
              },
              {
                icon: <SafetyIcon />,
                title: 'Safety & Surgical Standards',
                items: [
                  'Evidence-based approaches reviewed by licensed medical providers',
                  'Clean, professional clinical environment with medical-grade protocols',
                  'Clear discussions about expectations, and next steps in your care plan',
                ],
              },
              {
                icon: <PatientFirstIcon />,
                title: 'Patient-First Philosophy',
                items: [
                  'Honest assessments - we provide recommendations only when appropriate',
                  'Personalized plans developed around your unique needs and goals',
                  'Direct communication with your doctor at every step of your care journey',
                  'Focus on long-term hair health',
                ],
              },
            ].map((col, i) => (
              <div key={i} style={{
                background: '#f8fbfa',
                borderRadius: 12,
                padding: '36px 28px 32px',
                border: '1px solid #dce8e5',
              }}>
                <div style={{ marginBottom: 20 }}>{col.icon}</div>
                <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 18, color: DARK, marginBottom: 18 }}>
                  {col.title}
                </h3>
                <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#555', lineHeight: 1.55 }}>
                      <span style={{ color: DARK, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FaqSection />

      {/* ── MAP + FOOTER FORM ─────────────────────────────────────────────── */}
      <section className="pah-map-outer" style={{ background: '#edeeee', padding: '82px 48px 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>

          {/* Two-column grid */}
          <div className="pah-map-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* Map — LEFT */}
            <div className="pah-map-col" style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', minHeight: 320 }}>
              <img
                src="/footer-map.png"
                alt="Hair Restoration of Lehigh Valley location map"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Visit Our Practice badge */}
              <div style={{
                position: 'absolute',
                top: 24,
                left: 28,
                background: '#d9d9d9',
                borderRadius: 62,
                padding: '12px 20px',
              }}>
                <p style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  color: '#2c2e2b',
                  textTransform: 'uppercase' as const,
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}>Visit Our Practice</p>
              </div>
            </div>

            {/* Form — RIGHT */}
            <div className="pah-form-col">
              <GhlForm formId={bottomFormId} height={496} formName="Footer Form -  Hair Restoration Google" />
            </div>

          </div>

          {/* Phone + Address */}
          <div className="pah-contact-row" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 80,
            padding: '48px 0 32px',
            flexWrap: 'wrap' as const,
          }}>
            <a href="tel:4842762638" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20.3 16.9L17.6 14.2C16.8 13.4 15.5 13.4 14.7 14.2L13.3 15.6C12.8 16.1 12 16.1 11.5 15.7C10.2 14.8 9 13.7 7.9 12.5C6.8 11.4 5.8 10.2 4.9 8.9C4.5 8.4 4.5 7.6 5 7.1L6.4 5.7C7.2 4.9 7.2 3.6 6.4 2.8L3.7 0.1C2.9-0.7 1.6-0.7 0.8 0.1L0.1 0.8C-1.4 2.3 0.4 7.5 5.8 12.8C11.1 18.1 16.3 19.8 17.8 18.3L18.5 17.6C19.3 16.9 19.3 15.7 18.5 14.9L20.3 16.9Z" fill={DARK}/>
              </svg>
              <span style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: 25,
                color: DARK,
                lineHeight: 'normal',
              }}>484-276-2638</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 0C4 0 0 4 0 9C0 15.8 9 29 9 29C9 29 18 15.8 18 9C18 4 14 0 9 0ZM9 12C7.3 12 6 10.7 6 9C6 7.3 7.3 6 9 6C10.7 6 12 7.3 12 9C12 10.7 10.7 12 9 12Z" fill={DARK}/>
              </svg>
              <div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 700, fontSize: 18, color: DARK, lineHeight: 'normal', margin: 0 }}>
                  Hair Restoration of Lehigh Valley
                </p>
                <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 16, color: '#2c2e2b', lineHeight: 'normal', margin: 0 }}>
                  42A S. 3rd St. Suite 201, Easton, PA 18042
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="pah-footer-bar" style={{ textAlign: 'center', padding: '20px 48px 32px' }}>
          <p style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: '#2c2e2b',
            textTransform: 'uppercase' as const,
            lineHeight: '30px',
            margin: 0,
          }}>
            &copy; 2026 Hair Restoration of Lehigh Valley &bull; <a href="/privacy-policy" style={{ color: '#2c2e2b', textDecoration: 'none' }}>Privacy Policy</a> &bull; <a href="/cookie-policy" style={{ color: '#2c2e2b', textDecoration: 'none' }}>Cookie Policy</a>
          </p>
        </div>
      </section>
    </div>
  )
}
