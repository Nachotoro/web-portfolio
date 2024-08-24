import React from 'react';
import ProjectCard from './ProjectCard';
import projectsDictionary from '../data/projectData.js';

function ProjectsSection() {
  return (
    <div className="projects-section">
      {Object.keys(projectsDictionary).map(id => {
        const { name, description, imageUrl } = projectsDictionary[id];
        return (
          <ProjectCard 
            key={id} 
            name={name} 
            description={description} 
            imageUrl={imageUrl} 
          />
        );
      })}
    </div>
  );
}

export default ProjectsSection;
