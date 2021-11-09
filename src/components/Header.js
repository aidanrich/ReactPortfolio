import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './styles/Header.css';

export default function Header() {

  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
     
      <header className="header">
      <h1>Aidan's Portfolio</h1>
    </header>
      {renderPage()}
    </div>
  );

  

}


