import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export default function Contact() {
  useDocumentMeta({
    title: 'Contact',
    description:
      'Contactez EGCP bio-médical à Abidjan-Treichville : téléphone, e-mail, WhatsApp et adresse (Avenue 21 rue 38).',
  })

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contactez-nous"
        text="Nous sommes à votre disposition pour toute question sur nos produits."
        crumbs={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]}
      />
      <ContactSection showForm />
      <FaqSection />
    </>
  )
}
