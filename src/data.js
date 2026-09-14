// ─────────────────────────────────────────────────────────────
// All site copy and content lives here. Edit this file to
// rebrand the whole site — no component code needs to change.
// ─────────────────────────────────────────────────────────────
import fullbody from './assets/fullbody.jpg'
import headshot from './assets/headshot.jpg'
import headshot3 from './assets/headshot3.jpg'
import bow from './assets/bow.jpg'
import chair1 from './assets/chair1.jpg'
import chair2 from './assets/chair2.jpg'
import chair3 from './assets/chair3.jpg'
import cross from './assets/cross.jpg'
import halfbody1 from './assets/halfbody1.jpg'
import leg1 from './assets/leg1.jpg'

export const profile = {
  name: 'Lesego Madisha',
  agency: 'Aurora',
  location: 'Johannesburg / available worldwide',
  tagline: 'Commercial and runway model working across fashion, beauty, and film.',
  heroNote: '5\u2019 0" — currently based in Johannesburg',
}

export const about = {
  heading: 'A quiet intensity in front of the camera',
  paragraphs: [
    'I\u2019m a model from Johannesburg.',
    'I\u2019m passionate about fashion, commercial modeling and runway. Modeling is something I truly love because it lets me express myself.',
    'I\u2019m friendly, confident and professional on set, and I\u2019m a fast learner who takes direction well. I enjoy posing and learning the runway walk, and I love working with photographers and brands to create beautiful images.',
    'I\u2019m at the start of my journey and excited to grow and learn more in the industry.',
  
  ],
  pullQuote:
    'I like sets that ask for something specific: a character, a mood, a piece of choreography for the body.',
}
//Comp-card style measurements — the back-of-card details agencies expect.
export const stats = [
  { label: 'Height', value: '5\u2019 0"' },
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
  { id: 'g01', category: 'Photoshoot', title: 'Aurora ',    year: '2026', src: fullbody },
  { id: 'g02', category: 'Photoshoot', title: 'Aurora ',     year: '2026', src: headshot },
  { id: 'g04', category: 'Photoshoot', title: 'Aurora ',    year: '2026', src: headshot3 },
  { id: 'g07', category: 'Photoshoot', title: 'Aurora ',     year: '2026', src: chair2 },
  { id: 'g05', category: 'Photoshoot', title: 'Aurora ',          year: '2026', src: bow },
  { id: 'g06', category: 'Photoshoot', title: 'Aurora ',      year: '2026', src: chair1 },
  { id: 'g08', category: 'Photoshoot', title: 'Aurora ',    year: '2026', src: chair3 },
  { id: 'g09', category: 'Photoshoot', title: 'Aurora ',        year: '2026', src: cross },
  { id: 'g10', category: 'Photoshoot', title: 'Aurora ',    year: '2026', src: halfbody1 }
]

export const contact = {
  bookingEmail: 'b.onitaa.collabs@gmail.com',
  agencyPhone: '+27 65 893 7824',
  instagram: '@b.onitaa',
  agencyName: 'Aurora',
}
