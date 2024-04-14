import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>why the Dais?</li>
        <li>Find an Expert</li>
        <li>Register As an Expert</li>
        <li>Login</li>
      </ul>
    </div>
  )
}

export default Navbar