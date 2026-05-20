import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Plus, Minus } from 'lucide-react'
import { RAZORPAY_LINKS } from '../components/ProductPage'
import FadeUp from '../components/ui/FadeUp'
import Pill from '../components/ui/Pill'
import GoldButton from '../components/ui/GoldButton'
import OutlineButton from '../components/ui/OutlineButton'
import bundleCovers from '/assets/bundle-covers.png'
import hairCover from '/assets/hair-maxx-cover.png'
import beardCover from '/assets/beard-maxx-cover.png'
import heightCover from '/assets/height-maxx-cover.png'

const guides = [
  {
    name: "Hair Fixed", cover: hairCover, slug: "hair",
    tagline: "Stop hair loss. Regrow what you've lost.",
    bullets: [
      "Minoxidil + Finasteride protocol for Indian skin",
      "DHT management, diet & supplement stack",
      "5 serums compared side-by-side",
      "60-day transformation timeline",
    ],
  },
  {
    name: "Beard Maxxed", cover: beardCover, slug: "beard",
    tagline: "90-day plan to max out your beard genetics.",
    bullets: [
      "Microneedling + Minoxidil protocol",
      "The complete 90-day daily plan",
      "Hormone optimization for beard growth",
      "Morning + night routine",
    ],
  },
  {
    name: "Height Maxxed", cover: heightCover, slug: "height",
    tagline: "Add 1-3 cm naturally + look 2-3 inches taller.",
    bullets: [
      "Posture fix — 1-2 inches instantly",
      "Dead Hanging + Maasai Jump protocol",
      "Growth plate optimization (under 21)",
      "Night stretch + HGH sleep routine",
    ],
  },
]

