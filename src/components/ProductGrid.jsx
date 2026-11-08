import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, X, SearchX } from 'lucide-react'
import { categories } from '../data/products'
import ProductCard from './ProductCard'
import Reveal from './Reveal'

const normalize = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

/**
 * Grille de produits avec filtre par catégorie et (optionnellement) recherche.
 * - `syncUrl` : conserve la catégorie et la recherche dans l'URL (?categorie=…&q=…).
 */
export default function ProductGrid({ items, showSearch = false, syncUrl = false }) {
  const [params, setParams] = useSearchParams()
  const [localCategory, setLocalCategory] = useState('all')
  const [localQuery, setLocalQuery] = useState('')

  const category = syncUrl ? params.get('categorie') || 'all' : localCategory
  const query = syncUrl ? params.get('q') || '' : localQuery

  const update = (next) => {
    const cat = next.category ?? category
    const q = next.query ?? query
    if (syncUrl) {
      const p = new URLSearchParams()
      if (cat !== 'all') p.set('categorie', cat)
      if (q) p.set('q', q)
      setParams(p, { replace: true })
    } else {
      setLocalCategory(cat)
      setLocalQuery(q)
    }
  }

  // Seules les catégories contenant au moins un produit sont proposées
  const availableCategories = useMemo(
    () => categories.filter((c) => c.id === 'all' || items.some((p) => p.category === c.id)),
    [items]
  )

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return items.filter((p) => {
      const inCategory = category === 'all' || p.category === category
      const inSearch = !q || normalize(`${p.name} ${p.short} ${p.description}`).includes(q)
      return inCategory && inSearch
    })
  }, [items, category, query])

  return (
    <div className="product-grid-wrap">
      <div className="product-toolbar">
        <div className="chips" role="group" aria-label="Filtrer par catégorie">
          {availableCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`chip ${category === c.id ? 'is-active' : ''}`}
              aria-pressed={category === c.id}
              onClick={() => update({ category: c.id })}
            >
              {c.label}
            </button>
          ))}
        </div>

        {showSearch && (
          <div className="search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => update({ query: e.target.value })}
              placeholder="Rechercher un produit…"
              aria-label="Rechercher un produit"
            />
            {query && (
              <button type="button" onClick={() => update({ query: '' })} aria-label="Effacer la recherche">
                <X size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      <p className="product-count" role="status" aria-live="polite">
        {filtered.length} produit{filtered.length > 1 ? 's' : ''}
      </p>

      {filtered.length > 0 ? (
        <div className="product-grid">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <SearchX size={40} aria-hidden="true" />
          <h3>Aucun produit trouvé</h3>
          <p>Essayez un autre mot-clé ou une autre catégorie.</p>
          <button type="button" className="btn btn--primary btn--sm" onClick={() => update({ category: 'all', query: '' })}>
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  )
}
