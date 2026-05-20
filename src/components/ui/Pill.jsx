const tones = {
  gold:  'bg-gold/10 text-gold border-gold/25',
  red:   'bg-red/10 text-red border-red/30',
  muted: 'bg-white/5 text-text-secondary border-border-2',
}

export default function Pill({ children, tone = 'gold', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] uppercase tracking-[0.14em] font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
