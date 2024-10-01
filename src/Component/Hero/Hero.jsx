import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
const Hero = () => {
  return (
    <div className='hero'>
    <img src={profile_img}/>
<h1><span>I'm chamudi Rasanjalee,</span> Fullstack developer Based in Sri Lanka. </h1>
<p>I have hands-on experience in .NET, Java, and React technologies. </p>
<div className='hero-action'>
<div className='hero-connect'>
connect with me
</div>
<div className='hero-resume'>My resume</div>
</div>
    </div>
  )
}

export default Hero 