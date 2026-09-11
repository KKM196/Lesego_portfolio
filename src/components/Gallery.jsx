import { useEffect, useMemo, useRef, useState } from 'react'
import { gallery } from '../data.js'

export default function Gallery() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(gallery.map((g) => g.category)))],
    []
  )
  const [active, setActive] = useState('All')
  const [openId, setOpenId] = useState(null)
  const gridRef = useRef(null)

  // Staggered reveal as each tile scrolls into view
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
  }, [active]) // re-run when the filter changes so newly shown tiles animate in

  const visible =
    active === 'All' ? gallery : gallery.filter((g) => g.category === active)

  const openIndex = visible.findIndex((g) => g.id === openId)
  const openItem = openIndex >= 0 ? visible[openIndex] : null

  const goTo = (delta) => {
    if (openIndex === -1) return
    const next = (openIndex + delta + visible.length) % visible.length
    setOpenId(visible[next].id)
  }

  // Keyboard controls + scroll lock while lightbox is open
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
    <section id="photoshoot" className="gallery">
      <div className="gallery__head">
        <h2>Photoshoot</h2>
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
            className="gallery__item"
            style={{ '--i': i }}
            onClick={() => setOpenId(item.id)}
            aria-label={`View ${item.title}`}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
            <span className="gallery__item-caption">
              {item.title} · {item.year}
            </span>
          </button>
        ))}
      </div>

      {openItem && (
        <div className="lightbox" onClick={() => setOpenId(null)}>
          <button
            className="lightbox__close"
            onClick={() => setOpenId(null)}
            aria-label="Close"
          >
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
          <div
            className="lightbox__frame"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={openItem.src} alt={openItem.title} />
            <div className="lightbox__caption">
              <span>{openItem.category}</span>
              <span>
                {openItem.title} · {openItem.year}
              </span>
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
