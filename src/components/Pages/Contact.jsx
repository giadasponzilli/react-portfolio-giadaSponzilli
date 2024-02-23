import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';


const Contact = () => {

  // Setting the component's initial state
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    text: '',
  });

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

    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    alert(`Hello ${formData.firstName} ${formData.lastName}`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      text: '',
    });
  };

  return (
    <>

      <div className="contact-container">
        <h1>Contact Me</h1>
        <div className="details-container">
          <a className="btn btn-large btn logout customIcon" href="https://github.com/giadasponzilli" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>

          <a className="btn btn-large btn logout customIcon" href="https://uk.linkedin.com/in/giada-sponzilli-b39b9b63" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

          <a className="btn btn-large btn logout customIcon" href="mailto:sponzilli.g@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
          
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
        </div>
      </div>
    </>
  )
}


export default Contact;