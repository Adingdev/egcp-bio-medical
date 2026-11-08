import useDocumentMeta from '../hooks/useDocumentMeta'
import { products } from '../data/products'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import { disclaimer } from '../data/content'

export default function Products() {
  useDocumentMeta({
    title: 'Nos produits',
    description:
      'Catalogue des compléments alimentaires France shGrace distribués par EGCP bio-médical en Côte d\'Ivoire : recherche et filtres par catégorie.',
  })

  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Nos produits"
        text="Parcourez la gamme France shGrace, recherchez un produit ou filtrez par catégorie."
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Nos produits' }]}
      />
      <section className="section section--compact">
        <div className="container">
          <ProductGrid items={products} showSearch syncUrl />
          <p className="disclaimer">{disclaimer}</p>
        </div>
      </section>
    </>
  )
}
