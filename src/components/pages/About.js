import React from 'react';
import '../styles/Card.css';
import resume from '../assets/Resume2021.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faJs, faHtml5, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className="box-main">
      <h1 className="heading">Skills</h1>
      <FontAwesomeIcon className="brand fa-3x" icon={faHtml5} />
    <FontAwesomeIcon className="brand fa-3x" icon={faCss3Alt} /><FontAwesomeIcon className="brand fa-3x" icon={faJs} /><FontAwesomeIcon className="brand fa-3x" icon={faReact} /><FontAwesomeIcon className="brand fa-3x" icon={faNodeJs} />
      <p className="content">
        Technologies: JavaScript, HTML, CSS, MySQL, Node.js, Express.js, MongoDB, Handlebars and React. You can view my resume here:
      <a className="content" href={resume} target="_blank" rel="noreferrer noopener">My Resume</a>
      </p>
    </div>
  );
}

export default About;