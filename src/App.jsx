import React from 'react'
import Navbar from './Component/NavBar/Navbar';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App