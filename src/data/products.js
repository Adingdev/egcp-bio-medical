// Catalogue produits — modifiez ce fichier pour ajouter, retirer ou corriger un produit.
//
// RÈGLES DE CONTENU
//  - Aucun prix, aucune composition, aucune posologie n'est inventé.
//  - Les descriptions sont neutres : ce sont des compléments alimentaires, pas des traitements.
//  - `labelInfo` ne reprend que des mentions lisibles sur les emballages fournis.
//
// CHAMPS
//  slug       : identifiant dans l'URL (/produits/<slug>)
//  category   : clé de `categories` ci-dessous
//  image      : photo produit (public/images/products/…) ; null = emplacement "photo à venir"
//  imageFit   : 'contain' (packshot sur fond blanc) ou 'cover' (image de vidéo)
//  video      : id d'une vidéo de src/data/videos.js (affichée sur la fiche produit)
//  featured   : affiché sur l'accueil
//  addedFromMedia : produit ajouté à partir des photos/vidéos fournies (hors liste initiale)

export const categories = [
  { id: 'all', label: 'Tous les produits' },
  { id: 'vision', label: 'Vision' },
  { id: 'digestion', label: 'Digestion' },
  { id: 'articulations', label: 'Articulations' },
  { id: 'vitalite', label: 'Vitalité' },
  { id: 'masculine', label: 'Santé masculine' },
  { id: 'foie', label: 'Foie' },
]

