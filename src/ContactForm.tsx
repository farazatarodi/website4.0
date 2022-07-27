import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('mbjqkvpg');
  if (state.succeeded) {
    return <p style={{ fontSize: '2rem', fontWeight: '300' }}>Thanks for contacting me!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Full Name</label>
      <input id="name" type="name" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className="submit">
        SUBMIT
      </button>
    </form>
  );
}

export default ContactForm;
