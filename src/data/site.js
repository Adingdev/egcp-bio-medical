// Informations générales de l'entreprise — modifiez ici, le site se met à jour partout.

export const company = {
  name: 'EGCP bio-médical',
  nameUpper: 'EGCP BIO-MÉDICAL',
  brand: 'France shGrace',
  tagline: 'Votre bien-être, notre priorité',
  phone: '+225 07 98 42 91 83',
  phone2: '+225 05 65 71 72 03',
  email: 'produitbioegcp@gmail.com',
  address: 'Abidjan-Treichville, Avenue 21 rue 38',
  // Format international exigé par WhatsApp (sans + ni espaces)
  whatsapp: '2250798429183',
}

// Résout les chemins statiques (images, vidéos) avec le base path Vite (ex: /egcp-bio-medical/ sur GitHub Pages)
export const asset = (path) => {
  if (!path) return path
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL || '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  return `${cleanBase}${cleanPath}`
}

export const phoneHref = (p) => `tel:+225${p.replace(/\s/g, '')}`

export const whatsappLink = (message = 'Bonjour EGCP bio-médical, je souhaite avoir des informations sur vos produits.') =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`

// Lien de recherche Google Maps (l'adresse exacte du local n'étant pas confirmée par un repère précis,
// on ouvre une recherche plutôt qu'une carte intégrée avec un faux repère).
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Avenue 21 rue 38, Treichville, Abidjan, Côte d\'Ivoire'
)}`

export const navLinks = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/produits', label: 'Nos produits' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

// Réseaux sociaux : ajoutez l'URL de la page pour faire apparaître l'icône.
// WhatsApp et e-mail sont toujours affichés.
export const socials = {
  facebook: '',
  instagram: '',
  tiktok: '',
  youtube: '',
}
