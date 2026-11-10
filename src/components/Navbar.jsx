import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navLinks, whatsappLink, asset } from '../data/site'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Ferme le menu à chaque changement de page
  useEffect(() => setOpen(false), [pathname])

  // Ombre légère après défilement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Verrouille le défilement et gère la touche Échap quand le menu mobile est ouvert
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logos" aria-label="EGCP bio-médical — accueil">
          <img
            src={asset('/images/logo-egcp.png')}
            alt="EGCP bio-médical"
            className="navbar__logo navbar__logo--egcp"
            width="350"
            height="210"
          />
          <span className="navbar__divider" aria-hidden="true" />
          <img
            src={asset('/images/logo-france-shgrace.png')}
            alt="France shGrace"
            className="navbar__logo navbar__logo--brand"
            width="315"
            height="148"
          />
        </Link>

        <nav
          id="main-menu"
          className={`navbar__menu ${open ? 'is-open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeToggle className="navbar__theme-desktop" />
          <a
            className="btn btn--whatsapp navbar__cta"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Nous contacter
          </a>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle className="navbar__theme-mobile" />
          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      {open && <div className="navbar__backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  )
}
