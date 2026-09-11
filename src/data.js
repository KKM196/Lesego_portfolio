// ─────────────────────────────────────────────────────────────
// All site copy and content lives here. Edit this file to
// rebrand the whole site — no component code needs to change.
// ─────────────────────────────────────────────────────────────
import fullbody from './assets/fullbody.jpg'
import headshot from './assets/headshot.jpg'
import headshot2 from './assets/headshot2.jpg'
import headshot3 from './assets/headshot3.jpg'

export const profile = {
  name: 'Lesego Madisha',
  agency: 'Aurora',
  location: 'Johannesburg / available worldwide',
  tagline: 'Commercial model working across fashion, beauty, and film.',
  heroNote: '5\u2019 7" — currently based in Johannesburg',
}

export const about = {
  heading: 'A quiet intensity in front of the camera',
  paragraphs: [
    'I started modeling with Aurora after a scout approached me on Instagram — the kind of story that sounds made up until it happens to you.',
    'Off-camera I study printmaking, which is probably why I\u2019m drawn to work with strong graphic direction.',
  ],
  pullQuote:
    'I like sets that ask for something specific: a character, a mood, a piece of choreography for the body.',
}
//Comp-card style measurements — the back-of-card details agencies expect.
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

// Gallery entries. `category` drives the filter chips — the component
// derives them from whatever categories exist here, so adding a new one
// automatically shows up as a new filter.
export const gallery = [
  { id: 'g1', category: 'Photoshoot', title: 'Full-body', year: '2026', src: fullbody },
  { id: 'g2', category: 'Photoshoot', title: 'Portrait',  year: '2026', src: headshot },
  { id: 'g3', category: 'Photoshoot', title: 'Aurora I',  year: '2026', src: headshot2 },
  { id: 'g4', category: 'Photoshoot', title: 'Aurora II', year: '2026', src: headshot3 },
]

export const contact = {
  bookingEmail: 'madishajulia058@gmail.com',
  agencyPhone: '+27 65 893 7824',
  instagram: '@b.onitaa',
  agencyName: 'Aurora',
}
