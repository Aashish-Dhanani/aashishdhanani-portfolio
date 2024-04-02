import React from 'react';
import './intro.css';
import bg from '../../pictures/Face.png';
import ln from '../../pictures/linkedin.png';
import gh from '../../pictures/github.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div className='header'>
        <div className='threeColumns'>
          <a href="/">
            <img className='pic' src={bg} alt="Aashish Dhanani" />
          </a>
        </div>
        <span className='description'>
          <h1 id="home">Aashish Dhanani</h1>
          <p className='tu'>Department of Computer Science, Trinity University</p>
          <p className='em'>adhanani@trinity.edu</p>
          <p>
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
                    window.open('https://github.com/aashishdhanani');
                }}/>
          </p>
        </span>
    </div>

  );
}

export default Intro;
