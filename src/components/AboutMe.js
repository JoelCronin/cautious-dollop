import React from 'react';
// import './styles/aboutMe.css'
import profilePic from '../assets/profilePic.jpg'



export default function AboutMe() {

  return (
    <section className="container container-1">
        <aside className="profile" id="profile-id">
            <img src= {profilePic} alt="profile-pic" className="profPic"/> <br/><br/>
            <h2>Joel Cronin</h2> <br/>
            <p>University of Toronto</p><br/>
            <p>Coding Bootcamp Student</p><br/>
        </aside>
        <section className="bio" id="bio-id">
            <h2>About me</h2><br/>
            <p>Hi, Im Joel Cronin, currently studying to become a Software Engineer with the University of Toronto's Coding Bootcamp. During this course I will learn the fundamentals of HTML, CSS and JavaScript languages. I also have acquired great experience in API design and am comfortable with JSON, AJAX and REST</p> <br/>
            <p>Originally from London, UK I moved to Toronto in March 2022. In London I was a Mechanical and Electrical Engineer for 7 years with London Underground but have decided to transition into software development. </p>
        </section>
    </section>
  );
}
