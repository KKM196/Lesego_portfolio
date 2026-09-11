// Static client strip. Replace these with real clients once bookings land.
const items = ['Lesego Madisha', 'Aurora', 'Johannesburg', 'Available Worldwide']

export default function Marquee() {
  return (
    <div className="marquee">
      {items.map((name, i) => (
        <span className="marquee__item" key={i}>
          {name}
          <span className="marquee__dot">·</span>
        </span>
      ))}
    </div>
  )
}
