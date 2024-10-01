import React from 'react'
import logo from '../../assets/logo.png';
import '../NavBar/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
    {/* <img src={logo} alt=''/> */}
<ul className='nav-menu'>
    <li>Home</li>
    <li>About me</li>
    <li>Service</li>
    <li>Portfolio</li>
    <li>Contact</li>
</ul>
<div className='nav-connect'>Connect with Me</div>
    </div>
  )
}

export default Navbar;