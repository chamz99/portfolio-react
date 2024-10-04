import React from 'react'
import Navbar from './Component/NavBar/Navbar';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/portfolio';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
    </div>
  )
}

export default App