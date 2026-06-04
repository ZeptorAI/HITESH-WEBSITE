import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, Mail } from 'lucide-react'

const WA_NUMBER = '+91 98145 08715'

/**
 * Shared thank-you page layout.
 *
 * Props:
 *   timerKey           — localStorage key (unique per product combo)
 *   upsellCovers       — [cover1] or [cover1, cover2]
 *   upsellNames        — ['Beard Maxx'] or ['Beard Maxx', 'Height Maxx']
 *   upsellLink         — tracked redirect slug URL
 *   upsellPrice        — e.g. '₹299'
 *   upsellOriginalPrice — e.g. '₹598', or null to hide strikethrough
 *   ctaText            — button label
 */
export default function ThankYouTemplate({
  timerKey,
  upsellCovers,
  upsellNames,
  upsellLink,
  upsellPrice,
  upsellOriginalPrice,
  ctaText,
}) {
  const [timer, setTimer]     = useState('15:00')
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    let expiry = parseInt(localStorage.getItem(timerKey) || '0')
    if (!expiry || expiry < Date.now()) {
      expiry = Date.now() + 15 * 60 * 1000
      localStorage.setItem(timerKey, String(expiry))
    }
    const tick = () => {
      const remaining = expiry - Date.now()
      if (remaining <= 0) {
        setTimer('00:00')
        setExpired(true)
        clearInterval(interval)
        return
      }
      const m = Math.floor(remaining / 60000)
      const s = Math.floor((remaining % 60000) / 1000)
      setTimer(String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'))
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [timerKey])

  const twoCovers = upsellCovers.length === 2

  return (
    <div className="min-h-screen bg-bg text-text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
        <div className="max-w-[540px] mx-auto px-5 h-14 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-lg tracking-tighter text-text-primary hover:text-gold transition-colors">
            Hitesh<span className="text-gold">.</span>
          </Link>
          <Link to="/" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-[440px] mx-auto px-5 pt-24 pb-20">

        {/* 1. Payment label */}
        <p className="text-center text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-5">
          Payment Received
        </p>

        {/* 2. Hero */}
        <h1
          className="text-center font-display font-bold tracking-tighter leading-[1.1]"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 3.25rem)' }}
        >
          You're in.<br />
          <span className="text-gold">Welcome.</span>
        </h1>

        <p className="text-center text-text-secondary mt-4 leading-[1.65] text-[15px]">
          Your PDF is on its way. Check your{' '}
          <strong className="text-text-primary font-semibold">WhatsApp</strong>
          {' '}and{' '}
          <strong className="text-text-primary font-semibold">email</strong>
          {' '}in the next 60 seconds.
        </p>

        {/* 3. Upsell Card */}
        <div className="mt-8 bg-surface border border-gold/25 rounded-[16px] p-5">

          {/* ONE-TIME OFFER tag + timer */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[15px]">🔥</span>
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-gold">
              ONE-TIME OFFER
            </span>
            <span className="text-[10px] text-text-muted">·</span>
            <span className={`font-mono text-[13px] font-bold tabular-nums ${expired ? 'text-text-muted' : 'text-gold'}`}>
              {expired ? 'EXPIRED' : timer}
            </span>
          </div>

          {/* Cover image(s) + title + price */}
          <div className="flex items-center gap-4 mb-5">

            {/* Single or stacked covers */}
            {twoCovers ? (
              <div className="relative w-[68px] h-[86px] shrink-0">
                <img
                  src={upsellCovers[1]}
                  alt="cover"
                  className="absolute top-2 left-4 w-[52px] h-[70px] object-cover rounded-[6px] border border-border shadow-md"
                />
                <img
                  src={upsellCovers[0]}
                  alt="cover"
                  className="absolute top-0 left-0 w-[52px] h-[70px] object-cover rounded-[6px] border border-border shadow-lg"
                />
              </div>
            ) : (
              <img
                src={upsellCovers[0]}
                alt="cover"
                className="w-[52px] h-[70px] object-cover rounded-[6px] border border-border shrink-0"
              />
            )}

            <div>
              <p className="font-display font-bold text-[1.2rem] tracking-tight leading-tight">
                {twoCovers ? 'Get the other 2 PDFs' : 'Add the missing PDF'}
              </p>
              <p className="text-[12px] mt-0.5">
                {upsellNames.map((name, i) => (
                  <span key={name}>
                    {i > 0 && <span className="text-text-muted"> + </span>}
                    <span className="text-gold font-semibold">{name}</span>
                  </span>
                ))}
              </p>
              <div className="flex items-baseline gap-2 mt-1.5">
                {upsellOriginalPrice && (
                  <span className="text-text-muted line-through text-sm font-mono">
                    {upsellOriginalPrice}
                  </span>
                )}
                <span className="text-gold font-bold text-[1.6rem] font-mono leading-none">
                  {upsellPrice}
                </span>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <a
            href={upsellLink}
            className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-dark text-bg font-bold text-[15px] py-3.5 rounded-[10px] transition-all active:scale-[0.98]"
            style={{ textDecoration: 'none' }}
          >
            {ctaText}
          </a>
        </div>

        {/* 4. Delivery channel cards */}
        <div className="mt-4 flex flex-col gap-3">

          {/* Email — Channel 1 */}
          <div className="bg-surface border border-border rounded-[12px] p-4 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 mt-0.5">
              <Mail size={17} className="text-gold" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-text-muted">
                Channel 1
              </p>
              <p className="font-bold text-[15px] mt-0.5">Email</p>
              <p className="text-text-secondary text-[13px] mt-1.5 leading-[1.55]">
                Sent from{' '}
                <strong className="text-text-primary">guides@hitesh.in</strong>.
                {' '}If you don't see it, check your <em>Promotions</em> tab.
              </p>
            </div>
          </div>

          {/* WhatsApp — Channel 2 */}
          <div className="bg-surface border border-border rounded-[12px] p-4 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 mt-0.5">
              <MessageCircle size={17} className="text-gold" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-text-muted">
                Channel 2
              </p>
              <p className="font-bold text-[15px] mt-0.5">WhatsApp</p>
              <p className="text-text-secondary text-[13px] mt-1.5 leading-[1.55]">
                Look for a message from{' '}
                <strong className="text-text-primary">{WA_NUMBER}</strong>.
                {' '}PDF + reading order inside.
              </p>
            </div>
          </div>
        </div>

        {/* 5. What to do next */}
        <div className="mt-8">
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-text-muted mb-4">
            What to do next
          </p>
          <div className="flex flex-col gap-3">
            {[
              { num: '01', title: 'Open your email or WhatsApp',  body: "You'll find a message with your PDF link waiting." },
              { num: '02', title: 'Download the PDF',              body: "Save it to your phone. You'll want it offline." },
              { num: '03', title: 'Read the intro today',          body: "Don't wait for \"Monday\". 10 minutes now sets the whole plan up." },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-4 items-start">
                <span className="font-mono text-[11px] font-bold text-gold mt-0.5 shrink-0 w-5">{num}</span>
                <div>
                  <p className="text-[14px] font-semibold text-text-primary leading-tight">{title}</p>
                  <p className="text-[13px] text-text-secondary mt-0.5 leading-[1.5]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
