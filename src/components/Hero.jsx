import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import fullbody from '../assets/fullbody.jpg'

function AnimatedLine({ text, startIndex = 0 }) {
  return (
    <span className="hero__name-line">
      {text.split('').map((char, i) => (
        <span className="hero__letter" style={{ '--i': startIndex + i }} key={i}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(t)
  }, [])

  const [first, ...rest] = profile.name.split(' ')
  const last = rest.join(' ')

  return (
    <section id="top" className={`hero ${ready ? 'is-ready' : ''}`}>
      <div className="hero__image">
        <img src={fullbody} alt="Full-body portrait" className="hero__img" />
      </div>

      <div className="hero__type">
        <h1 className="hero__name">
          <AnimatedLine text={first} />
          <AnimatedLine text={last} startIndex={first.length} />
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__note">{profile.heroNote}</p>
      </div>

      <a className="hero__scroll" href="#photoshoot">
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}
