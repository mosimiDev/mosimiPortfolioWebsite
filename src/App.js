import React, { useState, useEffect } from 'react';
import LoadingScreen from './pages/LoadingScreen';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  if (isLoading) {
    return<LoadingScreen/>
  }

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
