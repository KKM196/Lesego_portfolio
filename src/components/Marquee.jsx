// Client ticker. Replace these with real clients once bookings land —
// for now it just loops the model's name, agency, and location.
const items = [
  { client: 'Lesego Madisha' },
  { client: 'Aurora' },
  { client: 'Johannesburg' },
  { client: 'Available Worldwide' },
]

export default function Marquee() {
  const names = Array.from(new Set(items.map((e) => e.client)))
  const track = [...names, ...names]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((name, i) => (
          <span className="marquee__item" key={i}>
            {name}
            <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
