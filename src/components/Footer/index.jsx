import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './style.css'


function MyFooter() {

  return (
    <>
      <footer className='myFooter'>
        <a className="btn btn-large btn logout customIcon" href="https://github.com/giadasponzilli"><FontAwesomeIcon icon={faGithub} size="2x" /></a>

        <a className="btn btn-large btn logout customIcon" href="https://uk.linkedin.com/in/giada-sponzilli-b39b9b63"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

        <a className="btn btn-large btn logout customIcon" href="mailto:sponzilli.g@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>

        <p>Made with ❤️️ by Giada Sponzilli</p>
        <p>&copy; Giada Sponzilli 2023</p>
      </footer>
    </>
  );
}

export default MyFooter;