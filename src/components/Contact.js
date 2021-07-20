import './Contact.css';
import React, { useState } from 'react';
// import { useInput } from '../../node_modules/use-input-hook/dist/index.es';

function Contact(props) {

  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useState('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useState('');
  const { value:email, bind:bindEmail, reset:resetEmail } = useState('');

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${firstName} ${lastName}`);
      // resetFirstName();
      // resetLastName();
      // resetEmail();
  }

  return (
    <div className="contact">
      <p id="contact-jump"></p>

      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" {...bindFirstName} />
          </label>
          <label>
            Last Name:
            <input type="text" {...bindLastName} />
          </label>
          <label>
            Email:
            <input type="text" {...bindEmail} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      
    </div>
  )
}

export default Contact
