import { Star } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'

const testimonials = [
  { quote: 'Started Hair Care Maxx in February. By April my front line was visibly back. My friends thought I got a transplant.', name: 'Rohan, 24', meta: 'Bangalore · Hair Care Maxx', stars: 5 },
  { quote: "I’m 5’5. Posture work in Height Maxx added a clean inch. People treat me differently — and that’s before the lifts.", name: 'Karan, 21', meta: 'Delhi · Height Maxx', stars: 5 },
  { quote: 'Beard was patchy for 8 years. Microneedling protocol filled my cheeks in 4 months. No joke.', name: 'Aman, 27', meta: 'Mumbai · Beard Maxx', stars: 5 },
  { quote: 'Joined Brotherhood last year. The accountability is the real product. Got serious in 2 weeks.', name: 'Vikram, 19', meta: 'Pune · Brotherhood', stars: 5 },
  { quote: "Bought the bundle on a whim. Best ₹249 I’ve spent. The protocols are specific — exact dosages, exact brands.", name: 'Siddharth, 26', meta: 'Hyderabad · Bundle', stars: 5 },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <FadeUp><Pill tone="muted" className="mb-5">Real men · Real changes</Pill></FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem]">
                365+ have done this.<br /><span className="text-text-secondary">You're next.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={120}>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span><span className="text-text-primary font-semibold">4.8 / 5</span> avg · 312 ratings</span>
            </div>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={(i % 3) * 80}>
              <figure className="bg-surface border border-border rounded-[8px] p-6 md:p-7 h-full card-hover flex flex-col">
                <div className="flex text-gold mb-4">
                  {[...Array(t.stars)].map((_, k) => <Star key={k} size={14} className="fill-current" />)}
                </div>
                <blockquote className="text-text-primary text-[16px] leading-[1.6] flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-sm font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm text-text-primary font-semibold">{t.name}</div>
                    <div className="text-xs text-text-muted mt-0.5">{t.meta}</div>
                  </div>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
