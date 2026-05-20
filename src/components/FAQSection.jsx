import { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import OutlineButton from './ui/OutlineButton'

const faqs = [
  { q: "Will this actually work for me?", a: "These protocols have worked for 360+ men across different ages, genetics, and starting points. They're not magic — they require 60–90 days of consistency. If you can follow a checklist, you'll see change." },
  { q: "How is this delivered?", a: "Instantly. After payment you'll get a WhatsApp message with download links for all guides. You also get email access. Lifetime access — re-download anytime." },
  { q: "I'm under 18 / over 30. Is this for me?", a: "Sweet spot is 16–30. Height Maxx specifically targets growth plate optimization for under-25. Everything else (Hair, Beard) works at any age, but adjust expectations after 35." },
  { q: "What about side effects from Minoxidil / Finasteride?", a: "The guides cover dosage, brands, side-effect monitoring, and when to stop. They're informational — always consult a doctor before starting any medication." },
  { q: "Is the Brotherhood worth ₹499/month?", a: "You get monthly live calls, weekly Q&A, daily peer support. If you'd pay ₹1,500 for one consultation, this is cheaper. Cancel anytime, no questions." },
  { q: "Refund policy?", a: "PDFs: no refunds (you already have the content). Full Transformation Kit: 7-day refund if you go through the audit and don't feel you have a plan. Brotherhood: cancel before next billing." },
]

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 text-left py-6 group"
      >
        <span className="text-base md:text-lg font-medium text-text-primary group-hover:text-gold transition-colors">
          {q}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary group-hover:border-gold group-hover:text-gold transition-colors">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-text-secondary leading-[1.65]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <FadeUp><Pill tone="muted" className="mb-5">FAQ</Pill></FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.5rem]">
                Still got questions<span className="text-gold">?</span>
              </h2>
            </FadeUp>
            <FadeUp delay={140}>
              <p className="mt-5 text-text-secondary leading-[1.6]">
                Can't find what you're looking for? DM me on Instagram —
                I reply to every message about the guides.
              </p>
            </FadeUp>
            <FadeUp delay={220}>
              <OutlineButton href="#" className="mt-7">
                DM me on Instagram <ArrowRight size={14} />
              </OutlineButton>
            </FadeUp>
          </div>

          <FadeUp delay={120}>
            <div>
              {faqs.map((f, i) => (
                <FAQItem key={i} {...f} defaultOpen={i === 0} />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
