// ─────────────────────────────────────────────────────────────
// All site copy and content lives here. Edit this file to
// rebrand the whole site — no component code needs to change.
// Replace the placeholder image paths with real photos placed
// in /src/assets (see README for exact filenames expected).
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Lesego Madisha',
  agency: 'Aurora',
  location: 'Johanessburg/ available worldwide',
  tagline: 'Runway model working across fashion, beauty, and film.',
  heroNote: '5\u2019 4" — currently based in Johanessburg'
}

export const about = {
  heading: 'A quiet intensity in front of the camera',
  paragraphs: [
    'I started modeling with Aurora after a scout approached me on instagram — the kind of story that sounds made up until it happens to you. Since then I\u2019ve worked across editorial, runway, and commercial beauty.',
    'I like sets that ask for something specific: a character, a mood, a piece of choreography for the body. Off-camera I study printmaking, which is probably why I\u2019m drawn to work with strong graphic direction.',
  ],
}

// Comp-card style measurements — the back-of-card details agencies expect.
export const stats = [
  { label: 'Height', value: '5\u2019 7"' },
  { label: 'Bust', value: '31"' },
  { label: 'Waist', value: '27"' },
  { label: 'Hips', value: '21"' },
  { label: 'Shoe', value: 'UK 4 / EU 10.5' },
  { label: 'Hair', value: 'Dark brown' },
  { label: 'Eyes', value: 'Brown' },
  { label: 'Dress', value: 'Small' },
]

// Gallery images. `span` controls the grid size in the editorial
// masonry layout: "tall" | "wide" | "large" | "" (default single cell).
export const gallery = [
  { id: 'g1', category: 'Photoshoot', title: 'Aurora', span: '', src: '/src/assets/fullbody.PNG' },
  { id: 'g2', category: 'Photoshoot', title: 'Aurora', span: '', src: '/src/assets/headshot.PNG' }

]

export const contact = {
  bookingEmail: 'madishajulia058.com',
  agencyPhone: '+27 65 893 7824',
  instagram: '@b.onitaa',
  agencyName: 'Aurora',
}
