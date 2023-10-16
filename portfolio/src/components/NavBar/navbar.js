import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {

  const email = "aashishd2004@gmail.com";

  const handleContactClick = () => {
    window.location.href = `mailto:${email}`;
  };


  return (
    <nav className='navbar'>
      <div className='container'>
        <ul className='ulList'>
          <li className='item'>
            <Link to="home" className='menuListItem' smooth={true} duration={400} offset={-100}>Bio</Link>
          </li>
          <li className='item'>
            <Link to="projects" className='menuListItem' smooth={true} duration={400} offset={-100}>Projects</Link>
          </li>
        </ul>
        <button 
          className='menuButton' 
          onClick={handleContactClick}>
          Contact Me</button>
      </div>
    </nav>

  );
}

export default Navbar

