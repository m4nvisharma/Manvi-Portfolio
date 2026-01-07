import React from 'react';
import './IntroTwoStyles.css';

const IntroTwo = ({ title, text, backgroundImage}) => {
  const bgStyle = backgroundImage.includes('gradient')
    ? { backgroundImage }
    : { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="mask-introtwo">
      <div className="into-two-img" style={bgStyle}></div>
      <div className="hero">
        <div className="content">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};


export default IntroTwo;