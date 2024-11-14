// src/components/ScholarshipList.js
import React from 'react';
import { motion } from 'framer-motion';
import './ScholarshipList.css';

const scholarships = [
    { id: 1, title: "STEM Women Scholarship", description: "For women in STEM fields." },
    { id: 2, title: "Women in Business", description: "For aspiring business leaders." },
    { id: 3, title: "Women in STEM", description: "For aspiring STEM leaders." },
    // Add more scholarship data as needed
];

const ScholarshipList = () => {
    return (
        <div className="scholarship-list">
            {scholarships.map((scholarship) => (
                <motion.div
                    className="scholarship-card"
                    key={scholarship.id}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3>{scholarship.title}</h3>
                    <p>{scholarship.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default ScholarshipList;
