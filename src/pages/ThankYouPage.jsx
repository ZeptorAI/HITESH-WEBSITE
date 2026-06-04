import { useSearchParams } from 'react-router-dom'
import hairCover   from '/assets/hair-maxx-cover.png'
import beardCover  from '/assets/beard-maxx-cover.png'
import heightCover from '/assets/height-maxx-cover.png'
import ThankYouTemplate from '../components/ThankYouTemplate'

const PRODUCT_DATA = {
  hair: {
    timerKey:            'upsell_expiry_hair',
    upsellCovers:        [beardCover, heightCover],
    upsellNames:         ['Beard Maxx', 'Height Maxx'],
    upsellLink:          '/r/htsh-ty-hair-upsell',
    upsellPrice:         '₹299',
    upsellOriginalPrice: '₹598',
    ctaText:             'Add both — ₹299 →',
  },
  beard: {
    timerKey:            'upsell_expiry_beard',
    upsellCovers:        [hairCover, heightCover],
    upsellNames:         ['Hair Maxx', 'Height Maxx'],
    upsellLink:          '/r/htsh-ty-beard-upsell',
    upsellPrice:         '₹299',
    upsellOriginalPrice: '₹598',
    ctaText:             'Add both — ₹299 →',
  },
  height: {
    timerKey:            'upsell_expiry_height',
    upsellCovers:        [hairCover, beardCover],
    upsellNames:         ['Hair Maxx', 'Beard Maxx'],
    upsellLink:          '/r/htsh-ty-height-upsell',
    upsellPrice:         '₹299',
    upsellOriginalPrice: '₹598',
    ctaText:             'Add both — ₹299 →',
  },
}

export default function ThankYouPage() {
  const [searchParams] = useSearchParams()
  const raw = searchParams.get('product') || 'hair'
  const key = PRODUCT_DATA[raw] ? raw : 'hair'
  return <ThankYouTemplate {...PRODUCT_DATA[key]} />
}
