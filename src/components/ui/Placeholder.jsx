export default function Placeholder({ label = 'Placeholder', className = '', ratio }) {
  return (
    <div
      className={`placeholder-stripes border border-border rounded-[8px] flex items-center justify-center text-text-muted font-mono text-xs ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <span className="px-3 py-1 bg-bg/70 rounded">{label}</span>
    </div>
  )
}
