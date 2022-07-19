import React from 'react';
import './nav.css';

export default function Nav() {


  return (
    <div className="navigation">
      <header className="header">
        <h1>Joel Cronin</h1>
      </header> 
      <nav>
        <a href="#bio-id">About Me</a>
        <a href="#project-id">Portfolio</a>
        <a href="#contact-id">Contact</a>
        <a href="#contact-id">Resume</a>
      </nav>
    </div>
  );
}
