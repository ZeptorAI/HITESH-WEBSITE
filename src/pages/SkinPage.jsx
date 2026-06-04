import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check, ArrowRight, Plus, Minus,
  Download, Smartphone, Globe, FileText, Zap,
} from 'lucide-react'
import skinCover from '/assets/skin-maxx-cover.webp'
import FadeUp from '../components/ui/FadeUp'
import StarRating from '../components/ui/StarRating'
import { trackViewContent, PRODUCT_MAP } from '../utils/metaPixel'
import Pill from '../components/ui/Pill'
import GoldButton from '../components/ui/GoldButton'
import OutlineButton from '../components/ui/OutlineButton'

// ── Tracked URLs (all point to same Razorpay link) ───────────────────────────
const HEADER_URL   = '/r/htsh-skin-header-buy'
const HERO_URL     = '/r/htsh-skin-hero-buy'
const PRICING_URL  = '/r/htsh-skin-pricing-buy'
const FINALCTA_URL = '/r/htsh-skin-finalcta-buy'
const KIT_URL      = '/r/htsh-skin-kit'

// ── Content ───────────────────────────────────────────────────────────────────
const WHATS_INSIDE = [
  "The 90-Day Skin Reset Plan (3 phases)",
  "Morning & Night Routine (exact products to use)",
  "Do's and Don'ts that actually move the needle",
  "Foods that help and foods that wreck your skin",
  "Indian Diet Plan for better skin",
  "How to fix severe acne (when basics aren't enough)",
  "Best ingredients for every skin problem",
  "The secret that actually works (covered at the end)",
]

const WHY_IT_WORKS = [
  {
    num: '01',
    title: "It's structured",
    body: "90 days, 3 phases, no guessing what to do when. Most guys fail at skincare because they have no plan. This gives you one.",
  },
  {
    num: '02',
    title: "It's specific",
    body: "Exact ingredients, exact products, exact doses. Not \"use a moisturiser\" — use this one, this much, in this order.",
  },
  {
    num: '03',
    title: "It's Indian",
    body: "Built for Indian skin, Indian climate, Indian diet, Indian budgets. Everything in here is actually available and affordable in India.",
  },
]

const WHO_FOR = [
  "Oily, acne-prone skin",
  "Dull or textured skin",
  "Indian guys (18–35) dealing with hormonal acne",
  "Anyone who's tried 10 products and seen zero results",
  "Guys who want to look better without becoming a skincare nerd",
]

const DELIVERABLES = [
  { Icon: FileText,    text: '12+ pages, no fluff' },
  { Icon: Check,       text: 'Exact product recommendations (with links)' },
  { Icon: Zap,         text: '3-phase 90-day protocol' },
  { Icon: Globe,       text: 'Indian diet plan included' },
  { Icon: Smartphone,  text: 'Mobile-optimized PDF — read it on your phone' },
  { Icon: Download,    text: 'Instant delivery to WhatsApp + Email' },
]

const FAQS = [
  {
    q: "How fast will I see results?",
    a: "Most guys see real change by week 4–6. Full results by day 90.",
  },
  {
    q: "Is this for severe acne too?",
    a: "Yes — there's a dedicated section on what to do when basics aren't enough.",
  },
  {
    q: "Do I need to buy expensive products?",
    a: "No. The PDF includes affordable Indian options with direct buying links.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Run the protocol for the full 90 days first. Most \"it didn't work\" cases stop at day 21.",
  },
  {
    q: "Will I get the PDF instantly?",
    a: "Yes. Delivered to your WhatsApp + email within minutes of payment.",
  },
]

