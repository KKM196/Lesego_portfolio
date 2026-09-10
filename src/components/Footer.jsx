import { profile } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <span>{profile.name}</span>
      <span>© {year}</span>
      <a href="#top">Back to top</a>
    </footer>
  )
}
