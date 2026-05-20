export default function Footer() {
  const navLinks = [
    { label: 'Guides',       href: '#guides' },
    { label: 'Bundle',       href: '#bundle' },
    { label: 'Brotherhood',  href: '#brotherhood' },
    { label: 'FAQ',          href: '#faq' },
    { label: 'Instagram',    href: '#' },
    { label: 'YouTube',      href: '#' },
  ]
  const legalLinks = ['Terms', 'Privacy', 'Refunds']

  return (
    <footer className="py-14 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <a href="#top" className="font-display font-bold text-2xl tracking-tighter text-text-primary">
              Hitesh<span className="text-gold">.</span>
            </a>
            <p className="mt-3 text-text-muted text-sm max-w-[360px] leading-[1.6]">
              Hair, height, beard, and looksmaxxing protocols for Indian men 16–30. Made in India.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-text-secondary">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-text-muted">
          <div>© 2026 Hitesh. All content is informational. Consult a doctor before starting any protocol.</div>
          <div className="flex gap-5">
            {legalLinks.map(l => (
              <a key={l} href="#" className="hover:text-text-secondary transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
