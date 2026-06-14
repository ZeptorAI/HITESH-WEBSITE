import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, motion as m, AnimatePresence } from 'framer-motion'
import {
  Check, ArrowRight, Plus, Minus,
  BookOpen, Download, Smartphone, Globe, FileText, Loader2,
} from 'lucide-react'
import bundleCovers from '/assets/bundle-covers.webp'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import GoldButton from './ui/GoldButton'
import OutlineButton from './ui/OutlineButton'
import BundleOfferPopup from './BundleOfferPopup'
import StarRating from './ui/StarRating'
import { trackViewContent, PRODUCT_MAP } from '../utils/metaPixel'
import CheckoutModal from './CheckoutModal'

// ─── Razorpay links — swap these once payment links are created ───────────────
export const RAZORPAY_LINKS = {
  hair:   'https://rzp.io/rzp/t9bVYuV',
  beard:  'https://rzp.io/rzp/t5BP4M6',
  height: 'https://rzp.io/rzp/OC9TDdoC',
  bundle: 'https://rzp.io/rzp/ixUBVyZ',
  kit:    'https://rzp.io/rzp/46naUPXM',
}

// ── Sticky Header ─────────────────────────────────────────────────────────────
function ProductPageHeader({ slug, hideHeaderCTA = false, openModal }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="max-w-container mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-xl tracking-tighter text-text-primary hover:text-gold transition-colors"
        >
          Hitesh Grover<span className="text-gold">.</span>
        </Link>
        {!hideHeaderCTA && (
          <GoldButton onClick={() => openModal('bundle', 595)} size="md">
            All 3 — ₹595 <ArrowRight size={14} />
          </GoldButton>
        )}
      </div>
    </header>
  )
}

