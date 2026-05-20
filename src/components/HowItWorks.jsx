import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'

const steps = [
  { n: '01', title: 'Pay ₹249',                  body: 'One tap. UPI, card, or wallet. No subscriptions, no upsells.' },
  { n: '02', title: 'Get it on WhatsApp',         body: 'All three PDFs hit your inbox in 60 seconds. Open and start reading.' },
  { n: '03', title: 'Look different in 26 days',  body: 'Follow the daily protocols. Track progress. Stack the wins.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-[640px] mb-12 md:mb-16">
          <FadeUp><Pill tone="muted" className="mb-5">How it works</Pill></FadeUp>
          <FadeUp delay={60}>
            <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem]">
              3 steps. <span className="text-text-secondary">No fluff.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-[10px] overflow-hidden border border-border">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 80}>
              <div className="bg-bg p-7 md:p-8 h-full">
                <div className="font-mono text-xs text-gold tracking-[0.2em]">STEP {s.n}</div>
                <h3 className="mt-5 font-display font-bold text-2xl md:text-3xl tracking-tighter">{s.title}</h3>
                <p className="mt-3 text-text-secondary leading-[1.6] text-[15px]">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
