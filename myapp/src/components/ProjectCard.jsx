import React from 'react';
import { Link  } from 'react-router-dom';

const ProjectCard = ({ id, image, title }) => {
    return (
        <Link to={`/projects/${id}`}>
            <div>
                <img className="project-image" src={image} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>

        
    )
}



export default ProjectCard;