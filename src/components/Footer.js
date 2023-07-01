// Footer.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
        </div>
        <div className="contact">
          <h3>Kontakta oss</h3>
          <p><FaEnvelope /> kontakt@snackare.se</p>
          <p><FaPhoneAlt /> +46760149507</p>
        </div>
        <div className="follow-us">
          <h3>Följ oss</h3>
          <ul className="social-media-list">
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Snackare. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
