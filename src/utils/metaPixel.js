// src/utils/metaPixel.js

export function trackViewContent({ name, id, value, currency = 'INR' }) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'ViewContent', {
    content_name: name,
    content_ids: [id],
    content_type: 'product',
    value: value,
    currency: currency,
  });
}

export function trackInitiateCheckout({ name, id, value, currency = 'INR' }) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'InitiateCheckout', {
    content_name: name,
    content_ids: [id],
    content_type: 'product',
    value: value,
    currency: currency,
    num_items: 1,
  });
}

export const PRODUCT_MAP = {
  'hair': { name: 'Hair Fixed PDF', id: 'hair-pdf', value: 299 },
  'beard': { name: 'Beard Maxxed PDF', id: 'beard-pdf', value: 299 },
  'height': { name: 'Height Maxxed PDF', id: 'height-pdf', value: 299 },
  'skin': { name: 'Skin Reset PDF', id: 'skin-pdf', value: 349 },
  'bundle': { name: '3-PDF Bundle', id: 'bundle-3', value: 595 },
  'kit': { name: 'Premium Kit', id: 'premium-kit', value: 1199 },
};

export function resolveProductFromSlug(slug) {
  if (!slug) return PRODUCT_MAP['bundle'];
  const s = slug.toLowerCase();
  if (s.includes('-bundle') || s.includes('triple') || s.includes('bundle-')) return PRODUCT_MAP['bundle'];
  if (s.includes('-kit') || s.includes('kit-')) return PRODUCT_MAP['kit'];
  if (s.includes('hair')) return PRODUCT_MAP['hair'];
  if (s.includes('height')) return PRODUCT_MAP['height'];
  if (s.includes('beard')) return PRODUCT_MAP['beard'];
  if (s.includes('skin')) return PRODUCT_MAP['skin'];
  return PRODUCT_MAP['bundle']; // safe fallback
}
