import React from 'react';
import './App.css'; 

const Header = ({ children }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{children}</h1>
    </div>
  );
};

export default Header;

