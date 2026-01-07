import React from 'react';
import './HeroImgStyles.css';

const HeroImg = ({ heading, text }) => {
  return (
    <div className="hero-img">
        <div className="header">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  );
};

export default HeroImg;