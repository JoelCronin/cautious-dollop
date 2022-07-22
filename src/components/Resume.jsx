import React from 'react'

function Resume() {
  return (
    <div className='skills'>
      <div id='skillTitle'> <br />
      <h4> Skills and Proficiencies:</h4> <br/>
      </div>
      <div id='skillPoints'>
        <div className='frontend'>
          <h4 className='endType'>Front End</h4> <br />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Handlebars</li>
            <li>BootStrap/ Bulma</li>
          </ul> <br />
        </div>
        <div id='backend'>
        <h4 className='endType'>Back End</h4><br />
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL and Sequelize</li>
            <li>Inquirer</li>
            <li>Mongo and Mongoose</li>
            <li>GraphQL</li>
            <li>MERN applications</li>
          </ul> <br /> <br />
        </div>
      </div>
      <h4 className='resumeHead'>A copy of my Resume can be downloaded <a href='https://drive.google.com/file/d/1oGc4swdLhr5hbVGy_AlxEb0WHKqXW0dR/view?usp=sharing'>here</a></h4><br />
    </div>
  )
}

export default Resume