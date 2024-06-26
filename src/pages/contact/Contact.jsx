import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/footer/Footer';
import Topbar from '../../components/topbar/Topbar';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    emailjs.send('service_dvurdt3', 'template_534qdnh', values, 'iEJTCxUED_u375swZ')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully');
        resetForm();
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again');
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contact-form">
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <Field type="text" id="subject" name="subject" />
                <ErrorMessage name="subject" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <Field as="textarea" id="message" name="message" />
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
