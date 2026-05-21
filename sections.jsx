// All sections of the landing page

const { useEffect: useEffect2, useState: useState2, useRef: useRef2 } = React;

const CREATOR_NAME = "Hitesh";

// ============== NAV ==============
function Nav() {
  const [scrolled, setScrolled] = useState2(false);
  const [open, setOpen] = useState2(false);

  useEffect2(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
  { label: 'Guides', href: '#guides' },
  { label: 'Bundle', href: '#bundle' },
  { label: 'Brotherhood', href: '#brotherhood' },
  { label: 'FAQ', href: '#faq' }];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'}`
      }>
      
      <div className="max-w-container mx-auto px-5 md:px-8 h-16 md:h-[72px] flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl md:text-2xl tracking-tighter">
          {CREATOR_NAME}
          <span className="text-gold">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <a key={l.href} href={l.href}
          className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              {l.label}
            </a>
          )}
        </nav>

        <div className="hidden md:block">
          <GoldButton href="#bundle">Get started <IconArrowRight size={16} /></GoldButton>
        </div>

        <button
          className="md:hidden text-text-primary p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu">
          
          {open ? <IconX size={24} /> : <IconMenu size={24} />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open &&
      <div className="md:hidden bg-bg border-b border-border">
          <div className="px-5 py-6 flex flex-col gap-1">
            {links.map((l) =>
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}
          className="text-text-secondary hover:text-text-primary py-3 text-base border-b border-border last:border-0">
                {l.label}
              </a>
          )}
            <div className="pt-4">
              <GoldButton href="#bundle" onClick={() => setOpen(false)} className="w-full">
                Get started <IconArrowRight size={16} />
              </GoldButton>
            </div>
          </div>
        </div>
      }
    </header>);

}

// ============== HERO ==============
function Hero() {
  return (
    <section id="top" data-screen-label="Hero" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden grain">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <FadeUp>
              <Pill tone="muted" className="mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                500+ transformations · Made in India
              </Pill>
            </FadeUp>

            <FadeUp delay={80}>
              <h1 className="display-hero text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
                Looksmaxx<br />
                in <span className="text-gold">26 days</span>.
              </h1>
            </FadeUp>

            <FadeUp delay={160}>
              <p className="mt-6 md:mt-8 text-lg md:text-xl text-text-secondary max-w-[480px] leading-[1.55]">Hair, height, and beard protocols built for Indian men. Read the PDF. Follow the plan. Look different in less than a month.


              </p>
            </FadeUp>

            <FadeUp delay={240}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <GoldButton href="#bundle" size="xl" className="w-full sm:w-auto">
                  Get the bundle — ₹249
                </GoldButton>
                <a href="#guides" className="text-gold hover:text-gold-light text-sm font-medium inline-flex items-center justify-center sm:justify-start gap-1.5 px-2 py-3 sm:py-0">
                  See the guides <IconArrowDown size={14} />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={320}>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <IconCheck size={14} className="text-gold" /> 500+ transformations
                </span>
                <span className="text-border-2">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <IconCheck size={14} className="text-gold" /> Results in 60 days
                </span>
                <span className="text-border-2">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <IconCheck size={14} className="text-gold" /> Made for Indian men
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Right — 3 PDF covers fanned */}
          <FadeUp delay={180}>
            <div className="relative">
              <div className="relative aspect-[3/4] w-full flex items-center justify-center">
                {[
                { lbl: 'BEARD', img: null, tilt: '-rotate-[12deg]', off: '-translate-x-[36%]', z: 10 },
                { lbl: 'HEIGHT', img: 'assets/height-maxx-cover.png', tilt: 'rotate-[12deg]', off: 'translate-x-[36%]', z: 15 },
                { lbl: 'HAIR', img: 'assets/hair-maxx-cover.png', tilt: 'rotate-[1deg]', off: 'translate-x-0', z: 20 }].
                map((g) =>
                <div
                  key={g.lbl}
                  className={`absolute border border-border-2 rounded-[8px] w-[58%] aspect-[3/4] overflow-hidden shadow-[0_24px_70px_-12px_rgba(0,0,0,0.75)] ${g.tilt} ${g.off} ${g.img ? 'bg-bg' : 'placeholder-stripes'}`}
                  style={{ zIndex: g.z }}>
                    {g.img ?
                  <img src={g.img} alt={`${g.lbl} Maxx guide cover`} className="w-full h-full object-cover block" /> :

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">Guide 03</div>
                        <div className="font-display font-bold text-3xl tracking-tighter text-gold mt-3">{g.lbl}</div>
                        <div className="mt-3 w-12 h-px bg-border-2"></div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mt-3">cover · soon</div>
                      </div>
                  }
                  </div>
                )}
              </div>

              {/* Corner stat */}
              <div className="absolute -bottom-4 -left-4 md:-left-6 bg-surface border border-border rounded-[8px] px-4 py-3 flex items-center gap-3 z-30" style={{ width: "190px" }}>
                <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                  <IconUsers size={16} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.12em] text-text-muted leading-none">Brotherhood</div>
                  <div className="text-sm font-semibold text-text-primary mt-1 leading-none">1,200+ members</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>);

}

