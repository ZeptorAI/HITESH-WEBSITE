const items = [
  '80K+ avg reel views',
  'Featured in 200+ DMs daily',
  '4.8 ★ avg member rating',
  '1,200+ Brotherhood members',
  'Made in India · 2024',
  'Lifetime updates',
]

const doubled = [...items, ...items]

export default function FeaturedStrip() {
  return (
    <div className="border-y border-border bg-surface/30 overflow-hidden">
      <div className="marquee-track flex gap-12 py-5 whitespace-nowrap">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-3 text-text-muted text-sm uppercase tracking-[0.18em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}
