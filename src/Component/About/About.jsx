import React from 'react'
import './About.css'
import aboutmeimage from '../../assets/aboutmeimage.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
          <h1>About me</h1>
          </div>  
          <div className='about-sections'>
            <div className='about-left'>
              <img src={aboutmeimage}alt=''/>
            </div>
            <div className='about-right'>
              <div className='about-para'>
              <p>Hi, I'm Chamudi Rasanjalee, a passionate and motivated software engineer with a strong foundation in
                full-stack development and a keen interest in building scalable, user-centric applications. Currently
                pursuing a BSc in Information Technology at the University of Moratuwa, I have gained practical experience
                through internships and academic projects, honing my skills in technologies like React, .NET, and SQL.</p>
                <p> I'm always eager to learn new technologies and tackle challenging problems, aiming to grow both personally and professionally in 
                 the ever-evolving field of software engineering.</p>
              </div>
              <div className='about-skills'>
                <div className='about-skill'><p>.NET</p><hr style={{width:"50%"}}></hr></div>
                            <div className='about-skill'><p>React Js</p><hr style={{width:"50%"}}></hr></div>
                            <div className='about-skill'><p>Java</p><hr style={{width:"50%"}}></hr></div>
                            <div className='about-skill'><p>SpringBoot</p><hr style={{width:"50%"}}></hr></div>
              </div>
            </div>
            
          </div>


    </div>
  )
}

export default About