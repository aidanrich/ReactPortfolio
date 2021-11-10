import React from 'react';
import '../styles/Card.css';
import fitness from '../assets/fitnesspic2.jpg';
import newTown from '../assets/new2town2.jpg';
import budget from '../assets/Capture.JPG';
import quizGame from '../assets/quizgame.jpg'
import employee from '../assets/Capture2.JPG'

export default function Projects() {
  return (
    <>
    <div className="placer">
    <div className="box-main">
      <h1 className="heading">Fitness Tracker</h1>
      <p className="content">
        <img src={fitness} alt="fitness" />
      </p>
      <p className="content">
        The fitness tracker is a fullstack app that helps a user track and aggregate their workout routines over time. For this piece I worked primarily on the backend database and routes linking to the front end JS.
          </p>
          <p className='above'>
          <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/fitness-tracker" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                    <li>
                    <a href="https://vast-everglades-43611.herokuapp.com/" className="heading repo" target="_blank" rel="noreferrer noopener">Live Site</a>
                    </li>
                </ul>
                </p>
    </div>
    <div className="box-main">
        <h1 className="heading">New2Town</h1>
        <p className="content">
          <img src={newTown} alt="New2Town" />

        </p>
        <p className="content">
        New2Town is a fullstack social media app using MySQL, Express.js and Handlebars. In this group project I worked on creating the models for the various data sets we needed and worked on the Profile page, Friendslist and helped with the login and new user signup functionality. Team work and communication were key to success on this project.
        </p>
        <p className='above'>
        <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/new2town" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                    <li>
                    <a href="https://protected-anchorage-26140.herokuapp.com/" className="heading repo" target="_blank" rel="noreferrer noopener">Live Site</a>
                    </li>
                </ul>
                </p>
      </div>
      <div className="box-main">
        <h1 className="heading">Budget Tracker</h1>
        <p className="content">
          <img src={budget} alt="budget tracker" />

        </p>
        <p className="content">
          This app specializes in tracking your expenditures even when offline. Using IndexDB in tandem with a service-worker users can expect data persistence even when on the go in poor connection areas.
        </p>
        <p className='above'>
        <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/offline-budget-tracker" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                    <li>
                    <a href="https://aqueous-citadel-52972.herokuapp.com" className="heading repo" target="_blank" rel="noreferrer noopener">Live Site</a>
                    </li>
                </ul>
                </p>
      </div>
      <div className="box-main">
        <h1 className="heading">Quiz Game</h1>
        <p className="content">
          <img src={quizGame} alt="quizgame" />

        </p>
        <p className="content">
          This app is a simple quiz game designed to test your coding knowledge. Click through when the timer starts and find out how much you know!
        </p>
        <p className='above'>
        <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/quizgame" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                    <li>
                    <a href="https://aidanrich.github.io/quizgame/" className="heading repo" target="_blank" rel="noreferrer noopener">Live Site</a>
                    </li>
                </ul>
                </p>
      </div>
      <div className="box-main">
        <h1 className="heading">Employee Manager</h1>
        <p className="content">
          <img src={employee} alt="employee" />

        </p>
        <p className="content">
          This is a back-end only project using inquirer to help a user manage a database of employees. The current mock-up is for a clown college. To use clone down the repo from github and run 'npm i' in the command line to get started.
        </p>
        <p className='above'>
        <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/employee-manager" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                </ul>
                </p>
      </div>
      </div>
      </>
  );
}
