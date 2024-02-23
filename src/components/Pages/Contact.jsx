import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';


const Contact = () => {

  // Setting the component's initial state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    text: '',
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Validating form fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.text) {
      alert('Please fill in all fields');
      return;
    }

    // Validating email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Clearing the inputs
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      text: '',
    });

    setEmailSent(true); //Set emailSent state to true after email is sent
  };

  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        setEmailSent(false);
      }, 3000); // Set timeout duration (3 seconds)

      // Clear the timer when the component unmounts or when emailSent becomes false again
      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  return (
    <>

      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="details-container">
          <a className="btn btn-large btn logout customIcon btnContact" href="https://github.com/giadasponzilli" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>

          <a className="btn btn-large btn logout customIcon btnContact" href="https://uk.linkedin.com/in/giada-sponzilli-b39b9b63" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

          <a className="btn btn-large btn logout customIcon btnContact" href="mailto:sponzilli.g@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>

          <h3>Let's connect!</h3>
        </div>

        <div className="form-container">
          <form className="form">
            <input
              value={formData.firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={formData.lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Your email address"
            />
            <input
              value={formData.text}
              name="text"
              onChange={handleInputChange}
              type="text"
              placeholder="Your message"
              className='textInput'
            />
            <button className="form-btn" onClick={handleFormSubmit}>Submit</button>
          </form>
          {emailSent && <h4>Email has been sent!</h4>}
        </div>
      </div>
    </>
  )
}


export default Contact;