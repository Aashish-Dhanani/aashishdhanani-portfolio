import React from 'react';
import './navbar.css';
import logo from '../../pictures/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
            <img height={100} src={logo} alt="Logo" className="logo"/>
            <div className ="menu">
                <Link className='menuListItem'>Home</Link>
                <Link className='menuListItem'>Projects</Link>
                <Link className='menuListItem'>Experience</Link>
            </div>
            <button className="menuButton">
                <img src='' alt='' className='menuImg'/>Contact Me</button>
        </nav>
  )
  
}

export default Navbar