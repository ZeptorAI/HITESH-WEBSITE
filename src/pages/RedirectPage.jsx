import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { linkMap } from '../data/linkMap'
import { trackInitiateCheckout, resolveProductFromSlug } from '../utils/metaPixel'
import { logClick } from '../utils/logClick'

const REDIRECT_DELAY = 150

// Matches: htsh-<page>-<yyMMMdd>-<reelname>
// e.g. htsh-hair-26jun23-savedmyhair
const TRACKING_RE = /^htsh-(hair|height|beard|bundle|skin|kit)-(\d{2}[a-z]{3}\d{1,2})-([a-z0-9]+)$/

export default function RedirectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // 1. Legacy linkMap lookup — buy buttons and existing campaigns
    if (linkMap[slug] !== undefined) {
      const destination = linkMap[slug]
      logClick(slug)
      setTimeout(() => {
        if (destination.startsWith('http')) {
          trackInitiateCheckout(resolveProductFromSlug(slug))
          window.location.href = destination
        } else {
          navigate(destination, { replace: true })
        }
      }, REDIRECT_DELAY)
      return
    }

    // 2. Dynamic tracking slug — per-reel attribution
    const match = TRACKING_RE.exec(slug)
    if (match) {
      const page = match[1]
      logClick(slug)
      setTimeout(() => {
        navigate(`/${page}`, { replace: true })
      }, REDIRECT_DELAY)
      return
    }

    // 3. Unknown slug — fall back to home
    console.warn('[redirect] unknown slug:', slug)
    navigate('/', { replace: true })
  }, [slug, navigate])

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
