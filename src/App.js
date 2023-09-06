import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/Header';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/projects.js';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Contact />

    </div>
    
  );
}

export default App;
