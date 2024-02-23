import './Home.css';

import Card from 'react-bootstrap/Card';

const Home = () => {

  return (
    <>
      <div className="home-container">
        <div className="background-image">

          {/* <div className="description-container">
              <img src="src/assets/images/giadasponzilli-square.jpg" alt="" />
              <h1>Hi, I am Giada Sponzilli</h1>
              <h5>As a UK-based Front-end Web Developer with a background in cinematography and photography, I bring a unique blend of creativity and technical expertise to my projects. Currently honing my skills in the EdX Front-end Web Development Bootcamp.</h5>
          </div> */}

<div className='cardContainerHome'>
          <Card style={{ width: '22rem' }} className='cardHome'>
            <div className='image-container'>
              <Card.Img variant="top" className="cardImg" src="src/assets/images/giadasponzilli-square.jpg" alt="" />
            </div>
            <Card.Body>
              <Card.Title className='cardTitle'>Hi, I am Giada Sponzilli</Card.Title>
              <Card.Text className='cardText'>
                As a UK-based Front-end Web Developer with a background in cinematography and photography, I bring a unique blend of creativity and technical expertise to my projects. Currently honing my skills in the EdX Front-end Web Development Bootcamp.
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