import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//LAYOUT COMPONENTS
import Header from './Header.jsx'
import Footer from './Footer.jsx'

//PAGES
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import About from './About.jsx'

//STYLE SHEET
import './index.css'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
  </Router>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
/*have a stored state here for switching between pages */