import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import GoldButton from './ui/GoldButton'

const links = [
  { label: 'Guides',       href: '#guides' },
  { label: 'Bundle',       href: '#bundle' },
  { label: 'Skin Reset',   href: '/r/htsh-home-nav-skin' },
  { label: 'Brotherhood',  href: '#brotherhood' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl md:text-2xl tracking-tighter text-text-primary">
          Hitesh Grover<span className="text-gold">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <GoldButton href="/r/htsh-home-nav-bundle">Get started <ArrowRight size={16} /></GoldButton>
        </div>

        <button
          className="md:hidden text-text-primary p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-b border-border">
          <div className="px-5 py-6 flex flex-col gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-text-secondary hover:text-text-primary py-3 text-base border-b border-border last:border-0 transition-colors">
                {l.label}
              </a>
            ))}
            <div className="pt-4">
              <GoldButton href="/r/htsh-home-nav-bundle" onClick={() => setOpen(false)} className="w-full">
                Get started <ArrowRight size={16} />
              </GoldButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
