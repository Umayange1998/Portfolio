import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home';
import TechSkills from './Pages/TechSkills/TechSkills'
import Projects from './Pages/Projects/Projects'
import Resume from './Pages/Resume/Resume';
import About from './Pages/About/About';
import Footer from './Pages/Footer';
import ContactMe from './Pages/ContactMe/ContactMe';

function App() {
  return (
    <div className="App">
     <Navbar/>
       <div id="home"><Home/></div>
      <div id="skills"><TechSkills/></div>
      <div id="projects"><Projects/></div>
      <div id="resume"><Resume/></div>
      <div id="about"><About/></div>
      <div id="contact"><ContactMe/></div>
     <Footer/>
    </div>
  );
}

export default App;
