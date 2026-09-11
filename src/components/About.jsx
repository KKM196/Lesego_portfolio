import { about } from '../data.js'
import headshot from '../assets/headshot.jpg'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">{about.heading}</h2>

      <div className="about__body">
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <figure className="about__figure">
          <img
            src={headshot}
            alt="Portrait of Lesego Madisha"
            className="about__img"
            loading="lazy"
          />
          {about.pullQuote && (
            <figcaption className="about__quote">
              &ldquo;{about.pullQuote}&rdquo;
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  )
}
