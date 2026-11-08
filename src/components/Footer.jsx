import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { company, navLinks, phoneHref, mapsLink } from '../data/site'
import { disclaimer } from '../data/content'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <div className="footer__logos">
            <img src="/images/logo-egcp.png" alt="EGCP bio-médical" loading="lazy" width="350" height="210" />
            <img src="/images/logo-france-shgrace.png" alt="France shGrace" loading="lazy" width="315" height="148" />
          </div>
          <p>
            {company.name}, représentant en Côte d'Ivoire de la marque France shGrace pour la commercialisation de
            compléments alimentaires.
          </p>
          <SocialLinks className="footer__social" />
        </div>

        <nav aria-label="Liens du pied de page">
          <h3>Navigation</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3>Coordonnées</h3>
          <ul className="footer__contact">
            <li>
              <Phone size={16} aria-hidden="true" />
              <span>
                <a href={phoneHref(company.phone)}>{company.phone}</a> /{' '}
                <a href={phoneHref(company.phone2)}>{company.phone2}</a>
              </span>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                {company.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__legal">
        <p className="footer__disclaimer">{disclaimer}</p>
        <p>
          © {new Date().getFullYear()} {company.nameUpper}. Tous droits réservés. France shGrace® est une marque de
          son propriétaire.
        </p>
      </div>
    </footer>
  )
}
