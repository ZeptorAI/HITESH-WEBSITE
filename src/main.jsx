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
import RedirectPage from './pages/RedirectPage'
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
        <Route path="/thank-you-hair-beard" element={<ThankYouHairBeardPage />} />
        <Route path="/thank-you-hair-height" element={<ThankYouHairHeightPage />} />
        <Route path="/skin" element={<SkinPage />} />
        <Route path="/r/:slug" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
