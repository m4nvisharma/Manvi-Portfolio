import React from 'react';
import './ProjectCardStyles.css';

const ProjectCard = ({ project, onClick }) => {
  const completionFormatted = new Intl.NumberFormat('en-US', {
    style: 'percent'
  }).format(project.completion);

  return (
    <div className="card" onClick={onClick}>
      <img 
        src={project.image} 
        alt={project.title}
        className="card__bg"
      />
      <div className="card__header">
        <div className="card__label">{project.category}</div>
        <div className="card__category">
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentcolor" d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.72 5.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97z" />
          </svg>
          <span className="card__completion-text">{completionFormatted}</span>
        </div>
      </div>
      <div className="card__content">
        <h2 className="card__title">{project.title}</h2>
        <p className="card__description">{project.description}</p>
        <div className="card__skills">
          <span className="card__skills-label">Skills:</span>
          <span className="card__skills-list">{project.skills.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;