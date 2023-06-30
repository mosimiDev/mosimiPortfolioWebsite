import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
