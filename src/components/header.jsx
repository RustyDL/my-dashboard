import React from 'react';
import './header.css'; 

const Header = ({ children }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{children}</h1>
    </div>
  );
};

export default Function Header;

