import { press } from '../data.js'

export default function Press() {
  return (
    <section className="press">
      {press.map((item, i) => (
        <blockquote key={i} className="press__quote">
          <p>“{item.quote}”</p>
          <cite>{item.publication}</cite>
        </blockquote>
      ))}
    </section>
  )
}
