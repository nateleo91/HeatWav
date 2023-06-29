import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-logo">
      <Link to="/" className="header-logo">
        HeatWav
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
