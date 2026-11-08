import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import { products } from '../data/products'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ProductGrid from '../components/ProductGrid'
import VideoShowcase from '../components/VideoShowcase'
import Advantages from '../components/Advantages'
import AboutSection from '../components/AboutSection'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import Reveal from '../components/Reveal'

const featured = products.filter((p) => p.featured)

export default function Home() {
  useDocumentMeta({
    description:
      "EGCP bio-médical, représentant en Côte d'Ivoire de la marque France shGrace : découvrez nos compléments alimentaires, nos vidéos et contactez-nous à Abidjan-Treichville.",
  })

  return (
    <>
      <Hero />

      <section className="section" id="produits" aria-labelledby="products-title">
        <div className="container">
          <SectionHeading
            id="products-title"
            eyebrow="Notre sélection"
            title="Nos produits"
            text="Une sélection de compléments alimentaires France shGrace. Filtrez par catégorie puis ouvrez une fiche pour en savoir plus."
          />
          <ProductGrid items={featured} />
          <Reveal className="section__more">
            <Link to="/produits" className="btn btn--primary">
              Voir tout le catalogue <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <VideoShowcase />
      <Advantages />
      <AboutSection />
      <Testimonials />
      <ContactSection />
    </>
  )
}
