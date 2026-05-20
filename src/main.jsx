import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import HairPage from './pages/HairPage'
import BeardPage from './pages/BeardPage'
import HeightPage from './pages/HeightPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hair" element={<HairPage />} />
        <Route path="/beard" element={<BeardPage />} />
        <Route path="/height" element={<HeightPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
