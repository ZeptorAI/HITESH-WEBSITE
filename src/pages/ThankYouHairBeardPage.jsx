import heightCover from '/assets/height-maxx-cover.webp'
import ThankYouTemplate from '../components/ThankYouTemplate'

export default function ThankYouHairBeardPage() {
  return (
    <ThankYouTemplate
      timerKey="upsell_expiry_hair-beard"
      upsellCovers={[heightCover]}
      upsellNames={['Height Maxx']}
      upsellLink="/r/htsh-ty-hairbeard-height"
      upsellPrice="₹299"
      upsellOriginalPrice={null}
      ctaText="Add Height Maxx — ₹299 →"
    />
  )
}
