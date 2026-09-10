import { useEffect, useMemo, useRef, useState } from 'react'
import { gallery } from '../data.js'
import PlaceholderImage from './PlaceholderImage.jsx'

export default function Gallery() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(gallery.map((g) => g.category)))],
    []
  )
  const [active, setActive] = useState('All')
  const [openId, setOpenId] = useState(null)
  const gridRef = useRef(null)

  // Reveal each tile with a stagger as it scrolls into view, and
  // re-observe whenever the filtered set changes.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const items = grid.querySelectorAll('.gallery__item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  })

  const visible = active === 'All' ? gallery : gallery.filter((g) => g.category === active)
  const openItem = gallery.find((g) => g.id === openId) || null

  const openIndex = openItem ? visible.findIndex((g) => g.id === openItem.id) : -1

  const goTo = (delta) => {
    if (openIndex === -1) return
    const next = (openIndex + delta + visible.length) % visible.length
    setOpenId(visible[next].id)
  }

  useEffect(() => {
    if (!openItem) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenId(null)
      if (e.key === 'ArrowRight') goTo(1)
      if (e.key === 'ArrowLeft') goTo(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openItem])

  return (
    <section id="work" className="gallery">
      <div className="gallery__head">
        <h2>Selected work</h2>
        <div className="gallery__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter ${active === cat ? 'is-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery__grid" ref={gridRef}>
        {visible.map((item, i) => (
          <button
            key={item.id}
            className={`gallery__item gallery__item--${item.span || 'reg'}`}
            style={{ '--i': i }}
            data-cursor="view"
            onClick={() => setOpenId(item.id)}
          >
            <PlaceholderImage label={item.title} />
            <span className="gallery__item-caption">{item.title}</span>
          </button>
        ))}
      </div>

      {openItem && (
        <div className="lightbox" onClick={() => setOpenId(null)}>
          <button className="lightbox__close" onClick={() => setOpenId(null)} aria-label="Close">
            ×
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              goTo(-1)
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
            <PlaceholderImage label={openItem.title} tone="deep" />
            <div className="lightbox__caption">
              <span>{openItem.category}</span>
              <span>{openItem.title}</span>
            </div>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              goTo(1)
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
