// Vidéos intégrées localement (public/videos/) avec leur miniature (public/images/posters/).
// `orientation` sert au lecteur pour respecter le format d'origine.
//
// Vidéos écartées volontairement :
//  - « Liver Protection » : le flacon filmé porte la marque « LHE », pas France shGrace.
//  - « Alpha Lipoic Acid (extérieur) » : 3 s seulement, redondante avec la version studio.

export const videos = [
  {
    id: 'omega-7',
    title: 'Omega-7 Sea Buckthorn Oil',
    caption: 'Présentation du flacon et des gélules',
    src: '/videos/omega-7.mp4',
    poster: '/images/posters/omega-7.webp',
    orientation: 'landscape',
    width: 1024,
    height: 576,
  },
  {
    id: 'alpha-lipoic-acid',
    title: 'Alpha Lipoic Acid',
    caption: 'Tour du flacon en studio',
    src: '/videos/alpha-lipoic-acid.mp4',
    poster: '/images/posters/alpha-lipoic-acid.webp',
    orientation: 'landscape',
    width: 1024,
    height: 576,
  },
  {
    id: 'probiotic-15-billion',
    title: 'Probiotic 15 Billion',
    caption: 'Le flacon sous tous les angles',
    src: '/videos/probiotic-15-billion.mp4',
    poster: '/images/posters/probiotic-15-billion.webp',
    orientation: 'portrait',
    width: 464,
    height: 832,
  },
  {
    id: 'uric-acid-cleanse',
    title: 'Uric Acid Cleanse',
    caption: 'Face avant, étiquette et composition',
    src: '/videos/uric-acid-cleanse.mp4',
    poster: '/images/posters/uric-acid-cleanse.webp',
    orientation: 'portrait',
    width: 464,
    height: 832,
  },
  {
    id: 'glucosamine-chondroitin',
    title: 'Glucosamine Chondroitin',
    caption: 'Glucosamine, Chondroitin, Turmeric & MSM',
    src: '/videos/glucosamine-chondroitin.mp4',
    poster: '/images/posters/glucosamine-chondroitin.webp',
    orientation: 'portrait',
    width: 464,
    height: 832,
  },
]

export const getVideo = (id) => videos.find((v) => v.id === id)
