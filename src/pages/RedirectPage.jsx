import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { linkMap } from '../data/linkMap'
import { trackInitiateCheckout, resolveProductFromSlug } from '../utils/metaPixel'
import { logClick } from '../utils/logClick'

const REDIRECT_DELAY = 150

export default function RedirectPage() {
  const { slug }    = useParams()
  const navigate    = useNavigate()
  const destination = linkMap[slug] || '/'

  useEffect(() => {
    logClick(slug)
    setTimeout(() => {
      if (destination.startsWith('http')) {
        trackInitiateCheckout(resolveProductFromSlug(slug))
        window.location.href = destination
      } else {
        navigate(destination, { replace: true })
      }
    }, REDIRECT_DELAY)
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
