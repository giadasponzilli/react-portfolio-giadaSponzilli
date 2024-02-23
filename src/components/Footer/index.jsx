import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './style.css';


function MyFooter() {

  return (
    <>
      <footer className='myFooter'>
        <a className="btn btn-large btn logout customIcon btnFooter" href="https://github.com/giadasponzilli" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>

        <a className="btn btn-large btn logout customIcon btnFooter" href="https://uk.linkedin.com/in/giada-sponzilli-b39b9b63" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

        <a className="btn btn-large btn logout customIcon btnFooter" href="mailto:sponzilli.g@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>

        <p>Made with ❤️️ by Giada Sponzilli</p>
        <p>&copy; Giada Sponzilli 2023</p>
      </footer>
    </>
  );
}

export default MyFooter;