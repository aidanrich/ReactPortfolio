import React from 'react';
import './styles/Card.css';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In Navbar, we can assign a style from an object by using curly braces
function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'heading active' : 'heading'}
        >
          Home
        </a>
      </li>
      {/* <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'heading active' : 'heading'}
        >
          About
        </a>
      </li> */}
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Blog')}
          

          className={currentPage === 'Blog' ? 'heading active' : 'heading'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
         

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'heading active' : 'heading'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
