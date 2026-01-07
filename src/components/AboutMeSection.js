
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
      title: "My mom and I at Garba (A traditional Gujarati Dance)",
      img: {
        src: Garba,
        alt: "Project 1 screenshot",
      },
    },
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
          Hi, I’m a Computer Science student at the University of Waterloo. I didn’t always love tech, in fact, I hated it. 
          My first coding experience was frustrating, but curiosity kept me coming back. By grade 8, I built scratch apps solving 
          real problems, and in grade 11, game creation taught me the thrill of bringing ideas to life. Now, I’m exploring the 
          intersections of robotics, AI, biology, and human-computer interaction, excited to see where curiosity and experimentation 
          will take me next!

          </p>
          <p>
           Beyond code and circuits, I love traveling to new countries and remote villages, Vietnam being my favorite so far. 
           Additionally, hobbies such as cooking, dancing, playing basketball/ping pong, and writing have always been a way to spend my free time.
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
          As Internal Affairs Director for the Canadian Youth Climate Action Team, I work to drive environmental policy change,
           organize nationwide school initiatives, and strengthen advocacy efforts. Previously, as a Youth Member of the WRDSB Youth
            Advisory Council, I collaborated with policymakers to promote accessible healthcare, educational technology, and equity. 
            Tutoring also became a way for me to give back in a personal, hands-on way, connecting with others and sharing what I’ve 
            learned. 
          </p>
          <p>
           I’m most comfortable with Python, having used libraries such as Pandas, NumPy, Matplotlib, TensorFlow, and Orange Data Mining, 
           and I also have experience with JS, HTML, CSS, React, Excel, and some hardware knowledge using TinkerCAD, Arduino, and circuits. 
           See my projects page for more info!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection