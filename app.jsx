const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showFeaturedStrip": true,
  "showHowItWorks": true,
  "showPain": true,
  "showGuides": true,
  "showBundle": true,
  "showPremium": true,
  "showTestimonials": true,
  "showBrotherhood": true,
  "showFAQ": true,
  "showFinalCTA": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {t.showFeaturedStrip && <FeaturedStrip />}
        {t.showHowItWorks && <HowItWorks />}
        {t.showPain && <PainSection />}
        {t.showGuides && <GuidesSection />}
        {t.showBundle && <BundleSection />}
        {t.showPremium && <PremiumSection />}
        {t.showTestimonials && <TestimonialsSection />}
        {t.showBrotherhood && <BrotherhoodSection />}
        {t.showFAQ && <FAQSection />}
        {t.showFinalCTA && <FinalCTA />}
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Show / hide sections" />
        <TweakToggle label="Featured strip"   value={t.showFeaturedStrip} onChange={(v) => setTweak('showFeaturedStrip', v)} />
        <TweakToggle label="How it works"     value={t.showHowItWorks}    onChange={(v) => setTweak('showHowItWorks', v)} />
        <TweakToggle label="Pain section"     value={t.showPain}          onChange={(v) => setTweak('showPain', v)} />
        <TweakToggle label="The 3 guides"     value={t.showGuides}        onChange={(v) => setTweak('showGuides', v)} />
        <TweakToggle label="Bundle"           value={t.showBundle}        onChange={(v) => setTweak('showBundle', v)} />
        <TweakToggle label="Full Kit (Premium)" value={t.showPremium}     onChange={(v) => setTweak('showPremium', v)} />
        <TweakToggle label="Testimonials"     value={t.showTestimonials}  onChange={(v) => setTweak('showTestimonials', v)} />
        <TweakToggle label="Brotherhood"      value={t.showBrotherhood}   onChange={(v) => setTweak('showBrotherhood', v)} />
        <TweakToggle label="FAQ"              value={t.showFAQ}           onChange={(v) => setTweak('showFAQ', v)} />
        <TweakToggle label="Final CTA"        value={t.showFinalCTA}      onChange={(v) => setTweak('showFinalCTA', v)} />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
