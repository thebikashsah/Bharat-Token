import React, { useState } from 'react';

function ContactForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary logic here with the form data, like making API requests, etc.

    console.log('Form data submitted:', formData);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          
          <input
            type="email"
            placeholder="Email"
            className="contact__input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contact__input"
            cols="0"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <input type="submit" value="Send" className="contact__button button" />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
