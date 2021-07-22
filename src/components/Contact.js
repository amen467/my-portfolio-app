import './Contact.css';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
// import { useInput } from '../../node_modules/use-input-hook/dist/index.es';

function Contact() {
  const [state, handleSubmit] = useForm("xgerlqqd");
  if (state.succeeded) {
    return(
    <div className="contact">
      <p id="contact-jump"></p>

      <div className="form-box">
        <h1>Thanks for the message!</h1>
      </div>
      
    </div>
    )
  }

  return (
    <div className="contact">
      <p id="contact-jump"></p>

      <div className="form-box">

        <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">
          Email Address
        </label>

        <input
          id="email"
          type="email" 
          name="email"
        />

        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

      </div>  
    </div>
  )
}

export default Contact;