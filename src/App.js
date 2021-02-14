import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'
import MapSection from './components/map/Map' // import the map here
import DisclaimerSection from './components/disclaimer/Disclaimer'
import FooterSection from './components/footer/Footer'


import './App.css'

const location = {
  address: ' 23 centennial street, Regina, Saskatchewan',
  lat: 50.41535,
  lng: -104.59671,
} // our location object from earlier

const App = () => (
  <div className="App">
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} /> 
    <DisclaimerSection />
    <FooterSection />
  </div>
)

export default App
