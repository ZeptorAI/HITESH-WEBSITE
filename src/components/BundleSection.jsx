import { CheckCircle2, Flame } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import GoldButton from './ui/GoldButton'
import hairCover from '/assets/hair-maxx-cover.png'
import heightCover from '/assets/height-maxx-cover.png'

const included = [
  'Hair Care Maxx Guide',
  'Height Maxx Guide',
  'Beard Maxx Guide',
  'Lifetime access, free updates',
]

const stackCovers = [
  { lbl: 'HEIGHT', img: heightCover, tilt: '-rotate-[10deg]', off: '-translate-x-[32%]', z: 10 },
  { lbl: 'HAIR',   img: hairCover,   tilt: 'rotate-[2deg]',   off: 'translate-x-0',      z: 20 },
  { lbl: 'BEARD',  img: null,        tilt: 'rotate-[12deg]',  off: 'translate-x-[32%]',  z: 15 },
]

export default function BundleSection() {
  return (
    <section id="bundle" className="relative py-24 md:py-32 bg-surface border-y border-border overflow-hidden grain">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <FadeUp>
              <Pill tone="gold" className="mb-6"><Flame size={12} /> Most picked this week</Pill>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem]">
                Or get all three.<br /><span className="text-gold">Save ₹48.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={160}>
              <div className="mt-7 flex items-baseline gap-4">
                <span className="text-text-muted text-2xl line-through font-mono">₹300</span>
                <span className="text-gold font-display font-bold text-5xl md:text-6xl tracking-tighter">₹249</span>
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
                <GoldButton href="#" size="xl" className="w-full sm:w-auto sm:min-w-[280px]">
                  Get the bundle — ₹249
                </GoldButton>
                <p className="mt-4 text-sm text-text-muted flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                  Delivered instantly to your WhatsApp
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — stacked PDF fan */}
          <FadeUp delay={140}>
            <div className="relative h-[360px] md:h-[480px] flex items-center justify-center">
              {stackCovers.map((g, i) => (
                <div
                  key={g.lbl}
                  className={`absolute border border-border-2 rounded-[8px] w-[54%] sm:w-[46%] md:w-[48%] aspect-[3/4] max-w-[260px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] transition-transform ${g.tilt} ${g.off} ${g.img ? 'bg-bg' : 'placeholder-stripes'}`}
                  style={{ zIndex: g.z }}
                >
                  {g.img ? (
                    <img src={g.img} alt={`${g.lbl} Maxx cover`} className="w-full h-full object-cover block" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">Guide 03</div>
                      <div className="font-display font-bold text-3xl tracking-tighter text-gold mt-3">{g.lbl}</div>
                      <div className="mt-3 w-12 h-px bg-border-2" />
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mt-3">cover · soon</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
