import { CheckCircle2, Flame } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import GoldButton from './ui/GoldButton'
import bundleCovers from '/assets/bundle-covers.png'

const included = [
  'Hair Care Maxx Guide',
  'Height Maxx Guide',
  'Beard Maxx Guide',
  'Lifetime access, free updates',
]

export default function BundleSection() {
  return (
    <section id="bundle" className="relative py-24 md:py-32 bg-surface border-y border-border overflow-hidden grain">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy (order-2 on mobile so image shows first) */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <Pill tone="gold" className="mb-6"><Flame size={12} /> Most picked this week</Pill>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
                Buy 2, get the<br /><span className="text-gold">3rd FREE.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="mt-7 flex items-baseline gap-4">
                <span className="text-text-muted text-2xl line-through font-mono">₹897</span>
                <span className="text-gold font-display font-bold text-5xl md:text-6xl tracking-tighter">₹599</span>
                <span className="text-text-secondary text-sm">one-time</span>
              </div>
            </FadeUp>
            <FadeUp delay={220}>
              <ul className="mt-8 space-y-3.5">
                {included.map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-primary text-[15px]">
                    <CheckCircle2 size={20} className="text-gold shrink-0" strokeWidth={2} />
                    {t}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={280}>
              <div className="mt-9">
                <GoldButton href="/bundle" size="xl" className="w-full sm:w-auto sm:min-w-[280px]">
                  Get the bundle — ₹599
                </GoldButton>
                <p className="mt-4 text-sm text-text-muted flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                  Delivered instantly to your WhatsApp
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — bundle image (order-1 on mobile so image shows first) */}
          <FadeUp delay={140} className="order-1 lg:order-2">
            <div className="flex items-center justify-center">
              <img
                src={bundleCovers}
                alt="Hair Maxxing, Height Maxx and Beard Maxxing guides"
                className="w-full max-w-[520px] rounded-[12px] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.8)]"
              />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