// ============== MARQUEE / TRUST STRIP ==============
function FeaturedStrip() {
  const items = [
  '80K+ avg reel views',
  'Featured in 200+ DMs daily',
  '4.8 ★ avg member rating',
  '1,200+ Brotherhood members',
  'Made in India · 2024',
  'Lifetime updates'];

  const doubled = [...items, ...items];
  return (
    <div className="border-y border-border bg-surface/30 overflow-hidden">
      <div className="marquee-track flex gap-12 py-5 whitespace-nowrap">
        {doubled.map((t, i) =>
        <div key={i} className="flex items-center gap-3 text-text-muted text-sm uppercase tracking-[0.18em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            {t}
          </div>
        )}
      </div>
    </div>);

}

// ============== PAIN ==============
function PainSection() {
  const pains = [
  {
    icon: IconScissors,
    title: 'Thinning hair, receding line',
    body: 'You started noticing it at 22. Now it’s all you see in mirrors.'
  },
  {
    icon: IconRuler,
    title: 'Stuck at the same height',
    body: 'You hit 5\u20196 and growth stopped. Everyone else kept going.'
  },
  {
    icon: IconUser,
    title: 'Patchy or no beard',
    body: 'Friends grow beards in weeks. Yours hasn’t shown up in years.'
  }];


  return (
    <section data-screen-label="Pain" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <FadeUp>
          <h2 className="display-section text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] max-w-[14ch] text-balance">
            If this is you<span className="text-gold">…</span>
          </h2>
        </FadeUp>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-5 md:gap-6">
          {pains.map((p, i) =>
          <FadeUp key={i} delay={i * 80}>
              <div className="bg-surface border border-border rounded-[8px] p-6 md:p-7 h-full card-hover">
                <div className="w-10 h-10 rounded-[8px] bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-5">
                  <p.icon size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-text-secondary leading-[1.65] text-[15px]">
                  {p.body}
                </p>
              </div>
            </FadeUp>
          )}
        </div>

        <FadeUp delay={300}>
          <p className="mt-14 md:mt-20 text-center text-2xl md:text-3xl font-display font-semibold tracking-tighter text-balance max-w-[24ch] mx-auto">
            You’re not broken.
            <span className="block text-text-secondary mt-1">The information you’ve been given is.</span>
          </p>
        </FadeUp>
      </div>
    </section>);

}

