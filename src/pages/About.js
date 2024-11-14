
// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h1>About SheScholars</h1>
            <p>
                This scholarship portal is part of a project called <strong>‘She Envisions’</strong>, 
                which is a Millennium Fellowship project.
            </p>
            <p>
                Follow our Instagram page for empowering quotes and motivation:
                <a href="https://www.instagram.com/we_women_wise/" target="_blank" rel="noopener noreferrer">
                    @we_women_wise
                </a>
            </p>
        </motion.div>
    );
};

export default About;
