import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hair Restoration of Lehigh Valley',
  robots: 'noindex, nofollow',
}

const DARK  = '#043939'
const NAVY  = '#2a2a34'
const WHITE = '#ffffff'

export default function PrivacyPolicyPage() {
  return (
    <div style={{ fontFamily: "'Jost', 'Open Sans', sans-serif", color: '#1a1a1a', background: WHITE }}>

      {/* Header */}
      <header style={{ background: WHITE, padding: '20px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <img src="/logo-pa.webp" alt="Hair Restoration of Lehigh Valley" style={{ height: 56, width: 'auto' }} />
        <a href="tel:4842762638" style={{ color: DARK, textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>
          484-276-2638
        </a>
      </header>

      {/* Banner */}
      <div style={{ background: DARK, padding: '48px 48px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Cormorant Infant', Georgia, serif", fontWeight: 700, color: WHITE, fontSize: 40, textTransform: 'uppercase', margin: 0, lineHeight: 1.129 }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '12px 0 0', fontSize: 14 }}>Last Updated: October 1, 2025</p>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 860, margin: '0 auto', padding: '64px 48px' }}>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 24 }}>
          Thank you for choosing to be part of our community at Hair Restoration of Lehigh Valley (&quot;company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:info@pahairtransplant.com" style={{ color: DARK }}>info@pahairtransplant.com</a>.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 24 }}>
          When you visit our website https://start.pahairtransplant.com and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our websites and our services.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: '#444', marginBottom: 48 }}>
          This privacy policy applies to all information collected through our website (such as https://start.pahairtransplant.com) and/or any related services, sales, marketing or events.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', marginBottom: 48 }} />

        <h2 style={{ fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 16 }}>Table of Contents</h2>
        <ol style={{ color: DARK, fontSize: 15, lineHeight: 2.2, paddingLeft: 24, marginBottom: 48 }}>
          {[
            'What Information Do We Collect?',
            'How Do We Use Your Information?',
            'Will Your Information Be Shared With Anyone?',
            'Do We Use Cookies and Other Tracking Technologies?',
            'How Long Do We Keep Your Information?',
            'How Do We Keep Your Information Safe?',
            'Do We Collect Information from Minors?',
            'What Are Your Privacy Rights?',
            'Do California Residents Have Specific Privacy Rights?',
            'Do We Make Updates to This Policy?',
            'How Can You Contact Us About This Policy?',
          ].map((item) => <li key={item}>{item}</li>)}
        </ol>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', marginBottom: 48 }} />

        <Section title="1. What Information Do We Collect?">
          <Sub title="Personal information you disclose to us">
            <p><em>In Short: We collect personal information that you provide to us such as name, address, contact information, passwords and security data, and payment information.</em></p>
            <p>We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Websites or otherwise contacting us.</p>
            <p><strong>Name and Contact Data.</strong> We may collect your first and last name, email address, postal address, phone number, and other similar contact data.</p>
            <p><strong>Credentials.</strong> When needed, we collect passwords, password hints, and similar security information used for authentication and account access.</p>
            <p><strong>Payment Data.</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by the payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.</p>
            <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
          </Sub>
          <Sub title="Information collected from other sources">
            <p><em>In Short: We may collect limited data from public databases, marketing partners, and other outside sources.</em></p>
            <p>We may obtain information about you from other sources, such as public databases, joint marketing partners, as well as from other third parties. Examples of the information we receive from other sources include: social media profile information; marketing leads and search results and links, including paid listings (such as sponsored links).</p>
          </Sub>
        </Section>

        <Section title="2. How Do We Use Your Information?">
          <p><em>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em></p>
          <p>We use personal information collected via our Websites for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <p><strong>Fulfill and manage your orders.</strong> We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Websites.</p>
          <p><strong>For other Business Purposes.</strong> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Websites, products, services, marketing and your experience.</p>
        </Section>

        <Section title="3. Will Your Information Be Shared With Anyone?">
          <p><em>In Short: We only share information with your consent, to comply with laws, to protect your rights, or to fulfill business obligations.</em></p>
          <p>We only share and disclose your information in the following situations:</p>
          <ul style={{ color: '#444', lineHeight: 1.9, paddingLeft: 24 }}>
            <li><strong>Compliance with Laws.</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
            <li><strong>Vital Interests and Legal Rights.</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities.</li>
            <li><strong>Vendors, Consultants and Other Third-Party Service Providers.</strong> We may share your data with third party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Unless described in this Policy, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.</li>
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>With your Consent.</strong> We may disclose your personal information for any other purpose with your consent.</li>
          </ul>
        </Section>

        <Section title="4. Do We Use Cookies and Other Tracking Technologies?">
          <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <a href="/cookie-policy" style={{ color: DARK }}>Cookie Policy</a>.</p>
        </Section>

        <Section title="5. How Long Do We Keep Your Information?">
          <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</em></p>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
        </Section>

        <Section title="6. How Do We Keep Your Information Safe?">
          <p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the Internet itself is 100 percent secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Websites is at your own risk. You should only access the services within a secure environment.</p>
        </Section>

        <Section title="7. Do We Collect Information from Minors?">
          <p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
          <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Websites, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Websites. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at <a href="mailto:info@pahairtransplant.com" style={{ color: DARK }}>info@pahairtransplant.com</a>.</p>
        </Section>

        <Section title="8. What Are Your Privacy Rights?">
          <p><em>In Short: You may review, change, or terminate your account at any time.</em></p>
          <p>If you are resident in the European Economic Area, and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You have the right to request access to your data, correction of your data and for your data to be removed. In the event of a data breach, you will be notified within 72 hours of the time the data breach is detected.</p>
          <p><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. To opt out of interest-based advertising by advertisers on our Websites visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noreferrer" style={{ color: DARK }}>www.aboutads.info/choices/</a>. For more details, see our <a href="/cookie-policy" style={{ color: DARK }}>Cookie Policy</a>.</p>
        </Section>

        <Section title="9. Do California Residents Have Specific Privacy Rights?">
          <p><em>In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</em></p>
          <p>California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
          <p>If you are under 18 years of age, reside in California, and have a registered account with the Websites, you have the right to request removal of unwanted data that you publicly post on the Websites. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Websites, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
        </Section>

        <Section title="10. Do We Make Updates to This Policy?">
          <p><em>In Short: Yes, we will update this policy as necessary to stay compliant with relevant laws.</em></p>
          <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated &quot;Revised&quot; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
        </Section>

        <Section title="11. How Can You Contact Us About This Policy?">
          <p>If you have questions or comments about this policy, you may email us at <a href="mailto:info@pahairtransplant.com" style={{ color: DARK }}>info@pahairtransplant.com</a> or by post to:</p>
          <address style={{ fontStyle: 'normal', color: '#444', lineHeight: 1.9, marginTop: 8 }}>
            <strong>Hair Restoration of Lehigh Valley</strong><br />
            42A S. 3rd St. Suite 201<br />
            Easton, PA 18042<br />
            <a href="tel:4842762638" style={{ color: DARK }}>484-276-2638</a>
          </address>
        </Section>

        <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', margin: '48px 0' }} />

        <div style={{ background: '#f4faf9', borderLeft: `4px solid ${DARK}`, padding: '24px 28px', borderRadius: 4 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 8px' }}>Personal Data Management</h3>
          <p style={{ fontSize: 15, color: '#444', lineHeight: 1.7, margin: 0 }}>
            According to the Privacy Policy, you agree to share your personal data with our service. However, you still have the right to update, transfer or delete it from us at any time. If you need further management for your data, please contact us at <a href="mailto:info@pahairtransplant.com" style={{ color: DARK }}>info@pahairtransplant.com</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: WHITE, borderTop: '1px solid #e8e8e8', padding: '32px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <img src="/logo-pa.webp" alt="Hair Restoration of Lehigh Valley" style={{ height: 44, width: 'auto' }} />
        <p style={{ color: '#555', fontSize: 13, margin: 0 }}>
          42A S. 3rd St. Suite 201, Easton, PA 18042
        </p>
        <p style={{ fontSize: 13, margin: 0 }}>
          <a href="/privacy-policy" style={{ color: '#555', textDecoration: 'none', marginRight: 16 }}>Privacy Policy</a>
          <a href="/cookie-policy" style={{ color: '#555', textDecoration: 'none' }}>Cookie Policy</a>
        </p>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#2a2a34', marginBottom: 16, paddingBottom: 10, borderBottom: '2px solid #e8e8e8' }}>
        {title}
      </h2>
      <div style={{ fontSize: 15, lineHeight: 1.85, color: '#444', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {children}
      </div>
    </section>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontSize: 15, fontWeight: 600, color: '#2a2a34', marginBottom: 10, marginTop: 4 }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
    </div>
  )
}
