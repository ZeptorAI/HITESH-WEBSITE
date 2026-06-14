import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

// Page chunks — each becomes its own lazy-loaded JS file
const HairPage              = lazy(() => import('./pages/HairPage'))
const Hair2Page             = lazy(() => import('./pages/Hair2Page'))
const BeardPage             = lazy(() => import('./pages/BeardPage'))
const HeightPage            = lazy(() => import('./pages/HeightPage'))
const BundlePage            = lazy(() => import('./pages/BundlePage'))
const KitPage               = lazy(() => import('./pages/KitPage'))
const SkinPage              = lazy(() => import('./pages/SkinPage'))
const CheckoutInfo          = lazy(() => import('./pages/CheckoutInfo'))
const RedirectPage          = lazy(() => import('./pages/RedirectPage'))
const ThankYouPage          = lazy(() => import('./pages/ThankYouPage'))
const ThankYouHairPage      = lazy(() => import('./pages/ThankYouHairPage'))
const ThankYouHairBeardPage = lazy(() => import('./pages/ThankYouHairBeardPage'))
const ThankYouHairHeightPage= lazy(() => import('./pages/ThankYouHairHeightPage'))

// Inter — body / UI text (self-hosted)
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
// Bricolage Grotesque — display headings (self-hosted, replaces Google Fonts)
import '@fontsource/bricolage-grotesque/400.css'
import '@fontsource/bricolage-grotesque/600.css'
import '@fontsource/bricolage-grotesque/700.css'
import '@fontsource/bricolage-grotesque/800.css'
// JetBrains Mono — prices, labels, timers (self-hosted, replaces Google Fonts)
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './index.css'

function PageSpinner() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0A0A0A' }}>
      <div style={{ width: 38, height: 38, border: '3px solid rgba(212,175,55,0.2)', borderTopColor: '#D4AF37', borderRadius: '50%', animation: 'page-spin 0.7s linear infinite' }} />
      <style>{`@keyframes page-spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageSpinner />}>
        <Routes>
          <Route path="/"                    element={<App />} />
          <Route path="/hair"                element={<HairPage />} />
          <Route path="/hair2"               element={<Hair2Page />} />
          <Route path="/beard"               element={<BeardPage />} />
          <Route path="/height"              element={<HeightPage />} />
          <Route path="/bundle"              element={<BundlePage />} />
          <Route path="/kit"                 element={<KitPage />} />
          <Route path="/skin"                element={<SkinPage />} />
          <Route path="/checkout-info"       element={<CheckoutInfo />} />
          <Route path="/r/:slug"             element={<RedirectPage />} />
          <Route path="/thank-you"           element={<ThankYouPage />} />
          <Route path="/thank-you-hair"      element={<ThankYouHairPage />} />
          <Route path="/thank-you-hair-beard"  element={<ThankYouHairBeardPage />} />
          <Route path="/thank-you-hair-height" element={<ThankYouHairHeightPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
