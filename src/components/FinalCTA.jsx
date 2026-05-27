import { Flame } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import GoldButton from './ui/GoldButton'
import OutlineButton from './ui/OutlineButton'

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-surface/40 relative overflow-hidden grain">
      <div className="max-w-container mx-auto px-5 md:px-8 text-center">
        <FadeUp>
          <Pill tone="red" className="mb-7"><Flame size={12} /> 26 days will pass anyway</Pill>
        </FadeUp>
        <FadeUp delay={80}>
          <h2 className="display-hero text-[3rem] sm:text-[4rem] md:text-[6rem] max-w-[18ch] mx-auto">
            Different mirror.<br /><span className="text-gold">Same you.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={160}>
          <p className="mt-7 text-lg md:text-xl text-text-secondary max-w-[520px] mx-auto leading-[1.55]">
            Start today, look different by next month.
            Or scroll past and stay the same. Pick.
          </p>
        </FadeUp>
        <FadeUp delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <GoldButton href="/r/htsh-home-finalcta-bundle" size="xl" className="w-full sm:w-auto sm:min-w-[280px]">
              Get the bundle — ₹595
            </GoldButton>
            <OutlineButton href="/r/htsh-home-finalcta-kit" size="lg" className="w-full sm:w-auto">
              See the Full Kit
            </OutlineButton>
          </div>
        </FadeUp>
        <FadeUp delay={320}>
          <p className="mt-7 text-xs text-text-muted">
            One-time payment · Delivered to your WhatsApp · Lifetime updates
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
