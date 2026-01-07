import React, { useState } from 'react';
import './GalleryStyles.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    { id: 1, title: "Project Alpha", color: "var(--arc-orange)" },
    { id: 2, title: "Bio Ray Tracer", color: "var(--arc-rose)" },
    { id: 3, title: "Transformers AI", color: "var(--arc-jaune)" },
    { id: 4, title: "2048 AI Solver", color: "var(--arc-vert)" },
    { id: 5, title: "Data Analytics", color: "var(--arc-blue)" },
  ];

  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="creationsBlocUl">
      {galleryItems.map((item, index) => (
        <div
          key={item.id}
          className={`creaBlock creaBlockPrez ${index === currentIndex ? 'active' : ''}`}
          style={{ transform: `scale(${1 - Math.abs(index - currentIndex) * 0.1})` }}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <figure>
            <div className="blocImg">
              <img 
                src={`https://picsum.photos/400/300?random=${item.id}`} 
                alt={item.title}
              />
            </div>
            <figcaption>{item.title}</figcaption>
            <div className="lineSeparator" style={{ backgroundColor: item.color }}></div>
            <h2>{item.title}</h2>
            <p>Description of {item.title} project goes here...</p>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Gallery;