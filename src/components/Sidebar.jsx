import React from 'react';
import './header.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
