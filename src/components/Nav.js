import React from 'react';
import { motion } from 'framer-motion';

export default function Nav({currentPage, handlePageChange}) {

  const topVariant = {
    hidden:{
      y: -800
    },
    visible:{
      y: 0,
      transition: {
        duration: 1.1
      }
    }
  }
  

//Nav Component
  return (
    <motion.div variants={topVariant} initial="hidden" animate="visible" className='left-signup-container'>
    <div className="navigation">

      <nav>
      <header className="header">
        <h1>Joel Cronin</h1>
      </header> 
        <a href="#AboutMe"
        // On click will render appropriate page and change class so that the text can be highlighted
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
        {/* <a href="#Contact"
           onClick={() => handlePageChange('Contact')}
           className={currentPage === 'Contact' ? 'active' : 'nav'}
          >
            Contact
        </a> */}
        <a href="#Contact"
           onClick={() => handlePageChange('Resume')}
           className={currentPage === 'Resume' ? 'active' : 'nav'}
          >
            Resume
        </a>
      </nav>
    </div>
    </motion.div>
  );
}
