import { Facebook, Instagram, Youtube, Mail, MessageCircle, Music2 } from 'lucide-react'
import { company, socials, whatsappLink } from '../data/site'

// WhatsApp et e-mail sont toujours présents ; les autres réseaux apparaissent dès qu'une URL est renseignée dans data/site.js.
export default function SocialLinks({ className = '' }) {
  const items = [
    { key: 'whatsapp', label: 'WhatsApp', href: whatsappLink(), Icon: MessageCircle },
    { key: 'mail', label: 'Envoyer un e-mail', href: `mailto:${company.email}`, Icon: Mail, internal: true },
    { key: 'facebook', label: 'Facebook', href: socials.facebook, Icon: Facebook },
    { key: 'instagram', label: 'Instagram', href: socials.instagram, Icon: Instagram },
    { key: 'tiktok', label: 'TikTok', href: socials.tiktok, Icon: Music2 },
    { key: 'youtube', label: 'YouTube', href: socials.youtube, Icon: Youtube },
  ].filter((i) => i.href)

  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Réseaux sociaux et contact">
      {items.map(({ key, label, href, Icon, internal }) => (
        <li key={key}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <Icon size={16} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