// ============== THREE GUIDES ==============
function GuideCard({ tag, title, subtitle, bullets, cta, label, cover }) {
  return (
    <div className="bg-surface border border-border rounded-[8px] p-6 md:p-7 flex flex-col h-full card-hover">
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          {tag}
        </span>
        <span className="font-mono text-xs text-gold">₹99</span>
      </div>

      {/* PDF cover */}
      <div className="mb-6 relative">
        {cover ?
        <div className="border border-border rounded-[6px] aspect-[3/4] max-h-[220px] mx-auto w-[60%] overflow-hidden bg-bg">
            <img src={cover} alt={`${label} guide cover`} className="w-full h-full object-cover block" />
          </div> :

        <div className="placeholder-stripes border border-border rounded-[6px] aspect-[3/4] max-h-[220px] mx-auto w-[60%] flex items-center justify-center">
            <div className="text-center">
              <div className="text-gold text-2xl font-display font-bold tracking-tighter">{label}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted mt-2">cover · soon</div>
            </div>
          </div>
        }
      </div>

      <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tighter">{title}</h3>
      <p className="mt-1.5 text-text-secondary text-[15px] leading-[1.55]">{subtitle}</p>

      <ul className="mt-5 space-y-3 flex-1">
        {bullets.map((b, i) =>
        <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-text-secondary">
            <IconCheck size={16} className="text-gold shrink-0 mt-0.5" strokeWidth={2.25} />
            <span>{b}</span>
          </li>
        )}
      </ul>

      <div className="mt-6 pt-6 border-t border-border">
        <OutlineButton href="#bundle" className="w-full">
          {cta} <IconArrowRight size={14} />
        </OutlineButton>
      </div>
    </div>);

}

function GuidesSection() {
  const guides = [
  {
    tag: 'Guide 01',
    label: 'HAIR',
    cover: 'assets/hair-maxx-cover.png',
    title: 'Hair Care Maxx',
    subtitle: 'Stop hair loss. Regrow what you’ve lost.',
    bullets: [
    'Exact Minoxidil + Finasteride protocol for Indian skin',
    'Diet and supplement stack under ₹2,000/month',
    'DHT-blocking lifestyle changes that actually work',
    '60-day transformation timeline'],

    cta: 'Get Hair Care Maxx — ₹99'
  },
  {
    tag: 'Guide 02',
    label: 'HEIGHT',
    cover: 'assets/height-maxx-cover.png',
    title: 'Height Maxx',
    subtitle: 'Look 2 inches taller. Some of it permanent.',
    bullets: [
    'Posture protocols that add 1–1.5 inches instantly',
    'Spine decompression routines (15 min/day)',
    'Footwear, styling, and angle tactics',
    'For anyone under 25 — growth plate optimization'],

    cta: 'Get Height Maxx — ₹99'
  },
  {
    tag: 'Guide 03',
    label: 'BEARD',
    title: 'Beard Maxx',
    subtitle: 'Fill in patches. Grow what won’t grow.',
    bullets: [
    'Minoxidil application protocol for beard',
    'Microneedling timeline + technique',
    'Diet, supplements, and DHT optimization for facial hair',
    'Patch-fill strategies while you grow'],

    cta: 'Get Beard Maxx — ₹99'
  }];


  return (
    <section id="guides" data-screen-label="Guides" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-[640px]">
          <FadeUp>
            <Pill tone="muted" className="mb-5">3 guides · ₹99 each</Pill>
          </FadeUp>
          <FadeUp delay={60}>
            <h2 className="display-section text-[2.5rem] sm:text-[3.25rem] md:text-[4.25rem]">
              Pick your weapon<span className="text-gold">.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={120}>
            <p className="mt-5 text-lg text-text-secondary leading-[1.6]">
              Three guides. ₹99 each. Or get all three for ₹249.
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
          {guides.map((g, i) =>
          <FadeUp key={i} delay={i * 90}>
              <GuideCard {...g} />
            </FadeUp>
          )}
        </div>
      </div>
    </section>);

}

