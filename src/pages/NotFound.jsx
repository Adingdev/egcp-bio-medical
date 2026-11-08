import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta({ title: 'Page introuvable' })
  return (
    <section className="section not-found">
      <div className="container">
        <Leaf size={56} aria-hidden="true" />
        <h1>Page introuvable</h1>
        <p>La page ou le produit que vous cherchez n'existe pas ou a été déplacé.</p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Retour à l'accueil
          </Link>
          <Link to="/produits" className="btn btn--outline">
            Voir nos produits
          </Link>
        </div>
      </div>
    </section>
  )
}
