import { ArrowDown, Check, Users } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import GoldButton from './ui/GoldButton'
import Pill from './ui/Pill'
import hairCover from '/assets/hair-maxx-cover.png'
import heightCover from '/assets/height-maxx-cover.png'
import beardCover from '/assets/beard-maxx-cover.png'

const covers = [
  { lbl: 'BEARD',  img: beardCover,  tilt: '-rotate-[10deg]', off: '-translate-x-[28%] sm:-translate-x-[32%] md:-translate-x-[36%]', z: 10 },
  { lbl: 'HEIGHT', img: heightCover, tilt: 'rotate-[10deg]',  off: 'translate-x-[28%] sm:translate-x-[32%] md:translate-x-[36%]',   z: 15 },
  { lbl: 'HAIR',   img: hairCover,   tilt: 'rotate-[1deg]',   off: 'translate-x-0',                                                   z: 20 },
]

export default function Hero() {
  return (
    <section id="top" className="relative pt-20 md:pt-36 pb-14 md:pb-24 overflow-hidden grain">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-16 items-center">

          {/* Left — copy (order-2 on mobile so covers appear first) */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <Pill tone="muted" className="mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                500+ transformations · Made in India
              </Pill>
            </FadeUp>

            <FadeUp delay={80}>
              <h1 className="display-hero text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
                Looksmaxx<br />
                in <span className="text-gold">26 days</span>.
              </h1>
            </FadeUp>

            <FadeUp delay={160}>
              <p className="mt-5 md:mt-8 text-base md:text-xl text-text-secondary max-w-[480px] leading-[1.55]">
                Hair, height, and beard protocols built for Indian men. Read the PDF. Follow the plan. Look different in less than a month.
              </p>
            </FadeUp>

            <FadeUp delay={240}>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <GoldButton href="/bundle" size="xl" className="w-full sm:w-auto">
                  Get the bundle — ₹249
                </GoldButton>
                <a href="#guides"
                  className="text-gold hover:text-gold-light text-sm font-medium inline-flex items-center justify-center sm:justify-start gap-1.5 px-2 py-3 sm:py-0 transition-colors">
                  See the guides <ArrowDown size={14} />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={320}>
              <div className="mt-6 md:mt-7 flex flex-wrap items-center gap-x-4 md:gap-x-5 gap-y-2 text-[11px] md:text-xs text-text-muted">
                <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-gold" /> 500+ transformations</span>
                <span className="text-border-2">·</span>
                <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-gold" /> Results in 60 days</span>
                <span className="text-border-2">·</span>
                <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-gold" /> Made for Indian men</span>
              </div>
            </FadeUp>
          </div>

          {/* Right — PDF fan (order-1 on mobile so it appears above copy) */}
          <FadeUp delay={180} className="order-1 lg:order-2">
            <div className="relative max-w-[460px] mx-auto w-full">
              <div className="relative h-[260px] sm:h-auto sm:aspect-[3/4] w-full flex items-center justify-center">
                {covers.map(g => (
                  <div
                    key={g.lbl}
                    className={`absolute border border-border-2 rounded-[8px] w-[56%] sm:w-[58%] aspect-[3/4] overflow-hidden shadow-[0_24px_70px_-12px_rgba(0,0,0,0.75)] ${g.tilt} ${g.off} ${g.img ? 'bg-bg' : 'placeholder-stripes'}`}
                    style={{ zIndex: g.z }}
                  >
                    {g.img ? (
                      <img src={g.img} alt={`${g.lbl} Maxx guide cover`} className="w-full h-full object-cover block" />
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

              {/* Corner stat badge */}
              <div className="absolute -bottom-3 left-0 sm:-bottom-4 sm:-left-4 bg-surface border border-border rounded-[8px] px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 z-30 max-w-[190px]">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Users size={14} />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-text-muted leading-none">Brotherhood</div>
                  <div className="text-xs sm:text-sm font-semibold text-text-primary mt-1 leading-none whitespace-nowrap">1,200+ members</div>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
