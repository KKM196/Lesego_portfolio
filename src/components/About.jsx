import { about } from '../data.js'
   import headshot from '../assets/headshot'
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__text">
        <h2>{about.heading}</h2>
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="about__image">
           <img src={headshot} alt="Aurora Photoshoot" className="about-img" />
      </div>
    </section>
  )
}