// ============== BUNDLE ==============
function BundleSection() {
  const items = [
  'Hair Care Maxx Guide',
  'Height Maxx Guide',
  'Beard Maxx Guide',
  'Lifetime access, free updates'];


  return (
    <section id="bundle" data-screen-label="Bundle" className="relative py-24 md:py-32 bg-surface border-y border-border overflow-hidden grain">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <FadeUp>
              <Pill tone="gold" className="mb-6">
                <IconFire size={12} /> Most picked this week
              </Pill>
            </FadeUp>

            <FadeUp delay={80}>
              <h2 className="display-section text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] text-balance">
                Or get all three.<br />
                <span className="text-gold">Save ₹48.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={160}>
              <div className="mt-7 flex items-baseline gap-4">
                <span className="text-text-muted text-2xl line-through font-mono">₹300</span>
                <span className="text-gold font-display font-bold text-5xl md:text-6xl tracking-tighter">₹249</span>
                <span className="text-text-secondary text-sm">one-time</span>
              </div>
            </FadeUp>

            <FadeUp delay={220}>
              <ul className="mt-8 space-y-3.5">
                {items.map((t, i) =>
                <li key={i} className="flex items-center gap-3 text-text-primary text-[15px]">
                    <IconCheckCircle size={20} className="text-gold shrink-0" strokeWidth={2} />
                    {t}
                  </li>
                )}
              </ul>
            </FadeUp>

            <FadeUp delay={280}>
              <div className="mt-9">
                <GoldButton href="#" size="xl" className="w-full sm:w-auto sm:min-w-[280px]">
                  Get the bundle — ₹249
                </GoldButton>
                <p className="mt-4 text-sm text-text-muted inline-flex items-center gap-2">
                  <IconWhatsApp size={14} className="text-gold" />
                  Delivered instantly to your WhatsApp
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — stacked PDFs */}
          <FadeUp delay={140}>
            <div className="relative h-[380px] md:h-[500px] flex items-center justify-center">
              {[
              { lbl: 'HEIGHT', img: 'assets/height-maxx-cover.png' },
              { lbl: 'HAIR', img: 'assets/hair-maxx-cover.png' },
              { lbl: 'BEARD', img: null }].
              map((g, i) => {
                const tilts = ['-rotate-[10deg]', 'rotate-[2deg]', 'rotate-[12deg]'];
                const offsets = ['-translate-x-[32%]', 'translate-x-0', 'translate-x-[32%]'];
                const z = [10, 20, 15];
                return (
                  <div
                    key={g.lbl}
                    className={`absolute border border-border-2 rounded-[8px] w-[58%] sm:w-[46%] md:w-[48%] aspect-[3/4] max-w-[280px] overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] ${tilts[i]} ${offsets[i]} transition-transform ${g.img ? 'bg-bg' : 'placeholder-stripes'}`}
                    style={{ zIndex: z[i] }}>
                    {g.img ?
                    <img
                      src={g.img}
                      alt={`${g.lbl} Maxx guide cover`}
                      className="w-full h-full object-cover block" /> :


                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">Guide 03</div>
                        <div className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-gold mt-3">{g.lbl}</div>
                        <div className="mt-3 w-12 h-px bg-border-2"></div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mt-3">cover · soon</div>
                      </div>
                    }
                  </div>);

              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>);

}

// ============== PREMIUM KIT ==============
function PremiumSection() {
  const items = [
  {
    icon: IconBook,
    title: 'All three guides',
    body: 'Hair Care Maxx, Height Maxx, Beard Maxx — lifetime access with every future update.'
  },
  {
    icon: IconMessageCircle,
    title: 'Exclusive Access to 90 day Custom Plan Calculator',
    body: 'This calculator will give you a step by step 90 DAY PLAN FOR YOUR HEIGHT, HAIR AND BEARD CARE'
  },
  {
    icon: IconUsers,
    title: 'Brotherhood — 3 months free',
    body: 'Private group of 1,200+ men. Weekly Q&A, progress tracking, accountability.'
  }];


  return (
    <section id="premium" data-screen-label="Premium Kit" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="bg-surface border rounded-[10px] p-6 sm:p-10 md:p-14 relative overflow-hidden"
        style={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}>
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"></div>

          <FadeUp>
            <Pill tone="gold" className="mb-6">
              <IconStar size={12} /> Best value
            </Pill>
          </FadeUp>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
            <div>
              <FadeUp delay={60}>
                <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] text-balance">
                  Or go all-in: the<br />
                  <span className="text-gold">Full Transformation Kit.</span>
                </h2>
              </FadeUp>

              <FadeUp delay={140}>
                <p className="mt-5 text-text-secondary text-lg leading-[1.6] max-w-[520px]">
                  For the men who don’t want to guess. You get the bundle, plus direct
                  access to me, plus the Brotherhood — at one price.
                </p>
              </FadeUp>

              <FadeUp delay={240}>
                <div className="mt-8 flex items-baseline gap-3 flex-wrap">
                  <span className="text-text-muted line-through font-mono text-xl">₹987</span>
                  <span className="text-gold font-display font-bold text-5xl md:text-6xl tracking-tighter">₹499</span>
                  <span className="text-text-secondary text-sm">one-time · lifetime</span>
                </div>
              </FadeUp>

              <FadeUp delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <GoldButton href="#" size="xl" className="w-full sm:w-auto">
                    Claim the Full Kit
                  </GoldButton>
                </div>
                <p className="mt-4 text-xs text-text-muted inline-flex items-center gap-1.5">
                  <IconShield size={13} className="text-gold" /> 7-day refund if you don’t see a clear plan forward
                </p>
              </FadeUp>
            </div>

            {/* Right — inclusion list */}
            <FadeUp delay={180}>
              <div className="space-y-1">
                {items.map((it, i) =>
                <div key={i} className="flex gap-4 py-4 border-b border-border last:border-0">
                    <div className="shrink-0 w-10 h-10 rounded-[8px] bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                      <it.icon size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary text-[15px] tracking-tight">{it.title}</div>
                      <div className="text-[14px] text-text-secondary leading-[1.55] mt-0.5">{it.body}</div>
                    </div>
                  </div>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>);

}

// ============== TESTIMONIALS ==============
function TestimonialsSection() {
  const t = [
  {
    quote: 'Started Hair Care Maxx in February. By April my front line was visibly back. My friends thought I got a transplant.',
    name: 'Rohan, 24',
    meta: 'Bangalore · Hair Care Maxx',
    stars: 5
  },
  {
    quote: 'I’m 5’5. Posture work in Height Maxx added a clean inch. People treat me differently — and that’s before the lifts.',
    name: 'Karan, 21',
    meta: 'Delhi · Height Maxx',
    stars: 5
  },
  {
    quote: 'Beard was patchy for 8 years. Microneedling protocol filled my cheeks in 4 months. No joke.',
    name: 'Aman, 27',
    meta: 'Mumbai · Beard Maxx',
    stars: 5
  },
  {
    quote: 'Joined Brotherhood last year. The accountability is the real product. Got serious in 2 weeks.',
    name: 'Vikram, 19',
    meta: 'Pune · Brotherhood',
    stars: 5
  },
  {
    quote: 'Bought the bundle on a whim. Best ₹249 I’ve spent. The protocols are specific — exact dosages, exact brands.',
    name: 'Siddharth, 26',
    meta: 'Hyderabad · Bundle',
    stars: 5
  }];


  return (
    <section data-screen-label="Testimonials" className="py-24 md:py-32 border-t border-border bg-surface/30">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div className="max-w-[600px]">
            <FadeUp>
              <Pill tone="muted" className="mb-5">Real men · Real changes</Pill>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] text-balance">
                365+ have done this.<br />
                <span className="text-text-secondary">You’re next.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={120}>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <IconStar key={i} size={16} className="fill-current" />)}
              </div>
              <span><span className="text-text-primary font-semibold">4.8 / 5</span> avg · 312 ratings</span>
            </div>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.map((tt, i) =>
          <FadeUp key={i} delay={i % 3 * 80}>
              <figure className={`bg-surface border border-border rounded-[8px] p-6 md:p-7 h-full card-hover flex flex-col ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="flex text-gold mb-4">
                  {[...Array(tt.stars)].map((_, k) => <IconStar key={k} size={14} className="fill-current" />)}
                </div>
                <blockquote className="text-text-primary text-[16px] leading-[1.6] flex-1 text-balance">
                  “{tt.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-sm font-semibold">
                    {tt.name[0]}
                  </div>
                  <div>
                    <div className="text-sm text-text-primary font-semibold">{tt.name}</div>
                    <div className="text-xs text-text-muted mt-0.5">{tt.meta}</div>
                  </div>
                </figcaption>
              </figure>
            </FadeUp>
          )}
        </div>
      </div>
    </section>);

}

// ============== BROTHERHOOD ==============
function BrotherhoodSection() {
  const features = [
  'Weekly Q&A with me in private group',
  'Monthly live Zoom calls (recorded)',
  'Photo reviews and feedback from peers',
  'Accountability check-ins every Sunday',
  'First access to all new guides + drops',
  'Direct WhatsApp line for urgent questions'];


  return (
    <section id="brotherhood" data-screen-label="Brotherhood" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp>
            <Placeholder
              label="brotherhood-group-photo.jpg"
              ratio="4 / 5"
              className="w-full max-w-[480px]" />
            
          </FadeUp>

          <div>
            <FadeUp>
              <Pill tone="gold" className="mb-5">
                <IconUsers size={12} /> The Brotherhood
              </Pill>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] text-balance">
                You won’t do this alone<span className="text-gold">.</span>
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
                {features.map((f, i) =>
                <li key={i} className="flex gap-2.5 text-[14px] leading-[1.5] text-text-secondary">
                    <IconCheck size={16} className="text-gold shrink-0 mt-0.5" strokeWidth={2.25} />
                    {f}
                  </li>
                )}
              </ul>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="mt-9 flex items-baseline gap-3">
                <span className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-gold">₹499</span>
                <span className="text-text-secondary text-sm">/ month · cancel anytime</span>
              </div>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <GoldButton href="#" size="lg" className="w-full sm:w-auto">
                  Join the Brotherhood
                </GoldButton>
                <OutlineButton href="#bundle" size="lg" className="w-full sm:w-auto">
                  Bundled in Full Kit
                </OutlineButton>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>);

}

// ============== FAQ ==============
function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState2(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 text-left py-6 group">
        
        <span className="text-base md:text-lg font-medium text-text-primary group-hover:text-gold transition-colors">
          {q}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary group-hover:border-gold group-hover:text-gold transition-colors">
          {open ? <IconMinus size={14} /> : <IconPlus size={14} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px' }}>
        
        <p className="pb-6 pr-12 text-text-secondary leading-[1.65]">{a}</p>
      </div>
    </div>);

}

function FAQSection() {
  const faqs = [
  { q: 'Will this actually work for me?', a: 'These protocols have worked for 360+ men across different ages, genetics, and starting points. They’re not magic — they require 60–90 days of consistency. If you can follow a checklist, you’ll see change.' },
  { q: 'How is this delivered?', a: 'Instantly. After payment you’ll get a WhatsApp message with download links for all guides. You also get email access. Lifetime access — re-download anytime.' },
  { q: 'I’m under 18 / over 30. Is this for me?', a: 'Sweet spot is 16–30. Height Max specifically targets growth plate optimization for under-25. Everything else (Hair, Beard) works at any age, but adjust expectations after 35.' },
  { q: 'What about side effects from Minoxidil / Finasteride?', a: 'The guides cover dosage, brands, side-effect monitoring, and when to stop. They’re informational — always consult a doctor before starting any medication.' },
  { q: 'Is the Brotherhood worth ₹499/month?', a: 'You get monthly live calls, weekly Q&A, daily peer support. If you’d pay ₹1,500 for one consultation, this is cheaper. Cancel anytime, no questions.' },
  { q: 'Refund policy?', a: 'PDFs: no refunds (you already have the content). Full Transformation Kit: 7-day refund if you go through the audit and don’t feel you have a plan. Brotherhood: cancel before next billing.' }];


  return (
    <section id="faq" data-screen-label="FAQ" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div>
            <FadeUp>
              <Pill tone="muted" className="mb-5">FAQ</Pill>
            </FadeUp>
            <FadeUp delay={80}>
              <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] text-balance">
                Still got questions<span className="text-gold">?</span>
              </h2>
            </FadeUp>
            <FadeUp delay={140}>
              <p className="mt-5 text-text-secondary leading-[1.6]">
                Can’t find what you’re looking for? DM me on Instagram —
                I reply to every message about the guides.
              </p>
            </FadeUp>
            <FadeUp delay={220}>
              <OutlineButton href="#" className="mt-7">
                DM me on Instagram <IconArrowRight size={14} />
              </OutlineButton>
            </FadeUp>
          </div>

          <FadeUp delay={120}>
            <div>
              {faqs.map((f, i) =>
              <FAQItem key={i} {...f} defaultOpen={i === 0} />
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>);

}

// ============== FINAL CTA ==============
function FinalCTA() {
  return (
    <section data-screen-label="Final CTA" className="py-24 md:py-32 border-t border-border bg-surface/40 relative overflow-hidden grain">
      <div className="max-w-container mx-auto px-5 md:px-8 text-center">
        <FadeUp>
          <Pill tone="red" className="mb-7">
            <IconFire size={12} /> 26 days will pass anyway
          </Pill>
        </FadeUp>
        <FadeUp delay={80}>
          <h2 className="display-hero text-[3rem] sm:text-[4rem] md:text-[6rem] text-balance max-w-[18ch] mx-auto">
            Different mirror.<br />
            <span className="text-gold">Same you.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={160}>
          <p className="mt-7 text-lg md:text-xl text-text-secondary max-w-[520px] mx-auto leading-[1.55]">
            Start today, look different by next month.
            Or scroll past and stay the same. Pick.
          </p>
        </FadeUp>
        <FadeUp delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <GoldButton href="#bundle" size="xl" className="w-full sm:w-auto sm:min-w-[280px]">
              Get the bundle — ₹249
            </GoldButton>
            <OutlineButton href="#premium" size="lg" className="w-full sm:w-auto">
              See the Full Kit
            </OutlineButton>
          </div>
        </FadeUp>
        <FadeUp delay={320}>
          <p className="mt-7 text-xs text-text-muted">
            One-time payment · Delivered to your WhatsApp · Lifetime updates
          </p>
        </FadeUp>
      </div>
    </section>);

}

// ============== FOOTER ==============
function Footer() {
  return (
    <footer className="py-14 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <a href="#top" className="font-display font-bold text-2xl tracking-tighter">
              {CREATOR_NAME}<span className="text-gold">.</span>
            </a>
            <p className="mt-3 text-text-muted text-sm max-w-[360px] leading-[1.6]">
              Hair, height, beard, and looksmaxxing protocols for Indian men 16–30.
              Made in India.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-text-secondary">
            <a href="#guides" className="hover:text-gold transition-colors">Guides</a>
            <a href="#bundle" className="hover:text-gold transition-colors">Bundle</a>
            <a href="#brotherhood" className="hover:text-gold transition-colors">Brotherhood</a>
            <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">YouTube</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-text-muted">
          <div>© 2026 {CREATOR_NAME}. All content is informational. Consult a doctor before starting any protocol.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-secondary transition-colors">Refunds</a>
          </div>
        </div>
      </div>
    </footer>);

}

// ============== HOW IT WORKS ==============
function HowItWorks() {
  const steps = [
  {
    n: '01',
    title: 'Pay ₹249',
    body: 'One tap. UPI, card, or wallet. No subscriptions, no upsells.'
  },
  {
    n: '02',
    title: 'Get it on WhatsApp',
    body: 'All three PDFs hit your inbox in 60 seconds. Open and start reading.'
  },
  {
    n: '03',
    title: 'Look different in 26 days',
    body: 'Follow the daily protocols. Track progress. Stack the wins.'
  }];

  return (
    <section data-screen-label="How it works" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-[640px] mb-12 md:mb-16">
          <FadeUp>
            <Pill tone="muted" className="mb-5">How it works</Pill>
          </FadeUp>
          <FadeUp delay={60}>
            <h2 className="display-section text-[2.25rem] sm:text-[3rem] md:text-[3.75rem]">
              3 steps. <span className="text-text-secondary">No fluff.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-[10px] overflow-hidden border border-border">
          {steps.map((s, i) =>
          <FadeUp key={s.n} delay={i * 80}>
              <div className="bg-bg p-7 md:p-8 h-full">
                <div className="font-mono text-xs text-gold tracking-[0.2em]">STEP {s.n}</div>
                <h3 className="mt-5 font-display font-bold text-2xl md:text-3xl tracking-tighter">
                  {s.title}
                </h3>
                <p className="mt-3 text-text-secondary leading-[1.6] text-[15px]">
                  {s.body}
                </p>
              </div>
            </FadeUp>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, {
  Nav, Hero, FeaturedStrip, PainSection, GuidesSection, BundleSection,
  PremiumSection, TestimonialsSection, BrotherhoodSection, FAQSection,
  FinalCTA, Footer, HowItWorks
});