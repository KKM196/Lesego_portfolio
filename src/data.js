// ─────────────────────────────────────────────────────────────
// All site copy and content lives here. Edit this file to
// rebrand the whole site — no component code needs to change.
// Replace the placeholder image paths with real photos placed
// in /src/assets (see README for exact filenames expected).
// ─────────────────────────────────────────────────────────────
import fullbody from './assets/fullbody.jpg'
import headshot from './assets/headshot.jpg'
import headshot2 from './assets/headshot2.jpg'
import headshot3 from './assets/headshot3.jpg'

export const profile = {
  name: 'Lesego Madisha',
  agency: 'Aurora',
  location: 'Johanessburg/ available worldwide',
  tagline: 'Runway model working across fashion, beauty, and film.',
  heroNote: '5\u2019 7" — currently based in Johanessburg'
}

export const about = {
  heading: 'A quiet intensity in front of the camera',
  paragraphs: [
    'I started modeling with Aurora after a scout approached me on instagram — the kind of story that sounds made up until it happens to you.',
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

// Photoshoot gallery — add as many as you like. Each entry needs
// `src` (imported image) and `alt` (short description for screen readers).
export const photoshoot = [
  { src: fullbody,  alt: 'Full-body beauty shot' },
  { src: headshot,  alt: 'Close-up beauty shot' },
  { src: headshot2, alt: 'Beauty portrait' },
]

export const contact = {
  bookingEmail: 'madishajulia058.com',
  agencyPhone: '+27 65 893 7824',
  instagram: '@b.onitaa',
  agencyName: 'Aurora',
}
