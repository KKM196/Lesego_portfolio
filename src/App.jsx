import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Stats from './components/Stats.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <About />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
