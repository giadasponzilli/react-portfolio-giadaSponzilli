import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
  return (
    <Card style={{ width: '20rem' }} className='cardProjects'>
      <div className='image-container'>
        <Card.Img variant="top" className="cardImg" src={project.image} />
      </div>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {project.description}
        </Card.Text>
        <div className='button-container'>
          <div>
            <a href={project.repository} target="_blank" rel="noopener noreferrer"><Button variant="primary" className="btnGallery">Repository</Button></a>
          </div>
          <div>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" ><Button variant="primary" className="btnGallery">Deployed Site</Button></a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;