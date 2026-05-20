const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
  xl: 'px-8 py-5 text-lg',
}

export default function GoldButton({ children, href = '#', className = '', size = 'md', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold bg-gold text-bg transition-all duration-[180ms] hover:bg-gold-dark hover:scale-[1.02] ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}
