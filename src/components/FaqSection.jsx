import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqs } from '../data/content'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function FaqSection({ title = 'Questions fréquentes', subtitle = 'Tout ce qu\'il faut savoir avant de commander nos compléments alimentaires.' }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex((curr) => (curr === idx ? null : idx))
  }

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading
          id="faq-title"
          eyebrow="Besoin d'aide ?"
          title={title}
          text={subtitle}
        />

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            const qId = `faq-q-${idx}`
            const aId = `faq-a-${idx}`

            return (
              <Reveal key={faq.q} delay={idx * 60}>
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    id={qId}
                    type="button"
                    className="faq-question"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={aId}
                  >
                    <span className="faq-question__title">
                      <HelpCircle size={18} className="faq-question__icon" aria-hidden="true" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`faq-chevron ${isOpen ? 'is-rotated' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={aId}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={qId}
                    hidden={!isOpen}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

