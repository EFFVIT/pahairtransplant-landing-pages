// Server-rendered JSON-LD for the schedule.pahairtransplant.com funnel pages
// (ClickUp 86bbkhdd5). NAP mirrors the footer contact block in
// PaHairLP.tsx / components/LehighLPShared.tsx — keep in sync if the
// practice's listed phone or address ever changes.
const PRACTICE = 'Hair Restoration of Lehigh Valley'
const TELEPHONE = '+1-484-212-1777'
const CANONICAL_URL = 'https://pahairtransplant.com'
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '42A S. 3rd St. Suite 201',
  addressLocality: 'Easton',
  addressRegion: 'PA',
  postalCode: '18042',
  addressCountry: 'US',
} as const

const SAME_AS = [
  'https://www.facebook.com/PAHairTransplant',
  'https://www.instagram.com/PAHairTransplant/',
  'https://maps.app.goo.gl/jEQkRrZkPAtwm65j9',
]

export default function MedicalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `${CANONICAL_URL}/#business`,
        name: PRACTICE,
        url: CANONICAL_URL,
        telephone: TELEPHONE,
        address: ADDRESS,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 40.6899544,
          longitude: -75.2087098,
        },
        hasMap: 'https://maps.app.goo.gl/jEQkRrZkPAtwm65j9',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        sameAs: SAME_AS,
      },
      {
        '@type': 'Organization',
        '@id': `${CANONICAL_URL}/#organization`,
        name: PRACTICE,
        url: CANONICAL_URL,
        telephone: TELEPHONE,
        address: ADDRESS,
        sameAs: SAME_AS,
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
