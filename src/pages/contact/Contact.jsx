import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dvurdt3', 'template_534qdnh', e.target, 'iEJTCxUED_u375swZ')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again');
      });

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Topbar />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Have a Question?</h1>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <h3>Call us</h3>
              <p>+251939063697</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <h3>Office</h3>
              <p> 123 Agriconnect St, Farmingville</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <h3>Email</h3>
              <p> agriconnect@info.com</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
