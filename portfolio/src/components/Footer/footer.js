import React from 'react';
import './footer.css';
import ln from '../../pictures/linkedin.png';
import gh from '../../pictures/github.png';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='name'>Aashish Dhanani</div>
        <div className='email'>adhanani@trinity.edu</div>
        <div className='icons'>
            <img 
                src={ln} 
                className='linked' 
                alt='iconlinked' 
                onClick={() => {
                    window.open('https://www.linkedin.com/in/aashishdhanani');
            }}/>

            <img 
                src={gh} 
                className='github' 
                alr='icongit'
                onClick={() => {
                    window.open('https://github.com/Aashish-Dhanani');
            }}/>
        </div>
    </footer>
  )
}

export default Footer;