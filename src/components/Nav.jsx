import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#details', label: 'Details' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__row">
        <a href="#top" className="nav__name">
          {profile.name}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`nav__toggle-line ${menuOpen ? 'is-open' : ''}`} />
          <span className={`nav__toggle-line ${menuOpen ? 'is-open' : ''}`} />
        </button>
      </div>

      <div className={`nav__mobile ${menuOpen ? 'is-open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