export const products = [
  {
    slug: 'ocuvite-eye-vitamins-mineral-50-plus',
    name: 'Ocuvite Eye Vitamins & Mineral 50+',
    category: 'vision',
    short: 'Complément alimentaire en vitamines et minéraux, formulé pour les adultes de 50 ans et plus.',
    description:
      "Ocuvite Eye Vitamins & Mineral 50+ est un complément alimentaire de la gamme France shGrace destiné aux adultes de 50 ans et plus. Il s'inscrit dans une routine de bien-être axée sur le confort visuel.",
    labelInfo: ['Formule « Adult 50+ »', 'Complément alimentaire', 'Marque France shGrace'],
    image: null,
    imageFit: 'contain',
    video: null,
    featured: true,
  },
  {
    slug: 'probiotic-15-billion',
    name: 'Probiotic 15 Billion',
    category: 'digestion',
    short: '10 souches probiotiques pour accompagner l\'équilibre de la flore intestinale.',
    description:
      "Probiotic 15 Billion associe 10 souches probiotiques dans un complément alimentaire en capsules végétales. Il accompagne l'équilibre de la flore intestinale dans le cadre d'une alimentation variée.",
    labelInfo: [
      '10 souches probiotiques (« 10 Probiotic Strains »)',
      '120 capsules végétales',
      'Sans produits laitiers, sans soja, sans gluten',
      'Non-GMO · Végétarien / Vegan',
    ],
    image: '/images/products/probiotic-15-billion.webp',
    imageFit: 'contain',
    video: 'probiotic-15-billion',
    featured: true,
  },
  {
    slug: 'alpha-lipoic-acid',
    name: 'Alpha Lipoic Acid',
    category: 'vitalite',
    short: 'Complément alimentaire en capsules, dosé à 600 mg par portion.',
    description:
      "Alpha Lipoic Acid est un complément alimentaire de la gamme France shGrace présenté en capsules. Reportez-vous à l'étiquette du flacon pour la portion et le mode d'emploi.",
    labelInfo: ['600 mg par portion', '120 capsules · 60 portions', 'Marque France shGrace'],
    image: '/images/posters/alpha-lipoic-acid.webp',
    imageFit: 'cover',
    imagePosition: '50% 55%',
    video: 'alpha-lipoic-acid',
    featured: true,
  },
  {
    slug: 'uric-acid-cleanse',
    name: 'Uric Acid Cleanse',
    category: 'articulations',
    short: 'Complément alimentaire à base de plantes, de la gamme confort articulaire.',
    description:
      "Uric Acid Cleanse est un complément alimentaire de la gamme France shGrace en capsules végétales, proposé dans l'univers du confort articulaire.",
    labelInfo: ['100 capsules végétales', 'Gamme « Joint »', 'Marque France shGrace'],
    image: '/images/posters/uric-acid-cleanse.webp',
    imageFit: 'cover',
    imagePosition: '50% 55%',
    video: 'uric-acid-cleanse',
    featured: true,
  },
  {
    slug: 'prostate-support',
    name: 'Prostate Support',
    category: 'masculine',
    short: 'Complément alimentaire « Saw Palmetto Enhanced » de la gamme santé masculine.',
    description:
      "Prostate Support est un complément alimentaire de la gamme France shGrace, présenté dans la catégorie santé masculine avec la mention « Saw Palmetto Enhanced ».",
    labelInfo: ['Mention « Saw Palmetto Enhanced »', 'Flacon de 60 capsules', 'Marque France shGrace'],
    image: null,
    imageFit: 'contain',
    video: null,
    featured: true,
  },
  {
    slug: 'liver',
    name: 'Liver',
    category: 'foie',
    short: 'Complément alimentaire de la gamme « Liver » France shGrace.',
    description:
      "Liver est un complément alimentaire de la gamme France shGrace. Pour connaître sa présentation exacte, sa composition et son mode d'emploi, reportez-vous à l'emballage ou contactez-nous.",
    labelInfo: ['Complément alimentaire', 'Marque France shGrace'],
    image: null,
    imageFit: 'contain',
    video: null,
    featured: true,
  },

  // — Produits ajoutés à partir des photos et vidéos fournies (à valider / retirer si besoin) —
  {
    slug: 'lutein-20mg',
    name: 'Lutein 20 mg',
    category: 'vision',
    short: 'Lutéine naturelle contenant de la zéaxanthine, en gélules faciles à avaler.',
    description:
      "Lutein 20 mg est un complément alimentaire en gélules à libération rapide. Sa lutéine, un caroténoïde naturel, contient naturellement de la zéaxanthine.",
    labelInfo: ['20 mg de lutéine', '120 gélules (softgels)', 'Contient naturellement de la zéaxanthine'],
    image: '/images/products/lutein.webp',
    imageFit: 'contain',
    video: null,
    featured: false,
    addedFromMedia: true,
  },
  {
    slug: 'super-enzymes',
    name: 'Super Enzymes',
    category: 'digestion',
    short: 'Complément alimentaire d\'enzymes pour accompagner la digestion.',
    description:
      "Super Enzymes est un complément alimentaire en capsules qui accompagne une digestion confortable et la disponibilité des nutriments dans le cadre d'une alimentation équilibrée.",
    labelInfo: ['180 capsules', 'Soutien d\'une digestion saine', 'Marque France shGrace'],
    image: '/images/products/super-enzymes.webp',
    imageFit: 'contain',
    video: null,
    featured: false,
    addedFromMedia: true,
  },
  {
    slug: 'maca-1500mg',
    name: 'Natural Maca 1500 mg',
    category: 'vitalite',
    short: 'Racine de maca (noire, rouge et jaune) avec poivre noir, en capsules végétales.',
    description:
      "Natural Maca associe des racines de maca noire, rouge et jaune du Pérou à du poivre noir, dans un complément alimentaire en capsules végétales.",
    labelInfo: ['1 500 mg', '120 capsules végétales', 'Maca noire, rouge et jaune · poivre noir'],
    image: '/images/products/maca.webp',
    imageFit: 'contain',
    video: null,
    featured: false,
    addedFromMedia: true,
  },
  {
    slug: 'glucosamine-chondroitin',
    name: 'Glucosamine Chondroitin, Turmeric & MSM',
    category: 'articulations',
    short: 'Association de glucosamine, chondroïtine, curcuma et MSM en capsules.',
    description:
      "Ce complément alimentaire France shGrace associe glucosamine, chondroïtine, curcuma (turmeric) et MSM. Il est présenté en flacon de 90 capsules.",
    labelInfo: ['90 capsules', 'Sans OGM · sans gluten · sans soja', 'Marque France shGrace'],
    image: '/images/posters/glucosamine-chondroitin.webp',
    imageFit: 'cover',
    imagePosition: '50% 50%',
    video: 'glucosamine-chondroitin',
    featured: false,
    addedFromMedia: true,
  },
  {
    slug: 'omega-7-sea-buckthorn',
    name: 'Omega-7 Sea Buckthorn Oil',
    category: 'vitalite',
    short: 'Huile d\'argousier 1 000 mg en gélules, 60 jours de cure par flacon.',
    description:
      "Omega-7 Sea Buckthorn Oil est un complément alimentaire en gélules à base d'huile d'argousier, dosé à 1 000 mg. Le flacon contient 120 gélules, soit 60 jours d'utilisation selon l'étiquette.",
    labelInfo: ['1 000 mg · « High Potency »', '120 gélules · 60 jours', 'Marque France shGrace'],
    image: '/images/posters/omega-7.webp',
    imageFit: 'cover',
    imagePosition: '50% 50%',
    video: 'omega-7',
    featured: false,
    addedFromMedia: true,
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const getCategoryLabel = (id) => categories.find((c) => c.id === id)?.label ?? ''
