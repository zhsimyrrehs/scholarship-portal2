// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About SheScholars</h1>
            <p>
                This scholarship portal is part of a project called 'She Envisions', which is a Millennium Fellowship project.
            </p>
            <p>
                Follow us for inspiration and motivation on our Instagram page: 
                <a href="https://www.instagram.com/we_women_wise/" target="_blank" rel="noopener noreferrer">
                    @we_women_wise
                </a>
            </p>
        </div>
    );
};

export default About;
