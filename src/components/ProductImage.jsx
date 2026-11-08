import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { asset } from '../data/site'

// Affiche la photo du produit, ou un emplacement élégant si la photo n'existe pas encore.
// Pour ajouter une vraie photo : déposez-la dans public/images/products/ et renseignez `image` dans data/products.js.
export default function ProductImage({ product, eager = false }) {
  const [failed, setFailed] = useState(false)

  if (!product.image || failed) {
    return (
      <div className="product-placeholder" role="img" aria-label={`Photo de ${product.name} à venir`}>
        <Leaf size={34} aria-hidden="true" />
        <span>France shGrace</span>
        <small>Photo du produit à venir</small>
      </div>
    )
  }

  return (
    <img
      src={asset(product.image)}
      alt={`${product.name} — complément alimentaire France shGrace`}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`product-img product-img--${product.imageFit ?? 'contain'}`}
      style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
      onError={() => setFailed(true)}
    />
  )
}
