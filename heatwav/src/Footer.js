import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          {/* Add your footer logo or company name */}
          <h2>HeatWav</h2>
        </div>
          <nav className="footer-nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#admin">Admins</a></li>
              <li><a href="#calendar">Calendar</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#sponsor">Sponsor</a></li>
            </ul>
          </nav>
        <div className="footer-credit">
          {/* Add your credits */}
          <p>Designed and created by [Nathen]</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
