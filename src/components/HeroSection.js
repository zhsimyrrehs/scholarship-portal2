// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <motion.section
            className="hero-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Empowering Women with Opportunities</h1>
            <p>Find the best scholarships to advance your education.</p>
        </motion.section>
    );
};

export default HeroSection;
