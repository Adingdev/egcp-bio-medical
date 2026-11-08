import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, ShieldCheck, MapPin } from 'lucide-react'
import { company } from '../data/site'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <Leaf className="hero__leaf hero__leaf--1" size={120} strokeWidth={1} />
        <Leaf className="hero__leaf hero__leaf--2" size={80} strokeWidth={1} />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__brand">
            <img src="/images/logo-france-shgrace.png" alt="France shGrace" width="315" height="148" />
            <span>
              représentée en Côte d'Ivoire par <strong>{company.name}</strong>
            </span>
          </div>

          <h1 id="hero-title">
            Votre bien-être, <em>notre priorité</em>
          </h1>
          <p className="hero__lead">
            {company.name} distribue en Côte d'Ivoire la gamme de compléments alimentaires France shGrace. Découvrez
            des produits présentés avec transparence, et un interlocuteur local pour vous conseiller.
          </p>

          <div className="hero__actions">
            <Link to="/produits" className="btn btn--primary btn--lg">
              Découvrir nos produits <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <a href="#videos" className="btn btn--ghost btn--lg">
              Voir les vidéos
            </a>
          </div>

          <ul className="hero__facts">
            <li>
              <ShieldCheck size={18} aria-hidden="true" /> Marque France shGrace
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" /> Abidjan-Treichville
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__lifestyle">
            <img
              src="/images/hero-lifestyle.webp"
              alt="Une main tient un flacon Omega-7 France shGrace"
              width="1024"
              height="576"
            />
          </div>
          <img className="hero__bottle hero__bottle--1" src="/images/products/probiotic-15-billion.webp" alt="Probiotic 15 Billion France shGrace" width="900" height="900" />
          <img className="hero__bottle hero__bottle--2" src="/images/products/lutein.webp" alt="Lutein 20 mg France shGrace" width="900" height="900" />
          <div className="hero__badge">
            <Leaf size={20} aria-hidden="true" />
            <span>
              <strong>Compléments alimentaires</strong>
              Gamme France shGrace
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
