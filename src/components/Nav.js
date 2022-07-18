import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="navigation">
    <a href="#bio-id">About Me</a>
    <a href="#project-id">Portfolio</a>
    <a href="#contact-id">Contact</a>
    <a href="#contact-id">Resume</a>
</nav>
  );
}
