import React from 'react'
import Navbar from './Component/NavBar/Navbar';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/portfolio';
import Contactme from './Component/Contact/Contactme';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contactme/>
    </div>
  )
}

export default App