import beardCover  from '/assets/beard-maxx-cover.png'
import heightCover from '/assets/height-maxx-cover.png'
import ThankYouTemplate from '../components/ThankYouTemplate'

export default function ThankYouHairPage() {
  return (
    <ThankYouTemplate
      timerKey="upsell_expiry_hair"
      upsellCovers={[beardCover, heightCover]}
      upsellNames={['Beard Maxx', 'Height Maxx']}
      upsellLink="/r/htsh-ty-hair-upsell"
      upsellPrice="₹299"
      upsellOriginalPrice="₹598"
      ctaText="Add both — ₹299 →"
    />
  )
}
