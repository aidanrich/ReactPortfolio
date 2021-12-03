import React from 'react';

import { HashRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

import './App.css';


function App() {
  return (
    <>
    <HashRouter>
    <main>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/projects" element={<Projects />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/about" element={<About />} />
        
        </Routes>

      </div>
    </main>
      <div>
        <Footer />
      </div>
      </HashRouter>
    </>
  );
}

export default App;
