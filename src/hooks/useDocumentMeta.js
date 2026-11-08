import { useEffect } from 'react'

const BASE_TITLE = 'EGCP BIO-MÉDICAL'

// SEO de base : titre et meta description propres à chaque page.
export default function useDocumentMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — Compléments alimentaires France shGrace en Côte d'Ivoire`

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
