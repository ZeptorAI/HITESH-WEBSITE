import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Plus, Minus, Shield, MessageCircle, Video, Gift, User, Calculator } from 'lucide-react'
import { RAZORPAY_LINKS } from '../components/ProductPage'
import FadeUp from '../components/ui/FadeUp'
import Pill from '../components/ui/Pill'
import GoldButton from '../components/ui/GoldButton'
import OutlineButton from '../components/ui/OutlineButton'
import bundleCovers from '/assets/bundle-covers.png'
import communityImg from '/assets/whatsapp-community.png'
import calculatorImg from '/assets/calculator-screenshot.png'

const communityPerks = [
  { Icon: MessageCircle, title: "Diet Plans Monthly",        body: "Personalized monthly diet plans updated for Indian food sources, seasons, and your goals." },
  { Icon: User,          title: "Personal DMs",              body: "Direct texting with Hitesh. Ask questions, get feedback on your progress, zero gatekeeping." },
  { Icon: Video,         title: "Exclusive Videos",          body: "Videos Hitesh makes only for community members — never posted on YouTube or Instagram." },
  { Icon: Gift,          title: "Free Product Giveaways",    body: "Monthly giveaways of exclusive looksmaxxing products. Community members only." },
  { Icon: MessageCircle, title: "Direct Access to Hitesh",   body: "You get Hitesh's direct WhatsApp number. Real replies, not a support assistant." },
]

const calculatorPoints = [
  "Inputs your current skin condition, hair health, beard density, and diet",
  "Generates a personalised 90-day day-by-day plan",
  "Adjusts protocols based on what you already have access to",
  "Updates as your condition changes — not a one-time plan",
]

