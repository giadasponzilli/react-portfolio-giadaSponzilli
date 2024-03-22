import Card from 'react-bootstrap/Card';

import profileImg from '../../assets/images/Giada-Sponzilli-square-cut.jpg'
import './Home.css';


const Home = () => {

  return (
    <>
      <div className="home-container">
        <div className="background-image">

          <div className='cardContainerHome'>
            <Card style={{ width: '22rem' }} className='cardHome'>
              <div className='image-container'>
                <Card.Img variant="top" className="cardImg" src={profileImg} alt="" />
              </div>
              <Card.Body>
                <Card.Title className='cardTitle'>Hi, I am Giada Sponzilli</Card.Title>
                <Card.Text className='cardText'>
                  As a UK-based Front-end Web Developer with a background in cinematography and photography, I bring a unique blend of creativity and technical expertise to my projects. I've recently completed the EdX Front-end Web Development Bootcamp and I'm excited to embark on a new journey in the coding field.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          
        </div>
      </div>
    </>
  )
}


export default Home;