import { useState } from 'react'
import { Share2, Check, Copy } from 'lucide-react'

export default function ShareButton({ title, text, url }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareUrl = url || window.location.href
    const shareData = {
      title: title || document.title,
      text: text || '',
      url: shareUrl,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch (err) {
        // L'utilisateur a annulé ou la Web Share API a échoué : on bascule sur la copie de lien
        if (err.name === 'AbortError') return
      }
    }

    // Fallback : copie du lien dans le presse-papier
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Si même clipboard API est restreint
      const input = document.createElement('input')
      input.value = shareUrl
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <button
      type="button"
      className={`btn btn--share btn--lg ${copied ? 'is-copied' : ''}`}
      onClick={handleShare}
      aria-label="Partager ce produit"
      title="Partager cette fiche produit à un proche"
    >
      {copied ? (
        <>
          <Check size={18} aria-hidden="true" />
          <span>Lien copié !</span>
        </>
      ) : (
        <>
          <Share2 size={18} aria-hidden="true" />
          <span>Partager</span>
        </>
      )}
    </button>
  )
}
