import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { linkMap } from '../data/linkMap'
import { trackInitiateCheckout, resolveProductFromSlug } from '../utils/metaPixel'

const SHEETS_ENDPOINT = import.meta.env.VITE_SHEETS_ENDPOINT

const TIMEOUT_MS     = 800   // max wait before redirecting anyway
const REDIRECT_DELAY = 150   // small pause so the fetch has a head-start

export default function RedirectPage() {
  const { slug }    = useParams()
  const navigate    = useNavigate()
  const destination = linkMap[slug] || '/'

  useEffect(() => {
    const logPromise = fetch(SHEETS_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',          // avoids CORS preflight — Apps Script doesn't handle OPTIONS
      headers: { 'Content-Type': 'text/plain' },  // simple header = no preflight
      body: JSON.stringify({
        slug,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer:  document.referrer || '',
      }),
    })
    .catch(() => {})  // never block the redirect on a network error

    const timeoutPromise = new Promise(resolve => setTimeout(resolve, TIMEOUT_MS))

    Promise.race([logPromise, timeoutPromise]).then(() => {
      setTimeout(() => {
        if (destination.startsWith('http')) {
          // Fire InitiateCheckout before leaving — REDIRECT_DELAY gives it time to send
          trackInitiateCheckout(resolveProductFromSlug(slug))
          window.location.href = destination
        } else {
          navigate(destination, { replace: true })
        }
      }, REDIRECT_DELAY)
    })
  }, [slug, destination, navigate])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        fontFamily: 'Inter, sans-serif',
        color: '#71717A',
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '2px solid #1F1F1F',
          borderTopColor: '#D4AF37',
          animation: 'spin 0.7s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <span style={{ fontSize: 13, letterSpacing: '0.05em' }}>Redirecting...</span>
    </div>
  )
}
