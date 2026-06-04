import ProductPage from '../components/ProductPage'
import beardCover from '/assets/beard-maxx-cover.png'

const data = {
  slug: 'beard',
  name: 'Beard Maxxed',
  tagline: 'The 90-day plan to max out your beard genetics.',
  subheadline:
    "Most guys with patchy beards quit by month two. They don't know how beard hair actually grows or how long it really takes. This guide fixes both.",
  problem:
    "You look in the mirror at month two and see nothing changed. You quit. Six months later you're still patchy and convinced your genetics are cooked. The problem isn't your beard. It's that nobody told you how beard hair actually works — the hormone sensitivity thing, the 90-day reality, the difference between micro-needling done right vs done wrong. This PDF is the exact 90-day plan.",
  whatsInside: [
    "The 6 real factors behind beard growth (5 of them are in your control)",
    "How beard hair actually grows — anagen, catagen, telogen explained",
    "The testosterone + DHT relationship (and why high T doesn't always mean a thick beard)",
    "Complete beard nutrition guide — protein, zinc, biotin, omega-3s, Indian food sources",
    "Daily diet structure for beard growth (with full sample day)",
    "Minoxidil for beard — how to use it, timeline, side effects, the honest truth",
    "Microneedling protocol — needle size, frequency, when NOT to do it",
    "Morning + night beard routine that actually works",
    "6 beard mistakes that kill growth (most guys make at least 3)",
    "The complete 90-day daily plan, broken down step by step",
  ],
  sampleInsight:
    "You can have completely normal testosterone and still grow a patchy beard. Why? Because your follicles might just be less sensitive to DHT. This isn't a flaw — it's a biological fact. Stop chasing testosterone boosters. Start increasing DHT sensitivity through the protocol inside.",
  whoItIsFor: [
    "Men 18–28 with patchy or slow beard growth",
    "Anyone considering minoxidil but unsure about side effects and protocol",
    "Guys who've tried beard oils for months with no results (you've been sold the wrong thing)",
    "Anyone who wants a structured 90-day plan instead of random tips",
  ],
  cover: beardCover,
  valueNote: "Less than one bottle of the beard oil that isn't working.",
  faqs: [
    {
      q: "Is this specifically for Indian men?",
      a: "Yes. Product recommendations, dosages, and food sources are all India-specific. Every brand mentioned is available on Amazon India or local medical stores.",
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
      q: "Can I share this with friends?",
      a: "It's for personal use only. If your friend needs it, it's ₹299. Send them the link.",
    },
    {
      q: "I can find beard growth tips free on YouTube. Why pay?",
      a: "YouTube gives you 10-minute videos with 3 usable minutes. This is a structured 90-day protocol — exact needle sizes, exact minoxidil dosage, day-by-day schedule. That doesn't exist for free.",
    },
  ],
}

export default function BeardPage() {
  return <ProductPage {...data} rating={4.7} reviewCount="2,100+" />
}
