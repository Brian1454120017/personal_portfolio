import React from 'react';

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src="../assets/logo.png" alt="logo" className="logo" />
        </div>
        <div className="nav">
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#about-me">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#hire-me">Hire Me</a></li>
            </ul>
        </div>
    </div>
  );
};

export default Header;