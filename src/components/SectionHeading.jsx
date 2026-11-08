import Reveal from './Reveal'

export default function SectionHeading({ id, eyebrow, title, text, align = 'center', light = false }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}
