import React from 'react';
import WorkProjects from '../components/WorkProjects';
import Footer from '../components/Footer';
import Computer from '../assets/minicomputer.avif';
import IntroTwo from '../components/Intro-Two';
import MidProjects from '../components/MidProjects';


const Projects = () => {
  return (
    <>
      <IntroTwo
        title="PROJECTS."
        text="Some of my most recent works"
        backgroundImage={Computer}
      />
      <MidProjects />
      <Footer />
    </>
  );
};

export default Projects;