// ── Sticky Header ─────────────────────────────────────────────────────────────
function SkinHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-container mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors"
        >
          Hitesh Grover<span className="text-gold">.</span>
        </Link>
        <GoldButton href={HEADER_URL} size="md">
          Get Skin Reset — ₹349 <ArrowRight size={14} />
        </GoldButton>
      </div>
    </header>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function SkinHero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

          <div>
            <FadeUp>
              <Pill tone="gold" className="mb-5">90 Day Skin Reset · ₹349</Pill>
            </FadeUp>
            <FadeUp delay={60}>
              <h1 className="display-hero text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem]">
                Clear Skin. Better Glow.<br />
                Less Acne. <span className="text-gold">More Confidence.</span>
              </h1>
            </FadeUp>

            {/* Cover image — mobile only */}
            <FadeUp delay={130}>
              <div className="md:hidden mt-8 flex justify-center">
                <div className="border border-border rounded-[10px] w-[58%] aspect-[3/4] overflow-hidden bg-bg">
                  <img src={skinCover} alt="90 Day Skin Reset guide cover" className="w-full h-full object-cover block" width="361" height="511" loading="eager" decoding="async" fetchPriority="high" />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={165}>
              <p className="mt-5 text-text-secondary leading-[1.65] max-w-[520px]">
                Most guys spend years buying random skincare products and fixing nothing. This is the playbook to fix your skin in 90 days — naturally, scientifically, without bullshit.
              </p>
              <StarRating rating={4.9} reviewCount="890+" />
            </FadeUp>

            <FadeUp delay={200}>
              <div className="mt-7 flex flex-col gap-3 w-full sm:max-w-[360px]">
                <a
                  href={HERO_URL}
                  className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-dark text-bg font-bold text-[15px] px-5 py-3.5 rounded-[8px] transition-all active:scale-[0.98]"
                >
                  ₹349 — Get Skin Reset <ArrowRight size={14} className="shrink-0" />
                </a>
                <p className="text-xs text-text-muted">Instant download · No subscription · Delivered to WhatsApp</p>
              </div>
            </FadeUp>
          </div>

          {/* Cover image — desktop */}
          <FadeUp delay={100}>
            <div className="hidden md:block border border-border rounded-[10px] w-[220px] h-[300px] overflow-hidden bg-bg shrink-0">
              <img src={skinCover} alt="90 Day Skin Reset guide cover" className="w-full h-full object-cover block" width="361" height="511" loading="eager" decoding="async" fetchPriority="high" />
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}

