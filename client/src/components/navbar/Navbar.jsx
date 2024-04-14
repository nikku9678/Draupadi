import { useState } from "react"
import "./Navbar.css"
import {Link}  from 'react-router-dom'
// import Logo from '../../assets/logo.png';
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const handleShowOff = ()=>{

    setIsNavExpanded(prev => !prev);
  }
  return (
    <>
    <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars" style={{color:'black'}}></i>
      </label>
      <label className="logo">
        <img src="images/logo.webp" alt="" />
      </label>
      <ul>
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/dias">Why the Dias?</Link></li>
        <li><Link to="/find-expert">Find an Expert</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    {/* <section></section> */}
    </>
  );
}