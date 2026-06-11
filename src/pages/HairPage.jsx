import ProductPage from '../components/ProductPage'
import hairCover from '/assets/hair-maxx-cover.webp'

export const data = {
  slug: 'hair',
  name: 'Hair Fixed',
  tagline: 'Stop Watching Your Hair Fall Out. Here\'s the Exact Fix.',
  subheadline:
    "The exact protocol Hitesh wishes someone gave him at 20. Scalp biology, DHT management, nutrition, treatments, and the 5 product serums compared side-by-side.",
  problem:
    "Most guys watch their hair fall out for years before they do anything about it. They blame masturbation. They try random oils. They scroll Reddit at 2am wondering if it's too late. By the time they take it seriously, the receding hairline is permanent. This PDF is what should've been handed to you at 18.",
  whatsInside: [
    "The 4-phase hair growth cycle (Anagen, Catagen, Telogen, Exogen) — why this matters more than any product",
    "The 7 real causes of hair loss (medical + lifestyle), and which ones you can fix this week",
    "How to actually increase hair volume naturally — not the BS advice from Instagram reels",
    "Hair-growth diet plan with Indian foods (full sample day-by-day plan inside)",
    "3 natural remedies that actually have research behind them (most \"natural\" advice is useless)",
    "Minoxidil + Finasteride explained honestly — what works, what the side effects really are",
    "5 non-minoxidil serums compared: Bontress Pro, Q-Sera, Follirich, Morr Pro, Man Matters",
    "Shampoo ingredient guide — what to look for, what to avoid (flip the bottle and check)",
    "How to pick the right hair oil based on your hair's absorbency type",
    "The masturbation + hair loss myth — finally killed with actual science",
  ],
  sampleInsight:
    "Hair loss happens when too many follicles enter the resting phase too early — or when follicles shrink permanently from DHT. Everything you do — diet, serums, scalp massage, minoxidil — exists to keep your follicles in the growth phase for longer. That's the entire game. Most products don't tell you this because then you'd realize 80% of what they sell is useless.",
  whoItIsFor: [
    "Men 18–35 noticing hair fall, thinning, or a receding hairline",
    "Anyone confused about minoxidil vs natural serums (Bontress, Morr Pro, etc.)",
    "Guys who want to fix the root cause, not just buy random products",
    "Anyone tired of contradictory advice on Reddit and Instagram",
  ],
  cover: hairCover,
  valueNote: "Less than one bottle of most hair serums.",
  faqs: [
    {
      q: "Is this specifically for Indian men?",
      a: "Yes. Every product, brand, dosage, and food source is India-specific. Bontress Pro, Morr Pro, Man Matters — real brands you can buy here.",
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
      q: "I can find hair loss info free online. Why pay?",
      a: "You can. But you'll spend 40 hours sorting through contradictory Reddit threads, YouTube bro-science, and brand-sponsored content. This is that work, already done, specifically for your situation.",
    },
  ],
}

export default function HairPage() {
  return <ProductPage {...data} rating={4.8} reviewCount="3,200+" />
}
