import React from 'react';
import '../styles/Card.css';
import fitness from '../assets/fitnesspic.JPG';
import newTown from '../assets/new2town.JPG';

export default function Blog() {
  return (
    <>
    <div className="placer">
    <div className="box-main">
      <h1 className="heading">Fitness Tracker</h1>
      <p className="content">
        <img src={fitness} alt="logo" />

      </p>
    </div>
    <div className="box-main">
        <h1 className="heading">New2Town</h1>
        <p className="content">
          <img src={newTown} alt="logo" />

        </p>
      </div>
      </div>
      </>
  );
}