// ── Before/After Hero (Hair page only) ───────────────────────────────────────
function BeforeAfterHero({ slug, name, subheadline, beforeImage, afterImage, rating, reviewCount, checkoutAmount, openModal }) {

  return (
    <section className="pt-36 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-[640px] mx-auto px-5 md:px-8">

        <FadeUp>
          <h1 className="display-hero text-[clamp(1.75rem,9vw,3.5rem)] whitespace-nowrap">
            Everything between
          </h1>
        </FadeUp>

        {/* Before / After widget */}
        <FadeUp delay={130}>
          <div className="mt-2 rounded-[14px] border border-border overflow-hidden">

            {/* Column headers */}
            <div className="grid grid-cols-2 border-b border-border bg-surface/40">
              <div className="py-2.5 px-4 text-[13px] text-text-secondary text-center border-r border-border">
                this photo ↓
              </div>
              <div className="py-2.5 px-4 text-[13px] text-text-secondary text-center">
                and this photo ↓
              </div>
            </div>

            {/* Images */}
            <div className="relative grid grid-cols-2">
              {/* Before */}
              <div className="relative border-r border-border">
                <span className="absolute top-2.5 left-2.5 z-10 bg-bg/80 backdrop-blur-sm text-text-primary text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-[3px] rounded-[4px]">
                  BEFORE
                </span>
                <img
                  src={beforeImage}
                  alt="Before — Day 1"
                  className="w-full aspect-[3/4] object-cover object-top block"
                  width="480" height="640"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
                <span className="absolute bottom-2.5 left-0 right-0 text-center text-[11px] text-white/60">
                  Day 1
                </span>
              </div>

              {/* Gold arrow divider */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-gold border-[3px] border-bg flex items-center justify-center shadow-[0_0_16px_rgba(212,175,55,0.5)]">
                <ArrowRight size={14} className="text-bg" strokeWidth={2.5} />
              </div>

              {/* After */}
              <div className="relative">
                <span className="absolute top-2.5 left-2.5 z-10 bg-gold text-bg text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-[3px] rounded-[4px]">
                  AFTER
                </span>
                <img
                  src={afterImage}
                  alt="After — Day 90"
                  className="w-full aspect-[3/4] object-cover object-top block"
                  width="480" height="640"
                  loading="eager"
                  decoding="async"
                />
                <span className="absolute bottom-2.5 left-0 right-0 text-center text-[11px] text-white/60">
                  Day 90
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="px-4 py-3.5 border-t border-border bg-surface/40 text-center">
              <p className="text-[13px] text-text-secondary">
                Same crown · <span className="text-gold font-medium">90 days</span> on the protocol · No transplant
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={180}>
          <h1 className="display-hero text-[2.6rem] sm:text-[3.5rem] mt-5">
            ...is in the guide<span className="text-gold">.</span>
          </h1>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={220}>
          <div className="mt-6 flex flex-col gap-3">
            {/* Bundle upsell — highlighted primary */}
            <button
              onClick={() => openModal('bundle', 595)}
              className="flex items-center justify-center gap-2 w-full font-bold text-[15px] px-5 py-4 rounded-[8px] bg-gold hover:bg-gold-dark text-bg transition-all active:scale-[0.98]"
            >
              Buy all 3 — ₹595 &nbsp;·&nbsp; 1 guide free <ArrowRight size={15} />
            </button>
            {/* Single guide */}
            <button
              onClick={() => openModal(slug, PRODUCT_MAP[slug]?.value || 299)}
              className="flex items-center justify-center gap-2 w-full font-semibold text-[14px] px-5 py-3.5 rounded-[8px] border border-gold/50 text-gold hover:border-gold hover:bg-gold/8 transition-all active:scale-[0.98]"
            >
              Get Hair Fixed only — ₹299
            </button>
            <p className="text-xs text-text-muted text-center">Instant WhatsApp delivery · No subscription</p>
          </div>
        </FadeUp>

        {/* Subheadline + stars */}
        <FadeUp delay={270}>
          <p className="mt-6 text-text-secondary leading-[1.65]">
            The exact protocol Hitesh wishes someone gave him at 20.{' '}
            <strong className="text-text-primary font-semibold">
              Scalp biology, DHT management, nutrition, treatments,
            </strong>{' '}
            and the 5 product serums compared side-by-side.
          </p>
          {rating && <StarRating rating={rating} reviewCount={reviewCount} />}
        </FadeUp>

      </div>
    </section>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function ProductHero({ slug, name, tagline, subheadline, cover, rating, reviewCount, openModal, ctaFirst }) {
  return (
    <section className={`${ctaFirst ? 'pt-36' : 'pt-28'} pb-20 md:pt-36 md:pb-28`}>
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">

          {/* ── Left / main column ── */}
          <div className={ctaFirst ? 'flex flex-col' : ''}>
            {!ctaFirst && (
              <FadeUp>
                <Pill tone="gold" className="mb-5">{name} · ₹299</Pill>
              </FadeUp>
            )}
            <FadeUp delay={60}>
              <h1 className="display-hero text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem]">
                {tagline}
              </h1>
            </FadeUp>
            {/* Cover — mobile only (between heading and subheadline) */}
            <FadeUp delay={130}>
              <div className={`md:hidden ${ctaFirst ? 'mt-4' : 'mt-8'} flex justify-center`}>
                {cover ? (
                  <div className="border border-border rounded-[10px] w-[58%] overflow-hidden bg-bg shadow-2xl shadow-black/60">
                    <img src={cover} alt={`${name} cover`} className="w-full block" width="361" height="511" loading="eager" decoding="async" fetchPriority="high" />
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
            <div className={ctaFirst ? 'order-[5] md:order-[4]' : ''}>
              <FadeUp delay={165}>
                <p className="mt-5 text-text-secondary leading-[1.65] max-w-[520px]">
                  {subheadline}
                </p>
                {rating && <StarRating rating={rating} reviewCount={reviewCount} />}
              </FadeUp>
            </div>

            {/* CTA */}
            <div className={ctaFirst ? 'order-[4] md:order-[5]' : ''}>
            <FadeUp delay={200}>
              <div className={`${ctaFirst ? 'mt-4' : 'mt-7'} flex flex-col gap-3 w-full sm:max-w-[420px]`}>
                {/* Primary — bundle (gold/yellow fill) */}
                <div className="relative pt-2.5">
                  <span className="absolute top-0 left-4 bg-bg border border-gold/40 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-gold tracking-[0.12em] uppercase z-10">
                    Best Value
                  </span>
                  <button
                    onClick={() => openModal('bundle', 595)}
                    className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-dark text-bg font-bold text-[15px] px-5 py-3.5 rounded-[8px] transition-all active:scale-[0.98]"
                  >
                    Buy All 3 — ₹595
                    <span className="text-xs font-normal opacity-70">· 1 Guide FREE</span>
                    <ArrowRight size={14} className="shrink-0" />
                  </button>
                </div>

                {/* Secondary — single guide */}
                <button
                  onClick={() => openModal(slug, PRODUCT_MAP[slug]?.value || 299)}
                  className="flex items-center justify-center gap-2 w-full border border-gold/45 bg-surface hover:bg-surface/60 text-gold font-semibold text-[14px] px-5 py-3.5 rounded-[8px] transition-all active:scale-[0.98]"
                >
                  ₹{PRODUCT_MAP[slug]?.value || 299} — {name} <ArrowRight size={15} />
                </button>

                <p className="text-xs text-text-muted">Instant download · No subscription</p>
              </div>
            </FadeUp>
            </div>
          </div>

          {/* ── Right column — desktop only ── */}
          <FadeUp delay={100}>
            {cover ? (
              <div className="hidden md:block border border-border rounded-[10px] w-[220px] overflow-hidden bg-bg shadow-2xl shadow-black/50">
                <img src={cover} alt={`${name} cover`} className="w-full block" width="361" height="511" loading="eager" decoding="async" fetchPriority="high" />
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
function PricingBlock({ slug, name, valueNote, openModal }) {
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
            <GoldButton onClick={() => openModal(slug, PRODUCT_MAP[slug]?.value || 299)} size="xl" className="w-full">
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
function BundleUpsell({ slug, openModal }) {
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
                  <span className="text-gold">₹595</span>
                  <span className="ml-2 text-base font-sans font-normal text-text-muted line-through">
                    ₹897
                  </span>
                </h3>
                <p className="text-text-muted text-sm mt-1">
                  Hair + Beard + Height — 3rd guide FREE.
                </p>
              </div>
              <GoldButton onClick={() => openModal('bundle', 595)} size="lg" className="shrink-0 w-full sm:w-auto">
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
function BrotherhoodMention({ slug }) {
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
            <OutlineButton href={`/r/htsh-${slug}-kit`}>
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
function ProductFinalCTA({ slug, name, openModal }) {
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
            <GoldButton onClick={() => openModal(slug, PRODUCT_MAP[slug]?.value || 299)} size="xl">
              ₹{PRODUCT_MAP[slug]?.value || 299} — Get {name} Now <ArrowRight size={18} />
            </GoldButton>
            <OutlineButton onClick={() => openModal('bundle', 595)} size="lg">
              All 3 for ₹595 <ArrowRight size={14} />
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
  rating, reviewCount,
  beforeImage, afterImage, checkoutAmount,
  ctaFirst,
}) {
  const [checkout, setCheckout] = useState({ open: false, product: '', amount: 0 })
  const openModal = (product, amount) => setCheckout({ open: true, product, amount })

  useEffect(() => {
    const product = PRODUCT_MAP[slug]
    if (product) trackViewContent(product)
  }, [slug])

  return (
    <div className="bg-bg text-text-primary min-h-screen">
      <BundleOfferPopup />
      <ProductPageHeader slug={slug} hideHeaderCTA={!!beforeImage} openModal={openModal} />
      {beforeImage ? (
        <BeforeAfterHero
          slug={slug} name={name} subheadline={subheadline}
          beforeImage={beforeImage} afterImage={afterImage}
          rating={rating} reviewCount={reviewCount}
          checkoutAmount={checkoutAmount}
          openModal={openModal}
        />
      ) : (
        <ProductHero
          slug={slug} name={name}
          tagline={tagline} subheadline={subheadline} cover={cover}
          rating={rating} reviewCount={reviewCount}
          openModal={openModal}
          ctaFirst={ctaFirst}
        />
      )}
      <ProblemSection problem={problem} />
      {!beforeImage && <WhatsInsideSection whatsInside={whatsInside} />}
      <SampleInsightSection sampleInsight={sampleInsight} />
      <WhoItIsForSection whoItIsFor={whoItIsFor} />
      <WhatYoullGetSection />
      <PricingBlock slug={slug} name={name} valueNote={valueNote} openModal={openModal} />
      {!beforeImage && <BundleUpsell slug={slug} openModal={openModal} />}
      <BrotherhoodMention slug={slug} />
      <ProductFAQ faqs={faqs} />
      <ProductFinalCTA slug={slug} name={name} openModal={openModal} />
      <ProductFooter />
      <CheckoutModal
        open={checkout.open}
        product={checkout.product}
        amount={checkout.amount}
        onClose={() => setCheckout(s => ({ ...s, open: false }))}
      />
    </div>
  )
}
