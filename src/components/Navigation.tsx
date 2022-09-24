import React from 'react';

const Navigation = () => {
  return (
    <div className="header">
      <div className="sec1">
        <a href="#home" className="navigation-button">
          HOME
        </a>
        <a href="#about" className="navigation-button">
          ABOUT
        </a>
        <a href="#experiences" className="navigation-button">
          EXPERIENCES
        </a>
        <a href="#contact" className="navigation-button">
          CONTACT
        </a>
      </div>
      <div className="sec2">
        <div>GHENT - BELGIUM</div>
      </div>
    </div>
  );
};

export default Navigation;
