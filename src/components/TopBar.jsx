import { Phone, Mail, MapPin } from 'lucide-react'
import { company, phoneHref, mapsLink } from '../data/site'
import SocialLinks from './SocialLinks'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <ul className="topbar__info">
          <li>
            <a href={phoneHref(company.phone)}>
              <Phone size={14} aria-hidden="true" />
              <span>{company.phone}</span>
            </a>
          </li>
          <li className="topbar__hide-sm">
            <a href={phoneHref(company.phone2)}>
              <Phone size={14} aria-hidden="true" />
              <span>{company.phone2}</span>
            </a>
          </li>
          <li className="topbar__hide-md">
            <a href={`mailto:${company.email}`}>
              <Mail size={14} aria-hidden="true" />
              <span>{company.email}</span>
            </a>
          </li>
          <li className="topbar__hide-lg">
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              <MapPin size={14} aria-hidden="true" />
              <span>{company.address}</span>
            </a>
          </li>
        </ul>
        <SocialLinks className="topbar__social" />
      </div>
    </div>
  )
}
