import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/site'

// Bouton flottant, présent sur toutes les pages.
export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
      <span className="whatsapp-float__label">WhatsApp</span>
    </a>
  )
}
