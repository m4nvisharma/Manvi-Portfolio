import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './ProjectGridStyles.css';

const ProjectGrid = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="project-grid-wrapper">
      <div className="card-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectGrid;