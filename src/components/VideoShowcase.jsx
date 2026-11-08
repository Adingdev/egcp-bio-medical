import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'
import { videos } from '../data/videos'
import VideoPlayer from './VideoPlayer'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

// Grande section vidéo de la page d'accueil : lecteur principal + liste des vidéos.
export default function VideoShowcase() {
  const [activeId, setActiveId] = useState(videos[0].id)
  const active = videos.find((v) => v.id === activeId) ?? videos[0]

  return (
    <section className="section section--dark video-section" id="videos" aria-labelledby="videos-title">
      <div className="container">
        <SectionHeading
          id="videos-title"
          light
          eyebrow="En images"
          title="La marque France shGrace en vidéo"
          text="Découvrez de près les flacons et la présentation des produits distribués par EGCP bio-médical."
        />

        <Reveal className="video-section__layout">
          <div className="video-section__stage">
            <div className="video-section__stage-bg" style={{ backgroundImage: `url(${active.poster})` }} aria-hidden="true" />
            <VideoPlayer key={active.id} video={active} autoPlay />
            <div className="video-section__now">
              <strong>{active.title}</strong>
              <span>{active.caption}</span>
            </div>
          </div>

          <div className="video-section__side">
            <ul className="video-playlist" aria-label="Liste des vidéos">
              {videos.map((v) => (
                <li key={v.id}>
                  <button
                    type="button"
                    className={`video-thumb ${v.id === active.id ? 'is-active' : ''}`}
                    onClick={() => setActiveId(v.id)}
                    aria-pressed={v.id === active.id}
                  >
                    <span className="video-thumb__img">
                      <img src={v.poster} alt="" loading="lazy" decoding="async" />
                      <span className="video-thumb__play" aria-hidden="true">
                        <Play size={14} fill="currentColor" />
                      </span>
                    </span>
                    <span className="video-thumb__text">
                      <strong>{v.title}</strong>
                      <small>{v.caption}</small>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <Link to="/produits" className="btn btn--light">
              Voir le catalogue <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
