import React from 'react';
// import './styles/contact.css'




export default function Contact() {

  return (
<div className='package' >
<div id='contact-header' > 
  <h2 >Contact</h2>
</div>
<div className='form'>
<form name="contact" method="POST" string="placeholder)">
<div class="form-group form-inline">
<label class="sr-only" for="inputName">Name</label>
<input type="text" name="name" class="form-control w-100" id="inputName" placeholder="Name" required/>
</div>
<div class="form-group form-inline">
<label class="sr-only" for="inputEmail">Email</label>
<input type="email" name="email" class="form-control w-100" id="inputEmail" placeholder="Email" required/>
</div>
<div class="form-group">
<label class="sr-only" for="inputMessage">Message</label>
<textarea name="message" class="form-control" id="inputMessage" rows="5" placeholder="Message" required></textarea>
</div>
<button type="submit" class="btn btn-outline-primary px-3 py-2" id='send'>Send</button>
</form>
</div>

</div>

  );
}