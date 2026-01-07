import React from 'react';
import './WorkProjectsStyles.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Sudoku Solver",
    description: "A sudoku puzzle generator and solver that uses backtracking algorithm to find...",
    rating: 4.5,
    completion: 50,
    background: '#f76334'
  },
  {
    id: 2,
    title: "A Biological Ray Tracer",
    description: "A ray tracing program that simulates light propagation through biological tissue.",
    rating: 4.6,
    completion: 65,
    background: '#e91e63'
  },
  {
    id: 3,
    title: "Transformers!",
    description: "The magnetic childhood robots come to life, if you're that expert from a car in...",
    rating: 4.8,
    completion: 32,
    background: '#ffeb3b'
  },
  {
    id: 4,
    title: "2048 Game Generator &...",
    description: "A 2048 game that generates new puzzles and automatically solves them using AI...",
    rating: 5,
    completion: 100,
    background: '#4caf50'
  },
  {
    id: 5,
    title: "Data Analytics Intern @...",
    description: "Applied data analytics techniques using visualization software to improve business...",
    rating: 4.9,
    completion: 90,
    background: '#35719e'
  },
  {
    id: 6,
    title: "The Flight Plan, and...",
    description: "A collection of small projects that taught me the basics of AI positioning work...",
    rating: 3.7,
    completion: 10,
    background: '#9c27b0'
  }
];

const WorkProjects = () => {
  return (
    <div className="card-grid">
      {projects.map((project) => (
        <div 
          key={project.id}
          className="card"
          style={{ 
            backgroundImage: `linear-gradient(135deg, ${project.background}40, ${project.background}20)`,
            border: `2px solid ${project.background}`
          }}
        >
          <div className="card_image-overlay"></div>
          <div className="card__header">
            <h2 className="card__label">{project.title}</h2>
          </div>
          <div className="card__content">
            <p className="card__description">{project.description}</p>
            <div className="card__stats">
              <div className="card__rating">
                <span className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    i < Math.floor(project.rating) ? 
                      <FaStar key={i} color="#FFD700" /> : 
                      <FaRegStar key={i} color="#FFD700" />
                  ))}
                </span>
                <span>{project.rating.toFixed(1)}</span>
              </div>
              <div className="card__completion">
                <span className="completion-bar">
                  <div 
                    style={{ 
                      width: `${project.completion}%`,
                      height: '4px',
                      background: '#35c4ff',
                      borderRadius: '2px'
                    }}
                  ></div>
                </span>
                <span>{project.completion}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkProjects;