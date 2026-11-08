import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, MessageCircle, Phone, ArrowLeft, Info } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { getProduct, getCategoryLabel, products } from '../data/products'
import { getVideo } from '../data/videos'
import { company, phoneHref, whatsappLink } from '../data/site'
import { disclaimer } from '../data/content'
import ProductImage from '../components/ProductImage'
import ProductCard from '../components/ProductCard'
import VideoPlayer from '../components/VideoPlayer'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ShareButton from '../components/ShareButton'
import NotFound from './NotFound'

export default function ProductDetails() {
  const { slug } = useParams()
  const product = getProduct(slug)

  useDocumentMeta({
    title: product ? product.name : 'Produit introuvable',
    description: product ? `${product.name} — ${product.short}` : undefined,
  })

  if (!product) return <NotFound />

  const video = product.video ? getVideo(product.video) : null
  const related = [
    ...products.filter((p) => p.slug !== product.slug && p.category === product.category),
    ...products.filter((p) => p.slug !== product.slug && p.category !== product.category),
  ].slice(0, 3)

  const message = `Bonjour EGCP bio-médical, je souhaite avoir des informations sur le produit « ${product.name} ».`

  return (
    <>
      <PageHeader
        title={product.name}
        crumbs={[
          { label: 'Accueil', to: '/' },
          { label: 'Nos produits', to: '/produits' },
          { label: product.name },
        ]}
      />

      <section className="section section--compact">
        <div className="container">
          <div className="detail">
            <Reveal className="detail__media">
              <ProductImage product={product} eager />
            </Reveal>

            <Reveal className="detail__info" delay={100}>
              <span className="badge">{getCategoryLabel(product.category)}</span>
              <h2>{product.name}</h2>
              <p className="detail__desc">{product.description}</p>

              <h3 className="detail__sub">Informations visibles sur l'emballage</h3>
              <ul className="check-list">
                {product.labelInfo.map((info) => (
                  <li key={info}>
                    <CheckCircle2 size={20} aria-hidden="true" /> {info}
                  </li>
                ))}
              </ul>

              <p className="detail__note">
                <Info size={18} aria-hidden="true" />
                <span>
                  Composition, posologie et précautions d'emploi : reportez-vous à l'étiquette du produit ou
                  contactez-nous. Les informations tarifaires sont communiquées sur demande.
                </span>
              </p>

              <div className="detail__actions">
                <a className="btn btn--whatsapp btn--lg" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} aria-hidden="true" /> Demander des informations
                </a>
                <a className="btn btn--outline btn--lg" href={phoneHref(company.phone)}>
                  <Phone size={20} aria-hidden="true" /> {company.phone}
                </a>
                <ShareButton title={product.name} text={product.short} />
              </div>
              <Link to="/produits" className="back-link">
                <ArrowLeft size={16} aria-hidden="true" /> Retour au catalogue
              </Link>
            </Reveal>
          </div>

          {video && (
            <Reveal className="detail__video">
              <h3>Le produit en vidéo</h3>
              <VideoPlayer video={video} />
            </Reveal>
          )}

          <p className="disclaimer">{disclaimer}</p>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="À découvrir aussi" title="Autres produits" />
          <div className="product-grid">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
