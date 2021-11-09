import React from 'react';
import '../styles/Card.css';

export default function Contact() {


  return (
    <div className="box-main">
    <h1 className="heading">Contact</h1>
    <form className="form">
      <p>
    <input type="text"
    placeholder="name" />
    </p>
    <p>
    <input type="text"
    placeholder="email" />
    </p>
    <p>
    <input type="text"
    placeholder="message" />
    </p>
    <button type="button">Submit</button>
    </form>


    </div>
  );
}
