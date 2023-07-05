import React from 'react';
import { FaFacebook, FaTiktok, FaTwitch } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <a href="https://www.facebook.com/heatwavmusicgroup?mibextid=ZbWKwL">
            <FaFacebook />
          </a>
          <a href="https://www.tiktok.com/@heatwavmusicgroup3?_t=8djlnN1lY4p&_r=1">
            <FaTiktok />
          </a>
          <a href="https://www.twitch.tv/heatwavmusicgrouptwitch?sr=a">
            <FaTwitch />
          </a>
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
