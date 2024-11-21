import React from 'react';
import '../index.css';

const AboutMe = () => {
  return (
    <div className="about-me-section" id="about-me">
        <div className="about-section-header">
            <h1 className='section-title'>About Me</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum velit nisi
            </p>
        </div>
        <div className="about-me-content">
            <div className="about-me-background">
                <h2>background</h2>
                <p>
                    I'm a web developer and designer from Zambia. I'm passionate about
                    developing user-friendly and visually appealing websites. I'm also
                    experienced in web development and have a strong background in
                    programming languages such as HTML, CSS, JavaScript, and React. I'm
                    constantly learning and improving my skills to stay up-to-date with the
                    latest trends and technologies in the field.
                </p>
            </div>
            <div className="about-me-skills">
                <h2>Skills</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vestibulum velit nisi, pretium ut lacinia in, elementum id 
                    sapien. Curabitur malesuada nisl id turpis posuere blandit.
                </p>
            </div>
        </div>
    </div>
  );
};

export default AboutMe;