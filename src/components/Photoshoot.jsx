import { photoshoot } from '../data.js'

export default function Photoshoot() {
  return (
    <section id="photoshoot" className="photoshoot">
      <div className="photoshoot__head">
        <h2>Photoshoot</h2>
      </div>
      <div className="photoshoot__grid">
        {photoshoot.map((item, i) => (
          <figure key={i} className="photoshoot__item">
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}
