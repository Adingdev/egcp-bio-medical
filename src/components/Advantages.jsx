import { ShieldCheck, Leaf, Sparkles, HeartHandshake } from 'lucide-react'
import { advantages } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const icons = { ShieldCheck, Leaf, Sparkles, HeartHandshake }

export default function Advantages() {
  return (
    <section className="section section--tint" aria-labelledby="advantages-title">
      <div className="container">
        <SectionHeading
          id="advantages-title"
          eyebrow="Pourquoi nous choisir"
          title="Nos engagements"
          text="Une approche simple : des produits clairement présentés et un accompagnement humain."
        />
        <div className="advantages">
          {advantages.map((a, i) => {
            const Icon = icons[a.icon] ?? Leaf
            return (
              <Reveal key={a.title} className="advantage" delay={i * 90}>
                <span className="advantage__icon">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
