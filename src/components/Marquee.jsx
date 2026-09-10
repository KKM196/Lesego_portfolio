import { experience } from '../data.js'

export default function Marquee() {
  const names = Array.from(new Set(experience.map((e) => e.client)))
  // Duplicate the list so the CSS animation can loop seamlessly at -50%.
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
