import React from 'react';
import './FooterStyles.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaMapMarkerAlt size={20} style={{ color: '#fff', marginRight: '1rem' }} />
            <div>
              <p>Kitchener, Ontario</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: '#fff', marginRight: '1rem' }} />
            <p>+1 226-987-6545</p>
          </div>
          <div className="email">
            <FaEnvelope size={20} style={{ color: '#fff', marginRight: '1rem' }} />
            <p>19.sharma.manvi@gmail.com</p>
          </div>
          <p style={{ marginTop: '2rem' }}>2024 Manvi Sharma. All rights reserved</p>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a computer science student at the University of Waterloo,
            passionate about all sorts of computer science fields. In
            particular, I want to explore the intersection of robotics and
            biology, Human Computer Interaction, data-driven software,
            and artificial intelligence. I am always looking for new people to
            talk to. I enjoy discussing anything from basketball to the
            theories behind compilers. Connect with me.
          </p>
          <div className="social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;