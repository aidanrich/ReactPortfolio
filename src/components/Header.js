import React, { useState } from 'react';
import { Link } from "react-router-dom"
import './styles/Header.css';

import iconOfMe from './assets/iconOfMe2.gif'

export default function Header() {


  return (
    <div>
      <ul className="nav">
      <Link className="nav-item heading" to="/">Home</Link>
      <Link className="nav-item heading" to="/about">About</Link>
      <Link className="nav-item heading" to="/projects">Projects</Link>
      <Link className="nav-item heading" to="/contact">Contact</Link>
     </ul>
      <header className="header">
      <h1><img className="sketch" src={iconOfMe} alt="My Pic" />Aidan's Portfolio</h1>
    </header>
    
    </div>
  );

  

}


