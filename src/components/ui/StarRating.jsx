export default function StarRating({ rating, reviewCount }) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return 'full'
    if (rating >= i + 0.5) return 'half'
    return 'empty'
  })
  return (
    <div className="flex items-center gap-2 mt-3">
      <div className="flex items-center gap-0.5">
        {stars.map((type, i) => (
          <span key={i} className="relative inline-block text-[14px] leading-none">
            <span className="text-border">★</span>
            {type !== 'empty' && (
              <span
                className="absolute inset-0 overflow-hidden text-gold"
                style={{ width: type === 'half' ? '50%' : '100%' }}
              >
                ★
              </span>
            )}
          </span>
        ))}
      </div>
      <span className="font-semibold text-[13px] text-gold">{rating}</span>
      <span className="text-[12px] text-text-muted">{reviewCount} readers</span>
    </div>
  )
}
