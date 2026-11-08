import { Link } from 'react-router-dom'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { getCategoryLabel } from '../data/products'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const href = `/produits/${product.slug}`
  return (
    <article className="product-card">
      <Link to={href} className="product-card__media" tabIndex={-1} aria-hidden="true">
        <ProductImage product={product} />
        {product.video && (
          <span className="product-card__video-badge">
            <PlayCircle size={14} aria-hidden="true" /> Vidéo
          </span>
        )}
      </Link>
      <div className="product-card__body">
        <span className="badge">{getCategoryLabel(product.category)}</span>
        <h3 className="product-card__title">
          <Link to={href}>{product.name}</Link>
        </h3>
        <p className="product-card__text">{product.short}</p>
        <Link to={href} className="btn btn--outline btn--sm product-card__btn">
          En savoir plus <ArrowRight size={16} aria-hidden="true" />
          <span className="sr-only"> sur {product.name}</span>
        </Link>
      </div>
    </article>
  )
}
