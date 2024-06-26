import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = 'Name is required';
    if (!formValues.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) tempErrors.email = 'Invalid email format';
    if (!formValues.subject) tempErrors.subject = 'Subject is required';
    if (!formValues.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs.send('service_dvurdt3', 'template_534qdnh', formValues, 'iEJTCxUED_u375swZ')
        .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
          setFormValues({ name: '', email: '', subject: '', message: '' });
        }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again');
        });
    }
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
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
            />
            {errors.subject && <div className="error-message">{errors.subject}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
