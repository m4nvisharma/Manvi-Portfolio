import React from 'react';
import AboutMeSection from '../components/AboutMeSection';
import Footer from '../components/Footer';
import aboutmeimg from '../assets/aboutmeimg.avif';
import IntroTwo from '../components/Intro-Two';
import AboutMe from '../assets/about.avif';

const About = () => {
  return (
    <>
      <IntroTwo 
        title="ABOUT ME"
        text="I'm glad you want to get to know me better :)"
        backgroundImage= {AboutMe}
      />
      <AboutMeSection />
      <Footer />
    </>
  );
};

export default About;