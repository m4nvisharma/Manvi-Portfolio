import React from 'react';
import Form from '../components/Form';
import Footer from '../components/Footer';
import contactimg from '../assets/contactimg.avif';
import IntroTwo from '../components/Intro-Two';
import ContactMe from '../assets/contacttwo.avif';

const Contact = () => {
  return (
    <>
      <IntroTwo
        title="CONTACT."
        text="Get in touch"
        backgroundImage={ContactMe}
      />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;