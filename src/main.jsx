import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Starda.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Header from './Header.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Section4 from './Section4.jsx'
import Section5 from './Section5.jsx'
import Section6 from './Section6.jsx'
import Section7 from './Section7.jsx'
import Section8 from './Section8.jsx'
import Section9 from './Section9.jsx'
import Section10 from './Section10.jsx'
import Footer from './Footer.jsx'
import Headermain from './Headermain.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='header'>
      
    <Header/>
    </div>
    <Headermain/>
    <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  <Section6/>
  <Section7/>
  <Section8/>
  <Section9/>
  <Section10/>
  <Footer/>
  </StrictMode>,
)
