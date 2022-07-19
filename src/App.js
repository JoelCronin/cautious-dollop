import React from 'react';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import lists from './projectsList'


// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Nav/>
      <AboutMe/>
      <Contact/>
      <Projects lists={lists} />
    </div>
  );
}
