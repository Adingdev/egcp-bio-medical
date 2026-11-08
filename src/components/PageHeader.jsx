import { Link } from 'react-router-dom'
import { ChevronRight, Leaf } from 'lucide-react'

// Bandeau de titre des pages intérieures, avec fil d'Ariane.
export default function PageHeader({ eyebrow, title, text, crumbs = [] }) {
  return (
    <header className="page-header">
      <Leaf className="page-header__leaf" size={160} strokeWidth={1} aria-hidden="true" />
      <div className="container">
        {crumbs.length > 0 && (
          <nav aria-label="Fil d'Ariane" className="breadcrumb">
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.label}>
                  {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < crumbs.length - 1 && <ChevronRight size={14} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </header>
  )
}
