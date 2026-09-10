import { useEffect, useRef } from 'react'
import { stats, profile } from '../data.js'

export default function Stats() {
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const rows = list.querySelectorAll('.stats__row')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    rows.forEach((row) => observer.observe(row))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="details" className="stats">
      <div className="stats__card">
        <div className="stats__card-head">
          <h2>{profile.name}</h2>
          <span>{profile.agency}</span>
        </div>
        <dl className="stats__list" ref={listRef}>
          {stats.map((s, i) => (
            <div className="stats__row" style={{ '--i': i }} key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
