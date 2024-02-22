import Project from '../Project';
import projects from '../../projects.json';
import './ProjectGallery.css'

const ProjectGallery = () => {

  return (
  <>
  <div className="project-gallery-container">
    <h1>Project Gallery</h1>
    <div className="card-container">
    {projects.map(project => (
      <Project key={project.id} project={project} />
    ))}
    </div>
    </div>
  </>
  )
}


export default  ProjectGallery;