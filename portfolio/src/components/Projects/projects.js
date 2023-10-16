import React from 'react'
import './projects.css';
import wl from '../../pictures/wordle.png';
import fd from '../../pictures/faceid.png';
import sa from '../../pictures/sport.png';
import gb from '../../pictures/grade.png';
import wa from '../../pictures/web.png';

const Projects = () => {
  return (
    <section id="portfolio">
        <div className='project'>
            <h3 id="projects">Projects</h3>
            
            <div className='paper'>
                <p className='title'>
                    <strong className='head'>Serving Up Stats</strong>
                    <a type='button' href='https://github.com/Aashish-Dhanani/What-Are-The-Odds'><button className='btn'>Code</button></a>
                </p>
                <p>
                    Developed tennis match prediction model using only pre-match data with various ML models.
                </p>
                <i>Aashish Dhanani</i>
            </div>

            <div className='paper'>
                <p className='title'>
                    <b className='head'>Portfolio</b>
                    <a type='button' href='https://github.com/Aashish-Dhanani/aashishdhanani-portfolio'><button className='btn'>Code</button></a>
                </p>
                <p>
                    Developed a personal portfolio using front-end tools such as ReactJs, HTML, and CSS.
                </p>
                <i>Aashish Dhanani</i>
            </div>

            <div className='paper'>
                <p className='title'>
                    <b className='head'>Wordle Clone</b>
                    <a type='button' href='https://github.com/Aashish-Dhanani/Wordle'><button className='btn'>Code</button></a>
                </p>
                <p>
                    Developed a Wordle clone for my CS1 final project.
                </p>
                <i>Aashish Dhanani</i>
            </div>

            <div className='paper'>
                <p className='title'>
                    <b className='head'>Face Detection</b>
                    <a type='button' href='https://github.com/Aashish-Dhanani/Face-Detection'><button className='btn'>Code</button></a>
                </p>
                <p>
                    Developed a tool for face detection using python libraries such as OpenCV.
                </p>
                <i>Aashish Dhanani</i>
            </div>  

            <div className='paper'>
                <p className='title'>
                    <b className='head'>Gradebook</b>
                    <a type='button' href='https://github.com/Aashish-Dhanani/IB-CS-IA-Code'><button className='btn'>Code</button></a>
                </p>
                <p>
                    Developed a gradebook for highschool students as part of my IB CS final project.
                </p>
                <i>Aashish Dhanani</i>
            </div>





            {/* <div className='projectimgs'>
                <img 
                    src ={wl} 
                    alt='icon' 
                    className='projectimg'
                    onClick={() => {
                        window.open('https://github.com/Aashish-Dhanani/Wordle');
                    }}/>

                <img 
                    src ={fd} 
                    alt='icon' 
                    className='projectimg'
                    onClick={() => {
                        window.open('https://github.com/Aashish-Dhanani/Face-Detection');
                    }}/>
                <img 
                    src ={sa} 
                    alt='icon' 
                    className='projectimg'
                    onClick={() => {
                        window.open('https://github.com/Aashish-Dhanani/What-Are-The-Odds');
                    }}/>
                <img 
                    width={200} 
                    src ={gb} 
                    alt='icon' 
                    className='projectimg'
                    onClick={() => {
                        window.open('https://github.com/Aashish-Dhanani/IB-CS-IA-Code');
                    }}/>
                <img 
                    src ={wa} 
                    alt='icon' 
                    className='projectimg'
                    onClick={() => {
                        window.open('https://github.com/Aashish-Dhanani/aashishdhanani-portfolio');
                    }}/>
                </div> */}
        </div>

    </section>
    
  )
}

export default Projects;