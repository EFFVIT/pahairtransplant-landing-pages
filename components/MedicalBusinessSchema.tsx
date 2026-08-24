// Server-rendered MedicalBusiness JSON-LD for the schedule.pahairtransplant.com
// funnel pages (ClickUp 86bbkhdd5). NAP mirrors the footer contact block in
// PaHairLP.tsx / components/LehighLPShared.tsx — keep these in sync if the
// practice's listed phone or address ever changes.
const PRACTICE = 'Hair Restoration of Lehigh Valley'
const TELEPHONE = '+1-484-276-2638'
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '42A S. 3rd St. Suite 201',
  addressLocality: 'Easton',
  addressRegion: 'PA',
  postalCode: '18042',
  addressCountry: 'US',
} as const

export default function MedicalBusinessSchema({ pageUrl }: { pageUrl: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: PRACTICE,
    telephone: TELEPHONE,
    url: pageUrl,
    address: ADDRESS,
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
