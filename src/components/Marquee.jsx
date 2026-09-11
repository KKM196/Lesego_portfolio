import { useEffect, useRef, useState } from 'react'

// Client ticker. Replace these with real clients once bookings land —
// for now it just loops the model's name, agency, and location.
const items = [
  { client: 'Lesego Madisha' },
  { client: 'Aurora' },
  { client: 'Johannesburg' },
  { client: 'Available Worldwide' },
]

// Target scroll speed in pixels per second. Lower = slower.
// 60 px/s feels calm. 40 px/s is very slow. 100 px/s is brisk.
const SPEED_PX_PER_SEC = 60

export default function Marquee() {
  const names = Array.from(new Set(items.map((e) => e.client)))
  const track = [...names, ...names]
  const trackRef = useRef(null)
  const [duration, setDuration] = useState(40)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const update = () => {
      // Half the track is one full loop (we duplicate the list).
      const halfWidth = el.scrollWidth / 2
      const seconds = Math.max(halfWidth / SPEED_PX_PER_SEC, 15)
      setDuration(seconds)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="marquee" aria-hidden="true">
      <div
        ref={trackRef}
        className="marquee__track"
        style={{ animationDuration: `${duration}s` }}
      >
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
