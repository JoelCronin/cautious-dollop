import React, {useState} from 'react';
// import './styles/contact.css'
import {validateEmail} from '../utils/helpers'




export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [emailCheck, setEmailCheck] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleContactSubmit = (event) => {
    event.preventDefault();

    if(!validateEmail(email)) {
      setEmailCheck('Email is in Invalid Format');
      return;
    } 

    if( !name || !message ) {
      setEmailCheck('Name and Message must be filled out');
      return
    }
    setEmail('')
    setName('')
    setMessage('')
    setEmailCheck('')
  }

  return (
<div className='package' >
<div id='contact-header' > 
<h2 >Contact</h2>
</div>
<div className='form'>
<form name="contact" method="POST" string="placeholder)">
<div className="form-group form-inline">
<label className="sr-only" htmlFor="inputName">Name</label>
<input type="text" name="name" value={name} onChange ={handleInputChange}className="form-control w-100" id="inputName" placeholder="Name" required/>
</div>
<div className="form-group form-inline">
<label  className="sr-only" htmlFor="inputEmail">Email</label>
<input type="email" name="email" value={email} onChange ={handleInputChange} className="form-control w-100" id="inputEmail" placeholder="Email" required/>
</div>
<div className="form-group">
<label className="sr-only" htmlFor="inputMessage">Message</label>
<textarea value={message} onChange ={handleInputChange} className="message form-control" id="inputMessage" rows="6" placeholder="Message" required></textarea>
</div>
<button type="submit" onClick={handleContactSubmit} className="btn btn-outline-primary px-3 py-2" id='send'>Send</button>
</form>
{emailCheck && (
        <div>
          <p className="error-text">{emailCheck}</p>
        </div>
      )}
</div>

</div>

  );
}