import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './images/heatwav-logo.png';
import nameImage from './images/heatwav-name.png';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
      <Link to="/" className="header-logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <img src={nameImage} alt="HeatWav" className="name-image" />
      </Link>
    </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/admin">Admins</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/sponsor">Sponsor</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
