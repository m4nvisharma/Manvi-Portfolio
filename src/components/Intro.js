import React from 'react';
import { Link } from 'react-router-dom';
import './IntroStyles.css';

const Intro = ({ title, text, backgroundImage, showButtons = false }) => {
  const bgStyle = backgroundImage.includes('gradient')
    ? { backgroundImage }
    : { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="mask">
      <div className="into-img" style={bgStyle}></div>
      <div className="hero">
        <div className="content">
          <p>{text}</p>
          <h1>{title}</h1>
          {showButtons && (
            <div className="buttons">
              <Link to="/projects" className="btn">Projects</Link>
              <Link to="/contact" className="btn-light">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Intro;