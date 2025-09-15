import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logoProjects from './logoProjects';
import { Link } from 'react-router-dom';

const ProjectPage = () => {



  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = logoProjects.find((proj) => proj.id === id);
    setProject(found);
  }, [id]);

  if (!project) return <p>Loading or Project not found...</p>;






    return ( 


         <main>
        
            <div className="big_image">
        
              <img src={project.headerImage} alt={project.title} />
        
            </div>
        
            <div className="lddetails">
        
              <div className="right">
        
                <p>{ project.title }</p>
                <p>{ project.date }</p>
                <h3>{ project.desc }</h3>
        
                <div className="line"></div>
        
        
        
        
              </div>
        
        
            </div>
        
        
        
        
            <div className="gallery">
        

          {project.projectImages.map((img, index) => (
          <img  className="g1"  src={img} alt={`${project.title}`} key={index} />
        ))}
              
        
        
        
        
            </div>
        
        
            <div className="pagination">
        
                <Link className="previous" to="">PREVIOUS</Link>
                      <Link className="next" to="/tower">NEXT</Link>
        
            </div>
        
        
        
        
        
        
          </main>
        


     );
}
 
export default ProjectPage;