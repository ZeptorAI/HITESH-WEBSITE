/**
 * LINK MAP — single source of truth for all tracked redirect slugs.
 *
 * Every slug maps to its destination (internal path or external URL).
 * Edit destinations here — nowhere else.
 *
 * Naming convention:  htsh-<page>-<section>-<action>
 */

// ─── Razorpay checkout URLs ───────────────────────────────────────────────────
const RZP = {
  hair:   'https://rzp.io/rzp/t9bVYuV',
  beard:  'https://rzp.io/rzp/t5BP4M6',
  height: 'https://rzp.io/rzp/OC9TDdoC',
  bundle: 'https://rzp.io/rzp/ixUBVyZ',
  kit:    'https://rzp.io/rzp/46naUPXM',
}

// ─── Post-purchase upsell links ───────────────────────────────────────────────
const UPSELL = {
  hair:   'https://rzp.io/rzp/MhT3L6a',   // already has hair, add beard+height
  beard:  'https://rzp.io/rzp/aOcUpMs',   // already has beard, add hair+height
  height: 'https://rzp.io/rzp/LUiHg1l',   // already has height, add hair+beard
}

// ─── Slug map ─────────────────────────────────────────────────────────────────
export const linkMap = {

  // ── Homepage — Nav ───────────────────────────────────────────────────────────
  'htsh-home-nav-bundle':         '/bundle',

  // ── Homepage — Hero ──────────────────────────────────────────────────────────
  'htsh-home-hero-bundle':        '/bundle',

  // ── Homepage — Guides section (3 product cards) ───────────────────────────
  'htsh-home-guides-hair':        '/hair',
  'htsh-home-guides-height':      '/height',
  'htsh-home-guides-beard':       '/beard',

  // ── Homepage — Bundle section ─────────────────────────────────────────────
  'htsh-home-bundle-cta':         '/bundle',

  // ── Homepage — Premium / Kit section ─────────────────────────────────────
  'htsh-home-premium-kit':        '/kit',

  // ── Homepage — Final CTA section ─────────────────────────────────────────
  'htsh-home-finalcta-bundle':    '/bundle',
  'htsh-home-finalcta-kit':       '/kit',

  // ── Homepage — Sticky mobile bar ─────────────────────────────────────────
  'htsh-home-sticky-bundle':      '/bundle',

  // ── Popup modal (shown on homepage + all product pages) ──────────────────
  'htsh-popup-bundle':            RZP.bundle,

  // ── Sticky offer bar (after popup dismiss, same contexts) ────────────────
  'htsh-bar-bundle':              RZP.bundle,

  // ── Hair product page (/hair) ─────────────────────────────────────────────
  'htsh-hair-header-bundle':      RZP.bundle,   // header "All 3" button
  'htsh-hair-hero-buy':           RZP.hair,     // hero "₹299 — Hair Fixed"
  'htsh-hair-hero-bundle':        RZP.bundle,   // hero "Buy All 3 — ₹595"
  'htsh-hair-pricing-buy':        RZP.hair,     // pricing block
  'htsh-hair-upsell-bundle':      '/bundle',    // BundleUpsell section
  'htsh-hair-kit':                '/kit',       // Brotherhood/Kit mention
  'htsh-hair-finalcta-buy':       RZP.hair,     // page-bottom single CTA
  'htsh-hair-finalcta-bundle':    '/bundle',    // page-bottom "All 3 for ₹595"

  // ── Beard product page (/beard) ───────────────────────────────────────────
  'htsh-beard-header-bundle':     RZP.bundle,
  'htsh-beard-hero-buy':          RZP.beard,
  'htsh-beard-hero-bundle':       RZP.bundle,
  'htsh-beard-pricing-buy':       RZP.beard,
  'htsh-beard-upsell-bundle':     '/bundle',
  'htsh-beard-kit':               '/kit',
  'htsh-beard-finalcta-buy':      RZP.beard,
  'htsh-beard-finalcta-bundle':   '/bundle',

  // ── Height product page (/height) ─────────────────────────────────────────
  'htsh-height-header-bundle':    RZP.bundle,
  'htsh-height-hero-buy':         RZP.height,
  'htsh-height-hero-bundle':      RZP.bundle,
  'htsh-height-pricing-buy':      RZP.height,
  'htsh-height-upsell-bundle':    '/bundle',
  'htsh-height-kit':              '/kit',
  'htsh-height-finalcta-buy':     RZP.height,
  'htsh-height-finalcta-bundle':  '/bundle',

  // ── Bundle page (/bundle) ─────────────────────────────────────────────────
  'htsh-bundle-header-kit':       '/kit',       // header "Full Kit — ₹1199"
  'htsh-bundle-hero-buy':         RZP.bundle,   // hero "Get the Bundle — ₹595"
  'htsh-bundle-pricing-buy':      RZP.bundle,   // pricing block
  'htsh-bundle-upsell-kit':       '/kit',       // kit upsell strip
  'htsh-bundle-guide-hair':       '/hair',      // guide card "See full guide →"
  'htsh-bundle-guide-beard':      '/beard',
  'htsh-bundle-guide-height':     '/height',

  // ── Kit page (/kit) ───────────────────────────────────────────────────────
  'htsh-kit-header-buy':          RZP.kit,      // header "Claim Full Kit"
  'htsh-kit-hero-buy':            RZP.kit,      // hero primary CTA
  'htsh-kit-hero-bundle':         '/bundle',    // hero "Just the bundle — ₹595"
  'htsh-kit-pricing-buy':         RZP.kit,      // pricing block
  'htsh-kit-finalcta-buy':        RZP.kit,      // page-bottom CTA

  // ── Thank You page — single guide bought, upsell other 2 ─────────────────
  'htsh-ty-hair-upsell':          UPSELL.hair,
  'htsh-ty-beard-upsell':         UPSELL.beard,
  'htsh-ty-height-upsell':        UPSELL.height,

  // ── Thank You Hair+Beard page — upsell Height ─────────────────────────────
  'htsh-ty-hairbeard-height':     RZP.height,

  // ── Thank You Hair+Height page — upsell Beard ────────────────────────────
  'htsh-ty-hairheight-beard':     RZP.beard,

  // ── Skin Reset product page (/skin) ──────────────────────────────────────
  'htsh-skin-header-buy':         'https://rzp.io/rzp/mWvoSkCo',
  'htsh-skin-hero-buy':           'https://rzp.io/rzp/mWvoSkCo',
  'htsh-skin-pricing-buy':        'https://rzp.io/rzp/mWvoSkCo',
  'htsh-skin-finalcta-buy':       'https://rzp.io/rzp/mWvoSkCo',
  'htsh-skin-kit':                '/kit',

  // ── Homepage — Nav + Guides links for Skin ───────────────────────────────
  'htsh-home-nav-skin':           '/skin',
  'htsh-home-guides-skin':        '/skin',

  // ── External campaign links — Height Maxx ────────────────────────────────
  'htsh-height-1':                '/height',
  'htsh-height-2':                '/height',
  'htsh-height-3':                '/height',
}
