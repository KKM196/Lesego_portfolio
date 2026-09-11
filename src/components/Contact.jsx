import { useState } from 'react'
import { contact, profile } from '../data.js'

const EMPTY = { name: '', studio: '', dateFrom: '', dateTo: '', message: '' }

function todayISO() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

// Format YYYY-MM-DD as "14 March" (or "14–16 March" for ranges).
function formatRange(fromISO, toISO) {
  if (!fromISO) return 'your selected date'
  const fmt = (iso) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'long',
    })
  if (!toISO || toISO === fromISO) return fmt(fromISO)
  return `${fmt(fromISO)} – ${fmt(toISO)}`
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Add your name and a note about the booking before sending.')
      return
    }
    if (form.dateFrom && form.dateTo && form.dateTo < form.dateFrom) {
      setError('The end date can\u2019t be before the start date.')
      return
    }
    setError('')
    // No backend wired up yet — replace with a real request when ready.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="contact__confirm">
          <h2>Request sent</h2>
          <p>
            Thanks, {form.name.split(' ')[0]} — {profile.agency} will follow up at the
            contact you usually book through. Requested dates:{' '}
            <strong>{formatRange(form.dateFrom, form.dateTo)}</strong>. For anything
            urgent, email{' '}
            <a href={`mailto:${contact.bookingEmail}`}>{contact.bookingEmail}</a>.
          </p>
          <button
            className="contact__reset"
            onClick={() => {
              setForm(EMPTY)
              setSubmitted(false)
            }}
          >
            Send another request
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__intro">
        <h2>Booking</h2>
        <p>
          Represented by <strong>{contact.agencyName}</strong>. For jobs, tests, and
          castings, send details below or reach the agency directly.
        </p>
        <dl className="contact__info">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.bookingEmail}`}>{contact.bookingEmail}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{contact.agencyPhone}</dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>{contact.instagram}</dd>
          </div>
        </dl>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Studio or your name"
          />
        </label>

        <label>
          Studio / brand
          <input
            type="text"
            value={form.studio}
            onChange={update('studio')}
            placeholder="Optional"
          />
        </label>

        <div className="contact__dates">
          <label>
            From
            <input
              type="date"
              value={form.dateFrom}
              onChange={update('dateFrom')}
              min={todayISO()}
            />
          </label>
          <label>
            To
            <input
              type="date"
              value={form.dateTo}
              onChange={update('dateTo')}
              min={form.dateFrom || todayISO()}
            />
          </label>
        </div>

        <label>
          Details
          <textarea
            rows={4}
            value={form.message}
            onChange={update('message')}
            placeholder="What's the job? Shoot location, call time, usage rights, etc."
          />
        </label>

        {error && <p className="contact__error">{error}</p>}
        <button type="submit">Send request</button>
      </form>
    </section>
  )
}
