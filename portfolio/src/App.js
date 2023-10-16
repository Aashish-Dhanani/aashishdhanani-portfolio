import './App.css';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Bio from './components/Bio/bio';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';
import {Link} from 'react-router-dom';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Element name="home">
        <Intro />
        <Bio />
        <Projects />
        <Footer />
      </Element>
    </div>
  );
}

export default App;
