import React from 'react';
import Intro from '../components/Intro';
import WorkProjects from '../components/WorkProjects';
import Footer from '../components/Footer';
import swirl from '../assets/swirl.avif';
import MidProjects from '../components/MidProjects'

const Home = () => {
  return (
    <>
      <Intro 
        title="Manvi Sharma"
        text="HI, I'M A STUDENT"
        backgroundImage = {swirl}
        showButtons
      />
      <MidProjects />
      <Footer />
    </>
  );
};

export default Home;