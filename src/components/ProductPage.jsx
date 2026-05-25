import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check, ArrowRight, Plus, Minus,
  BookOpen, Download, Smartphone, Globe, FileText,
} from 'lucide-react'
import { motion as m } from 'framer-motion'
import bundleCovers from '/assets/bundle-covers.png'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import GoldButton from './ui/GoldButton'
import OutlineButton from './ui/OutlineButton'

// ─── Razorpay links — swap these once payment links are created ───────────────
export const RAZORPAY_LINKS = {
  hair:   'https://rzp.io/rzp/t9bVYuV',
  beard:  'https://rzp.io/rzp/t5BP4M6',
  height: 'https://rzp.io/rzp/OC9TDdoC',
  bundle: 'https://rzp.io/rzp/ixUBVyZ',
  kit:    'https://rzp.io/rzp/46naUPXM',
}

// ── Sticky Header ─────────────────────────────────────────────────────────────
function ProductPageHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-container mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors"
        >
          Hitesh Grover<span className="text-gold">.</span>
        </Link>
        <GoldButton href={RAZORPAY_LINKS.bundle} size="md">
          All 3 — ₹599 <ArrowRight size={14} />
        </GoldButton>
      </div>
    </header>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function ProductHero({ slug, name, tagline, subheadline, cover }) {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

          {/* ── Left / main column ── */}
          <div>
            <FadeUp>
              <Pill tone="gold" className="mb-5">{name} · ₹299</Pill>
            </FadeUp>
            <FadeUp delay={60}>
              <h1 className="display-hero text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem]">
                {tagline}
              </h1>
            </FadeUp>
            {/* Cover — mobile only (between heading and subheadline) */}
            <FadeUp delay={130}>
              <div className="md:hidden mt-8 flex justify-center">
                {cover ? (
                  <div className="border border-border rounded-[10px] w-[58%] overflow-hidden bg-bg shadow-2xl shadow-black/60">
                    <img src={cover} alt={`${name} cover`} className="w-full block" />
                  </div>
                ) : (
                  <div className="placeholder-stripes border border-border rounded-[10px] w-[58%] aspect-[3/4] flex items-center justify-center">
                    <div className="text-center px-4">
                      <BookOpen size={32} className="text-gold mx-auto mb-3" />
                      <div className="text-gold font-display font-bold text-lg tracking-tighter">{name}</div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-text-muted mt-2">PDF guide</div>
                    </div>
                  </div>
                )}
              </div>
            </FadeUp>

            {/* Subheadline — below cover on mobile, below heading on desktop */}
            <FadeUp delay={165}>
              <p className="mt-5 text-text-secondary leading-[1.65] max-w-[520px]">
                {subheadline}
              </p>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={200}>
              <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
                <GoldButton href={RAZORPAY_LINKS[slug]} size="lg" className="w-full sm:w-auto">
                  ₹299 — Get Instant Access <ArrowRight size={16} />
                </GoldButton>
                <p className="text-sm text-text-muted text-center sm:text-left">Instant download · No subscription</p>
              </div>
            </FadeUp>
          </div>

          {/* ── Right column — desktop only ── */}
          <FadeUp delay={100}>
            {cover ? (
              <div className="hidden md:block border border-border rounded-[10px] w-[220px] overflow-hidden bg-bg shadow-2xl shadow-black/50">
                <img src={cover} alt={`${name} cover`} className="w-full block" />
              </div>
            ) : (
              <div className="hidden md:flex placeholder-stripes border border-border rounded-[10px] w-[220px] h-[300px] items-center justify-center">
                <div className="text-center px-4">
                  <BookOpen size={36} className="text-gold mx-auto mb-3" />
                  <div className="text-gold font-display font-bold text-lg tracking-tighter">{name}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-2">PDF guide</div>
                </div>
              </div>
            )}
          </FadeUp>

        </div>
      </div>
    </section>
  )
}

