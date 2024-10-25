import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Project</h2>
      <div className="navbar-right">
        <span className="date">13 Aug 2003</span>
        <input type="text" placeholder="Search task or project" />
      </div>
    </nav>
  );
}

export default Navbar;
