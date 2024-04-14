import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <img src="images/logo.webp" alt="" />
      </div>
      <div className='nav_links'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dias">why the Dais?</Link></li>
        <li><Link to="/expert">Find an Expert</Link></li>
        <li><Link to="/register">Register As an Expert</Link></li>
        <li><Link to="/login">Login</Link></li>
       
      </ul>
      </div>
    </div>
  )
}

export default Navbar