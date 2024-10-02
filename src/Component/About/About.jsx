import React from 'react'
import './About.css'
import aboutmeimage from '../../assets/aboutmeimage.jpeg'
const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
          <h1>About me</h1>
          <img src=''alt=''/>
          </div>  
          <div className='about-sections'></div>
          <div className='about-left'>
            <img src={aboutmeimage}alt=''/>
          </div>
          <div className='about-right'>
            <div className='about-para'>
            <p>Hi, I'm Chamudi Rasanjalee, a passionate and motivated software engineer with a strong foundation in 
              full-stack development and a keen interest in building scalable, user-centric applications. Currently 
              pursuing a BSc in Information Technology at the University of Moratuwa, I have gained practical experience 
              through internships and academic projects, honing my skills in technologies like React, .NET, and SQL.
              I thrive in dynamic environments where I can solve problems and contribute to impactful solutions, 
              whether it's developing efficient ERP systems or collaborating on innovative team projects. I'm always eager to learn new technologies and tackle challenging problems, aiming to grow both personally and professionally in the ever-evolving field of software engineering.</p>
            </div>
          </div>
          <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
          <div className='about-skill'><p>React Js</p><hr style={{width:"50%"}}></hr></div>
          <div className='about-skill'><p>JavaScript</p><hr style={{width:"50%"}}></hr></div>
          <div className='about-skill'><p>Java</p><hr style={{width:"50%"}}></hr></div>


    </div>
  )
}

export default About