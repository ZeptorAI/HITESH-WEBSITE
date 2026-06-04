import beardCover from '/assets/beard-maxx-cover.png'
import ThankYouTemplate from '../components/ThankYouTemplate'

export default function ThankYouHairHeightPage() {
  return (
    <ThankYouTemplate
      timerKey="upsell_expiry_hair-height"
      upsellCovers={[beardCover]}
      upsellNames={['Beard Maxx']}
      upsellLink="/r/htsh-ty-hairheight-beard"
      upsellPrice="₹299"
      upsellOriginalPrice={null}
      ctaText="Add Beard Maxx — ₹299 →"
    />
  )
}
