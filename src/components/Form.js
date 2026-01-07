import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Type your message here"
        rows="6"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit" className="btn">SUBMIT</button>
    </form>
  );
};

export default Form;