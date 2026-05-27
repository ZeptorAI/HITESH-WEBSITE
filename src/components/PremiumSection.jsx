import { Book, MessageCircle, Users, Star, Shield, Flame } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import GoldButton from './ui/GoldButton'

const items = [
  {
    Icon: Book,
    title: 'All three guides',
    body: 'Hair Care Maxx, Height Maxx, Beard Maxx — lifetime access with every future update.',
  },
  {
    Icon: MessageCircle,
    title: 'Exclusive Access to 90 day Custom Plan Calculator',
    body: 'This calculator will give you a step by step 90 DAY PLAN FOR YOUR HEIGHT, HAIR AND BEARD CARE',
  },
  {
    Icon: Users,
    title: 'Brotherhood — 3 months free',
    body: 'Private group of 1,200+ men. Weekly Q&A, progress tracking, accountability.',
  },
]

export default function PremiumSection() {
  return (
    <section id="premium" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div
          className="bg-surface border rounded-[10px] p-6 sm:p-10 md:p-14 relative overflow-hidden"
          style={{ borderColor: 'rgba(212,175,55,0.4)' }}
        >
          {/* Gold top glow line */}
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

          <FadeUp>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Pill tone="gold"><Star size={12} /> Best value</Pill>
              <Pill tone="red"><Flame size={12} /> LIMITED TIME</Pill>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <FadeUp delay={60}>
                <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem]">
                  Or go all-in: the<br />
                  <span className="text-gold">Full Transformation Kit.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={140}>
                <p className="mt-5 text-text-secondary text-lg leading-[1.6] max-w-[520px]">
                  For the men who don't want to guess. You get the bundle, plus direct access to me, plus the Brotherhood — at one price.
                </p>
              </FadeUp>
              <FadeUp delay={240}>
                <div className="mt-8 flex items-baseline gap-3 flex-wrap">
                  <span className="text-text-muted line-through font-mono text-xl">₹2997</span>
                  <span className="text-gold font-display font-bold text-5xl md:text-6xl tracking-tighter">₹1199</span>
                  <span className="text-text-secondary text-sm">one-time · lifetime</span>
                </div>
              </FadeUp>
              <FadeUp delay={300}>
                <div className="mt-8">
                  <GoldButton href="/r/htsh-home-premium-kit" size="xl" className="w-full sm:w-auto">
                    Claim the Full Kit
                  </GoldButton>
                </div>
                <p className="mt-4 text-xs text-text-muted flex items-center gap-1.5">
                  <Shield size={13} className="text-gold shrink-0" />
                  7-day refund if you don't see a clear plan forward
                </p>
              </FadeUp>
            </div>

            {/* Right — inclusion list */}
            <FadeUp delay={180}>
              <div className="space-y-1">
                {items.map(({ Icon, title, body }, i) => (
                  <div key={i} className="flex gap-4 py-4 border-b border-border last:border-0">
                    <div className="shrink-0 w-10 h-10 rounded-[8px] bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary text-[15px] tracking-tight">{title}</div>
                      <div className="text-[14px] text-text-secondary leading-[1.55] mt-0.5">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
