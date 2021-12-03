import React from 'react';
import '../styles/Card.css';
import fitness from '../assets/fitnesspic2.jpg';
import newTown from '../assets/new2town2.jpg';
import budget from '../assets/Capture.JPG';
import quizGame from '../assets/quizgame.jpg'
import aidanArt from '../assets/AidansArtBlog.jpg'
// import employee from '../assets/Capture2.JPG'
import game from '../assets/game.JPG'
import prequel from '../assets/Prequel.JPG'

export default function Projects() {
  return (
    <>
    <div className="placer">
    <div className="box-main">
        <h1 className="heading">Prequel</h1>
        <p className="content">
          <img src={prequel} alt="Prequel" />

        </p>
        <p className="content">
        A video streaming app for smaller content creators with not a lot of clout/pull to get their work seen by industry professionals. The app will be designed such that lower-quality/budget productions can get exposure and views, with the hope of getting a series/movie picked up by a larger studio.
        </p>
        <p className='above'>
        <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/prequel" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                    <li>
                    <a href="https://blooming-atoll-34852.herokuapp.com/" className="heading repo" target="_blank" rel="noreferrer noopener">Live Site</a>
                    </li>
                </ul>
                </p>
      </div>
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
        <h1 className="heading">Aidan's Art</h1>
        <p className="content">
          <img src={aidanArt} alt="art page" />

        </p>
        <p className="content">
          This is a full stack Art Blog made in React with MongoDB and GraphQL. It showcases some of my art projects from over the years. This app is still in development and is a place for me to experiment with layouts.
        </p>
        <p className='above'>
        <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/Aidans-Art" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                    <li>
                    <a href="https://polar-sands-47307.herokuapp.com/" className="heading repo" target="_blank" rel="noreferrer noopener">Live Site</a>
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
        <h1 className="heading">Know Your Game!</h1>
        <p className="content">
          <img src={game} alt="gamesite" />

        </p>
        <p className="content">
          This app let's you search for games based on platform and genre and gives you book suggestions based on whichever game you click on.
        </p>
        <p className='above'>
        <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich/project1" className="heading repo" target="_blank" rel="noreferrer noopener">Git Repo</a>
                    </li>
                    <li>
                    <a href="https://aidanrich.github.io/project1/" className="heading repo" target="_blank" rel="noreferrer noopener">Live Site</a>
                    </li>
                </ul>
                </p>
      </div>
      </div>
      </>
  );
}
