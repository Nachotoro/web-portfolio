import React from 'react';

function ProjectCard({ name, description, imageUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={`${name} image`} className="project-image" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
