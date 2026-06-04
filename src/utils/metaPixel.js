/**
 * Meta Pixel helper functions.
 * All functions are safe to call even if fbq hasn't loaded yet.
 */

export const PRODUCT_MAP = {
  hair:   { name: 'Hair Fixed PDF',    id: 'hair-pdf',     value: 299  },
  beard:  { name: 'Beard Maxxed PDF',  id: 'beard-pdf',    value: 299  },
  height: { name: 'Height Maxxed PDF', id: 'height-pdf',   value: 299  },
  skin:   { name: 'Skin Reset PDF',    id: 'skin-pdf',     value: 349  },
  bundle: { name: '3-PDF Bundle',      id: 'bundle-3',     value: 595  },
  kit:    { name: 'Premium Kit',       id: 'premium-kit',  value: 1199 },
}

export function trackViewContent({ name, id, value, currency = 'INR' }) {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', 'ViewContent', {
    content_name: name,
    content_ids:  [id],
    content_type: 'product',
    value,
    currency,
  })
}

export function trackInitiateCheckout({ name, id, value, currency = 'INR' }) {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', 'InitiateCheckout', {
    content_name: name,
    content_ids:  [id],
    content_type: 'product',
    value,
    currency,
    num_items: 1,
  })
}

/**
 * Resolves a slug to a product entry from PRODUCT_MAP.
 * Only call this for slugs whose destination is an external (Razorpay) URL.
 */
export function resolveProductFromSlug(slug) {
  if (slug.includes('-bundle')) return PRODUCT_MAP.bundle
  if (slug.includes('-kit'))    return PRODUCT_MAP.kit
  if (slug.includes('skin'))    return PRODUCT_MAP.skin
  if (slug.includes('height'))  return PRODUCT_MAP.height
  if (slug.includes('beard'))   return PRODUCT_MAP.beard
  if (slug.includes('hair'))    return PRODUCT_MAP.hair
  return PRODUCT_MAP.bundle  // fallback
}
