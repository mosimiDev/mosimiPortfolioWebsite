import React, { useState, useEffect } from 'react';
import LoadingScreen from './pages/LoadingScreen';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from './layout/Navbar';
import Blog from './components/Blog/Blog/Blog';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  if (isLoading) {
    return (
      <div className='mt-[15rem]'>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/blog' element={<Blog/>} />
      </Routes>

      
    </div>
  );
}

export default App;
