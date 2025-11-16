import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ScrollToTop from './utlis/ScrollToTop.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <ScrollToTop/>
    <App />
  </StrictMode>
  </BrowserRouter>
)
