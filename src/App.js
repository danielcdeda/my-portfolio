import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/Header';
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
    </div>
    
  );
}

export default App;
