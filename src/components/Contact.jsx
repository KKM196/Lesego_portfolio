import { useState } from 'react'
import { contact, profile } from '../data.js'

const EMPTY = { name: '', studio: '', date: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Add your name and a note about the booking before sending.')
      return
    }
    setError('')
    // No backend is wired up yet — replace this with a real request
    // (e.g. fetch to your booking API or a form service) when ready.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="contact__confirm">
          <h2>Request sent</h2>
          <p>
            Thanks, {form.name.split(' ')[0]} — {profile.agency} will follow up at the contact you
            usually book through. For anything urgent, email{' '}
            <a href={`mailto:${contact.bookingEmail}`}>{contact.bookingEmail}</a>.
          </p>
          <button className="contact__reset" onClick={() => { setForm(EMPTY); setSubmitted(false) }}>
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
            <dd><a href={`mailto:${contact.bookingEmail}`}>{contact.bookingEmail}</a></dd>
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
          <input type="text" value={form.name} onChange={update('name')} placeholder="Studio or your name" />
        </label>
        <label>
          Studio / brand
          <input type="text" value={form.studio} onChange={update('studio')} placeholder="Optional" />
        </label>
        <label>
          Shoot date
          <input type="text" value={form.date} onChange={update('date')} placeholder="e.g. 14–16 March" />
        </label>
        <label>
          Details
          <textarea rows={4} value={form.message} onChange={update('message')} placeholder="What's the job?" />
        </label>
        {error && <p className="contact__error">{error}</p>}
        <button type="submit">Send request</button>
      </form>
    </section>
  )
}
