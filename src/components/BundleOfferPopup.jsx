import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Flame, Zap } from 'lucide-react'
const EXPIRY_KEY = 'bundle_offer_expiry'
const DISMISSED_KEY = 'bundle_offer_dismissed'
const DURATION = 15 * 60 * 1000 // 15 minutes

function formatTime(ms) {
  if (ms <= 0) return 'EXPIRED'
  const mins = Math.floor(ms / 60000)
  const secs = Math.floor((ms % 60000) / 1000)
  return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0')
}

export default function BundleOfferPopup() {
  // phase: 'hidden' | 'popup' | 'bar'
  const [phase, setPhase] = useState('hidden')
  const [timerDisplay, setTimerDisplay] = useState('15:00')

  useEffect(() => {
    // Initialise or restore the 15-min expiry window
    let expiry = parseInt(localStorage.getItem(EXPIRY_KEY) || '0')
    if (!expiry || expiry < Date.now()) {
      expiry = Date.now() + DURATION
      localStorage.setItem(EXPIRY_KEY, String(expiry))
      localStorage.removeItem(DISMISSED_KEY) // fresh window — reset dismissed flag
    }

    // Already expired: show nothing
    if (expiry <= Date.now()) return

    // Decide which phase to start in
    const alreadyDismissed = localStorage.getItem(DISMISSED_KEY) === 'true'
    let showDelay
    if (alreadyDismissed) {
      setPhase('bar')
    } else {
      showDelay = setTimeout(() => setPhase('popup'), 800)
    }

    // Tick the countdown
    const tick = () => {
      const remaining = expiry - Date.now()
      if (remaining <= 0) {
        setTimerDisplay('EXPIRED')
        setPhase('hidden')
        clearInterval(interval)
        return
      }
      setTimerDisplay(formatTime(remaining))
    }
    tick()
    const interval = setInterval(tick, 1000)

    return () => {
      clearTimeout(showDelay)
      clearInterval(interval)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(DISMISSED_KEY, 'true')
    setPhase('bar')
  }

  if (phase === 'hidden') return null

  return (
    <>
      {/* ── Modal Popup ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {phase === 'popup' && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={dismiss}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />

            {/* Card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.93, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none"
            >
              <div className="pointer-events-auto relative w-full max-w-[400px] bg-[#0D0D0D] border border-gold/35 rounded-[20px] p-7 overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.95)]">

                {/* Gold top line */}
                <div className="absolute top-0 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                {/* Glow blob */}
                <div className="absolute -top-20 -right-10 w-48 h-48 rounded-full bg-gold/8 blur-3xl pointer-events-none" />

                {/* Close */}
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
                >
                  <X size={15} />
                </button>

                {/* Flash sale pill */}
                <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/25 rounded-full px-3 py-1.5 mb-5">
                  <Flame size={11} className="text-gold" />
                  <span className="text-[10px] font-bold tracking-[0.15em] text-gold uppercase">
                    Flash Sale — 15 Min Only
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-display font-bold text-[1.75rem] tracking-tighter leading-[1.15] mb-3 text-text-primary">
                  Triple combo on sale.<br />
                  <span className="text-gold">One PDF absolutely FREE.</span>
                </h2>

                <p className="text-text-secondary text-[14px] leading-[1.65] mb-5">
                  Buy any 2 guides — get the 3rd completely free. All three
                  delivered to your WhatsApp instantly after payment.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-text-muted line-through font-mono text-base">₹897</span>
                  <span className="text-gold font-display font-bold text-[2.6rem] tracking-tighter leading-none">₹595</span>
                  <span className="text-text-secondary text-xs">one-time</span>
                </div>

                {/* Countdown */}
                <div className="flex items-center gap-2.5 bg-black/50 border border-border rounded-[8px] px-4 py-3 mb-5">
                  <Zap size={13} className="text-gold shrink-0" />
                  <span className="text-text-muted text-sm">Offer expires in</span>
                  <span className="font-mono font-bold text-gold tabular-nums ml-auto text-lg">{timerDisplay}</span>
                </div>

                {/* Main CTA */}
                <a
                  href="/r/htsh-popup-bundle"
                  className="flex items-center justify-center gap-2 w-full bg-gold text-bg font-bold text-[15px] rounded-[10px] py-4 hover:bg-gold-dark active:scale-[0.98] transition-all"
                >
                  Get All 3 — ₹595 <ArrowRight size={16} />
                </a>

                {/* Skip link */}
                <button
                  onClick={dismiss}
                  className="w-full mt-3 text-center text-xs text-text-muted hover:text-text-secondary transition-colors py-2"
                >
                  No thanks, continue to single guide
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Sticky Bar (after popup is dismissed) ───────────────────────── */}
      <AnimatePresence>
        {phase === 'bar' && (
          <motion.div
            key="bar"
            initial={{ y: -52, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -52, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-16 md:top-[72px] left-0 right-0 z-[49] bg-gold text-bg"
          >
            <div className="max-w-container mx-auto px-4 sm:px-6 h-11 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <Flame size={13} className="shrink-0" />
                <span className="text-[12px] sm:text-[13px] font-semibold truncate">
                  Triple combo — 1 PDF FREE&nbsp;·&nbsp;
                  <span className="font-mono font-bold tabular-nums">{timerDisplay}</span>
                  &nbsp;left
                </span>
              </div>
              <a
                href="/r/htsh-bar-bundle"
                className="shrink-0 flex items-center gap-1 bg-bg text-gold text-[11px] font-bold px-3 py-1.5 rounded-full hover:bg-bg/90 transition-colors whitespace-nowrap"
              >
                Get All 3 — ₹595 <ArrowRight size={11} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
