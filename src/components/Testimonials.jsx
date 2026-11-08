import { Quote, MessageCircle } from 'lucide-react'
import { testimonials } from '../data/content'
import { whatsappLink } from '../data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

// Aucun faux témoignage : tant que `testimonials` est vide dans data/content.js,
// un emplacement clairement identifié « à venir » est affiché.
export default function Testimonials() {
  return (
    <section className="section section--tint" aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading id="testimonials-title" eyebrow="Témoignages" title="Ils nous font confiance" />

        {testimonials.length > 0 ? (
          <div className="testimonials">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={t.name} className="testimonial" delay={i * 90}>
                <Quote size={28} aria-hidden="true" />
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  {t.role && <span>{t.role}</span>}
                </figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="testimonial-empty">
            <Quote size={32} aria-hidden="true" />
            <h3>Les avis de nos clients arrivent bientôt</h3>
            <p>
              Cet espace accueillera de vrais témoignages. Vous avez déjà acheté un produit ? Partagez votre
              expérience avec nous.
            </p>
            <a
              className="btn btn--outline btn--sm"
              href={whatsappLink('Bonjour, je souhaite partager mon avis sur un produit France shGrace.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" /> Partager mon avis
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
