import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import HairPage from './pages/HairPage'
import BeardPage from './pages/BeardPage'
import HeightPage from './pages/HeightPage'
import BundlePage from './pages/BundlePage'
import KitPage from './pages/KitPage'
import ThankYouPage from './pages/ThankYouPage'
import ThankYouHairBeardPage from './pages/ThankYouHairBeardPage'
import ThankYouHairHeightPage from './pages/ThankYouHairHeightPage'
import SkinPage from './pages/SkinPage'
import ThankYouHairPage from './pages/ThankYouHairPage'
import RedirectPage from './pages/RedirectPage'
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hair" element={<HairPage />} />
        <Route path="/beard" element={<BeardPage />} />
        <Route path="/height" element={<HeightPage />} />
        <Route path="/bundle" element={<BundlePage />} />
        <Route path="/kit" element={<KitPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/thank-you-hair" element={<ThankYouHairPage />} />
        <Route path="/thank-you-hair-beard" element={<ThankYouHairBeardPage />} />
        <Route path="/thank-you-hair-height" element={<ThankYouHairHeightPage />} />
        <Route path="/skin" element={<SkinPage />} />
        <Route path="/r/:slug" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
