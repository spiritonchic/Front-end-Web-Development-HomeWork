import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/comics">Comics</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
