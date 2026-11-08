import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

/**
 * Lecteur vidéo local avec miniature (poster) et commandes accessibles.
 * - Respecte le format d'origine (paysage ou portrait) via `video.width/height`.
 * - `preload="none"` : rien n'est téléchargé tant que la vidéo n'est pas lancée.
 * - `autoPlay` : lecture automatique UNIQUEMENT en sourdine, quand la vidéo est visible
 *   (désactivée si l'utilisateur préfère réduire les animations).
 * Utiliser `key={video.id}` côté parent pour réinitialiser le lecteur au changement de vidéo.
 */
export default function VideoPlayer({ video, autoPlay = false, className = '' }) {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!autoPlay || !wrapRef.current) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined
    const el = videoRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPaused.current) {
            el.muted = true // garantie : jamais de lecture automatique avec le son
            el.play().catch(() => {})
          }
        } else {
          el.pause()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(wrapRef.current)
    return () => observer.disconnect()
  }, [autoPlay])

  const toggle = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      userPaused.current = false
      el.play().catch(() => {})
    } else {
      userPaused.current = true
      el.pause()
    }
  }

  const seek = (e) => {
    const el = videoRef.current
    if (!el || !el.duration) return
    el.currentTime = (Number(e.target.value) / 100) * el.duration
    setProgress(Number(e.target.value))
  }

  const fullscreen = () => {
    const el = videoRef.current
    const wrap = wrapRef.current
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
    } else if (wrap?.requestFullscreen) {
      wrap.requestFullscreen().catch(() => {})
    } else if (el?.webkitEnterFullscreen) {
      el.webkitEnterFullscreen() // iPhone
    }
  }

  const portrait = video.orientation === 'portrait'

  return (
    <div
      ref={wrapRef}
      className={`vplayer ${portrait ? 'vplayer--portrait' : 'vplayer--landscape'} ${playing ? 'is-playing' : ''} ${className}`.trim()}
      style={{ aspectRatio: `${video.width} / ${video.height}` }}
    >
      <video
        ref={videoRef}
        className="vplayer__video"
        src={video.src}
        poster={video.poster}
        preload="none"
        playsInline
        loop
        muted={muted}
        aria-label={video.title}
        onClick={toggle}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          const { currentTime, duration } = e.currentTarget
          if (duration) setProgress((currentTime / duration) * 100)
        }}
      />

      {!playing && (
        <button type="button" className="vplayer__big-play" onClick={toggle} aria-label={`Lire la vidéo : ${video.title}`}>
          <Play size={30} fill="currentColor" aria-hidden="true" />
        </button>
      )}

      <div className="vplayer__controls">
        <button type="button" onClick={toggle} aria-label={playing ? 'Mettre en pause' : 'Lire'}>
          {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={seek}
          aria-label="Position dans la vidéo"
          style={{ '--progress': `${progress}%` }}
        />
        <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Activer le son' : 'Couper le son'}>
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button type="button" onClick={fullscreen} aria-label="Plein écran">
          <Maximize size={18} />
        </button>
      </div>
    </div>
  )
}
