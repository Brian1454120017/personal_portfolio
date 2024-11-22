import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img-wrapper">
        <img className="hero-img" src="../hero-img.png" alt="hero-img" />
      </div>
      <div className="hero-content">
          <div className='hero-text'>
            <h1>Hey, Brian Kasonde Here</h1>
            <p>
                I'm a Software Engineer specialized in Full Stack Web Development, Mobile App Development and UI/UX Design. I'm passionate
                about creating user-friendly and visually appealing websites and mobile applications. I have a strong background in 
                programming languages, but constantly learning and improving my skills to stay up-to-date with the latest trends and technologies
                 in the field.
            </p>
          </div>
          <div className='hero-cta'>
            <a href="#" className="primary-button">Hire Me</a>
            <a href="#" className="primary-button">Call Me</a>
          </div>
      </div>
    </div>
  );
};

export default Hero;