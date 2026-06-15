const SHEETS_ENDPOINT = import.meta.env.VITE_SHEETS_ENDPOINT

export function logClick(slug) {
  if (!SHEETS_ENDPOINT) return
  try {
    fetch(SHEETS_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        slug,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || '',
      }),
    }).catch(() => {})
  } catch (e) {}
}
