import React from "react";
import '../index.css';

const Projects = () => {
    return (
        <div className="projects-section" id="projects">
            <h1 className="section-title">Projects</h1>
            <div className="projects-category">
                <h2 className="section-subtitle">UI/UX Design Projects</h2>
                <div>
                    <ul className="project-preview-list">
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview"  src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                    </ul>
                </div>
            </div>
            <div className="projects-category">
                <h2 className="section-subtitle">Web Dev Projects</h2>
                <div>
                    <ul className="project-preview-list">
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview"  src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                    </ul>
                </div>
            </div>
            <div className="projects-category">
                <h2 className="section-subtitle">Mobile App Projects</h2>
                <div>
                    <ul className="project-preview-list">
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview"  src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                        <li><img className="project-img-preview" src="logo512.png" alt="project-img"/></li>
                    </ul>
                </div>
            </div>
        </div>        
    );
};

export default Projects;