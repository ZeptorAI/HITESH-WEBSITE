import { Check, Users } from 'lucide-react'
import FadeUp from './ui/FadeUp'
import Pill from './ui/Pill'
import brotherhoodPhoto from '/assets/brotherhood-group-photo.png'

const features = [
  'Weekly Q&A with me in private group',
  'Monthly live Zoom calls (recorded)',
  'Photo reviews and feedback from peers',
  'Accountability check-ins every Sunday',
  'First access to all new guides + drops',
  'Direct WhatsApp line for urgent questions',
]

export default function BrotherhoodSection() {
  return (
    <section id="brotherhood" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <img src={brotherhoodPhoto} alt="The Brotherhood community" className="w-full max-w-[480px] rounded-[10px] shadow-xl shadow-black/40 block" />
          </FadeUp>

          <div>
            <FadeUp>
              <Pill tone="gold" className="mb-5"><Users size={12} /> The Brotherhood</Pill>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.5rem] sm:text-[3.25rem] md:text-[4rem]">
                You won't do this alone<span className="text-gold">.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={140}>
              <p className="mt-5 text-text-secondary text-lg leading-[1.6] max-w-[520px]">
                1,200+ Indian men in one private group. Same age. Same goals. Same protocols.
                You ask, they answer. Weekly. Daily, if you need it.
              </p>
            </FadeUp>

            <FadeUp delay={220}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-text-secondary">
                    <Check size={15} className="text-gold shrink-0 mt-0.5" strokeWidth={2.25} />
                    {f}
                  </li>
                ))}
              </ul>
            </FadeUp>

          </div>
        </div>
      </div>
    </section>
  )
}
