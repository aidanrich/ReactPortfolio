import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/Header.css';

import iconOfMe from './assets/iconOfMe2.gif'

export default function Header() {

  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
     
      <header className="header">
      <h1><img className="sketch" src={iconOfMe} alt="My Pic" />Aidan's Portfolio</h1>
    </header>
    <div>
      {renderPage()}</div>
    </div>
  );

  

}


