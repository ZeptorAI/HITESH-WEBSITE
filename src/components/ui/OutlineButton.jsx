const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
}

export default function OutlineButton({ children, href = '#', className = '', size = 'md', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold border border-gold text-gold bg-transparent transition-all duration-[180ms] hover:bg-gold/8 hover:border-gold-light ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}