// ── Problem ───────────────────────────────────────────────────────────────────
function ProblemSection({ problem }) {
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
            <p className="text-lg md:text-xl text-text-secondary leading-[1.7]">{problem}</p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ── What's Inside ─────────────────────────────────────────────────────────────
function WhatsInsideSection({ whatsInside }) {
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
          {whatsInside.map((item, i) => (
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

// ── Sample Insight ────────────────────────────────────────────────────────────
function SampleInsightSection({ sampleInsight }) {
  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <Pill tone="gold" className="mb-6">Sample insight from inside</Pill>
        </FadeUp>
        <FadeUp delay={80}>
          <blockquote className="border-l-2 border-gold pl-6 md:pl-8 max-w-[700px]">
            <p className="text-lg md:text-xl text-text-primary leading-[1.7] font-medium">
              "{sampleInsight}"
            </p>
            <p className="mt-5 text-text-muted text-sm italic">
              ...and 9 more breakdowns like this inside.
            </p>
          </blockquote>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Who It's For ──────────────────────────────────────────────────────────────
function WhoItIsForSection({ whoItIsFor }) {
  return (
    <section className="py-16 md:py-20 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <h2 className="display-section text-[2rem] sm:text-[2.5rem] md:text-[3rem] mb-8">
            This is for you if<span className="text-gold">…</span>
          </h2>
        </FadeUp>
        <div className="space-y-1 max-w-[640px]">
          {whoItIsFor.map((point, i) => (
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
const DELIVERABLES = [
  { Icon: Download,  text: 'Instant PDF download after payment' },
  { Icon: Globe,     text: 'Lifetime access — re-download anytime' },
  { Icon: Smartphone, text: 'Works on mobile, tablet, and desktop' },
  { Icon: FileText,  text: '100% Indian context — dosages, brands, food sources' },
  { Icon: Check,     text: 'No filler, no ads — direct protocol only' },
]

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

// ── Pricing Block ─────────────────────────────────────────────────────────────
function PricingBlock({ slug, name, valueNote }) {
  return (
    <section className="py-16 md:py-20 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <div className="max-w-[460px] mx-auto bg-surface border border-border rounded-[12px] p-7 md:p-9 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mb-3">
              {name}
            </div>
            <div className="font-display font-bold text-[4.5rem] md:text-[5.5rem] tracking-tighter text-gold leading-none mb-2">
              ₹299
            </div>
            <p className="text-text-muted text-sm mb-7">{valueNote}</p>
            <GoldButton href={RAZORPAY_LINKS[slug]} size="xl" className="w-full">
              Get Instant Access <ArrowRight size={18} />
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

// ── Bundle Upsell ─────────────────────────────────────────────────────────────
function BundleUpsell() {
  return (
    <section className="py-14 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <div className="bg-surface border border-gold/20 rounded-[12px] overflow-hidden">
            <img
              src={bundleCovers}
              alt="Hair, Height and Beard Maxxing guides"
              className="w-full block"
            />
            <div className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-1.5">
                  Better deal
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tighter">
                  Want all 3?{' '}
                  <span className="text-gold">₹599</span>
                  <span className="ml-2 text-base font-sans font-normal text-text-muted line-through">
                    ₹897
                  </span>
                </h3>
                <p className="text-text-muted text-sm mt-1">
                  Hair + Beard + Height — 3rd guide FREE.
                </p>
              </div>
              <GoldButton href="/bundle" size="lg" className="shrink-0 w-full sm:w-auto">
                Get the Bundle <ArrowRight size={14} />
              </GoldButton>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Brotherhood Mention ───────────────────────────────────────────────────────
function BrotherhoodMention() {
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
              Join the Brotherhood — private community for serious looksmaxxers.
              Monthly live calls, weekly Q&A, daily peer accountability. Cancel anytime.
            </p>
          </FadeUp>
          <FadeUp delay={160}>
            <OutlineButton href="/kit">
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

function ProductFAQ({ faqs }) {
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
            {faqs.map((f, i) => (
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
function ProductFinalCTA({ slug, name }) {
  return (
    <section className="py-20 md:py-28 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8 text-center">
        <FadeUp>
          <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] max-w-[18ch] mx-auto">
            Ready to start<span className="text-gold">?</span>
          </h2>
        </FadeUp>
        <FadeUp delay={80}>
          <p className="mt-4 text-text-secondary text-lg max-w-[400px] mx-auto">
            {name} — ₹299. Instant access. No subscriptions.
          </p>
        </FadeUp>
        <FadeUp delay={140}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <GoldButton href={RAZORPAY_LINKS[slug]} size="xl">
              ₹299 — Get {name} Now <ArrowRight size={18} />
            </GoldButton>
            <OutlineButton href="/bundle" size="lg">
              All 3 for ₹599 <ArrowRight size={14} />
            </OutlineButton>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function ProductFooter() {
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
          ← Back to all guides
        </Link>
      </div>
    </footer>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function ProductPage({
  slug, name, tagline, subheadline,
  problem, whatsInside, sampleInsight,
  whoItIsFor, cover, faqs, valueNote,
}) {
  return (
    <div className="bg-bg text-text-primary min-h-screen">
      <ProductPageHeader />
      <ProductHero
        slug={slug} name={name}
        tagline={tagline} subheadline={subheadline} cover={cover}
      />
      <ProblemSection problem={problem} />
      <WhatsInsideSection whatsInside={whatsInside} />
      <SampleInsightSection sampleInsight={sampleInsight} />
      <WhoItIsForSection whoItIsFor={whoItIsFor} />
      <WhatYoullGetSection />
      <PricingBlock slug={slug} name={name} valueNote={valueNote} />
      <BundleUpsell />
      <BrotherhoodMention />
      <ProductFAQ faqs={faqs} />
      <ProductFinalCTA slug={slug} name={name} />
      <ProductFooter />
    </div>
  )
}
