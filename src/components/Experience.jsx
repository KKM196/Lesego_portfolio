import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <ul className="experience__list">
        {experience.map((row, i) => (
          <li key={i} className="experience__row">
            <span className="experience__year">{row.year}</span>
            <span className="experience__client">{row.client}</span>
            <span className="experience__project">{row.project}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
