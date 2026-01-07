import React from 'react';
import './FooterStyles.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

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
            <p>+1 519-778-2207</p>
          </div>
          <div className="email">
            <FaEnvelope size={20} style={{ color: '#fff', marginRight: '1rem' }} />
            <p>519sharma.manvi@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a student super passionate about the field of computer science. In
            particular, I want to explore the intersection of robotics and
            biology, Human Computer Interaction, data-driven software,
            and artificial intelligence. I am always looking for new people to
            talk to. Connect with me!
          </p>
          <div className="social">
            <a href="https://github.com/m4nvisharma" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a href="https://www.linkedin.com/in/m4nvi-sharma/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a href="https://discord.com/users/689542047991988228" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;