const faqs = [
  { q: "What's included in the Full Kit?", a: "All 3 PDF guides (Hair Fixed, Beard Maxxed, Height Maxxed) + access to the private WhatsApp community + the 90-day custom calculator. Everything in one payment." },
  { q: "Is this a one-time payment or monthly?", a: "₹499 one-time. Lifetime access to the guides and calculator. The WhatsApp community is ongoing — no recurring charge." },
  { q: "What exactly is the 90-day calculator?", a: "It's a custom tool that takes your skin condition, diet, and lifestyle as inputs and outputs a personalised 90-day plan for hair, beard, and height. Not a generic PDF — built specifically for your numbers." },
  { q: "Is there a refund policy?", a: "7-day refund if you go through the onboarding and don't feel you have a clear plan forward. DM on Instagram to request." },
  { q: "Can I just buy the bundle without the community?", a: "Yes — the 3-guide bundle is ₹249 at the previous page. The Full Kit adds the community and calculator on top." },
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

// Placeholder card when image not yet available
function ImgPlaceholder({ label, sub }) {
  return (
    <div className="placeholder-stripes aspect-[9/16] flex items-center justify-center rounded-t-[10px]">
      <div className="text-center p-4">
        <div className="text-gold font-mono text-[10px] uppercase tracking-[0.2em] mb-2">{label}</div>
        <div className="text-text-muted text-xs">{sub}</div>
      </div>
    </div>
  )
}

export default function KitPage() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="bg-bg text-text-primary min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
        <div className="max-w-container mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors">
            Hitesh Grover<span className="text-gold">.</span>
          </Link>
          <GoldButton href={RAZORPAY_LINKS.kit} size="md">
            Claim Full Kit — ₹499 <ArrowRight size={14} />
          </GoldButton>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-container mx-auto px-5 md:px-8 max-w-[760px]">
          <FadeUp>
            <Pill tone="gold" className="mb-5">Full Transformation Kit · ₹499</Pill>
          </FadeUp>
          <FadeUp delay={60}>
            <h1 className="display-hero text-[2.5rem] sm:text-[3.25rem] md:text-[4.5rem]">
              The complete package.<br />
              <span className="text-gold">Not just the PDFs.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={120}>
            <p className="mt-5 text-text-secondary leading-[1.65] max-w-[540px]">
              Three guides + a private WhatsApp community with Hitesh + a 90-day custom plan calculator built for your exact situation. One payment. Lifetime access.
            </p>
          </FadeUp>
          <FadeUp delay={180}>
            <div className="mt-7 flex flex-wrap items-baseline gap-3">
              <span className="text-text-muted line-through font-mono text-xl">₹987</span>
              <span className="text-gold font-display font-bold text-5xl tracking-tighter">₹499</span>
              <span className="text-text-muted text-sm">one-time · lifetime</span>
            </div>
          </FadeUp>
          <FadeUp delay={230}>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <GoldButton href={RAZORPAY_LINKS.kit} size="xl" className="w-full sm:w-auto">
                Claim the Full Kit — ₹499 <ArrowRight size={18} />
              </GoldButton>
              <OutlineButton href="/bundle" size="lg" className="w-full sm:w-auto">
                Just the bundle — ₹249
              </OutlineButton>
            </div>
            <p className="mt-3 text-xs text-text-muted flex items-center gap-1.5">
              <Shield size={12} className="text-gold shrink-0" />
              7-day refund if you don't have a clear plan forward
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── 3-component visual with + icons ── */}
      <section className="py-16 md:py-20 border-t border-border bg-surface/30">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp>
            <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-10 text-center">
              What's inside the kit<span className="text-gold">.</span>
            </h2>
          </FadeUp>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-3">

            {/* Component 1 — Bundle PDFs */}
            <FadeUp delay={0} className="w-full md:flex-1">
              <div className="bg-surface border border-border rounded-[10px] overflow-hidden h-full">
                <img src={bundleCovers} alt="All 3 PDF guides" className="w-full block" />
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-2">01 — PDF Guides</div>
                  <div className="font-display font-bold text-lg tracking-tighter">All 3 Guides</div>
                  <p className="text-text-muted text-[13px] mt-1 leading-[1.55]">
                    Hair Fixed, Beard Maxxed, Height Maxxed. Instant download. Lifetime access.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Plus icon */}
            <FadeUp delay={60}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 border border-gold/30 shrink-0">
                <Plus size={20} className="text-gold" strokeWidth={2.5} />
              </div>
            </FadeUp>

            {/* Component 2 — WhatsApp Community */}
            <FadeUp delay={120} className="w-full md:flex-1">
              <div className="bg-surface border border-border rounded-[10px] overflow-hidden h-full">
                <img src={communityImg} alt="WhatsApp Community" className="w-full block" />
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-2">02 — Community</div>
                  <div className="font-display font-bold text-lg tracking-tighter">WhatsApp Community</div>
                  <p className="text-text-muted text-[13px] mt-1 leading-[1.55]">
                    Private group. Diet plans, exclusive videos, giveaways, and direct DM access to Hitesh.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Plus icon */}
            <FadeUp delay={180}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 border border-gold/30 shrink-0">
                <Plus size={20} className="text-gold" strokeWidth={2.5} />
              </div>
            </FadeUp>

            {/* Component 3 — 90-day Calculator */}
            <FadeUp delay={240} className="w-full md:flex-1">
              <div className="bg-surface border border-border rounded-[10px] overflow-hidden h-full">
                <img src={calculatorImg} alt="90-Day Custom Plan Calculator" className="w-full block" />
                <div className="p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-2">03 — Calculator</div>
                  <div className="font-display font-bold text-lg tracking-tighter">90-Day Custom Plan</div>
                  <p className="text-text-muted text-[13px] mt-1 leading-[1.55]">
                    Enter your skin condition and diet. Get a personalised 90-day protocol — not a generic PDF.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Community benefits */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp>
            <Pill tone="muted" className="mb-5">WhatsApp Community</Pill>
          </FadeUp>
          <FadeUp delay={60}>
            <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-10">
              What the community gives you<span className="text-gold">.</span>
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px]">
            {communityPerks.map(({ Icon, title, body }, i) => (
              <FadeUp key={i} delay={i * 50}>
                <div className="bg-surface border border-border rounded-[10px] p-5 h-full">
                  <div className="w-9 h-9 rounded-[8px] bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-4">
                    <Icon size={16} />
                  </div>
                  <div className="font-semibold text-text-primary text-[15px] tracking-tight mb-1">{title}</div>
                  <p className="text-text-secondary text-[13px] leading-[1.55]">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator section */}
      <section className="py-16 md:py-20 border-t border-border bg-surface/30">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp>
            <Pill tone="muted" className="mb-5">90-Day Custom Calculator</Pill>
          </FadeUp>
          <FadeUp delay={60}>
            <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-3">
              Your plan. Not a template<span className="text-gold">.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={100}>
            <p className="text-text-secondary leading-[1.65] max-w-[540px] mb-8">
              The calculator takes your current skin conditions, diet, and lifestyle — and generates a step-by-step 90-day plan specifically for your hair, beard, and height goals. No two plans are the same.
            </p>
          </FadeUp>
          <div className="space-y-3 max-w-[540px]">
            {calculatorPoints.map((point, i) => (
              <FadeUp key={i} delay={i * 50}>
                <div className="flex gap-3 items-start">
                  <Check size={15} className="text-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-text-secondary text-[15px] leading-[1.55]">{point}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing block */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <FadeUp>
            <div className="max-w-[500px] mx-auto bg-surface border border-gold/30 rounded-[12px] p-7 md:p-9 text-center relative overflow-hidden">
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <Pill tone="gold" className="mb-4">Best value</Pill>
              <div className="font-display font-bold text-[4.5rem] tracking-tighter text-gold leading-none mb-1">₹499</div>
              <p className="text-text-muted text-sm mb-2"><span className="line-through mr-2">₹987</span>You save ₹488</p>
              <p className="text-text-secondary text-[13px] mb-7">3 Guides + WhatsApp Community + 90-Day Calculator</p>
              <GoldButton href={RAZORPAY_LINKS.kit} size="xl" className="w-full">
                Claim the Full Kit — ₹499 <ArrowRight size={18} />
              </GoldButton>
              <p className="mt-4 text-xs text-text-muted flex items-center justify-center gap-1.5">
                <Shield size={12} className="text-gold shrink-0" />
                7-day refund if you don't have a clear plan forward
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 border-t border-border bg-surface/30">
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

      {/* Final CTA */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8 text-center">
          <FadeUp>
            <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] max-w-[18ch] mx-auto">
              Stop guessing. Start with a plan<span className="text-gold">.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={80}>
            <p className="mt-4 text-text-secondary text-lg max-w-[420px] mx-auto">
              Full Kit — ₹499. One payment, everything included, instant access.
            </p>
          </FadeUp>
          <FadeUp delay={140}>
            <GoldButton href={RAZORPAY_LINKS.kit} size="xl" className="mt-8">
              Claim the Full Kit — ₹499 <ArrowRight size={18} />
            </GoldButton>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="max-w-container mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors">
            Hitesh Grover<span className="text-gold">.</span>
          </Link>
          <p className="text-center">© 2026 Hitesh. All content is informational. Consult a doctor before starting any protocol.</p>
          <Link to="/" className="hover:text-text-secondary transition-colors">← Back to home</Link>
        </div>
      </footer>

    </div>
  )
}
