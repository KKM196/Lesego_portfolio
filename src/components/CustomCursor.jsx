import { useEffect, useRef } from 'react'

// Desktop-only accent: a small dot that trails the pointer and expands
// into a "View" label over anything tagged data-cursor="view".
export default function CustomCursor() {
  const dotRef = useRef(null)
  const rafRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    const el = dotRef.current
    if (!isFine || !el) return

    el.style.display = 'flex'

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    const onOver = (e) => {
      if (e.target.closest('[data-cursor]')) el.classList.add('is-active')
    }
    const onOut = (e) => {
      if (e.target.closest('[data-cursor]')) el.classList.remove('is-active')
    }
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2
      pos.current.y += (target.current.y - pos.current.y) * 0.2
      el.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafRef.current = requestAnimationFrame(tick)
    document.body.classList.add('has-custom-cursor')

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafRef.current)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <div className="custom-cursor" ref={dotRef} aria-hidden="true">
      <span>View</span>
    </div>
  )
}
