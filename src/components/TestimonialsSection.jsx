import { Star } from "lucide-react"
import FadeUp from "./ui/FadeUp"
import Pill from "./ui/Pill"
import dm1 from "/assets/testimonial-dm-1.webp"
import dm2 from "/assets/testimonial-dm-2.webp"
import dm3 from "/assets/testimonial-dm-3.webp"
import dm4 from "/assets/testimonial-dm-4.webp"

const screenshots = [
  { src: dm1, alt: "Customer DM - skin condition improved" },
  { src: dm2, alt: "Customer DM - face clearer and brighter" },
  { src: dm3, alt: "Customer DM - shampoo results" },
  { src: dm4, alt: "Customer DM - hair fall reduced" },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <FadeUp><Pill tone="muted" className="mb-5">Real DMs · Real results</Pill></FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem]">
                365+ have done this.<br /><span className="text-text-secondary">You are next.</span>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {screenshots.map((s, i) => (
            <FadeUp key={i} delay={i * 70}>
              <div className="rounded-[10px] overflow-hidden border border-border shadow-lg shadow-black/30">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
