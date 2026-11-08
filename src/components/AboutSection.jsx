import { Link } from 'react-router-dom'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import { aboutPoints } from '../data/content'
import { company, whatsappLink, asset } from '../data/site'
import Reveal from './Reveal'

// `detailed` : version longue pour la page À propos
export default function AboutSection({ detailed = false }) {
  return (
    <section className="section about" id="a-propos" aria-labelledby="about-title">
      <div className="container about__inner">
        <Reveal className="about__visual">
          <div className="about__frame">
            <img
              src={asset('/images/posters/omega-7.webp')}
              alt="Flacons Omega-7 France shGrace présentés en studio"
              loading="lazy"
              decoding="async"
              width="1024"
              height="576"
            />
          </div>
          <div className="about__logos">
            <img src={asset('/images/logo-egcp.png')} alt="EGCP bio-médical" loading="lazy" width="350" height="210" />
            <img src={asset('/images/logo-france-shgrace.png')} alt="France shGrace" loading="lazy" width="315" height="148" />
          </div>
        </Reveal>

        <Reveal className="about__content" delay={100}>
          <span className="eyebrow">À propos</span>
          <h2 id="about-title">{company.name}, votre relais France shGrace en Côte d'Ivoire</h2>
          <p>
            {company.name} est l'entreprise qui représente en Côte d'Ivoire la marque française France shGrace pour la
            commercialisation de compléments alimentaires. Installée à Abidjan-Treichville, elle met la gamme à la
            disposition du public et reste à son écoute.
          </p>
          {detailed && (
            <p>
              Notre rôle : vous présenter les produits de façon claire et factuelle, répondre à vos questions et vous
              orienter vers l'information figurant sur l'emballage de chaque produit. Pour toute question de santé,
              nous vous invitons à demander l'avis d'un professionnel.
            </p>
          )}
          <ul className="check-list">
            {aboutPoints.map((p) => (
              <li key={p}>
                <CheckCircle2 size={20} aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
          <div className="about__actions">
            <a className="btn btn--whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Nous contacter
            </a>
            {!detailed && (
              <Link to="/a-propos" className="btn btn--outline">
                En savoir plus
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
