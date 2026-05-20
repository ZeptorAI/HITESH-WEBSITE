import Nav from './components/Nav'
import Hero from './components/Hero'
import FeaturedStrip from './components/FeaturedStrip'
import HowItWorks from './components/HowItWorks'
import PainSection from './components/PainSection'
import GuidesSection from './components/GuidesSection'
import BundleSection from './components/BundleSection'
import PremiumSection from './components/PremiumSection'
import TestimonialsSection from './components/TestimonialsSection'
import BrotherhoodSection from './components/BrotherhoodSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyMobileCTA from './components/StickyMobileCTA'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedStrip />
        <HowItWorks />
        <PainSection />
        <GuidesSection />
        <BundleSection />
        <PremiumSection />
        <TestimonialsSection />
        <BrotherhoodSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