// ── Problem ───────────────────────────────────────────────────────────────────
function ProblemSection() {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-[760px]">
          <FadeUp>
            <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-6">
              The real problem<span className="text-gold">.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={80}>
            <p className="text-lg md:text-xl text-text-secondary leading-[1.7]">
              You've tried face washes. Moisturisers. Random YouTube routines. You bought something because an influencer said it worked and it did nothing. The problem isn't the products — it's that you have no structured plan, no understanding of what your skin actually needs, and no protocol built for Indian skin. This guide fixes all three.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── What's Inside ─────────────────────────────────────────────────────────────
function WhatsInsideSection() {
  return (
    <section className="py-16 md:py-20 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp><Pill tone="muted" className="mb-5">Inside the PDF</Pill></FadeUp>
        <FadeUp delay={60}>
          <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-10">
            What you get access to<span className="text-gold">.</span>
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-2 gap-4">
          {WHATS_INSIDE.map((item, i) => (
            <FadeUp key={i} delay={(i % 4) * 50}>
              <div className="flex gap-3 bg-surface border border-border rounded-[8px] p-4 md:p-5 h-full">
                <Check size={15} className="text-gold shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-[14px] md:text-[15px] text-text-secondary leading-[1.55]">{item}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Why It Works ──────────────────────────────────────────────────────────────
function WhyItWorksSection() {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-10">
            Why it works<span className="text-gold">.</span>
          </h2>
        </FadeUp>
        <div className="space-y-1 max-w-[640px]">
          {WHY_IT_WORKS.map(({ num, title, body }, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="flex gap-5 items-start py-6 border-b border-border last:border-0">
                <span className="font-mono text-xs text-gold mt-0.5 shrink-0">{num}</span>
                <div>
                  <div className="font-semibold text-text-primary text-[15px] md:text-base mb-1.5">
                    {title}
                  </div>
                  <p className="text-text-secondary text-[14px] md:text-[15px] leading-[1.65]">{body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Who It's For ──────────────────────────────────────────────────────────────
function WhoItIsForSection() {
  return (
    <section className="py-16 md:py-20 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-8">
            This is for you if<span className="text-gold">...</span>
          </h2>
        </FadeUp>
        <div className="space-y-1 max-w-[640px]">
          {WHO_FOR.map((point, i) => (
            <FadeUp key={i} delay={i * 60}>
              <div className="flex gap-4 items-start py-4 border-b border-border last:border-0">
                <span className="font-mono text-xs text-gold mt-0.5 shrink-0">0{i + 1}</span>
                <p className="text-text-secondary text-[15px] md:text-base leading-[1.6]">{point}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── What You'll Get ───────────────────────────────────────────────────────────
function WhatYoullGetSection() {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-8">
            What you get<span className="text-gold">.</span>
          </h2>
        </FadeUp>
        <div className="space-y-4 max-w-[540px]">
          {DELIVERABLES.map(({ Icon, text }, i) => (
            <FadeUp key={i} delay={i * 50}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-gold" />
                </div>
                <p className="text-text-secondary text-[15px]">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Social Proof ──────────────────────────────────────────────────────────────
function SocialProofSection() {
  return (
    <section className="py-16 md:py-20 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <Pill tone="gold" className="mb-6">Results</Pill>
        </FadeUp>
        <FadeUp delay={80}>
          <blockquote className="border-l-2 border-gold pl-6 md:pl-8 max-w-[700px]">
            <p className="text-lg md:text-xl text-text-primary leading-[1.7] font-medium">
              "Based on the same protocols that helped hundreds of guys fix their skin."
            </p>
            <p className="mt-5 text-text-muted text-sm italic">
              — Hitesh Grover
            </p>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Pricing Block ─────────────────────────────────────────────────────────────
function PricingBlock() {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <div className="max-w-[460px] mx-auto bg-surface border border-border rounded-[12px] p-7 md:p-9 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-3">
              90 Day Skin Reset
            </div>
            <div className="font-display font-bold text-[4.5rem] md:text-[5.5rem] tracking-tighter text-gold leading-none mb-2">
              ₹349
            </div>
            <p className="text-text-muted text-sm mb-7">
              Less than what you spend on one wrong product.
            </p>
            <GoldButton href={PRICING_URL} size="xl" className="w-full">
              Get Skin Reset — ₹349 <ArrowRight size={18} />
            </GoldButton>
            <p className="mt-4 text-xs text-text-muted">
              Paid via Razorpay · Secure · Instant delivery on WhatsApp
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Brotherhood ───────────────────────────────────────────────────────────────
function BrotherhoodSection() {
  return (
    <section className="py-14 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-[640px]">
          <FadeUp>
            <Pill tone="muted" className="mb-4">Full Transformation Kit · ₹1199</Pill>
          </FadeUp>
          <FadeUp delay={60}>
            <h3 className="display-section text-[1.75rem] md:text-[2.25rem] mb-3">
              Want more than a PDF?
            </h3>
          </FadeUp>
          <FadeUp delay={110}>
            <p className="text-text-secondary leading-[1.65] mb-6">
              Reading the PDF is step one. Actually fixing your skin takes weeks of feedback, accountability, and knowing what to do when something stops working. That's what The Brotherhood is for.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <OutlineButton href={KIT_URL}>
              Learn about the Full Kit <ArrowRight size={14} />
            </OutlineButton>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 text-left py-5 group"
      >
        <span className="text-base font-medium text-text-primary group-hover:text-gold transition-colors">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-secondary group-hover:border-gold group-hover:text-gold transition-colors">
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-10 text-text-secondary text-[15px] leading-[1.65]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
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
            {FAQS.map((f, i) => (
              <FAQItem
                key={i}
                q={f.q}
                a={f.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8 text-center">
        <FadeUp>
          <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] max-w-[20ch] mx-auto">
            Stop wasting money on random products.<br />
            <span className="text-gold">Fix your skin in 90 days.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={80}>
          <p className="mt-4 text-text-secondary text-lg max-w-[400px] mx-auto">
            ₹349. One-time. Instant access. No subscriptions.
          </p>
        </FadeUp>
        <FadeUp delay={140}>
          <div className="mt-8 flex justify-center">
            <GoldButton href={FINALCTA_URL} size="xl">
              Get Skin Reset — ₹349 <ArrowRight size={18} />
            </GoldButton>
          </div>
        </FadeUp>
        <FadeUp delay={200}>
          <p className="mt-5 text-xs text-text-muted">
            One-time payment · Delivered to your WhatsApp · Lifetime access
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function SkinFooter() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <Link
          to="/"
          className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors"
        >
          Hitesh Grover<span className="text-gold">.</span>
        </Link>
        <p className="text-center text-xs">
          © 2026 Hitesh. All content is informational. Consult a doctor before starting any protocol.
        </p>
        <Link to="/" className="hover:text-text-secondary transition-colors text-xs">
          Back to all guides
        </Link>
      </div>
    </footer>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SkinPage() {
  useEffect(() => { trackViewContent(PRODUCT_MAP.skin) }, [])

  return (
    <div className="bg-bg text-text-primary min-h-screen">
      <SkinHeader />
      <SkinHero />
      <ProblemSection />
      <WhatsInsideSection />
      <WhyItWorksSection />
      <WhoItIsForSection />
      <WhatYoullGetSection />
      <SocialProofSection />
      <PricingBlock />
      <BrotherhoodSection />
      <FAQSection />
      <FinalCTASection />
      <SkinFooter />
    </div>
  )
}