const faqs = [
  { q: "What exactly do I get?", a: "All three guides: Hair Fixed, Beard Maxxed, and Height Maxxed. Instant PDF download, lifetime access. Delivered to your WhatsApp immediately after payment." },
  { q: "How is this different from buying individually?", a: "You save ₹48 — ₹99 x 3 = ₹297, bundle is ₹249. Everything arrives in one WhatsApp message so it's all in one place." },
  { q: "Is there a refund policy?", a: "PDFs are non-refundable once downloaded. If there's an issue with your order, DM on Instagram and it'll be sorted." },
  { q: "Can I buy just one guide?", a: "Yes — each guide is ₹99 individually. Click any guide name above to go to its page." },
  { q: "Want the community and custom plan too?", a: "Upgrade to the Full Kit for ₹499 — includes everything in the bundle plus the WhatsApp community and a 90-day custom calculator." },
]

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-border">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-6 text-left py-5 group">
        <span className="text-base font-medium text-text-primary group-hover:text-gold transition-colors">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-secondary group-hover:border-gold group-hover:text-gold transition-colors">
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="fc" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: "easeInOut" }} className="overflow-hidden">
            <p className="pb-5 pr-10 text-text-secondary text-[15px] leading-[1.65]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function BundlePage() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="bg-bg text-text-primary min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
        <div className="max-w-container mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors">
            Hitesh<span className="text-gold">.</span>
          </Link>
          <OutlineButton href="/kit" size="md">
            Full Kit — ₹499 <ArrowRight size={14} />
          </OutlineButton>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
            <div>
              <FadeUp>
                <Pill tone="gold" className="mb-5">3 Guides Bundle · Save ₹48</Pill>
              </FadeUp>
              <FadeUp delay={60}>
                <h1 className="display-hero text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem]">
                  All three guides.<br />One price.
                </h1>
              </FadeUp>
              <FadeUp delay={120}>
                <p className="mt-5 text-text-secondary leading-[1.65] max-w-[480px]">
                  Hair Fixed + Beard Maxxed + Height Maxxed. Everything you need to change how you look — in one order, delivered instantly to your WhatsApp.
                </p>
              </FadeUp>

              {/* Bundle image — mobile only */}
              <FadeUp delay={150}>
                <div className="md:hidden mt-8">
                  <img src={bundleCovers} alt="All 3 guides" className="w-full rounded-[10px] shadow-2xl shadow-black/60" />
                </div>
              </FadeUp>

              <FadeUp delay={190}>
                <div className="mt-7 flex flex-wrap items-baseline gap-3">
                  <span className="text-text-muted line-through font-mono text-xl">₹297</span>
                  <span className="text-gold font-display font-bold text-5xl tracking-tighter">₹249</span>
                  <span className="text-text-muted text-sm">one-time · instant access</span>
                </div>
              </FadeUp>
              <FadeUp delay={230}>
                <GoldButton href={RAZORPAY_LINKS.bundle} size="xl" className="mt-6 w-full sm:w-auto">
                  Get the Bundle — ₹249 <ArrowRight size={18} />
                </GoldButton>
                <p className="mt-3 text-xs text-text-muted">Paid via Razorpay · Instant WhatsApp delivery · No subscription</p>
              </FadeUp>
            </div>

            {/* Bundle image — desktop */}
            <FadeUp delay={100}>
              <div className="hidden md:block w-[300px] lg:w-[360px]">
                <img src={bundleCovers} alt="All 3 guides" className="w-full rounded-[10px] shadow-2xl shadow-black/50" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3 guide cards */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp>
            <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-10">
              What you get<span className="text-gold">.</span>
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-5">
            {guides.map((g, i) => (
              <FadeUp key={i} delay={i * 70}>
                <div className="bg-surface border border-border rounded-[10px] p-5 flex flex-col h-full">
                  <div className="border border-border rounded-[8px] overflow-hidden mb-5 aspect-[3/4] max-h-[200px] w-[55%] mx-auto">
                    <img src={g.cover} alt={g.name} className="w-full h-full object-cover block" />
                  </div>
                  <div className="font-display font-bold text-lg tracking-tighter">{g.name}</div>
                  <p className="text-text-muted text-[13px] mt-1 mb-4 leading-[1.5]">{g.tagline}</p>
                  <ul className="space-y-2 flex-1">
                    {g.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-[13px] text-text-secondary">
                        <Check size={13} className="text-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/${g.slug}`} className="mt-5 text-xs text-gold hover:text-gold-light transition-colors">
                    See full guide →
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 border-t border-border bg-surface/30">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp>
            <div className="max-w-[460px] mx-auto bg-surface border border-border rounded-[12px] p-7 md:p-9 text-center">
              <Pill tone="gold" className="mb-4">Bundle deal</Pill>
              <div className="font-display font-bold text-[4.5rem] tracking-tighter text-gold leading-none mb-1">₹249</div>
              <p className="text-text-muted text-sm mb-2"><span className="line-through mr-2">₹297</span>You save ₹48</p>
              <p className="text-text-secondary text-[14px] mb-7">Hair Fixed + Beard Maxxed + Height Maxxed</p>
              <GoldButton href={RAZORPAY_LINKS.bundle} size="xl" className="w-full">
                Get the Bundle — ₹249 <ArrowRight size={18} />
              </GoldButton>
              <p className="mt-4 text-xs text-text-muted">Paid via Razorpay · Secure · Instant WhatsApp delivery</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Kit upsell */}
      <section className="py-14 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-surface border border-gold/20 rounded-[12px] p-6 md:p-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-1.5">Level up</div>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tighter">
                  Want the full package? <span className="text-gold">₹499</span>
                </h3>
                <p className="text-text-muted text-sm mt-1">
                  Bundle + WhatsApp community + 90-day custom calculator.
                </p>
              </div>
              <OutlineButton href="/kit" size="lg" className="shrink-0 w-full sm:w-auto">
                See the Full Kit <ArrowRight size={14} />
              </OutlineButton>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp><Pill tone="muted" className="mb-5">FAQ</Pill></FadeUp>
          <FadeUp delay={60}>
            <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-8">
              Questions<span className="text-gold">?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="max-w-[700px]">
              {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors">
            Hitesh<span className="text-gold">.</span>
          </Link>
          <p className="text-center">© 2026 Hitesh. All content is informational. Consult a doctor before starting any protocol.</p>
          <Link to="/" className="hover:text-text-secondary transition-colors">← Back to home</Link>
        </div>
      </footer>

    </div>
  )
}
