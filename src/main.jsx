import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//COMPONENTS
import Header from './Header.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Resume from './Resume.jsx'

//ASSETS
import portrait from './assets/portrait.jpg'

//STYLE SHEET
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content 
      portrait={portrait}
      name="Wiliam Choi"
      title="Software Engineer"
      description=" Hello there! My name is William Choi, an aspiring software engineer currently a senior at Bucknell University pursuing a Bachelor's of Science in Computer Science. 
      I grew up in Lancaster, PA being raised by a family of Chinese immigrants and came to loveany work related to computing and programming after realizing how the field encapsulted the creativity of the arts and the technicality of traditional engineering. 
      In my free time, I often enjoy reading, and playing the saxophone for my university's Jazz Band."
    />
    <Resume/>
    <Footer />
  </StrictMode>,
)
/*have a stored state here for switching between pages */