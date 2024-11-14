// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    return (
        <motion.header
            className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="logo">SheScholars</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/scholarships">Scholarships</Link>
                <Link to="/about">About</Link>
            </nav>
        </motion.header>
    );
};

export default Header;
