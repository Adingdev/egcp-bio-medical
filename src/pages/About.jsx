import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import AboutSection from '../components/AboutSection'
import Advantages from '../components/Advantages'
import FaqSection from '../components/FaqSection'
import ContactSection from '../components/ContactSection'

export default function About() {
  useDocumentMeta({
    title: 'À propos',
    description:
      "EGCP bio-médical est le représentant en Côte d'Ivoire de la marque France shGrace pour la commercialisation de compléments alimentaires.",
  })

  return (
    <>
      <PageHeader
        eyebrow="Qui sommes-nous"
        title="À propos d'EGCP bio-médical"
        text="Le relais ivoirien de la marque France shGrace."
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'À propos' }]}
      />
      <AboutSection detailed />
      <Advantages />
      <FaqSection />
      <ContactSection />
    </>
  )
}
