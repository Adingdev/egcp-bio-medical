import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react'
import { company, phoneHref, whatsappLink, mapsLink } from '../data/site'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import ContactForm from './ContactForm'

export default function ContactSection({ showForm = false }) {
  const cards = [
    { Icon: Phone, title: 'Téléphone', lines: [company.phone, company.phone2], hrefs: [phoneHref(company.phone), phoneHref(company.phone2)] },
    { Icon: Mail, title: 'E-mail', lines: [company.email], hrefs: [`mailto:${company.email}`] },
    { Icon: MapPin, title: 'Adresse', lines: [company.address], hrefs: [mapsLink], external: true },
  ]

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Parlons de vos besoins"
          text="Une question sur un produit ? Écrivez-nous sur WhatsApp ou appelez-nous, nous vous répondons avec plaisir."
        />

        <div className="contact__grid">
          {cards.map(({ Icon, title, lines, hrefs, external }, i) => (
            <Reveal key={title} className="contact-card" delay={i * 90}>
              <span className="contact-card__icon">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              {lines.map((l, idx) => (
                <a
                  key={l}
                  href={hrefs[idx]}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {l}
                </a>
              ))}
            </Reveal>
          ))}
        </div>

        {showForm && <ContactForm />}

        <Reveal className="contact__cta">
          <div>
            <h3>Discutons sur WhatsApp</h3>
            <p>Réponse directe de l'équipe {company.name}.</p>
          </div>
          <div className="contact__cta-actions">
            <a className="btn btn--whatsapp btn--lg" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} aria-hidden="true" /> Écrire sur WhatsApp
            </a>
            <a className="btn btn--light btn--lg" href={mapsLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={20} aria-hidden="true" /> Voir sur Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
