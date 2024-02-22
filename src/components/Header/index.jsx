import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import { NavbarBrand } from 'react-bootstrap';
import profileImage from '../../assets/images/giadasponzilli-square.jpg';


function MyNavbar() {

  // Get current location using useLocation hook to use in the defaultActiveKey for the navbar tabs
  const location = useLocation();
  // Extract pathname from location
  const currentPath = location.pathname;

  return (
    <>
      <Navbar fixed="top">
        <Container fluid>
          <NavbarBrand className="nameBrand" href="/"><img src={profileImage} alt="Profile" className='profileImage'/>Giada Sponzilli</NavbarBrand>
          <Nav className="linksWrap" variant="tabs" defaultActiveKey={currentPath}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projectsgallery">Projects Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;