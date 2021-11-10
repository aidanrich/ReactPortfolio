import React, { useState } from 'react';
import '../styles/Card.css';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else { 
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email is invalid');
      return;
    }

    alert(`This doesn't go anywhere, just use the mailto link please`);

    setUserName('');
    setEmail('');
  };
  return (
    <div className="box-main">
    <h1 className="heading">Contact</h1>
    <form className="form">
       <p> <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        /></p>
        <p>
        <textarea
          value={userName}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="comment"
        /></p>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="content">{errorMessage}</p>
        </div>
      )}
          <div class="content">
        <p><strong>Or just Email:</strong> <a class="content" href="mailto:rich.aidan@gmail.com">rich.aidan@gmail.com</a></p>
      </div>


    </div>
  );
}
