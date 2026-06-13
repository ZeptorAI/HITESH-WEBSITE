import ProductPage from '../components/ProductPage'
import heightCover from '/assets/height-maxx-cover.webp'

const data = {
  slug: 'height',
  name: 'Height Maxxed',
  tagline: 'Add 1–3 cm naturally + look 2–3 inches taller through posture.',
  subheadline:
    "Between 16 and 21, you have a real biological window. This guide shows the exact biomechanics — no gimmicks, no fake claims, no height-increasing pills.",
  problem:
    "Most guys hit 18, look in the mirror, and accept their height. Game over. Genetics won. Wrong. Until your early 20s, your growth plates may still be partially open — and even after that, posture alone can add 2–3 visible inches. This PDF shows the exact protocol: jumping, hanging, spinal decompression, and the posture fix that 95% of guys never learn.",
  whatsInside: [
    "How height actually increases at your age — the 4 mechanisms that still work",
    "Wolff's Law applied to your skeleton — why your bones are more shapeable than you think",
    "Maasai Jumps — the daily protocol used by one of the tallest tribes on earth",
    "The Cobra Stretch — undoes years of phone-and-laptop posture damage in weeks",
    "Dead Hanging — the one non-negotiable exercise (decompresses 16 hours of gravity)",
    "Anterior Pelvic Tilt fix — the 10-minute routine that makes you look 1–2 cm taller instantly",
    "The 10-minute night stretch routine (set your spine up to elongate while you sleep)",
    "Exercises that support height — and the ones secretly making you shorter",
    "Height-boosting diet: protein, calcium, vitamin D3, K2, zinc, magnesium — Indian sources",
    "Sleep + lifestyle rules (HGH peaks at night — bad sleep kills everything)",
  ],
  sampleInsight:
    "Most people lose 1–2 inches of visible height to slouching alone. Before you try anything else, fix Anterior Pelvic Tilt — most guys reading this have it without knowing. Belly sticks out even when lean. Lower back over-arched. Pelvis tilted forward. Fix it with 5 exercises in 10 minutes a day and you'll look taller in 3 weeks. Free, no equipment.",
  whoItIsFor: [
    "Men 16–21 with potentially open growth plates wanting to max out remaining height",
    "Anyone with poor posture losing visible inches to slouching",
    "Guys who want a structured daily routine, not random \"grow taller\" YouTube videos",
    "Anyone willing to commit 30 minutes a day for 12 weeks",
  ],
  cover: heightCover,
  valueNote: "Less than one good pair of insoles — but the results are permanent.",
  faqs: [
    {
      q: "Is this specifically for Indian men?",
      a: "Yes. Diet recommendations use Indian food sources. Supplement brands mentioned are available in India. The context throughout is Indian — climate, diet, lifestyle.",
    },
    {
      q: "How is it delivered?",
      a: "Instantly. After payment you'll get a WhatsApp message with a download link. Also sent to your email. Lifetime access — re-download anytime.",
    },
    {
      q: "Is there a money-back guarantee?",
      a: "PDFs are non-refundable once downloaded — you already have the content. If something's wrong with your order, DM on Instagram and it'll be sorted.",
    },
    {
      q: "I'm 23. Is it too late for height gain?",
      a: "Growth plates are likely closed by 23, so the biological height gain section is less relevant. But the posture and Anterior Pelvic Tilt sections alone are worth it — most guys over 20 are losing 1–2 inches to bad posture and don't know it.",
    },
    {
      q: "I can find height exercises free on YouTube. Why pay?",
      a: "You can. But there's no structured protocol — just random videos. This is a complete 12-week daily schedule: what to do in the morning, at night, what to eat, what to avoid. That doesn't exist for free.",
    },
  ],
}

export default function HeightPage() {
  return <ProductPage {...data} rating={4.6} reviewCount="2,800+" ctaFirst />
}
