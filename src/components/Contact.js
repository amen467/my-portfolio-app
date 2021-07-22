import './Contact.css';
import React, { useState } from 'react';
// import { useInput } from '../../node_modules/use-input-hook/dist/index.es';

function Contact(props) {

  const useContactForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
        callback();
      }
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

  const contactAlert = () => {
    alert(`Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}
           Message: ${inputs.message}`);
  }

  const {inputs, handleInputChange, handleSubmit} = useContactForm(contactAlert);

  return (
    <div className="contact">
      <p id="contact-jump"></p>

      <div className="form-box">


      <form onSubmit={handleSubmit} 
        action="https://formspree.io/f/xgerlqqd" 
        method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
        </div>
        <div>
          <label>Message</label>
          <input type="text" name="message" onChange={handleInputChange} value={inputs.message} required />
        </div>
        <button type="submit">Submit</button>
      </form>


      </div>
      
    </div>
  )
}

export default Contact;