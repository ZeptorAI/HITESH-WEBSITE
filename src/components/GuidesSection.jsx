import { Check, ArrowRight } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import OutlineButton from './ui/OutlineButton'
import hairCover from '/assets/hair-maxx-cover.png'
import heightCover from '/assets/height-maxx-cover.png'
import beardCover from '/assets/beard-maxx-cover.png'

const guides = [
  {
    tag: "Guide 01", label: "HAIR", cover: hairCover,
    title: "Hair Care Maxx", subtitle: "Stop hair loss. Regrow what you've lost.",
    bullets: [
      "Exact Minoxidil + Finasteride protocol for Indian skin",
      "Diet and supplement stack under ₹2,000/month",
      "DHT-blocking lifestyle changes that actually work",
      "60-day transformation timeline",
    ],
    cta: "Get Hair Care Maxx — ₹299",
    href: "/hair",
  },
  {
    tag: "Guide 02", label: "HEIGHT", cover: heightCover,
    title: "Height Maxx", subtitle: "Look 2 inches taller. Some of it permanent.",
    bullets: [
      "Posture protocols that add 1–1.5 inches instantly",
      "Spine decompression routines (15 min/day)",
      "Footwear, styling, and angle tactics",
      "For anyone under 25 — growth plate optimization",
    ],
    cta: "Get Height Maxx — ₹299",
    href: "/height",
  },
  {
    tag: "Guide 03", label: "BEARD", cover: beardCover,
    title: "Beard Maxx", subtitle: "Fill in patches. Grow what won't grow.",
    bullets: [
      "Minoxidil application protocol for beard",
      "Microneedling timeline + technique",
      "Diet, supplements, and DHT optimization for facial hair",
      "Patch-fill strategies while you grow",
    ],
    cta: "Get Beard Maxx — ₹299",
    href: "/beard",
  },
]

function GuideCard({ tag, label, cover, title, subtitle, bullets, cta, href }) {
  return (
    <div className="bg-surface border border-border rounded-[8px] p-6 md:p-7 flex flex-col h-full card-hover">
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">{tag}</span>
        <span className="font-mono text-xs text-gold">₹299</span>
      </div>

      <div className="mb-6">
        {cover ? (
          <div className="border border-border rounded-[6px] aspect-[3/4] max-h-[220px] mx-auto w-[60%] overflow-hidden bg-bg">
            <img src={cover} alt={`${label} guide cover`} className="w-full h-full object-cover block" />
          </div>
        ) : (
          <div className="placeholder-stripes border border-border rounded-[6px] aspect-[3/4] max-h-[220px] mx-auto w-[60%] flex items-center justify-center">
            <div className="text-center">
              <div className="text-gold text-2xl font-display font-bold tracking-tighter">{label}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-2">cover · soon</div>
            </div>
          </div>
        )}
      </div>

      <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tighter">{title}</h3>
      <p className="mt-1.5 text-text-secondary text-[15px] leading-[1.55]">{subtitle}</p>

      <ul className="mt-5 space-y-3 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-text-secondary">
            <Check size={15} className="text-gold shrink-0 mt-0.5" strokeWidth={2.25} />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-border">
        <OutlineButton href={href} className="w-full">
          {cta} <ArrowRight size={14} />
        </OutlineButton>
      </div>
    </div>
  )
}

export default function GuidesSection() {
  return (
    <section id="guides" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-[640px]">
          <FadeUp><Pill tone="muted" className="mb-5">3 guides · ₹299 each</Pill></FadeUp>
          <FadeUp delay={60}>
            <h2 className="display-section text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem]">
              Pick your weapon<span className="text-gold">.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={120}>
            <p className="mt-5 text-lg text-text-secondary leading-[1.6]">
              Three guides. ₹299 each. Or get all three for ₹595 — 3rd guide FREE.
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
          {guides.map((g, i) => (
            <FadeUp key={i} delay={i * 90}>
              <GuideCard {...g} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
