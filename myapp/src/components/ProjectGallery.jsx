import React from 'react';
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard';


const ProjectGallery = () => {
  let listProjects = projects.map((project, i)=>(
    <ProjectCard { ...project} key={i} />
  ))
  return <div className='project-gallery-container'>{listProjects}
  
  </div>
}

export default ProjectGallery;
