import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';

const ProjectDetails = () => {
    let params = useParams();
    let projectDetails = projects.filter((project) => project.id === params.id ? project : null);

    let displayDetails = projectDetails.map((item, i) => {
        let { title, deploy, github, image } = item;
        return (
            <div className='project-div' key={i}>
                <img className="project-img" src={image} alt={title} />
                <h1 id="project-h1">{title}</h1>

                <div className='project-links'>
                    <a href={deploy}>Deployed Link</a>
                    <a href={github}>GitHub</a>
                </div>

            </div>
        )
    })
    return <div>{displayDetails}</div>
}

export default ProjectDetails;
