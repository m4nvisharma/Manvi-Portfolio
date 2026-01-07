
import React from 'react';
import ShufflingGallery from './ShuffleGallery';
import './AboutMeSectionStyles.css';
import GradImg from '../assets/GradImg.jpg';
import IndiaImg from '../assets/India.jpg';
import AngelImg from '../assets/Angel.jpg';
import DongImg from '../assets/Dong.jpg';
import BallImg from '../assets/BallImg.jpg';
import Cycat from '../assets/cycat-logo.jpg';
import Create from '../assets/create.jpg';
import Garba from '../assets/garba.jpg';
import WRDSB from '../assets/wrdsb.webp';



const AboutMeSection = () => {
  const myProjects = [
    {
      title: "Senior Girls Basketball",
      img: {
        src: BallImg,
        alt: "Project 1 screenshot",
      },
    },
    {
      title: "Dinh Vuo Meo, Dong Van, Ha Giang, Vietnam",
      img: {
        src: DongImg,
        alt: "Project 2 screenshot",    
      },
    },
    {
      title: "Angels-Eye Mountain, Cao Bang, Vietnam",
      img: {
        src: AngelImg,
        alt: "Project 3 screenshot",
      },
    },
    {
      title: "Majnu Ka Tilla, Delhi, India",
      img: {
        src: IndiaImg,
        alt: "Project 4 screenshot",
      },
    },
    {
      title: "Graduation, June 2025",
      img: {
        src: GradImg,
        alt: "Project 5 screenshot",
      },
    },
  ];

  const moreProjects = [
    {
      title: "Waterloo Region District School Board Youth Council",
      img: {
        src: WRDSB,
        alt: "Project 2 screenshot",    
      },
    },
    {
      title: "Socratica x Claude Create-A-Thon Category Winners!",
      img: {
        src: Create,
        alt: "Project 4 screenshot",
      },
    },
    {
      title: "The Canadian Youth Climate Action Team",
      img: {
        src: Cycat,
        alt: "Project 5 screenshot",
      },
    },
  ];

  return (
    <section className="about-me-section">
      <div className="about-me-content">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
         Hi! I’m a Computer Science student at the University of Waterloo. I didn’t fall in love with tech right away, but the moment 
         I realized I could build things with my own two hands, things that actually matter, I was sold. There’s something so insanely 
         exciting about turning a vision into something real, useful, and impactful, and that curiosity is what keeps me exploring new 
         spaces like robotics, AI, and human-centered design.

          </p>
          <p>
           Beyond code and circuits, I love exploring new places—especially traveling to new countries and remote villages 
           (Vietnam is my favorite so far!). In my downtime, you’ll usually find me dancing, 
           playing basketball or ping pong, writing or learning a whole new hobby.
          </p>
        </div>
        
        <div className="about-me-gallery">
          <ShufflingGallery items={myProjects} />
        </div>
        <div className="about-me-gallery">
          <ShufflingGallery items={moreProjects} />
        </div>
        <div className="about-me-text">
          <h2>Extracurriculars, Skills & Interests</h2>
          <p>
          Outside the classroom, I’m passionate about creating impact beyond code. As the Internal Affairs Director for the Canadian Youth Climate Action Team, 
          I help drive environmental policy change and organize initiatives across schools nationwide. I’ve also worked closely with 
          policymakers as a Youth Member of the WRDSB Youth Advisory Council, advocating for accessible healthcare, education, and equity. 
          Alongside this work, tutoring has been one of the most meaningful ways I’ve made an impact on a smaller, more personal scale—working
           one-on-one with students, meeting them where they are, and helping concepts finally make sense.
          </p>
          <p>
           On the technical side, I’m most comfortable with Python, working with tools like Pandas, NumPy, Matplotlib, TensorFlow,
            and Orange Data Mining, along with developer tools like VS Code and Github. I also have experience with JavaScript, HTML, CSS, React, Excel, and hands-on hardware work using 
            TinkerCAD, Arduino, and circuits. I'm starting to learn C++, Raspberry Pi, and more electromechanics as I work on my latest project. Feel free to check out my projects page to see what I’ve been building!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection