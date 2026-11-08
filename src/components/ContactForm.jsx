import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MessageCircle, Mail, AlertCircle, CheckCircle2 } from 'lucide-react'
import { company } from '../data/site'
import { products } from '../data/products'
import Reveal from './Reveal'

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const initialProduct = searchParams.get('produit') || 'general'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: initialProduct,
    message: '',
  })
  const [error, setError] = useState('')
  const [sentType, setSentType] = useState(null)

  useEffect(() => {
    const p = searchParams.get('produit')
    if (p) {
      setFormData((prev) => ({ ...prev, product: p }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const validate = () => {
    if (!formData.name.trim()) {
      setError('Veuillez renseigner votre nom complet.')
      return false
    }
    if (!formData.phone.trim()) {
      setError('Veuillez renseigner votre numéro de téléphone ou WhatsApp.')
      return false
    }
    setError('')
    return true
  }

  const getSubjectLabel = () => {
    if (formData.product === 'general') return 'Renseignement général'
    if (formData.product === 'commande') return 'Commander / Vérifier la disponibilité'
    if (formData.product === 'partenariat') return 'Partenariat / Distribution'
    const found = products.find((p) => p.slug === formData.product)
    return found ? `Produit : ${found.name}` : formData.product
  }

  const generateFormattedMessage = (isWhatsApp = true) => {
    const subject = getSubjectLabel()
    const bold = (txt) => (isWhatsApp ? `*${txt}*` : txt)

    const lines = [
      `${bold('Demande via le site EGCP bio-médical')}`,
      `👤 ${bold('Nom :')} ${formData.name.trim()}`,
      `📞 ${bold('Téléphone :')} ${formData.phone.trim()}`,
      `📋 ${bold('Sujet :')} ${subject}`,
    ]

    if (formData.message.trim()) {
      lines.push(`💬 ${bold('Message :')}\n${formData.message.trim()}`)
    } else {
      lines.push(
        `💬 ${bold('Message :')}\nBonjour EGCP bio-médical, je souhaite avoir plus d'informations à ce sujet. Merci !`
      )
    }

    return lines.join('\n\n')
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    if (!validate()) return
    const message = generateFormattedMessage(true)
    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSentType('whatsapp')
  }

  const handleEmail = (e) => {
    e.preventDefault()
    if (!validate()) return
    const subject = `[Contact Site] ${getSubjectLabel()} - ${formData.name.trim()}`
    const body = generateFormattedMessage(false)
    const url = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = url
    setSentType('email')
  }

  return (
    <Reveal className="contact-form-wrap" delay={120}>
      <div className="contact-form__header">
        <span className="badge">Écrivez-nous directement</span>
        <h3>Envoyez-nous votre message</h3>
        <p>
          Remplissez ce formulaire puis choisissez votre canal préféré. Votre demande sera automatiquement
          mise en forme pour une réponse rapide par nos équipes à Abidjan.
        </p>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()} noValidate>
        {error && (
          <div className="form-alert form-alert--error" role="alert">
            <AlertCircle size={18} aria-hidden="true" />
            <span>{error}</span>
          </div>
        )}

        {sentType && (
          <div className="form-alert form-alert--success" role="status">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>
              {sentType === 'whatsapp'
                ? 'Votre conversation WhatsApp a été ouverte avec votre message pré-rempli !'
                : 'Votre client de messagerie s\'est ouvert avec votre e-mail prêt à être envoyé.'}
            </span>
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name">
              Nom et prénom(s) <span className="required">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Ex : Kouassi Jean"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone">
              Numéro de téléphone / WhatsApp <span className="required">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="Ex : 07 00 00 00 00"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-product">Objet de votre demande</label>
          <div className="select-wrap">
            <select
              id="contact-product"
              name="product"
              value={formData.product}
              onChange={handleChange}
            >
              <optgroup label="Demandes générales">
                <option value="general">Renseignement général</option>
                <option value="commande">Passer une commande / Vérifier disponibilité</option>
                <option value="partenariat">Partenariat / Distribution</option>
              </optgroup>
              <optgroup label="Produits France shGrace">
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">
            Votre message ou question <span className="optional">(optionnel)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            placeholder="Précisez votre besoin, vos questions sur la posologie, le lieu de livraison..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn--whatsapp btn--lg"
            onClick={handleWhatsApp}
          >
            <MessageCircle size={20} aria-hidden="true" />
            <span>Envoyer sur WhatsApp</span>
          </button>

          <button
            type="button"
            className="btn btn--outline btn--lg"
            onClick={handleEmail}
          >
            <Mail size={20} aria-hidden="true" />
            <span>Envoyer par E-mail</span>
          </button>
        </div>

        <p className="form-footnote">
          Vos informations sont utilisées exclusivement pour répondre à votre demande. Aucun spam ni conservation indésirable.
        </p>
      </form>
    </Reveal>
  )
}
