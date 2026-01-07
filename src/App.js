import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages1/Home';
import Projects from './pages1/Projects';
import About from './pages1/About';
import Contact from './pages1/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Manvi-Portfolio/" element={<Home />} />
        <Route path="/Manvi-Portfolio/projects" element={<Projects />} />
        <Route path="/Manvi-Portfolio/about" element={<About />} />
        <Route path="/Manvi-Portfolio/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;