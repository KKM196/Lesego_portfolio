// Stand-in for a real photograph. Once you add images to /src/assets
// and point data.js at them, swap the <img> back in and delete this
// component's usage — see README "Adding your photos".
export default function PlaceholderImage({ label, tone = 'light' }) {
  return (
    <div className={`placeholder placeholder--${tone}`} role="img" aria-label={`Placeholder: ${label}`}>
      <span className="placeholder__label">{label}</span>
    </div>
  )
}
