import React from 'react';
// import './styles/nav.css';

export default function Nav({currentPage, handlePageChange}) {


  return (
    <div className="navigation">
      <header className="header">
        <h1>Joel Cronin</h1>
      </header> 
      <nav>
        <a href="#AboutMe"
           onClick={() => handlePageChange('AboutMe')}
           className={currentPage === 'AboutMe' ? 'active' : 'nav'}
          >
            About Me
        </a>
        <a href="#Projects"
           onClick={() => handlePageChange('Projects')}
           className={currentPage === 'Projects' ? 'active' : 'nav'}
          >
            Portfolio
        </a>
        <a href="#Contact"
           onClick={() => handlePageChange('Contact')}
           className={currentPage === 'Contact' ? 'active' : 'nav'}
          >
            Contact
        </a>
        <a href="#Contact"
           onClick={() => handlePageChange('Resume')}
           className={currentPage === 'Resume' ? 'active' : 'nav'}
          >
            Resume
        </a>
      </nav>
    </div>
  );
}
