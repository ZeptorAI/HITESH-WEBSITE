import { Scissors, Ruler, User } from 'lucide-react'
import FadeUp from './ui/FadeUp'

const pains = [
  { Icon: Scissors, title: 'Thinning hair, receding line', body: "You started noticing it at 22. Now it’s all you see in mirrors." },
  { Icon: Ruler,    title: 'Stuck at the same height',     body: "You hit 5’6 and growth stopped. Everyone else kept going." },
  { Icon: User,     title: 'Patchy or no beard',           body: "Friends grow beards in weeks. Yours hasn’t shown up in years." },
]

export default function PainSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <h2 className="display-section text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] max-w-[14ch]">
            If this is you<span className="text-gold">…</span>
          </h2>
        </FadeUp>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-5 md:gap-6">
          {pains.map(({ Icon, title, body }, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="bg-surface border border-border rounded-[8px] p-6 md:p-7 h-full card-hover">
                <div className="w-10 h-10 rounded-[8px] bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary tracking-tight">{title}</h3>
                <p className="mt-2 text-text-secondary leading-[1.65] text-[15px]">{body}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={300}>
          <p className="mt-14 md:mt-20 text-center text-2xl md:text-3xl font-display font-semibold tracking-tighter max-w-[24ch] mx-auto">
            You're not broken.
            <span className="block text-text-secondary mt-1">The information you've been given is.</span>
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
