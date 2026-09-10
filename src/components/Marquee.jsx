const experience = [
  { client: 'Vogue' },
  { client: 'Elle' },
  { client: 'Harpers Bazaar' },
  { client: 'GQ' },
  { client: 'Cosmopolitan' },
]

export default function Marquee() {
  const names = Array.from(new Set(experience.map((e) => e.client)))
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
