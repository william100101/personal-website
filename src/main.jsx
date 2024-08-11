import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About/>
    <Footer />
  </StrictMode>,
)
/*have a stored state here for switching between pages */