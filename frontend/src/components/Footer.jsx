import React from 'react';
import './Footer.css'; 
import logoImage from '../assets/Vector.png'; 

const InstagramIcon = () => <span className="icon">📸</span>;
const FacebookIcon = () => <span className="icon">📘</span>;
const XIcon = () => <span className="icon">𝑿</span>;
const YoutubeIcon = () => <span className="icon">▶️</span>;

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-top">
        <div className="footer-col brand-info">
          <div className="logo-section">
            <img src={logoImage} alt="Mr. White Logo" className="footer-logo" />
            <div className="brand-text">
              <h3 className="brand-name">Mr. White</h3>
              <p className="tagline">Guide to All Paws</p>
            </div>
          </div>
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="col-heading">Navigation</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/subscriptions">Subscriptions</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="col-heading">Social Media</h4>
          <ul className="footer-links social-links">
            <li><InstagramIcon /><a href="https://instagram.com">Instagram</a></li>
            <li><FacebookIcon /><a href="https://facebook.com">Facebook</a></li>
            <li><XIcon /><a href="https://x.com">X.com</a></li>
            <li><YoutubeIcon /><a href="https://youtube.com">Youtube</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="col-heading">Community</h4>
          <ul className="footer-links">
            <li><a href="/discord">Discord</a></li>
            <li><a href="/telegram">Telegram</a></li>
          </ul>
        </div>

        <div className="contact-col">
          <button className="contact-button">
            <span className="icon">💬</span> Contact
          </button>
        </div>
      </div>

      <div className="footer-content-bottom">
        <p className="copyright">All rights reserved ©</p>
        <div className="legal-links">
          <a href="/terms">Terms & Conditions</a>
          <span>/</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
